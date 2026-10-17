import {phases,systemConcepts,email} from './data.mjs';
import {phaseDetail} from './components.mjs';
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
$('#copy-email')?.addEventListener('click',async()=>{try{await navigator.clipboard.writeText(email);$('#copy-status').textContent='Copied. A little hello is all it takes.'}catch{$('#copy-status').textContent='Select the email address above to copy it, or open it in your email app.'}});
function tabs(selector,select){const list=$$(selector);list.forEach((b,i)=>{b.addEventListener('click',()=>select(b));b.addEventListener('keydown',e=>{let n;if(e.key==='ArrowRight'||e.key==='ArrowDown')n=(i+1)%list.length;if(e.key==='ArrowLeft'||e.key==='ArrowUp')n=(i+list.length-1)%list.length;if(e.key==='Home')n=0;if(e.key==='End')n=list.length-1;if(n!==undefined){e.preventDefault();list[n].focus();select(list[n])}})});}
function selectTab(selector,button,panel){$$(selector).forEach(b=>{const chosen=b===button;b.setAttribute('aria-selected',chosen);b.tabIndex=chosen?0:-1});$(panel).setAttribute('aria-labelledby',button.id)}
const screens={today:['today-savings','One financial story at a time.','Spending and Savings perspectives offer a concise orientation. A story-specific action leads to the represented detail.'],explore:['explore-overview','Follow the number back to its basis.','Explore connects the selected period to spending categories and transaction detail. The figures shown are sample data.'],ask:['ask','A place for a bounded question.','Ask provides a conversational route into the concept. This capture shows the design baseline; the live version now connects to a Python service.'],settings:['settings','Keep the controls understandable.','Settings groups preferences and data-related controls. Account and financial data interactions remain simulated.']};
tabs('[data-screen]',b=>{const [file,title,description]=screens[b.dataset.screen];selectTab('[data-screen]',b,'#screen-panel');$('.gallery-image').src='/assets/'+file+'.jpg';$('.gallery-image').alt='MoniFlow '+b.textContent+' design baseline';$('#screen-title').textContent=title;$('#screen-description').textContent=description});
const comparisons={
 story:['Three visual directions explored different ways to show financial information.','Human review selected a calmer, more focused visual system.','The exploration focused on making financial information feel approachable and less overwhelming. This was a design direction, not a measured user outcome.'],
 clarity:['The Today story, amount, and supporting comparisons needed a clearer relationship.','The story and its supporting information use a consistent meaning and period.','Human review refined the hierarchy and available-money wording. Browser QA then reconciled summary/category totals and period labels; these are implementation checks, not participant findings.'],
 ai:['Financial questions needed a focused place within the experience.','Ask became a dedicated full-screen conversation.','Human direction gave the question, answer, and composer their own space within the main navigation. This reflects a design decision; no comparative usability outcome is claimed.']
};
tabs('[data-qa]',b=>{selectTab('[data-qa]',b,'#qa-panel');const [before,after,detail]=comparisons[b.dataset.qa];$('#qa-before').textContent=before;$('#qa-after').textContent=after;$('#qa-detail').textContent=detail});
if($('#phase-detail')){
 let phase=1,detail='overview',view='interactive';
 function render(updateURL=true){const p=phases[phase-1];$('#agent-select').value=String(phase);$$('[data-phase]').forEach(b=>{const selected=+b.dataset.phase===phase;b.classList.toggle('selected',selected);b.setAttribute('aria-pressed',selected)});$('#phase-detail').innerHTML=phaseDetail(p,detail);const tab=$(`[data-phase-tab="${detail}"]`);selectTab('[data-phase-tab]',tab,'#phase-detail');$('#previous-phase').disabled=phase===1;$('#next-phase').disabled=phase===8;$('#phase-position').textContent=String(phase).padStart(2,'0')+' / 08';$('#interactive-view').hidden=view!=='interactive';$('#linear-view').hidden=view!=='linear';$$('[data-view]').forEach(b=>{b.classList.toggle('active',b.dataset.view===view);b.setAttribute('aria-pressed',b.dataset.view===view)});if(updateURL){const url=new URL(location.href);url.searchParams.set('phase',phase);url.searchParams.set('detail',detail);if(view==='linear')url.searchParams.set('view',view);else url.searchParams.delete('view');history.replaceState(null,'',url)}}
 function readURL(){const params=new URLSearchParams(location.search);phase=Math.max(1,Math.min(8,parseInt(params.get('phase'))||1));detail=['overview','agent','io','gate'].includes(params.get('detail'))?params.get('detail'):'overview';view=params.get('view')==='linear'?'linear':'interactive';render(false)}
 $('#agent-select').addEventListener('change',e=>{phase=Number(e.target.value);detail='agent';view='interactive';render()});
 tabs('[data-phase]',b=>{phase=+b.dataset.phase;render()});
 tabs('[data-phase-tab]',b=>{detail=b.dataset.phaseTab;render()});
 $('#previous-phase').addEventListener('click',()=>{phase=Math.max(1,phase-1);render()});$('#next-phase').addEventListener('click',()=>{phase=Math.min(8,phase+1);render()});
 $$('[data-view]').forEach(b=>b.addEventListener('click',()=>{view=b.dataset.view;render()}));
 $('#trace-toggle').addEventListener('click',e=>{const open=e.currentTarget.getAttribute('aria-expanded')!=='true';e.currentTarget.setAttribute('aria-expanded',open);$('#artifact-trace').hidden=!open});
 $$('[data-trace-phase]').forEach(b=>b.addEventListener('click',()=>{phase=+b.dataset.tracePhase;view='interactive';detail='overview';render();$('#phase-detail').focus();$('#phase-detail').scrollIntoView({block:'center',behavior:document.documentElement.dataset.motion==='reduce'?'instant':'smooth'})}));
 addEventListener('popstate',readURL);readURL();
}
tabs('[data-system]',b=>{selectTab('[data-system]',b,'#system-detail');const item=systemConcepts.find(n=>n.id===b.dataset.system);$('#system-detail').innerHTML=`<h3>${item.summary}</h3><p>${item.body}</p><p class="caption">In MoniFlow: ${item.example}</p>`});
const preview=$('#moniflow-preview');
preview?.addEventListener('error',()=>{$('#preview-status').textContent='The preview is unavailable. Use the link below to open MoniFlow.'});
$$('.case-chapters a').forEach(a=>a.addEventListener('click',()=>{$('.case-chapters details').open=false}));
const reduced=matchMedia('(prefers-reduced-motion: reduce)');
let motionReduced=reduced.matches;
try{motionReduced=motionReduced||localStorage.getItem('arya-motion')==='reduce'}catch{}
function applyMotion(){document.documentElement.dataset.motion=motionReduced?'reduce':'full';const b=$('#motion-toggle');b.setAttribute('aria-pressed',motionReduced);b.textContent=motionReduced?'Motion reduced':'Reduce motion';b.disabled=reduced.matches;if(reduced.matches)b.title='Following your system preference'}
applyMotion();
$('#motion-toggle').addEventListener('click',()=>{motionReduced=!motionReduced;applyMotion();try{localStorage.setItem('arya-motion',motionReduced?'reduce':'full')}catch{}});
reduced.addEventListener('change',e=>{motionReduced=e.matches;applyMotion()});
if('IntersectionObserver' in window&&!reduced.matches){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('in-view');observer.unobserve(entry.target)}}),{threshold:.08});$$('[data-reveal]').forEach(el=>observer.observe(el))}
let ticking=false;function progress(){const max=document.documentElement.scrollHeight-innerHeight;$('.scroll-progress').style.transform=`scaleX(${max>0?scrollY/max:0})`;ticking=false}addEventListener('scroll',()=>{if(!ticking){requestAnimationFrame(progress);ticking=true}},{passive:true});progress();

// Retain native disclosures, with one active process stage and arrow-key support.
const processStages=$$('.approach-sequence details');
processStages.forEach((item,i)=>{
 const summary=item.querySelector('summary');
 summary.addEventListener('click',e=>{if(item.open)e.preventDefault()});
 summary.addEventListener('keydown',e=>{
  let next;
  if(e.key==='ArrowRight'||e.key==='ArrowDown')next=(i+1)%processStages.length;
  if(e.key==='ArrowLeft'||e.key==='ArrowUp')next=(i+processStages.length-1)%processStages.length;
  if(e.key==='Home')next=0;
  if(e.key==='End')next=processStages.length-1;
  if(next!==undefined){e.preventDefault();processStages[next].querySelector('summary').focus();processStages[next].open=true;processStages.forEach((other,j)=>{if(j!==next)other.open=false})}
 });
 item.addEventListener('toggle',()=>{if(item.open)processStages.forEach(other=>{if(other!==item)other.open=false})});
});
// Fit the complete live device below its real hero position, without changing the app.
function sizePreview(){
 const phone=$('.case-live-preview .live-phone');if(!phone)return;
 const mobile=matchMedia('(max-width:800px)').matches;
 const availableWidth=Math.min(phone.parentElement.clientWidth-12,370-12);
 const top=phone.getBoundingClientRect().top+scrollY;
 const availableHeight=mobile?720:Math.max(200,innerHeight-top-100);
 const scale=Math.min(.92,availableWidth/390,availableHeight/780);
 phone.style.width=(390*scale)+'px';phone.style.height=(780*scale)+'px';phone.style.setProperty('--preview-scale',scale);
}
addEventListener('resize',sizePreview,{passive:true});sizePreview();
document.fonts.ready.then(sizePreview);

// Theme is set before paint in the document head; controls only update that choice.
const themePreference=matchMedia('(prefers-color-scheme: dark)');
function setTheme(theme,persist=false){
 document.documentElement.dataset.theme=theme;
 document.documentElement.style.colorScheme=theme;
 $$('[data-theme-toggle]').forEach(b=>{b.setAttribute('aria-label',theme==='dark'?'Switch to light mode':'Switch to dark mode');b.setAttribute('aria-pressed',String(theme==='dark'))});
 $('meta[name="theme-color"]')?.setAttribute('content',theme==='dark'?'#202521':'#f4f2ea');
 if(persist)try{localStorage.setItem('arya-theme',theme)}catch{}
}
setTheme(document.documentElement.dataset.theme||'light');
$$('[data-theme-toggle]').forEach(b=>b.addEventListener('click',()=>setTheme(document.documentElement.dataset.theme==='dark'?'light':'dark',true)));
themePreference.addEventListener('change',e=>{let choice;try{choice=localStorage.getItem('arya-theme')}catch{}if(!['dark','light'].includes(choice))setTheme(e.matches?'dark':'light')});

// A native modal supplies focus containment and makes the background inert.
const mobileMenu=$('#mobile-menu'), menuTrigger=$('#menu-toggle');
let menuClosing;
function closeMenu(immediate=false){
 clearTimeout(menuClosing);
 if(!mobileMenu.open)return;
 mobileMenu.classList.add('closing');
 const finish=()=>{mobileMenu.close();mobileMenu.classList.remove('closing');menuTrigger.setAttribute('aria-expanded','false');menuTrigger.focus({preventScroll:true})};
 if(immediate||motionReduced)finish();else menuClosing=setTimeout(finish,180);
}
menuTrigger.addEventListener('click',()=>{clearTimeout(menuClosing);mobileMenu.classList.remove('closing');mobileMenu.showModal();menuTrigger.setAttribute('aria-expanded','true');mobileMenu.querySelector('nav a').focus()});
$('#menu-close').addEventListener('click',()=>closeMenu());
mobileMenu.addEventListener('cancel',e=>{e.preventDefault();closeMenu()});
mobileMenu.addEventListener('keydown',e=>{
 if(e.key!=='Tab')return;
 const controls=[...mobileMenu.querySelectorAll('button,a[href]')],first=controls[0],last=controls.at(-1);
 if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}
 else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}
});
$$('#mobile-menu nav a').forEach(a=>a.addEventListener('click',()=>closeMenu(true)));
matchMedia('(max-width:800px)').addEventListener('change',e=>{if(!e.matches)closeMenu(true)});

// Supplied envelope layers: open the flap, then lift the letter; reverse to close.
const envelope=$('#envelope');
if(envelope){
 let current='closed',desired='closed',busy=false;
 const pause=ms=>new Promise(resolve=>setTimeout(resolve,motionReduced?0:ms));
 function stage(name){
  envelope.className='interactive-envelope stage-'+name;
  envelope.setAttribute('aria-pressed',String(name==='clicked'));
  envelope.setAttribute('aria-label',name==='clicked'?'Close envelope':'Open envelope');
  $('#envelope-status').textContent=name==='clicked'?'Hello, you. Letter open. Activate again to close.':name==='hover'?'Hello, you. Envelope open.':name==='closed'?'Envelope closed.':'';
 }
 async function settle(){
  if(busy)return;busy=true;
  while(current!==desired){
   if(current==='closed'){stage('opening');await pause(430);current='hover';stage('hover')}
   else if(desired==='clicked'){current='clicked';stage('clicked')}
   else if(current==='clicked'&&desired==='hover'){current='hover';stage('hover')}
   else{stage('retracting');await pause(360);stage('closing');await pause(430);current='closed';stage('closed')}
  }
  busy=false;
 }
 envelope.addEventListener('pointerenter',e=>{if(e.pointerType==='mouse'&&desired==='closed'){desired='hover';settle()}});
 envelope.addEventListener('pointerleave',e=>{if(e.pointerType==='mouse'&&desired!=='clicked'){desired='closed';settle()}});
 envelope.addEventListener('focus',()=>{if(desired==='closed'){desired='hover';settle()}});
 envelope.addEventListener('blur',()=>{if(desired==='hover'){desired='closed';settle()}});
 envelope.addEventListener('click',()=>{desired=desired==='clicked'?'closed':'clicked';settle()});
}
