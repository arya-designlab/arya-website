import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {routes,shell} from './src/pages.mjs';
import {artifacts} from './src/data.mjs';
const root=path.dirname(fileURLToPath(import.meta.url));
const out=path.join(root,'dist');
await fs.rm(out,{recursive:true,force:true});await fs.mkdir(out,{recursive:true});
await fs.cp(path.join(root,'public'),out,{recursive:true});
for(const file of ['styles.css','app.mjs','data.mjs','components.mjs','artwork.mjs'])await fs.copyFile(path.join(root,'src',file),path.join(out,file));
for(const route of routes){const target=path.join(out,route.path==='/'?'index.html':route.path.slice(1)+'.html');await fs.mkdir(path.dirname(target),{recursive:true});await fs.writeFile(target,shell(route))}
await fs.mkdir(path.join(out,'artifacts'),{recursive:true});
for(const artifact of Object.values(artifacts))await fs.access(path.join(out,'artifacts',artifact.file));
console.log(`Built ${routes.length} pages and ${Object.keys(artifacts).length} source records in dist.`);
