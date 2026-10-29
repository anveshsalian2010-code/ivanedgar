const $=s=>document.querySelector(s);
const store={get(k,d){try{return JSON.parse(localStorage.getItem(k))??d}catch{return d}},set(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch{}}};
const shuffle=a=>{a=[...a];for(let i=a.length-1;i>0;i--){const j=Math.random()*(i+1)|0;[a[i],a[j]]=[a[j],a[i]]}return a};
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const reduced=()=>matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------- Animated plates ---------- */
const ART={
pyramid:()=>{const L=["Ethics · multicultural · positive psychology · TLCs · neuroscience","Attending & observation","Basic listening sequence","Five-stage session","Focusing · confrontation · meaning · reframe","Influencing skills","Integration · style · transcendence"];
 return `<svg class="art" viewBox="0 0 640 310" role="img" aria-label="Ivey's microskills hierarchy built from the base up">${L.map((t,i)=>{const w=600-i*58,y=272-i*38;return `<g class="rise" style="animation-delay:${i*.18}s"><rect x="${320-w/2}" y="${y}" width="${w}" height="34" rx="8" fill="${i===6?'var(--c)':i%2?'var(--t)':'var(--t-soft)'}"/><text x="320" y="${y+22}" text-anchor="middle" font-size="${i===0?11:12.5}" font-weight="700" ${i%2||i===6?'fill="var(--surface)"':''}>${t}</text></g>`}).join("")}<text x="320" y="20" text-anchor="middle" class="mono mut" font-size="11">IVEY ET AL. (2018) · MICROSKILLS HIERARCHY</text></svg>`},
bls:()=>{const s=[["Open & closed","questions","the story"],["Encouraging","nods · key words","keeps it going"],["Paraphrasing","cognitive essence","executive function"],["Reflecting","feelings","emotional regulation"],["Summarizing","integration","mentalizing"]];
 return `<svg class="art" viewBox="0 0 640 280" role="img" aria-label="Five skills of the basic listening sequence around the client, joined by a checkout loop">
 <circle cx="320" cy="140" r="104" fill="none" stroke="var(--t)" stroke-width="2.5" class="dash"/><circle cx="320" cy="140" r="38" fill="var(--c)"/><text x="320" y="137" text-anchor="middle" fill="var(--surface)" font-weight="700" font-size="13">client's</text><text x="320" y="153" text-anchor="middle" fill="var(--surface)" font-weight="700" font-size="13">story</text>
 ${s.map(([a,b,c],i)=>{const g=i/5*Math.PI*2-Math.PI/2,x=320+Math.cos(g)*200,y=140+Math.sin(g)*104;return `<g class="pulse" style="animation-delay:${i*.45}s"><rect x="${x-66}" y="${y-28}" width="132" height="56" rx="14" fill="var(--t-soft)" stroke="var(--t)" stroke-width="1.5"/></g><text x="${x}" y="${y-8}" text-anchor="middle" font-size="12.5" font-weight="700">${a}</text><text x="${x}" y="${y+7}" text-anchor="middle" font-size="11">${b}</text><text x="${x}" y="${y+21}" text-anchor="middle" class="mut" font-size="10">${c}</text>`}).join("")}
 <text x="320" y="272" text-anchor="middle" class="mono" font-size="11" fill="var(--s)">+ CHECKOUT: “Am I hearing you correctly?”</text></svg>`},
rof:()=>{const p=["Sentence stem","Feeling label","Context","Tense / immediacy","Checkout","Positive emotions"];
 return `<svg class="art" viewBox="0 0 640 230" role="img" aria-label="Six dimensions of reflection of feeling as a chain">
 ${p.map((t,i)=>{const x=60+i*104;return `${i?`<line x1="${x-66}" y1="92" x2="${x-38}" y2="92" stroke="var(--t)" stroke-width="3" class="dash"/>`:""}<g class="rise" style="animation-delay:${i*.18}s"><circle cx="${x}" cy="92" r="38" fill="${i===1?'var(--c)':i===5?'var(--s-soft)':'var(--t-soft)'}"/><text x="${x}" y="99" text-anchor="middle" font-size="28" font-family="var(--display)" ${i===1?'fill="var(--surface)"':''}>${i+1}</text><text x="${x}" y="150" text-anchor="middle" font-size="11.5" font-weight="700">${t}</text></g>`}).join("")}
 <text x="320" y="200" text-anchor="middle" font-size="17" font-family="var(--display)">“Arjun, sounds like you feel <tspan fill="var(--c)">anxious</tspan> right now about the exam… is that right?”</text></svg>`},
neuro:()=>{const wave=(y,ph,c)=>{let d="";for(let x=0;x<=230;x+=6)d+=(x?"L":"M")+(x)+" "+(y+Math.sin((x+ph)/14)*12).toFixed(1);return `<path d="${d}" fill="none" stroke="${c}" stroke-width="2.5"/>`};
 return `<svg class="art" viewBox="0 0 640 270" role="img" aria-label="Speaker and listener brains with coupled waves, and new neurons sprouting in the hippocampus">
 <g><ellipse cx="110" cy="110" rx="80" ry="62" fill="var(--c-soft)" stroke="var(--c)" stroke-width="2"/><text x="110" y="116" text-anchor="middle" font-size="18" font-family="var(--display)">speaker</text></g>
 <g><ellipse cx="530" cy="110" rx="80" ry="62" fill="var(--t-soft)" stroke="var(--t)" stroke-width="2"/><text x="530" y="116" text-anchor="middle" font-size="18" font-family="var(--display)">listener</text></g>
 <g transform="translate(205 0)"><g class="dash">${wave(92,0,"var(--c)")}</g><g class="dash">${wave(128,4,"var(--t)")}</g></g>
 <text x="320" y="70" text-anchor="middle" font-size="13" font-weight="700">neural coupling</text><text x="320" y="164" text-anchor="middle" class="mut" font-size="11">breaks when listening is subtractive</text>
 ${[0,1,2,3,4].map(i=>`<g class="rise" style="animation-delay:${i*.3}s"><circle cx="${230+i*45}" cy="225" r="7" fill="var(--s)"/><line x1="${230+i*45}" y1="225" x2="${244+i*45}" y2="${205+(i%2)*8}" stroke="var(--s)" stroke-width="2"/><line x1="${230+i*45}" y1="225" x2="${218+i*45}" y2="${208-(i%2)*6}" stroke="var(--s)" stroke-width="2"/></g>`).join("")}
 <text x="40" y="232" font-size="12" font-weight="700">neurogenesis</text><text x="40" y="248" class="mut" font-size="10.5">new neurons · hippocampus</text>
 <text x="600" y="232" text-anchor="end" font-size="12" font-weight="700">active listening</text><text x="600" y="248" text-anchor="end" class="mut" font-size="10.5">ventral striatum · mPFC · insula</text></svg>`},
egan:()=>{const S=[["I · Current picture","What's going on?",["Story","Real story","Right story"]],["II · Preferred picture","What do I want?",["Possibilities","Goals","Commitment"]],["III · Way forward","How do I get it?",["Strategies","Best fit","Plan"]]];
 return `<svg class="art" viewBox="0 0 640 300" role="img" aria-label="Egan's three stages with three tasks each, sitting on the action arrow">
 ${S.map(([h,q,t],i)=>{const x=20+i*205;return `<g class="rise" style="animation-delay:${i*.25}s"><rect x="${x}" y="20" width="190" height="210" rx="16" fill="${i===1?'var(--c-soft)':'var(--t-soft)'}"/><text x="${x+95}" y="48" text-anchor="middle" font-size="17" font-family="var(--display)">${h}</text><text x="${x+95}" y="66" text-anchor="middle" class="mut" font-size="11">“${q}”</text>${t.map((k,j)=>`<rect x="${x+16}" y="${82+j*46}" width="158" height="36" rx="10" fill="var(--surface)" stroke="${i===1?'var(--c)':'var(--t)'}"/><text x="${x+30}" y="${105+j*46}" font-size="12" class="mono" fill="${i===1?'var(--c)':'var(--t)'}">${["I","II","III"][i]}-${"ABC"[j]}</text><text x="${x+(i===2?82:68)}" y="${105+j*46}" font-size="12.5" font-weight="700">${k}</text>`).join("")}</g>`}).join("")}
 <path d="M20 262 L 600 262 L 600 252 L 624 268 L 600 284 L 600 274 L 20 274 Z" fill="var(--s)"/><text x="310" y="272" text-anchor="middle" font-size="12" font-weight="700" fill="var(--surface)">ACTION ARROW · implementation from day one</text></svg>`},
ending:()=>{const s=[["Summarize","pull it together"],["Review","what was learned"],["Agree action","what to do “out there”"],["Feedback","“How are we doing?”"],["Plan ahead","next session · or no helper"]];
 return `<svg class="art" viewBox="0 0 640 230" role="img" aria-label="Five moves for closing a session">
 ${s.map(([a,b],i)=>{const x=68+i*126;return `${i?`<line x1="${x-84}" y1="100" x2="${x-42}" y2="100" stroke="var(--t)" stroke-width="3" class="dash"/>`:""}<g class="rise" style="animation-delay:${i*.2}s"><circle cx="${x}" cy="100" r="42" fill="${i===3?'var(--c)':'var(--t-soft)'}"/><text x="${x}" y="106" text-anchor="middle" font-size="22" font-family="var(--display)" ${i===3?'fill="var(--surface)"':''}>${i+1}</text><text x="${x}" y="164" text-anchor="middle" font-size="12.5" font-weight="700">${a}</text><text x="${x}" y="181" text-anchor="middle" class="mut" font-size="10.5">${b}</text></g>`}).join("")}
 <text x="320" y="30" text-anchor="middle" class="mono mut" font-size="11">THE LAST FIVE MINUTES · EGAN (2014) WITH IVEY'S STAGE 5</text></svg>`},
compare:()=>{const I=["Empathic relationship","Story & strengths","Goals","Restory","Action"],E=["(skills underneath)","I · Story → real → right","II · Possibilities → goals → commitment","III · Strategies → best fit → plan","Action arrow / implementation"];
 return `<svg class="art" viewBox="0 0 640 290" role="img" aria-label="Ivey's five stages aligned with Egan's stages">
 <text x="150" y="26" text-anchor="middle" font-size="20" font-family="var(--display)" fill="var(--t)">Ivey</text><text x="490" y="26" text-anchor="middle" font-size="20" font-family="var(--display)" fill="var(--c)">Egan</text>
 ${I.map((t,i)=>`<g class="rise" style="animation-delay:${i*.15}s"><rect x="30" y="${42+i*48}" width="240" height="38" rx="10" fill="var(--t-soft)"/><text x="150" y="${66+i*48}" text-anchor="middle" font-size="12.5" font-weight="700">${i+1}. ${t}</text><line x1="270" y1="${61+i*48}" x2="370" y2="${61+i*48}" stroke="var(--s)" stroke-width="2" class="dash"/><rect x="370" y="${42+i*48}" width="240" height="38" rx="10" fill="var(--c-soft)"/><text x="490" y="${66+i*48}" text-anchor="middle" font-size="12" font-weight="700">${E[i]}</text></g>`).join("")}
 <text x="320" y="285" text-anchor="middle" class="mut" font-size="11">skill-by-skill (Ivey) · task-by-task towards outcomes (Egan)</text></svg>`}
};

/* ---------- Exam answers ---------- */
const wc=h=>h.replace(/<[^>]+>/g," ").split(/\s+/).filter(Boolean).length;
let done=new Set(store.get("ie-done",[])),acur=store.get("ie-ans","skills"),recall=false;if(!ANSWERS.some(a=>a.id===acur))acur="skills";
function prog(){$("#prog").textContent=`${done.size}/${ANSWERS.length} answers learned`}
function arail(){let g="",h="";ANSWERS.forEach((a,i)=>{const grp=a.book==="Both"?"Comparison":a.book==="Ivey"?"Ivey · 9th edition":"Egan · 10th edition";if(grp!==g){g=grp;h+=`<div class="grp">${grp}</div>`}h+=`<button data-id="${a.id}" aria-current="${a.id===acur}"><span class="n">${String(i+1).padStart(2,"0")}</span><span>${a.name}</span>${done.has(a.id)?'<span class="tick">✓</span>':'<span></span>'}</button>`});$("#arail").innerHTML=h}
function answer(){
 const i=ANSWERS.findIndex(a=>a.id===acur),a=ANSWERS[i],w=wc(a.body);
 $("#abody").innerHTML=`<div class="eyebrow">${a.book==="Both"?"Ivey & Egan":a.book} · ${a.ch} · ${a.pages}</div><h2>${a.name}</h2>
 <div class="meta-row"><span class="chip">${w} words</span><span class="chip">≈ ${Math.max(1,Math.round(w/450*2)/2)} written pages</span><span class="chip">${a.plan.length}-point plan</span></div>
 <div class="plate">${ART[a.art]()}</div>
 <div class="keys plan"><h3>Answer plan (memorise this first)</h3><ol>${a.plan.map(p=>`<li>${p}</li>`).join("")}</ol></div>
 <div class="row" style="margin-bottom:8px"><button class="btn ${recall?"primary":""}" id="rec" aria-pressed="${recall}">${recall?"Recall mode on: hover to reveal":"Recall mode"}</button><span class="hint">Blurs the answer so you can say each part from the plan first.</span></div>
 <div class="reading model ${recall?"recall":""}">${a.body}</div>
 <div class="tip"><b>Writing tip.</b> Open with a one-line definition and the author's name and year, use the plan's headings, and finish with a two-line conclusion. That structure alone earns marks.</div>
 <div class="done-row"><button class="btn ${done.has(a.id)?"":"primary"}" id="mark">${done.has(a.id)?"Learned ✓":"Mark as learned"}</button>${ANSWERS[i+1]?`<button class="btn" id="next">Next: ${ANSWERS[i+1].name} →</button>`:""}</div>`;
 $("#abody .model").classList.toggle("recall",recall);
 if(reduced())document.querySelectorAll("#abody svg").forEach(s=>s.pauseAnimations&&s.pauseAnimations());
 $("#rec").onclick=()=>{recall=!recall;answer()};
 $("#mark").onclick=()=>{done.has(a.id)?done.delete(a.id):done.add(a.id);store.set("ie-done",[...done]);arail();answer();prog()};
 if(ANSWERS[i+1])$("#next").onclick=()=>{ago(ANSWERS[i+1].id);scrollTo(0,0)};
}
function ago(id){acur=id;store.set("ie-ans",id);arail();answer()}
$("#arail").onclick=e=>{const b=e.target.closest("button");if(b){ago(b.dataset.id);scrollTo(0,0)}};

/* ---------- Viva bank ---------- */
let vq="",vbook="all";
function viva(){
 const groups={};VIVA.filter(v=>(vbook==="all"||v[0]===vbook)&&(!vq||(v[2]+" "+v[3]+" "+v[1]).toLowerCase().includes(vq))).forEach(v=>{const k=v[0]+" · Ch "+v[1];(groups[k]=groups[k]||[]).push(v)});
 const n=Object.values(groups).reduce((s,g)=>s+g.length,0);
 $("#viva").innerHTML=`<div class="vhead"><div><div class="eyebrow">Everything else, for the viva</div><h2>Viva bank</h2><p class="hint">${VIVA.length} short questions across every chapter of both books. Say the answer out loud, then open it.</p></div>
 <div class="row"><input id="vs" type="search" placeholder="Search, e.g. SOLER" value="${esc(vq)}" aria-label="Search viva questions"><div class="chips" id="vb">${["all","Ivey","Egan"].map(b=>`<button aria-pressed="${vbook===b}" data-b="${b}">${b==="all"?"Both books":b}</button>`).join("")}</div><button class="btn primary" id="vr">Random question</button></div></div>
 <div class="card" id="vpick" hidden></div>
 ${n?Object.entries(groups).map(([k,vs])=>`<div class="vgroup"><h3>${k}</h3><div class="vgrid">${vs.map(v=>`<details class="vq"><summary>${v[2]}</summary><p>${v[3]}</p></details>`).join("")}</div></div>`).join(""):`<p class="hint">No questions match “${esc(vq)}”.</p>`}`;
 const s=$("#vs");s.oninput=()=>{vq=s.value.trim().toLowerCase();viva();const t=$("#vs");t.focus();t.setSelectionRange(t.value.length,t.value.length)};
 $("#vb").onclick=e=>{const b=e.target.closest("button");if(b){vbook=b.dataset.b;viva()}};
 $("#vr").onclick=()=>{const pool=VIVA.filter(v=>vbook==="all"||v[0]===vbook),v=pool[Math.random()*pool.length|0],p=$("#vpick");p.hidden=false;p.innerHTML=`<span class="eyebrow">${v[0]} · Ch ${v[1]}</span><h3>${v[2]}</h3><details><summary class="btn">Show answer</summary><p>${v[3]}</p></details>`;p.scrollIntoView({block:"nearest"})};
}

/* ---------- Practice games ---------- */
const GAMES={
empathy:{name:"Rate the empathy",intro:"Ivey's three anchor points. Is the counsellor's response subtractive, basic (interchangeable) or additive?",opts:["Subtractive","Basic","Additive"],items:[
 ["I've been so stressed about my exams that I can't sleep.","You shouldn't worry so much; everyone gets through exams.",0,"It dismisses the client's experience and gives less than was said."],
 ["I've been so stressed about my exams that I can't sleep.","You're feeling really stressed about the exams, and it's keeping you up at night.",1,"It accurately says back the feeling and context. That's interchangeable."],
 ["I've been so stressed about my exams that I can't sleep.","You're stressed and losing sleep, and earlier you said this happened last semester too, right before you stopped asking friends for help. Could those be linked?",2,"It links to earlier material and opens a new perspective."],
 ["My dad never listens to me. He just decides everything.","So, how are your classes going?",0,"It changes the subject, a failure of verbal tracking."],
 ["My dad never listens to me. He just decides everything.","It sounds frustrating that your dad makes decisions without hearing you.",1,"A clear, accurate reflection of feeling and content."],
 ["My dad never listens to me. He just decides everything.","You feel unheard by your dad, and yet you've just described very clearly what you want. That skill could help you talk to him.",2,"It adds a strength-based reframe (positive asset)."],
 ["I finally said no to my boss and it felt amazing.","Hmm, saying no to a boss can be risky.",0,"It ignores the positive feeling and adds the counsellor's own worry."],
 ["I finally said no to my boss and it felt amazing.","You felt great standing up for yourself with your boss.",1,"Interchangeable: the feeling and the event are reflected back accurately."],
 ["I finally said no to my boss and it felt amazing.","You felt amazing. That's a real change from the person who said last month they could never disagree with anyone. What does that tell you about yourself?",2,"It adds a link to the past and invites reflection of meaning."]]},
egan:{name:"Which Egan task?",intro:"Match each helper move or client question to the task of the Skilled Helper model.",opts:["I-A Story","I-B Real story","I-C Right story","II-A Possibilities","II-B Goals","II-C Commitment","III-A Possible strategies","III-B Best-fit strategies","III-C Plan"],items:[
 ["“Tell me what's been happening since you moved out.”","",0,"Helping the client tell the story (I-A)."],
 ["“You've said it's always your partner's fault. What part might you be playing?”","",1,"Inviting self-challenge of a blind spot (I-B)."],
 ["“Of all these concerns, which one, if handled, would make the biggest difference?”","",2,"Choosing a high-leverage issue (I-C)."],
 ["“Imagine it's a year from now and things are better. What do you see?”","",3,"Possible selves, building hope (II-A)."],
 ["“So ‘be healthier’ becomes ‘walk 30 minutes, five days a week, by March’.”","",4,"Turning a broad aim into a specific, realistic goal (II-B)."],
 ["“What are you willing to give up to make this happen?”","",5,"“What am I willing to pay for what I want?” (II-C)."],
 ["“Let's brainstorm every possible way you could find a job, even wild ones.”","",6,"Generating possible strategies (III-A)."],
 ["“Of these options, which fit your time, money and values best? Let's do a balance sheet.”","",7,"Choosing best-fit strategies (III-B)."],
 ["“What will you do first, by when, and what's the backup if it falls through?”","",8,"Sequencing steps with contingency plans (III-C)."],
 ["“Before we go deeper, I notice you keep apologising to me. What's going on between us right now?”","",1,"Immediacy belongs to I-B."],
 ["“This crisis comes first. Let's make sure you're safe tonight.”","",2,"I-C principle: manage a crisis first."],
 ["“Who do you know who has handled something like this well?”","",3,"Using exemplars and role models to find possibilities (II-A)."]]},
ivey:{name:"Which Ivey stage?",intro:"Place each counsellor statement in Ivey's five-stage session.",opts:["1 Empathic relationship","2 Story & strengths","3 Goals","4 Restory","5 Action"],items:[
 ["“Welcome. We have about 45 minutes, everything here is confidential, and you're free to stop the recording any time.”","",0,"Structuring and rapport (Stage 1)."],
 ["“Could you tell me what's been happening, and also what's been going well?”","",1,"Drawing out the story with a positive asset search (Stage 2)."],
 ["“If this session went really well, what would be different for you?”","",2,"Establishing goals collaboratively (Stage 3)."],
 ["“On one hand you want to quit, but on the other you love the team. How do you put those together?”","",3,"Empathic confrontation of a discrepancy (Stage 4)."],
 ["“What's one thing you'll try this week, and how will you know it worked?”","",4,"Generalising to daily life (Stage 5)."],
 ["“Another way to see it: you didn't fail, you discovered what doesn't work for you.”","",3,"A reframe is restorying (Stage 4)."],
 ["“Let's summarise today, and next time we'll check how the plan went.”","",4,"Closing and follow-up (Stage 5)."],
 ["“You've overcome a lot. What strengths helped you then?”","",1,"Strengths are drawn out alongside the story (Stage 2)."]]}
};
let gname="empathy",gs={q:[],i:0,r:0};
function lab(){
 const G=GAMES[gname];
 const head=`<div class="chips" id="gsel">${Object.entries(GAMES).map(([k,g])=>`<button aria-pressed="${k===gname}" data-g="${k}">${g.name}</button>`).join("")}</div>`;
 if(gs.i>=gs.q.length){const key="ie-g-"+gname,best=Math.max(store.get(key,0),gs.r);store.set(key,best);$("#lab").innerHTML=`${head}<div class="eyebrow">${G.name}</div><div class="score">${gs.r}/${gs.q.length}</div><p>Best: ${best}/${gs.q.length}.</p><button class="btn primary" id="ga">Play again</button>`;$("#ga").onclick=()=>startGame(gname);bindSel();return}
 const it=gs.q[gs.i];let answered=false;
 $("#lab").innerHTML=`${head}<div class="eyebrow">Practice · ${G.name} · ${gs.i+1}/${gs.q.length} · score ${gs.r}</div><h2 style="font-size:2.1rem">${G.intro}</h2><div class="bar"><i style="width:${gs.i/gs.q.length*100}%"></i></div>
 <div class="chat" style="margin-top:16px">${it[1]?`<div class="msg C"><div class="meta"><span class="who">Client</span></div>${esc(it[0])}</div><div class="msg T"><div class="meta"><span class="who">Counsellor</span></div>${esc(it[1])}</div>`:`<div class="msg T"><div class="meta"><span class="who">Helper</span></div>${esc(it[0])}</div>`}</div>
 <div class="opts">${G.opts.map((o,k)=>`<button data-k="${k}">${o}</button>`).join("")}</div><p id="gw"></p><div class="row" id="gn"></div>`;
 $("#lab .opts").onclick=e=>{const b=e.target.closest("button");if(!b||answered)return;answered=true;const ok=+b.dataset.k===it[2];if(ok)gs.r++;[...$("#lab .opts").children].forEach((x,k)=>{if(k===it[2])x.classList.add("right");x.disabled=true});if(!ok)b.classList.add("wrong");$("#gw").innerHTML=`<b>${ok?"Correct.":"Not quite."}</b> ${it[3]}`;$("#gn").innerHTML=`<button class="btn primary" id="gx">${gs.i+1<gs.q.length?"Next":"See score"}</button>`;$("#gx").onclick=()=>{gs.i++;lab()};$("#gx").focus()};
 bindSel();
}
function bindSel(){$("#gsel").onclick=e=>{const b=e.target.closest("button");if(b)startGame(b.dataset.g)}}
function startGame(n){gname=n;gs={q:shuffle(GAMES[n].items),i:0,r:0};lab()}

/* ---------- Flashcards (from viva bank) ---------- */
let deck=[],di=0,again=[],fbook="all";
function buildDeck(list){deck=list||shuffle(VIVA.filter(v=>fbook==="all"||v[0]===fbook));di=0;again=[];drawCard()}
function drawCard(){
 let h=`<div class="eyebrow">Flashcards · ${VIVA.length} cards</div><h2>Say it, then flip</h2><div class="chips" id="fb">${["all","Ivey","Egan"].map(b=>`<button aria-pressed="${fbook===b}" data-b="${b}">${b==="all"?"Both":b}</button>`).join("")}</div>`;
 if(di>=deck.length)h+=`<div class="face" style="position:static;min-height:180px;margin:16px 0"><div class="q">Deck done</div><div>${deck.length-again.length} of ${deck.length} known.</div></div><div class="row">${again.length?'<button class="btn primary" id="redo">Review missed</button>':""}<button class="btn" id="restart">Shuffle & restart</button></div>`;
 else{const c=deck[di];h+=`<div class="bar"><i style="width:${di/deck.length*100}%"></i></div><div class="fc" id="fc" tabindex="0" role="button" aria-label="Flip card"><div class="fc-in"><div class="face"><span class="eyebrow">${c[0]} · Ch ${c[1]} · ${di+1}/${deck.length}</span><div class="q">${c[2]}</div><span class="hint">Tap or press Space</span></div><div class="face back"><span class="eyebrow">Answer</span><div>${c[3]}</div></div></div></div><div class="row"><button class="btn" id="miss">Still learning (←)</button><button class="btn primary" id="got">Got it (→)</button></div>`}
 $("#cards").innerHTML=h;
 $("#fb").onclick=e=>{const b=e.target.closest("button");if(b){fbook=b.dataset.b;buildDeck()}};
 if(di>=deck.length){$("#restart").onclick=()=>buildDeck();if(again.length)$("#redo").onclick=()=>buildDeck(shuffle(again));return}
 $("#fc").onclick=()=>$("#fc").classList.toggle("flip");$("#got").onclick=()=>{di++;drawCard()};$("#miss").onclick=()=>{again.push(deck[di]);di++;drawCard()};
}
document.addEventListener("keydown",e=>{if($("#cards").hidden||!$("#fc")||e.target.matches("input,select,textarea"))return;if(e.code==="Space"){e.preventDefault();$("#fc").classList.toggle("flip")}if(e.key==="ArrowRight")$("#got")?.click();if(e.key==="ArrowLeft")$("#miss")?.click()});

/* ---------- Quiz (built from viva bank) ---------- */
let qs=[],qi=0,qr=0;
function startQuiz(){qs=shuffle(VIVA).slice(0,15).map(v=>{const wrong=shuffle(VIVA.filter(x=>x!==v&&x[0]===v[0])).slice(0,3).map(x=>x[3]);return {q:v[2],src:`${v[0]} · Ch ${v[1]}`,o:shuffle([{t:v[3],ok:true},...wrong.map(t=>({t,ok:false}))])}});qi=0;qr=0;drawQ()}
function drawQ(){
 if(qi>=qs.length){const p=Math.round(qr/qs.length*100),best=Math.max(p,store.get("ie-qbest",0));store.set("ie-qbest",best);$("#quiz").innerHTML=`<div class="eyebrow">Result</div><div class="score">${qr}/${qs.length}</div><p>${p>=80?"Viva ready.":p>=50?"Close. Go back to the viva bank for the ones you missed.":"Read through the viva bank first."} Best: ${best}%.</p><button class="btn primary" id="qa">New quiz</button>`;$("#qa").onclick=startQuiz;return}
 const q=qs[qi];let a=false;
 $("#quiz").innerHTML=`<div class="eyebrow">Quiz ${qi+1} of ${qs.length} · ${q.src} · score ${qr}</div><div class="bar" style="margin:10px 0"><i style="width:${qi/qs.length*100}%"></i></div><h2 style="font-size:2rem">${q.q}</h2><p class="hint">Pick the answer that belongs to this question.</p><div class="opts">${q.o.map((o,k)=>`<button data-k="${k}">${o.t}</button>`).join("")}</div><div class="row" id="qn"></div>`;
 $("#quiz .opts").onclick=e=>{const b=e.target.closest("button");if(!b||a)return;a=true;const p=q.o[+b.dataset.k];[...$("#quiz .opts").children].forEach((x,k)=>{if(q.o[k].ok)x.classList.add("right");x.disabled=true});if(p.ok)qr++;else b.classList.add("wrong");$("#qn").innerHTML=`<button class="btn primary" id="nq">${qi+1<qs.length?"Next":"See result"}</button>`;$("#nq").onclick=()=>{qi++;drawQ()};$("#nq").focus()};
}

/* ---------- Modes ---------- */
let labOn=false;
function mode(m){
 document.querySelectorAll("nav button").forEach(b=>b.setAttribute("aria-selected",b.dataset.mode===m));
 ["answers","viva","lab","cards","quiz"].forEach(id=>$("#"+id).hidden=id!==m);
 if(m==="viva")viva();
 if(m==="lab"&&!labOn){labOn=true;startGame(gname)}
 scrollTo(0,0);
}
document.querySelector("nav").onclick=e=>{const b=e.target.closest("button");if(b)mode(b.dataset.mode)};
arail();answer();prog();buildDeck();startQuiz();
