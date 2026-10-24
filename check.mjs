import fs from 'node:fs/promises';
import path from 'node:path';
import assert from 'node:assert/strict';
import {routes} from './src/pages.mjs';
import {artifacts,phases,projectEntries,selectedWork} from './src/data.mjs';
let checks=0;
for(const route of routes){const file=path.join('dist',route.path==='/'?'index.html':route.path.slice(1)+'.html');const html=await fs.readFile(file,'utf8');assert.equal((html.match(/<h1[ >]/g)||[]).length,1,file+' has one primary heading');assert(!/\b(portfolio|presentation)\b/i.test(html),'Excluded wording: '+file);const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);assert.equal(new Set(ids).size,ids.length,'Unique IDs: '+file);for(const m of html.matchAll(/(?:src|href)="([^"?#]+)(?:[?#][^"]*)?"/g)){const url=m[1];if(!url.startsWith('/')||url.startsWith('//'))continue;let target=url==='/'?'index.html':url.slice(1);if(!path.extname(target))target+='.html';await fs.access(path.join('dist',target));checks++}for(const m of html.matchAll(/href="#([^"]+)"/g))assert(ids.includes(m[1]),'Anchor resolves: '+m[1]);}
for(const a of Object.values(artifacts)){const text=await fs.readFile('dist/artifacts/'+a.file,'utf8');assert(text.length>100);assert(!/\b(portfolio|presentation)\b/i.test(text));checks++}
assert.equal(phases.length,8);assert.deepEqual(phases.map(p=>p.id),[1,2,3,4,5,6,7,8]);
const projectHTML=await fs.readFile('dist/projects.html','utf8');assert.equal(selectedWork.length,8,'Eight selected-work entries');assert.equal((projectHTML.match(/<article/g)||[]).length,projectEntries.length+selectedWork.length);
console.log(`Passed: ${routes.length} routes, ${checks} local references, 17 source copies, 8 phases, ${projectEntries.length+selectedWork.length} project entries, unique IDs, anchors and excluded-word checks.`);
