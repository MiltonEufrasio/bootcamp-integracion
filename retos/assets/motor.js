/* ---------- Motor común de retos ProFE (usa DATA) ---------- */
const KEY = DATA.key;
let S = {answers:{}, boxes:{}, conf:{}, done:{}, warm:{}};
try { const s = JSON.parse(localStorage.getItem(KEY) || "null"); if (s) S = Object.assign(S, s); } catch (e) {}
function save(){ try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} }

const $app = document.getElementById("app");
const SESS = DATA.sessions;
const ORDER = DATA.order;                       // ids en orden sugerido
const ALLQ = {};
/* Mezcla fija de opciones por pregunta (la misma en cada visita), para que la respuesta no quede siempre en el mismo lugar */
function seeded(str){ let h = 2166136261; for (const ch of str) { h ^= ch.charCodeAt(0); h = Math.imul(h, 16777619); } return () => { h ^= h << 13; h ^= h >>> 17; h ^= h << 5; return (h >>> 0) / 4294967296; }; }
function shuffleQ(q){ const rnd = seeded(q.id + DATA.key); const idx = q.opts.map((_, i) => i);
  for (let i = idx.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [idx[i], idx[j]] = [idx[j], idx[i]]; }
  q.opts = idx.map(i => q.opts[i]); q.a = idx.indexOf(q.a); }
ORDER.forEach(id => { const s = SESS[id]; [...(s.prereq||[]), ...s.practice, ...s.ticket].forEach(q => { q.sid = id; shuffleQ(q); ALLQ[q.id] = q; }); });

function typeset(el){ if (window.__mj && MathJax.typesetPromise) { MathJax.typesetPromise([el || $app]).catch(()=>{}); } }
function retoOf(id){ return DATA.retos.find(r => r.sessions.includes(id)); }
function retoProgress(r){ return r.sessions.filter(id => S.done[id]).length; }

/* Calentamiento: prerrequisitos en la primera sesión; después, repaso espaciado (Leitner) */
function warmFor(id){
  const s = SESS[id];
  if (s.prereq) return s.prereq.map(q => q.id);
  if (S.warm[id]) return S.warm[id];
  const idx = ORDER.indexOf(id);
  const pool = ORDER.slice(0, idx).flatMap(p => [...SESS[p].practice, ...SESS[p].ticket]).map(q => q.id);
  const rank = q => { const b = S.boxes[q]; return b === 1 ? 0 : b === undefined ? 1 : b === 2 ? 2 : 3; };
  const shuffled = pool.map(q => [q, Math.random()]).sort((a,b) => a[1]-b[1]).map(x => x[0]);
  const pick = shuffled.sort((a,b) => rank(a) - rank(b)).slice(0, 4);
  S.warm[id] = pick; save();
  return pick;
}

/* ---------- Vistas ---------- */
function viewHome(){
  const cards = DATA.retos.map(r => `
    <a class="reto" href="#reto-${r.L.toLowerCase()}">
      <div class="reto-head"><span class="letter">${r.L}</span>
        <span class="dots">${r.sessions.map(id => `<span class="dot ${S.done[id] ? "done" : "open"}"></span>`).join("")}</span></div>
      <h3>${r.name}</h3>
      <p style="color:var(--muted)">${r.idea}</p>
      <span class="label">${retoProgress(r)}/3 sesiones completadas</span>
    </a>`).join("");
  const plan = ORDER.map((id, i) => {
    const s = SESS[id];
    return `<a class="sess" href="#sesion-${id.toLowerCase()}">
      <span class="num">${i+1}</span>
      <div class="stack" style="gap:2px"><span class="label">${id} · sugerido ${s.date}</span><h3>${s.title}</h3></div>
      ${S.done[id] ? `<span class="pill ok">Completada</span>` : `<span class="pill go">Abrir</span>`}</a>`;
  }).join("");
  return `<div class="stack">
   <section class="sheet stack">
     <div class="stack" style="gap:12px">
       <span class="label">${DATA.course} · reto de cierre</span>
       <h1>${DATA.headline}</h1>
       <p class="lead">${DATA.lead}</p>
     </div>
     <div class="how">
       <div><span class="n">45′</span><h3>Por sesión</h3><p>Calentamiento, ejemplo resuelto, práctica y un ticket de salida. Ten lápiz y papel a mano.</p></div>
       <div><span class="n">6</span><h3>Sesiones, en orden</h3><p>Todas están abiertas desde hoy. Sigue el orden sugerido: los retos se cruzan para que repases lo anterior.</p></div>
       <div><span class="n">+</span><h3>Bono de nota</h3><p>${DATA.bonus}</p></div>
     </div>
   </section>
   <section class="stack"><h2>Los retos</h2><div class="retos">${cards}</div></section>
   <section class="sheet stack"><div class="stack" style="gap:6px"><h2>Ruta sugerida</h2>
     <p style="color:var(--muted)">Deja al menos un día entre sesiones. Ese espacio es parte del método: recordar después de olvidar un poco es lo que fija lo aprendido.</p></div>
     <div class="sessions">${plan}</div></section>
   ${viewLeitner()}
  </div>`;
}

function viewReto(r){
  const list = r.sessions.map((id, i) => { const s = SESS[id];
    return `<a class="sess" href="#sesion-${id.toLowerCase()}"><span class="num">${i+1}</span>
      <div class="stack" style="gap:4px"><span class="label">${id} · sugerido ${s.date}</span><h3>${s.title}</h3>
      <p style="color:var(--muted);font-size:.95rem">${s.lead}</p></div>
      ${S.done[id] ? `<span class="pill ok">Completada</span>` : `<span class="pill go">Abrir</span>`}</a>`; }).join("");
  return `<nav class="crumbs"><a href="#inicio">Retos</a><span>/</span><span>Reto ${r.L}</span></nav>
   <section class="sheet stack">
     <div class="stack" style="gap:8px"><span class="label">Reto ${r.L} · ${retoProgress(r)}/3 sesiones</span><h1>${r.name}</h1><p class="lead">${r.idea}</p></div>
     <div class="sessions">${list}</div>
     <div class="tip"><strong>Para el bono:</strong> ${DATA.bonus}</div>
   </section>`;
}

function qHTML(q, key){
  key = key || q.id;
  const a = S.answers[key];
  const opts = q.opts.map((o, i) => {
    let cls = ""; if (a !== undefined) { if (i === q.a) cls = "right"; else if (i === a) cls = "wrong"; }
    return `<button class="opt ${cls}" data-q="${q.id}" data-k="${key}" data-i="${i}" ${a !== undefined ? "disabled" : ""}>${o}</button>`; }).join("");
  const fb = a === undefined ? "" : (a === q.a
    ? `<div class="fb ok"><strong>Correcto.</strong> ${q.why}</div>`
    : `<div class="fb bad"><strong>Todavía no.</strong> ${q.why} Esta pregunta volverá en un calentamiento.</div>`);
  const origin = key.startsWith("w:") && !SESS[key.split(":")[1]].prereq ? ` · de ${q.sid}` : "";
  return `<div class="q" id="q-${key.replace(/:/g,"_")}"><div class="q-top"><span class="tag">${q.tag}${origin}</span></div><div>${q.text}</div><div class="opts">${opts}</div>${fb}</div>`;
}

function viewSession(id){
  const s = SESS[id], r = retoOf(id), pos = r.sessions.indexOf(id) + 1, n = ORDER.indexOf(id);
  const warm = warmFor(id);
  const conf = S.conf[id];
  const confHTML = [1,2,3,4,5].map(k => `<button data-conf="${k}" data-s="${id}" class="${conf===k?"on":""}" aria-label="Confianza ${k}">${k}</button>`).join("");
  const next = ORDER[n+1];
  const warmIntro = s.prereq ? "Lo que necesitas saber para esta sesión. Si fallas alguna, repásala antes de seguir."
    : "Repaso espaciado: preguntas de sesiones anteriores, primero las que fallaste. Así se fija lo aprendido.";
  return `<nav class="crumbs"><a href="#inicio">Retos</a><span>/</span><a href="#reto-${r.L.toLowerCase()}">Reto ${r.L}</a><span>/</span><span>Sesión ${id}</span></nav>
  <section class="sheet stack">
    <div class="stack" style="gap:8px"><span class="label">Reto ${r.L} · Sesión ${pos} de 3 · paso ${n+1} de ${ORDER.length} de la ruta</span>
      <h1>${s.title}</h1><p class="lead">${s.lead}</p></div>

    <div class="block"><div class="block-head"><h2>1. Calentamiento</h2><span class="mins">10 min</span></div>
      <p style="color:var(--muted)">${warmIntro}</p>
      ${warm.length ? warm.map(qid => qHTML(ALLQ[qid], "w:"+id+":"+qid)).join("") : ""}</div>

    <div class="block"><div class="block-head"><h2>2. Lo nuevo</h2><span class="mins">10 min</span></div>
      <p class="label">Lee con lápiz en mano y rehaz cada ejemplo sin mirar</p>
      ${s.lesson}</div>

    <div class="block"><div class="block-head"><h2>3. Práctica</h2><span class="mins">20 min</span></div>
      <p style="color:var(--muted)">Resuelve en papel y luego elige. Si eliges al azar, el sistema no puede ayudarte a repasar lo que de verdad necesitas.</p>
      ${s.practice.map(q => qHTML(q)).join("")}</div>

    <div class="block"><div class="block-head"><h2>4. Ticket de salida</h2><span class="mins">5 min</span></div>
      ${s.ticket.map(q => qHTML(q)).join("")}
      <div class="q"><span class="tag">metacognición</span><p>${s.confPrompt} (1 = nada, 5 = podría explicárselo a alguien)</p><div class="conf">${confHTML}</div></div>
      ${S.done[id]
        ? `<div class="done-banner"><h3>Sesión ${id} completada</h3><p>Lo que fallaste quedó en la caja 1 y saldrá en el próximo calentamiento.</p><div class="row">${next ? `<a class="btn" href="#sesion-${next.toLowerCase()}">Siguiente: ${next} (sugerido ${SESS[next].date})</a>` : ""}<a class="btn ghost" href="#inicio">Volver a los retos</a></div></div>`
        : `<p style="color:var(--muted)">Responde el ticket y marca tu nivel de confianza para cerrar la sesión.</p>`}
    </div>
  </section>`;
}

function viewLeitner(){
  const c = [0,0,0]; Object.values(S.boxes).forEach(b => c[b-1]++);
  return `<section class="sheet stack"><div class="stack" style="gap:6px"><h2>Tus cajas de repaso</h2>
   <p style="color:var(--muted)">Sistema Leitner: cada ejercicio que fallas va a la caja 1 y vuelve en el siguiente calentamiento. Si lo aciertas, sube de caja y vuelve más espaciado.</p></div>
   <div class="boxes">
    <div class="box"><span class="c">${c[0]}</span><span class="label">Caja 1 · vuelve pronto</span></div>
    <div class="box"><span class="c">${c[1]}</span><span class="label">Caja 2 · vuelve después</span></div>
    <div class="box"><span class="c">${c[2]}</span><span class="label">Caja 3 · dominado</span></div>
   </div>${Object.keys(S.boxes).length ? "" : `<p style="color:var(--muted)">Empieza con la <a href="#sesion-${ORDER[0].toLowerCase()}">sesión ${ORDER[0]}</a> y tus cajas se irán llenando.</p>`}</section>`;
}

/* ---------- Router ---------- */
function render(){
  const h = (location.hash || "#inicio").slice(1);
  let html;
  const r = h.startsWith("reto-") && DATA.retos.find(x => x.L === h.slice(5).toUpperCase());
  const sid = h.startsWith("sesion-") && h.slice(7).toUpperCase();
  if (r) html = viewReto(r);
  else if (sid && SESS[sid]) html = viewSession(sid);
  else html = viewHome();
  $app.innerHTML = html; typeset();
}
window.addEventListener("hashchange", () => { render(); window.scrollTo(0,0); });

$app.addEventListener("click", e => {
  const o = e.target.closest(".opt");
  if (o && !o.disabled) {
    const q = ALLQ[o.dataset.q], key = o.dataset.k, i = +o.dataset.i;
    S.answers[key] = i;
    const prev = S.boxes[q.id];
    S.boxes[q.id] = i === q.a ? Math.min(3, prev ? prev + 1 : 2) : 1;
    const sid = key.startsWith("w:") ? key.split(":")[1] : q.sid;
    checkDone(sid); save();
    const el = document.getElementById("q-" + key.replace(/:/g,"_"));
    el.outerHTML = qHTML(q, key);
    typeset(document.getElementById("q-" + key.replace(/:/g,"_")));
    if (S.done[sid] && !key.startsWith("w:") && SESS[sid].ticket.includes(q)) { const y = scrollY; render(); scrollTo(0,y); }
    return;
  }
  const c = e.target.closest("[data-conf]");
  if (c) { S.conf[c.dataset.s] = +c.dataset.conf; checkDone(c.dataset.s); save(); const y = scrollY; render(); scrollTo(0,y); }
});
function checkDone(id){ const s = SESS[id]; if (s.ticket.every(q => S.answers[q.id] !== undefined) && S.conf[id]) S.done[id] = true; }

render();
