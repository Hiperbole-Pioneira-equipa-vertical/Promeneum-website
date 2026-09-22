(() => {
'use strict';
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const reduced = !!(window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches);
const el = (tag, cls, text) => { const n = document.createElement(tag); if (cls) n.className = cls; if (text != null) n.textContent = text; return n; };
function mulberry32(a){ return function(){ a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }

/* =====================================================================
   1. Línguas — o português está no HTML; o inglês vive neste dicionário
   ===================================================================== */
const EN = {
'a11y.skip':'Skip to content','ab.eyebrow':'About','ab.f1':'Base','ab.f2':'Activity','ab.f2v':'Since 2024','ab.f3':'Working languages','ab.f3v':'Portuguese and English',
'ab.mission':'We aim to catalyse the productivity and growth of organisations by infusing cutting-edge AI and robotics R&amp;D into the streamlining of business processes, while upholding our dedication to ethical and sustainable practices.',
'ab.title':'University R&amp;D, rigorous execution','ag.ch':'To respond to requests at any hour and to remove repetitive work from teams.',
'ag.lead':'AI agents for round-the-clock service and process automation workflows, orchestrated in n8n.','ag.s1':'Service agent available 24 hours a day, 7 days a week.',
'ag.s2':'Complete automation workflows, from request to response, orchestrated in n8n.','ag.sector':'Cross-sector','ag.tech':'n8n for workflow orchestration; language models.',
'c.ag.p':'AI agents for round-the-clock service and process automation workflows, orchestrated in n8n.','c.ag.t':'Agents and process automation',
'c.ep.p':'Checks in real time the use of personal protective equipment, with anatomical validation: helmet, reflective vest and mask.',
'c.iv.p':'Automatic defect detection in metal components. It replaces manual inspection with an objective, repeatable decision on the line.','c.iv.t':'Automated visual inspection','c.more':'View sheet →',
'c.nx.p':'Industrial environmental monitoring: temperature and humidity in two autonomous zones, with electromechanical actuation and centralised supervision.',
'co.ac.a1.p':'AI agents and models applied to the company’s concrete processes.','co.ac.a1.t':'Artificial intelligence','co.ac.a2.p':'Real-time image inspection, detection and analysis, with on-premises computing.',
'co.ac.a2.t':'Machine vision','co.ac.a3.p':'Sensors, control and actuation at the edge, close to the equipment.','co.ac.a3.t':'Intelligent automation','co.ac.tag':'AI, machine vision and automation','co.back':'← The group',
'co.cta':'Speak with us →','co.hp.lead':'The group’s LegalTech company. It develops JurisVis, the AI legal assistant anchored exclusively in official Portuguese sources.',
'co.pa.close':'Each theme may be delivered as an executive session, a practical workshop or a bespoke programme.','comp.eyebrow':'Capabilities','comp.title':'Systems that see, decide and act in real-world environments',
'ct.eyebrow':'Contact','ct.lead':'The assistant collects your contact details and passes your request to our team. It does nothing else.','ct.or':'If you prefer, write to','ct.title':'Speak with us',
'cta.title':'Do you have a process you wish to improve?','d.nx.heat':'Simulate heat peak','d.nx.hum':'Relative humidity (%)',
'd.nx.p':'Two zones with autonomous control. When temperature or humidity exceeds the limit, the controller opens gates in steps of 50%.','d.nx.t':'NuxIA — environmental supervision','d.nx.temp':'Temperature (°C)',
'd.synthetic':'Synthetic data',
'd.v.fine':'Illustrative demonstration: it uses classical vision (difference from the local background and connected components). The actual system uses trained vision models, two cameras and a motorised axis.',
'd.v.new':'New part','d.v.p':'Generate a part and inspect it. The image is analysed pixel by pixel inside the browser; nothing leaves this device.','d.v.run':'Inspect','d.v.synthetic':'Synthetic part',
'd.v.t':'Visual inspection — local analysis','demo.eyebrow':'Demonstrations','demo.lead':'Both demonstrations run entirely on this device and use synthetic data: no client data, no images uploaded.',
'demo.title':'Try the technology in your browser','ep.ch':'To verify the correct use of PPE continuously. Detecting the equipment is not sufficient: its position on the body must be confirmed.',
'ep.lead':'Intelligent machine-vision system that checks, in real time, the use of personal protective equipment, with anatomical validation.','ep.s1':'Detects helmet, reflective vest and mask.',
'ep.s2':'Confirms the position of each item on the body: head, face and torso.','ep.s3':'Operating interface with immediate alerts on non-compliance.','ep.sector':'Occupational health and safety',
'ep.tech':'Local processing on Raspberry Pi (edge); YOLOv8 and OpenCV; model trained on more than 2,700 images.','ft.contactpage':'Contact page','ft.nav':'Navigation','ft.privacy':'Privacy policy',
'ft.proto':'Prototype for internal review — not to be published before the flagged items are validated.','grp.ac':'Designs and installs systems that see, decide and act in real-world environments.',
'grp.em':'Represents third-party technology that complements the group’s solutions.','grp.eyebrow':'The group','grp.hp':'Develops JurisVis, the AI legal assistant anchored in official Portuguese sources.',
'grp.lead':'The group is organised into four areas of activity, each with a brand of its own.','grp.more':'Learn more →','grp.pa':'Trains those who decide and those who execute, so that AI is adopted with discernment.',
'grp.title':'The structure of the group','hero.box':'AI, Machine Vision and Intelligent Automation','hero.cta1':'Meet the group','hero.cta2':'Speak with us',
'hero.lead':'Promeneum Group takes artificial intelligence research into organisations: own products, intelligent automation projects, training and technology representation.',
'hero.title':'From the forefront of science to implementation in real-world environments','iv.ch':'To replace manual inspection with an objective, repeatable decision on the production line.',
'iv.demo':'Try the local analysis demonstration →','iv.lead':'Automatic defect-detection system for metal components, developed for an industrial manufacturer.',
'iv.repl':'A replicable base for quality and infrastructure inspection in other sectors.','iv.s1':'Two-camera architecture: top view and side view, with a motorised linear axis.',
'iv.s2':'Accept or reject decision per part, with defects marked on the image.','iv.s3':'Inspection history by batch.','iv.sector':'Industry — metal components',
'iv.tech':'Machine-vision models on a Python stack; on-premises computing.','jv.access':'— Free, Pro, Max and Enterprise plans.',
'jv.ch':'In a legal context, an answer has value only if its source can be verified. JurisVis answers from official Portuguese sources and links each result to the published text.',
'jv.lead':'AI legal assistant anchored exclusively in official Portuguese sources — legislation and case law, with a direct link to the Diário da República and daily updates.',
'jv.s1':'Cognitive sovereignty: national, verifiable sources, national team.','jv.s2':'AI agent orchestration, with human validation at the end of the chain.','jv.s3':'Legislation and case law, updated daily.',
'jv.sector':'Legal professionals','jv.tech':'AI agents over official sources. Technical partnership with LIACC/FEUP; IBM enterprise infrastructure.','ld.fine':'Your data are used solely to reply to your request.',
'ld.label':'Your reply','ld.send':'Reply','nav.contact':'Contact','nav.group':'The group','nav.menu':'Menu','nav.rep':'Representation','nav.training':'Training',
'nx.ch':'To keep the temperature and humidity of two process zones within the defined limits, with automatic actuation.','nx.demo':'View the demonstration with synthetic data →','nx.k1':'zones','nx.k2':'sensors',
'nx.k3':'control units','nx.k4':'gates','nx.k5':'application','nx.lead':'Industrial environmental monitoring: temperature and humidity in two autonomous zones, with electromechanical actuation and centralised supervision.',
'nx.repl':'Architecture replicable in other sectors.','nx.s1':'Twelve sensors — four internal and two external per zone — collect the environmental conditions.',
'nx.s2':'Two autonomous, independent control units, one per zone, process the information.','nx.s3':'The system acts on eleven gates, with openings at 0%, 50% or 100%.',
'nx.s4':'The application provides algorithmic supervision, control and alerts.','nx.tech':'Distributed microcontroller architecture; supervision application.','pp.back':'← Home','proj.eyebrow':'Application cases',
'proj.title':'Projects','sec.aero':'Aerospace','sec.agri':'Agri-industry','sec.eyebrow':'Sectors','sec.title':'Sectors in which we work','sh.access':'Access','sh.back':'← Projects','sh.challenge':'Challenge',
'sh.repl':'Replicability','sh.sector':'Sector','sh.solution':'Solution','sh.tech':'Technology','th.1.p':'Identifying use cases, ranking them by value and feasibility, and building the business case.',
'th.1.t':'AI for decision-makers: where the value lies and where to begin','th.2.p':'Why so many AI pilots never reach production, and what must change in the organisation for them to do so.','th.2.t':'From pilot to operation',
'th.3.p':'Writing, analysis, meetings and documents: good practice, limits and verification of results.','th.3.t':'Productivity with AI assistants',
'th.4.p':'Mapping a process, choosing what to automate and designing workflows with human validation.','th.4.t':'Automating processes without programming',
'th.5.p':'Research, source verification and confidentiality in legal work with AI.','th.5.t':'AI in the legal and compliance department',
'th.6.p':'What can be inspected, which data are required and how to define acceptance criteria.','th.6.t':'Machine vision in quality and safety',
'th.7.p':'When to process close to the equipment, which architectures to use and how to maintain the system.','th.7.t':'AI at the edge: sensors, control and local decision','tk.a':'Board and senior management',
'tk.b':'Business and support teams','tk.c':'Operations and industry','tr.title':'AI training for those who decide and for those who execute','value.eyebrow':'How we create value',
'value.note':'A single chain, from knowledge to the implemented solution.','value.s1.a':'Partner laboratories','value.s1.b':'New processes and technology','value.s1.c':'European programmes','value.s1.t':'R&amp;D in academia',
'value.s2.a':'Process specialists','value.s2.b':'Technology specialists','value.s3.a':'Own products','value.s3.b':'Intelligent automation projects','value.s3.c':'Training','value.s3.d':'Third-party technology',
'value.s3.t':'Solutions','value.title':'From research to delivery'
};
const EN_ATTR = {'nav.label':'Main','d.v.canvas':'Synthetic metal part','sh.others':'Other projects','ld.log':'Conversation with the contact assistant'};

const T = {
  pt:{ locale:'pt-PT', pause:'Pausar', resume:'Retomar', table:'Ver tabela', charts:'Ver gráficos',
    z1:'Zona 1', z2:'Zona 2', ext:'Exterior', gatesWord:'comportas', openOf:(o,n)=>`${o} de ${n} abertas`, limit:'limite', sensors:'sensores exteriores', lvWarn:'acima do limite', lvCrit:'crítico',
    clock:t=>`Hora simulada ${t} · 1 s = 5 min`, time:'Hora', gate:(i,p)=>`Comporta ${i}: ${p}\u00a0%`,
    noAlerts:'Sem alertas. Todas as zonas dentro dos limites.',
    evTemp:(z,v,l)=>`${z}: temperatura de ${v} °C acima do limite de ${l} °C. Comportas a abrir.`,
    evCrit:(z,v,l)=>`${z}: temperatura crítica, ${v} °C (limite ${l} °C). Todas as comportas accionadas.`,
    evHum:(z,v,l)=>`${z}: humidade de ${v}\u00a0% acima do limite de ${l}\u00a0%. Comportas a abrir.`,
    evOk:z=>`${z}: valores de novo dentro dos limites.`, evHeat:'Pico de calor simulado no exterior.',
    chartT:'Gráfico de linhas: temperatura das duas zonas e do exterior nas últimas seis horas simuladas. Use as setas para percorrer as leituras.',
    chartH:'Gráfico de linhas: humidade relativa das duas zonas e do exterior nas últimas seis horas simuladas. Use as setas para percorrer as leituras.',
    vOk:'Peça aceite', vKo:'Peça rejeitada', vIdle:'Peça por inspeccionar', scratch:'Risco', dent:'Mossa', none:'Nenhum defeito detectado.',
    mTime:'tempo de análise', mPx:'píxeis analisados', mSent:'dados enviados', bytes:'0 bytes',
    ld:{ hello:'Olá. Sou o assistente de contacto do Promeneum Group. Recolho apenas os dados necessários para a nossa equipa lhe responder.',
      askName:'Como se chama?', askCompany:n=>`Obrigado, ${n}. Em que empresa trabalha? Pode saltar esta pergunta.`,
      askEmail:'Qual é o seu e-mail? É para lá que enviamos a resposta.', askPhone:'Quer deixar um número de telefone? Pode saltar esta pergunta.',
      askArea:'Qual é o assunto do seu contacto?', askMsg:'Quer acrescentar uma mensagem curta? Pode saltar esta pergunta. Não inclua dados sensíveis.',
      summary:'Confirme os seus dados:', askFix:'Que dado quer corrigir?',
      done:'Obrigado. O pedido fica com a nossa equipa, que lhe responde por e-mail.',
      proto:'Protótipo: os dados não foram enviados nem guardados. No site final, o pedido é registado e a equipa é notificada.',
      badName:'Preciso do seu nome para continuar. Como se chama?', badCompany:'Escreva o nome da empresa, ou salte a pergunta.',
      badEmail:'Esse endereço não parece válido. Pode escrever o e-mail de novo? Exemplo: nome@empresa.pt',
      badPhone:'Esse número não parece válido. Escreva-o só com algarismos, ou salte a pergunta.', badChoice:'Escolha uma das opções abaixo.',
      offTopic:'Só recolho dados de contacto; não respondo a perguntas. A nossa equipa responde-lhe depois de receber o pedido.',
      sending:'A enviar o seu pedido…', sent:'Obrigado. O pedido foi entregue à nossa equipa, que lhe responde por e-mail.',
      sendFail:'Não foi possível entregar o pedido. Pode tentar de novo ou enviá-lo por e-mail.', retry:'Tentar de novo', byMail:'Enviar por e-mail',
      mailHint:e=>`Para enviar o pedido, abra a mensagem já preenchida no seu programa de e-mail e carregue em Enviar. O pedido só segue quando enviar essa mensagem. Se o botão não abrir o seu e-mail, copie os dados e envie-os para ${e}.`,
      openMail:'Abrir e-mail', copy:'Copiar os dados', copied:'Dados copiados.', mailSubject:(a,n)=>`Pedido de contacto — ${a} — ${n}`, mailIntro:'Pedido de contacto feito em promeneum.com',
      skip:'Saltar', confirm:'Confirmar e enviar', fix:'Corrigir', restart:'Novo pedido', none:'—',
      f:{ name:'Nome', company:'Empresa', email:'E-mail', phone:'Telefone', area:'Assunto', msg:'Mensagem' },
      ph:{ name:'O seu nome', company:'Nome da empresa', email:'nome@empresa.pt', phone:'+351 …', area:'Escolha uma opção', msg:'A sua mensagem', confirm:'Escolha uma opção', fix:'Escolha uma opção' },
      areas:{ legal:'LegalTech · JurisVis', auto:'IA, visão artificial e automação', training:'Formação', rep:'Representações', other:'Outro assunto' } } },
  en:{ locale:'en-GB', pause:'Pause', resume:'Resume', table:'View table', charts:'View charts',
    z1:'Zone 1', z2:'Zone 2', ext:'Outdoor', gatesWord:'gates', openOf:(o,n)=>`${o} of ${n} open`, limit:'limit', sensors:'outdoor sensors', lvWarn:'above limit', lvCrit:'critical',
    clock:t=>`Simulated time ${t} · 1 s = 5 min`, time:'Time', gate:(i,p)=>`Gate ${i}: ${p}%`,
    noAlerts:'No alerts. All zones within limits.',
    evTemp:(z,v,l)=>`${z}: temperature of ${v} °C above the ${l} °C limit. Gates opening.`,
    evCrit:(z,v,l)=>`${z}: critical temperature, ${v} °C (limit ${l} °C). All gates actuated.`,
    evHum:(z,v,l)=>`${z}: humidity of ${v}% above the ${l}% limit. Gates opening.`,
    evOk:z=>`${z}: values back within limits.`, evHeat:'Simulated outdoor heat peak.',
    chartT:'Line chart: temperature of the two zones and outdoors over the last six simulated hours. Use the arrow keys to step through the readings.',
    chartH:'Line chart: relative humidity of the two zones and outdoors over the last six simulated hours. Use the arrow keys to step through the readings.',
    vOk:'Part accepted', vKo:'Part rejected', vIdle:'Part awaiting inspection', scratch:'Scratch', dent:'Dent', none:'No defects detected.',
    mTime:'analysis time', mPx:'pixels analysed', mSent:'data sent', bytes:'0 bytes',
    ld:{ hello:'Hello. I am the contact assistant of Promeneum Group. I collect only the details our team needs in order to reply to you.',
      askName:'What is your name?', askCompany:n=>`Thank you, ${n}. Which company do you work for? You may skip this question.`,
      askEmail:'What is your email address? That is where we shall send our reply.', askPhone:'Would you like to leave a telephone number? You may skip this question.',
      askArea:'What is your enquiry about?', askMsg:'Would you like to add a short message? You may skip this question. Please do not include sensitive data.',
      summary:'Please confirm your details:', askFix:'Which detail would you like to amend?',
      done:'Thank you. Your request is now with our team, who will reply by email.',
      proto:'Prototype: the data were neither sent nor stored. On the final site, the request is recorded and the team is notified.',
      badName:'I need your name in order to continue. What is your name?', badCompany:'Please type the name of the company, or skip the question.',
      badEmail:'That address does not appear to be valid. Could you type the email again? Example: name@company.com',
      badPhone:'That number does not appear to be valid. Please type it using digits only, or skip the question.', badChoice:'Please choose one of the options below.',
      offTopic:'I only collect contact details; I do not answer questions. Our team will reply once it has received your request.',
      sending:'Sending your request…', sent:'Thank you. Your request has been delivered to our team, who will reply by email.',
      sendFail:'It was not possible to deliver your request. You may try again or send it by email.', retry:'Try again', byMail:'Send by email',
      mailHint:e=>`To send your request, open the pre-filled message in your email program and select Send. The request is sent only when you send that message. Should the button not open your email program, copy the details and send them to ${e}.`,
      openMail:'Open email', copy:'Copy the details', copied:'Details copied.', mailSubject:(a,n)=>`Contact request — ${a} — ${n}`, mailIntro:'Contact request made on promeneum.com',
      skip:'Skip', confirm:'Confirm and send', fix:'Amend', restart:'New request', none:'—',
      f:{ name:'Name', company:'Company', email:'Email', phone:'Telephone', area:'Subject', msg:'Message' },
      ph:{ name:'Your name', company:'Company name', email:'name@company.com', phone:'+44 …', area:'Choose an option', msg:'Your message', confirm:'Choose an option', fix:'Choose an option' },
      areas:{ legal:'LegalTech · JurisVis', auto:'AI, machine vision and automation', training:'Training', rep:'Representation', other:'Another matter' } } }
};
let lang = 'pt';
const t = () => T[lang];
const PT = {}, PT_ATTR = {};
$$('[data-i18n]').forEach(n => { const k = n.dataset.i18n; if (!(k in PT)) PT[k] = n.innerHTML; });
$$('[data-i18n-attr]').forEach(n => { const [a, k] = n.dataset.i18nAttr.split(':'); PT_ATTR[k] = n.getAttribute(a); });
const langHooks = [];
function setLang(next, persist){
  lang = next === 'en' ? 'en' : 'pt';
  document.documentElement.lang = lang === 'en' ? 'en-GB' : 'pt-PT';
  $$('[data-i18n]').forEach(n => { const k = n.dataset.i18n; const v = lang === 'en' ? EN[k] : PT[k]; n.innerHTML = v != null ? v : PT[k]; });
  $$('[data-i18n-attr]').forEach(n => { const [a, k] = n.dataset.i18nAttr.split(':'); const v = lang === 'en' ? EN_ATTR[k] : PT_ATTR[k]; n.setAttribute(a, v != null ? v : PT_ATTR[k]); });
  $$('[data-only-lang]').forEach(n => { n.hidden = n.dataset.onlyLang !== lang; });
  $$('.lang button').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
  langHooks.forEach(f => f());
  if (persist) { try { localStorage.setItem('promeneum.lang', lang); } catch (e) {} }
}
$$('.lang button').forEach(b => b.addEventListener('click', () => setLang(b.dataset.lang, true)));
const fmt = (v, d = 1) => Number(v).toLocaleString(t().locale, { minimumFractionDigits: d, maximumFractionDigits: d });

/* =====================================================================
   2. Navegação: grupo -> Hipérbole Pioneira, fichas de projecto, contacto e privacidade
   ===================================================================== */
const viewHome = $('#view-home'), viewCompany = $('#view-company'), viewProject = $('#view-project'), viewPage = $('#view-page');
const companies = $$('.company'), companyIds = companies.map(c => c.dataset.id);
const sheets = $$('.sheet'), order = sheets.map(s => s.dataset.id);
const pages = $$('.page'), pageIds = pages.map(p => p.dataset.id);
let currentProject = null;
const projectName = id => { const a = $(`#projectGrid a[data-project="${id}"]`); return a ? a.textContent.trim() : id; };
const show = v => { viewHome.hidden = v !== 'home'; viewCompany.hidden = v !== 'company'; viewProject.hidden = v !== 'project'; viewPage.hidden = v !== 'page'; };
const scrollToId = id => { const n = id ? document.getElementById(id) : null; if (n) n.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' }); else window.scrollTo(0, 0); return n; };
const push = (state, hash) => { try { history.pushState(state, '', hash); } catch (e) {} };
function closeMenu(){ $('#siteNav').classList.remove('open'); $('#menuBtn').setAttribute('aria-expanded', 'false'); }
function updateSheetNav(){
  if (!currentProject) return;
  const i = order.indexOf(currentProject), prev = order[(i - 1 + order.length) % order.length], next = order[(i + 1) % order.length];
  const p = $('#sheetPrev'), n = $('#sheetNext');
  p.dataset.project = prev; p.textContent = '← ' + projectName(prev);
  n.dataset.project = next; n.textContent = projectName(next) + ' →';
}
function openProject(id, record){
  if (!order.includes(id)) return;
  currentProject = id; show('project'); sheets.forEach(s => { s.hidden = s.dataset.id !== id; });
  updateSheetNav(); closeMenu(); window.scrollTo(0, 0);
  const h = $(`.sheet[data-id="${id}"] h1`); if (h) h.focus({ preventScroll: true });
  if (record) push({ p: id }, '#/projectos/' + id);
}
function openCompany(id, section, record){
  if (!companyIds.includes(id)) return;
  currentProject = null; show('company'); companies.forEach(c => { c.hidden = c.dataset.id !== id; }); closeMenu();
  if (!scrollToId(section)) { const h = $(`.company[data-id="${id}"] h1`); if (h) h.focus({ preventScroll: true }); }
  if (record) push({ c: id, s: section || '' }, '#/empresa/' + id);
}
function openPage(id, record){
  if (!pageIds.includes(id)) return;
  currentProject = null; show('page'); pages.forEach(p => { p.hidden = p.dataset.id !== id; }); closeMenu(); window.scrollTo(0, 0);
  if (id === 'contacto') Lead.start();
  const h = $$(`.page[data-id="${id}"] h1`).find(x => !x.closest('[hidden]')); if (h) h.focus({ preventScroll: true });
  if (record) push({ g: id }, '#/' + id);
}
function goHome(section, record){
  currentProject = null; show('home'); closeMenu();
  NX.render();                                      /* os gráficos só têm largura real com a página inicial visível */
  scrollToId(section);
  if (record) push({ s: section || '' }, section ? '#' + section : '#inicio');
}
document.addEventListener('click', e => {
  const a = e.target.closest('a'); if (!a) return;
  if (a.dataset.project) { e.preventDefault(); openProject(a.dataset.project, true); }
  else if (a.dataset.company) { e.preventDefault(); openCompany(a.dataset.company, a.dataset.section, true); }
  else if (a.dataset.page) { e.preventDefault(); openPage(a.dataset.page, true); }
  else if (a.dataset.nav) { e.preventDefault(); goHome(a.dataset.nav, true); }
  else if (a.classList.contains('skip')) { e.preventDefault(); $('#conteudo').focus(); }
});
function routeHash(){
  const h = location.hash || '', mp = /^#\/projectos\/([\w-]+)/.exec(h), mc = /^#\/empresa\/([\w-]+)/.exec(h), mg = /^#\/(contacto|privacidade)$/.exec(h);
  if (mp && order.includes(mp[1])) openProject(mp[1], false); else if (mc && companyIds.includes(mc[1])) openCompany(mc[1], '', false); else if (mg) openPage(mg[1], false); else return false;
  return true;
}
window.addEventListener('popstate', e => {
  const s = e.state;
  if (!s) { if (!routeHash()) goHome((location.hash || '').replace(/^#/, ''), false); return; }   /* endereço escrito à mão ou ligação externa */
  if (s.p) openProject(s.p, false); else if (s.c) openCompany(s.c, s.s, false); else if (s.g) openPage(s.g, false); else goHome(s.s, false);
});
$('#menuBtn').addEventListener('click', () => { const open = $('#siteNav').classList.toggle('open'); $('#menuBtn').setAttribute('aria-expanded', String(open)); });
langHooks.push(updateSheetNav);

/* =====================================================================
   3. Ondas do cabeçalho — o motivo do site actual, desenhado em canvas
   ===================================================================== */
(function waves(){
  const c = $('#waves'); if (!c || !c.getContext) return;
  const ctx = c.getContext('2d'); let w = 0, h = 0, raf = 0, visible = true;
  function size(){ const r = c.getBoundingClientRect(), d = Math.min(2, window.devicePixelRatio || 1); w = r.width; h = r.height; c.width = Math.max(1, Math.round(w * d)); c.height = Math.max(1, Math.round(h * d)); ctx.setTransform(d, 0, 0, d, 0, 0); }
  function draw(ms){
    ctx.clearRect(0, 0, w, h);
    const grad = ctx.createLinearGradient(0, 0, w, 0); grad.addColorStop(0, '#4E6FA8'); grad.addColorStop(.55, '#8E7C86'); grad.addColorStop(1, '#C77D3A');
    ctx.strokeStyle = grad; ctx.lineWidth = 1.15;
    const n = 20, tt = ms * 0.00022;
    for (let i = 0; i < n; i++){
      const p = i / (n - 1); ctx.globalAlpha = 0.16 + 0.5 * Math.sin(Math.PI * p);
      ctx.beginPath();
      for (let x = 0; x <= w + 8; x += 8){
        const u = x / w;
        const y = h * (0.60 + 0.16 * p) + Math.sin(u * 5.2 + tt + p * 2.4) * h * 0.13 * (0.35 + 0.65 * u) + Math.sin(u * 10.5 - tt * 0.8 + p * 5.1) * h * 0.028;
        if (x === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
      }
      ctx.stroke();
    }
    ctx.globalAlpha = 1;
  }
  function loop(ms){ if (visible && !document.hidden) draw(ms); raf = requestAnimationFrame(loop); }
  size(); draw(0);
  window.addEventListener('resize', () => { size(); draw(performance.now()); });
  if ('ResizeObserver' in window) new ResizeObserver(() => { size(); draw(performance.now()); }).observe(c.parentElement);
  if (!reduced){
    if ('IntersectionObserver' in window) new IntersectionObserver(es => { visible = es[0].isIntersecting; }).observe(c);
    raf = requestAnimationFrame(loop);
  }
})();

/* =====================================================================
   4. NuxIA — simulação com dados sintéticos (nenhum dado real)
   ===================================================================== */
const NX = (() => {
  const N = 72, rnd = mulberry32(20260920);
  const zones = [
    { key:'z1', gates:8, q:6, m:10, Thi:35, Tlo:29, Hhi:68, u:0, T:0, H:0, level:'ok', why:'' },
    { key:'z2', gates:3, q:3, m:5,  Thi:33, Tlo:27, Hhi:64, u:0, T:0, H:0, level:'ok', why:'' }
  ];
  const S = { times:[], z1:{T:[],H:[]}, z2:{T:[],H:[]}, ext:{T:[],H:[]} };
  let simMin = 8 * 60, heat = 0, heatTicks = 0, paused = false, hover = null, tableMode = false, timer = 0, onScreen = true;
  const events = [];
  const hhmm = m => { const x = ((Math.round(m) % 1440) + 1440) % 1440; return String(Math.floor(x / 60)).padStart(2, '0') + ':' + String(x % 60).padStart(2, '0'); };
  function outdoor(m){ const a = Math.sin(2 * Math.PI * (m - 540) / 1440); return { T: 24 + 7 * a + heat + (rnd() - .5) * .6, H: clamp(50 - 12 * a - heat * 1.1 + (rnd() - .5) * 2, 12, 96) }; }
  function pushEvent(kind, z, v, l){ events.unshift({ time: hhmm(simMin), kind, z, v, l }); if (events.length > 4) events.length = 4; }
  function step(log){
    simMin += 5;
    if (heatTicks > 0) { heat += (9 - heat) * .35; heatTicks--; } else { heat *= .93; if (heat < .25) heat = 0; }
    const e = outdoor(simMin);
    for (const z of zones){
      const o = z.u / (2 * z.gates);
      z.T += (e.T + z.q * (1 - .75 * o) - z.T) * .18 + (rnd() - .5) * .3;
      z.H += (e.H + z.m * (1 - .8 * o) - z.H) * .2 + (rnd() - .5) * 1;
      const hotT = z.T > z.Thi + .05, wetH = z.H > z.Hhi && e.H < z.H - 3;
      if (hotT || wetH) z.u = Math.min(2 * z.gates, z.u + 1);
      else if (z.T < z.Tlo && z.H < z.Hhi - 4) z.u = Math.max(0, z.u - 1);
      const prev = z.level;
      z.level = z.T > z.Thi + 2 ? 'crit' : (hotT || z.H > z.Hhi) ? 'warn' : 'ok';
      if (z.level === 'crit') z.u = 2 * z.gates;
      z.why = hotT || z.level === 'crit' ? 'T' : 'H';
      if (log && prev !== z.level){
        if (z.level === 'ok') pushEvent('ok', z.key);
        else if (z.level === 'crit') pushEvent('crit', z.key, z.T, z.Thi);
        else if (prev === 'ok') pushEvent(z.why === 'T' ? 'temp' : 'hum', z.key, z.why === 'T' ? z.T : z.H, z.why === 'T' ? z.Thi : z.Hhi);
      }
      S[z.key].T.push(z.T); S[z.key].H.push(z.H);
    }
    S.ext.T.push(e.T); S.ext.H.push(e.H); S.times.push(simMin);
    for (const k of ['z1', 'z2', 'ext']) { if (S[k].T.length > N) { S[k].T.shift(); S[k].H.shift(); } }
    if (S.times.length > N) S.times.shift();
  }
  (function prefill(){
    const e = outdoor(simMin); for (const z of zones){ z.T = e.T + z.q; z.H = e.H + z.m; }
    for (let i = 0; i < N; i++) step(false);
    for (const z of zones) if (z.level !== 'ok') pushEvent(z.level === 'crit' ? 'crit' : z.why === 'T' ? 'temp' : 'hum', z.key, z.why === 'T' ? z.T : z.H, z.why === 'T' ? z.Thi : z.Hhi);
  })();

  /* ---- ecrã ---- */
  const SER = [['z1', '--s1'], ['z2', '--s2'], ['ext', '--s3']];
  const tilesBox = $('#nxTiles'), legendBox = $('#nxLegend'), gatesBox = $('#nxGates'), alertsBox = $('#nxAlerts');
  const tiles = {}, gateEls = {}, tips = {};
  function build(){
    SER.forEach(([k, c]) => {
      const tile = el('div', 'tile'), lab = el('div', 'tile-label'), key = el('span', 'key'); key.style.background = `var(${c})`;
      const name = el('span'); lab.append(key, name);
      const vals = el('div', 'tile-values'), bT = el('b'), bH = el('b'); vals.append(bT, bH);
      const foot = el('div', 'tile-foot'); tile.append(lab, vals, foot); tilesBox.append(tile);
      tiles[k] = { tile, name, bT, bH, foot };
      const li = el('span'), lk = el('span', 'key'), ln = el('span'); lk.style.background = `var(${c})`; li.append(lk, ln); legendBox.append(li); tiles[k].legend = ln;
    });
    zones.forEach(z => {
      const g = el('div', 'gate-group'), h = el('h4'), nm = el('b'), cnt = el('span'); h.append(nm, cnt);
      const row = el('div', 'gate-row'); const arr = [];
      for (let i = 0; i < z.gates; i++){ const gt = el('div', 'gate'), fill = el('i'); gt.setAttribute('role', 'img'); gt.append(fill); row.append(gt); arr.push({ gt, fill }); }
      g.append(h, row); gatesBox.append(g); gateEls[z.key] = { nm, cnt, arr };
    });
    ['T', 'H'].forEach(m => { const tip = el('div', 'tip'); tip.hidden = true; $('#viz' + m).append(tip); tips[m] = tip; });
  }
  const M = { l:36, r:14, t:10, b:24, W:520, H:220 };
  const widthOf = svg => clamp(Math.round(svg.getBoundingClientRect().width) || 520, 260, 560);
  function drawChart(measure){
    const svg = $('#svg' + measure); M.W = widthOf(svg); M.H = M.W < 400 ? 200 : 220; svg.setAttribute('viewBox', `0 0 ${M.W} ${M.H}`);
    const pw = M.W - M.l - M.r, ph = M.H - M.t - M.b, n = S.times.length, every = M.W < 400 ? 120 : 60;
    const all = S.z1[measure].concat(S.z2[measure], S.ext[measure]), st = measure === 'T' ? 5 : 10;
    let lo = Math.floor((Math.min(...all) - 1) / st) * st, hi = Math.ceil((Math.max(...all) + 1) / st) * st; if (hi - lo < 2 * st) hi = lo + 2 * st;
    const X = i => M.l + pw * i / (n - 1), Y = v => M.t + ph * (1 - (v - lo) / (hi - lo)), f = v => v.toFixed(1);
    let out = `<title id="svg${measure}t">${measure === 'T' ? t().chartT : t().chartH}</title>`;
    for (let v = lo; v <= hi; v += st) out += `<line class="grid" x1="${M.l}" x2="${M.W - M.r}" y1="${f(Y(v))}" y2="${f(Y(v))}"/><text x="${M.l - 7}" y="${f(Y(v) + 4)}" text-anchor="end">${v}</text>`;
    out += `<line class="axis" x1="${M.l}" x2="${M.W - M.r}" y1="${M.t + ph}" y2="${M.t + ph}"/>`;
    S.times.forEach((m, i) => { if (m % every === 0 && X(i) < M.W - M.r - 16 && X(i) > M.l + 10) out += `<text x="${f(X(i))}" y="${M.H - 6}" text-anchor="middle">${hhmm(m)}</text>`; });
    SER.forEach(([k, c]) => {
      const a = S[k][measure]; let d = '';
      a.forEach((v, i) => { d += (i ? 'L' : 'M') + f(X(i)) + ' ' + f(Y(v)); });
      out += `<path class="line" d="${d}" style="stroke:var(${c})"/><circle class="dot" cx="${f(X(n - 1))}" cy="${f(Y(a[n - 1]))}" r="4.5" style="fill:var(${c})"/>`;
    });
    if (hover != null){
      const i = clamp(hover, 0, n - 1);
      out += `<line class="cross" x1="${f(X(i))}" x2="${f(X(i))}" y1="${M.t}" y2="${M.t + ph}"/>`;
      SER.forEach(([k, c]) => { out += `<circle class="dot" cx="${f(X(i))}" cy="${f(Y(S[k][measure][i]))}" r="4.5" style="fill:var(${c})"/>`; });
    }
    svg.innerHTML = out;
    const tip = tips[measure];
    if (hover == null) { tip.hidden = true; return; }
    const i = clamp(hover, 0, n - 1); tip.textContent = '';
    tip.append(el('div', 'tip-time', hhmm(S.times[i])));
    SER.forEach(([k, c]) => { const row = el('div', 'tip-row'), key = el('span', 'key'); key.style.background = `var(${c})`; row.append(key, el('span', '', t()[k]), el('b', '', fmt(S[k][measure][i]) + (measure === 'T' ? ' °C' : ' %'))); tip.append(row); });
    tip.hidden = false;
    const box = svg.getBoundingClientRect(), host = svg.parentElement.getBoundingClientRect(), px = (box.left - host.left) + X(i) / M.W * box.width;
    if (i > n / 2) { tip.style.left = 'auto'; tip.style.right = (host.width - px + 12) + 'px'; } else { tip.style.right = 'auto'; tip.style.left = (px + 12) + 'px'; }
  }
  function drawTable(){
    const tb = $('#nxData'); tb.textContent = '';
    const head = el('thead'), hr = el('tr'); [t().time, `${t().z1} °C`, `${t().z2} °C`, `${t().ext} °C`, `${t().z1} %`, `${t().z2} %`, `${t().ext} %`].forEach(h => hr.append(el('th', '', h)));
    head.append(hr); const body = el('tbody'), n = S.times.length;
    for (let i = n - 1; i >= Math.max(0, n - 12); i--){ const tr = el('tr'); [hhmm(S.times[i]), fmt(S.z1.T[i]), fmt(S.z2.T[i]), fmt(S.ext.T[i]), fmt(S.z1.H[i], 0), fmt(S.z2.H[i], 0), fmt(S.ext.H[i], 0)].forEach(v => tr.append(el('td', '', v))); body.append(tr); }
    tb.append(head, body);
  }
  const ICON = { good:'<svg viewBox="0 0 20 20" aria-hidden="true"><circle cx="10" cy="10" r="8" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M6 10.4l2.6 2.6L14 7.6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    warn:'<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M10 2.5l8 14.5H2z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M10 8v4.2M10 14.6v.2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
    crit:'<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M6.5 2h7L18 6.5v7L13.5 18h-7L2 13.5v-7z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M10 6v5M10 13.8v.2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>' };
  let alertsSig = '';
  function drawAlerts(){
    const sig = lang + '|' + events.map(e => e.time + e.kind + e.z).join(',');
    if (sig === alertsSig) return; alertsSig = sig; alertsBox.textContent = '';
    const rows = events.length ? events : [{ kind:'none' }];
    rows.forEach(ev => {
      const level = ev.kind === 'ok' || ev.kind === 'none' ? 'good' : ev.kind === 'crit' ? 'crit' : 'warn';
      const row = el('div', 'alert'); row.dataset.level = level; row.innerHTML = ICON[level];
      const txt = el('span'); if (ev.time) txt.append(el('time', '', ev.time));
      const z = ev.z ? t()[ev.z] : '';
      const msg = ev.kind === 'none' ? t().noAlerts : ev.kind === 'ok' ? t().evOk(z) : ev.kind === 'heat' ? t().evHeat : ev.kind === 'crit' ? t().evCrit(z, fmt(ev.v), ev.l) : ev.kind === 'temp' ? t().evTemp(z, fmt(ev.v), ev.l) : t().evHum(z, fmt(ev.v, 0), ev.l);
      txt.append(document.createTextNode(msg)); row.append(txt); alertsBox.append(row);
    });
  }
  function render(){
    const n = S.times.length - 1;
    SER.forEach(([k]) => {
      const x = tiles[k], z = zones.find(q => q.key === k);
      x.name.textContent = t()[k]; x.legend.textContent = t()[k];
      x.bT.textContent = fmt(S[k].T[n]) + ' °C'; x.bH.textContent = fmt(S[k].H[n], 0) + ' %';
      x.tile.dataset.level = z ? z.level : 'ok';
      x.foot.textContent = z ? `${t().limit} ${z.Thi} °C · ${z.Hhi}\u00a0%` + (z.level === 'warn' ? ' — ' + t().lvWarn : z.level === 'crit' ? ' — ' + t().lvCrit : '') : t().sensors;
    });
    zones.forEach(z => {
      const g = gateEls[z.key]; let open = 0;
      g.arr.forEach((o, i) => { const p = clamp(z.u - 2 * i, 0, 2) * 50; if (p > 0) open++; o.fill.style.height = p + '%'; o.gt.setAttribute('aria-label', t().gate(i + 1, p)); });
      g.nm.textContent = `${t()[z.key]} · ${z.gates} ${t().gatesWord}`; g.cnt.textContent = t().openOf(open, z.gates);
    });
    $('#nxClock').textContent = t().clock(hhmm(simMin));
    $('#nxPause').textContent = paused ? t().resume : t().pause; $('#nxTable').textContent = tableMode ? t().charts : t().table;
    $('#nxHeat').disabled = heat > 1 || heatTicks > 0;
    if (tableMode) drawTable(); else { drawChart('T'); drawChart('H'); }
    drawAlerts();
  }
  function tick(){ if (paused || !onScreen || document.hidden) return; step(true); render(); }
  build(); render(); timer = setInterval(tick, 1000);
  if ('IntersectionObserver' in window) new IntersectionObserver(es => { onScreen = es[0].isIntersecting; }).observe($('#demo-nuxia'));
  $('#nxPause').addEventListener('click', e => { paused = !paused; e.currentTarget.setAttribute('aria-pressed', String(paused)); render(); });
  $('#nxTable').addEventListener('click', e => { tableMode = !tableMode; e.currentTarget.setAttribute('aria-pressed', String(tableMode)); $('#nxCharts').hidden = tableMode; $('#nxTableWrap').hidden = !tableMode; render(); });
  $('#nxHeat').addEventListener('click', () => { heatTicks = 8; pushEvent('heat'); render(); });
  ['T', 'H'].forEach(m => {
    const svg = $('#svg' + m), n = () => S.times.length;
    const at = e => { const b = svg.getBoundingClientRect(), px = (e.clientX - b.left) / b.width * widthOf(svg); return clamp(Math.round((px - M.l) / (M.W - M.l - M.r) * (n() - 1)), 0, n() - 1); };
    svg.addEventListener('pointermove', e => { hover = at(e); drawChart('T'); drawChart('H'); });
    svg.addEventListener('pointerdown', e => { hover = at(e); drawChart('T'); drawChart('H'); });
    svg.addEventListener('pointerleave', () => { if (document.activeElement !== svg) { hover = null; drawChart('T'); drawChart('H'); } });
    svg.addEventListener('focus', () => { if (hover == null) hover = n() - 1; drawChart('T'); drawChart('H'); });
    svg.addEventListener('blur', () => { hover = null; drawChart('T'); drawChart('H'); });
    svg.addEventListener('keydown', e => {
      const cur = hover == null ? n() - 1 : hover; let nx = null;
      if (e.key === 'ArrowLeft') nx = cur - 1; else if (e.key === 'ArrowRight') nx = cur + 1; else if (e.key === 'Home') nx = 0; else if (e.key === 'End') nx = n() - 1; else if (e.key === 'Escape') { hover = null; drawChart('T'); drawChart('H'); return; }
      if (nx != null) { e.preventDefault(); hover = clamp(nx, 0, n() - 1); drawChart('T'); drawChart('H'); }
    });
  });
  langHooks.push(() => { alertsSig = ''; render(); });
  window.addEventListener('resize', () => { if (!tableMode) { drawChart('T'); drawChart('H'); } });
  return { render };
})();

/* =====================================================================
   5. Inspecção visual — análise real de píxeis, feita no browser
   ===================================================================== */
(() => {
  const SZ = 360, canvas = $('#partCanvas'), ctx = canvas.getContext('2d', { willReadFrequently: true });
  let seed = 11, image = null, result = null;
  function generate(){
    const r = mulberry32(seed++); ctx.globalAlpha = 1; ctx.fillStyle = '#121a2b'; ctx.fillRect(0, 0, SZ, SZ);
    ctx.fillStyle = 'rgba(255,255,255,.035)'; for (let x = 0; x < SZ; x += 24) ctx.fillRect(x, 0, 1, SZ);
    const cx = SZ / 2 + (r() - .5) * 10, cy = SZ / 2 + (r() - .5) * 10, R = SZ * .41;
    ctx.save(); ctx.beginPath(); ctx.arc(cx, cy, R, 0, Math.PI * 2); ctx.clip();
    const g = ctx.createRadialGradient(cx - R * .35, cy - R * .4, R * .1, cx, cy, R * 1.05); g.addColorStop(0, '#dfe3e8'); g.addColorStop(1, '#a9b0ba');
    ctx.fillStyle = g; ctx.fillRect(0, 0, SZ, SZ);
    for (let y = Math.floor(cy - R); y < cy + R; y++){ ctx.globalAlpha = .035 * r(); ctx.fillStyle = r() < .5 ? '#fff' : '#000'; ctx.fillRect(cx - R, y, 2 * R, 1); }
    ctx.globalAlpha = 1;
    const count = r() < .28 ? 0 : 1 + Math.floor(r() * 3);
    for (let i = 0; i < count; i++){
      const ang = r() * Math.PI * 2, rad = Math.sqrt(r()) * R * .7, x = cx + Math.cos(ang) * rad, y = cy + Math.sin(ang) * rad;
      if (r() < .55){
        const a = r() * Math.PI, len = 34 + r() * 52, dx = Math.cos(a) * len / 2, dy = Math.sin(a) * len / 2;
        ctx.strokeStyle = 'rgba(38,42,50,.9)'; ctx.lineWidth = 1.8 + r(); ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(x - dx, y - dy); ctx.quadraticCurveTo(x + (r() - .5) * 14, y + (r() - .5) * 14, x + dx, y + dy); ctx.stroke();
      } else {
        const rr = 6 + r() * 7, dg = ctx.createRadialGradient(x, y, 0, x, y, rr * 1.5);
        dg.addColorStop(0, 'rgba(30,34,40,.85)'); dg.addColorStop(.6, 'rgba(30,34,40,.5)'); dg.addColorStop(1, 'rgba(30,34,40,0)');
        ctx.fillStyle = dg; ctx.beginPath(); ctx.ellipse(x, y, rr * (1 + r() * .5), rr, r() * Math.PI, 0, Math.PI * 2); ctx.fill();
      }
    }
    ctx.restore();
    ctx.strokeStyle = 'rgba(255,255,255,.35)'; ctx.lineWidth = 1; ctx.beginPath(); ctx.arc(cx, cy, R - .5, 0, Math.PI * 2); ctx.stroke();
    image = ctx.getImageData(0, 0, SZ, SZ); result = null;
  }
  function inspect(){
    const t0 = performance.now(), d = image.data, NP = SZ * SZ, gray = new Float32Array(NP);
    let area = 0, sx = 0, sy = 0;
    for (let i = 0, p = 0; i < NP; i++, p += 4){ const v = .299 * d[p] + .587 * d[p + 1] + .114 * d[p + 2]; gray[i] = v; if (v > 95){ area++; sx += i % SZ; sy += (i / SZ) | 0; } }
    /* contorno da peça: centro de massa e raio equivalente, com 6 px de margem */
    const mx = sx / area, my = sy / area, rr = Math.sqrt(area / Math.PI) - 6, r2 = rr * rr, reg = new Uint8Array(NP); let npx = 0;
    for (let y = 0; y < SZ; y++) for (let x = 0; x < SZ; x++){ const dx = x - mx, dy = y - my; if (dx * dx + dy * dy < r2){ reg[y * SZ + x] = 1; npx++; } }
    /* fundo local: média em janela, por imagem integral, só com píxeis da peça */
    const W1 = SZ + 1, ig = new Float64Array(W1 * W1), im = new Float64Array(W1 * W1);
    for (let y = 0; y < SZ; y++){ let a = 0, b = 0; for (let x = 0; x < SZ; x++){ const i = y * SZ + x; if (reg[i]){ a += gray[i]; b++; } ig[(y + 1) * W1 + x + 1] = ig[y * W1 + x + 1] + a; im[(y + 1) * W1 + x + 1] = im[y * W1 + x + 1] + b; } }
    const win = 16, thr = 26, bin = new Uint8Array(NP);
    for (let y = 0; y < SZ; y++) for (let x = 0; x < SZ; x++){
      const i = y * SZ + x; if (!reg[i]) continue;
      const x0 = Math.max(0, x - win), x1 = Math.min(SZ - 1, x + win), y0 = Math.max(0, y - win), y1 = Math.min(SZ - 1, y + win);
      const A = (y1 + 1) * W1 + x1 + 1, B = y0 * W1 + x1 + 1, C = (y1 + 1) * W1 + x0, D = y0 * W1 + x0;
      const cnt = im[A] - im[B] - im[C] + im[D], sum = ig[A] - ig[B] - ig[C] + ig[D];
      if (cnt > 0 && Math.abs(sum / cnt - gray[i]) > thr) bin[i] = 1;
    }
    /* componentes ligados (vizinhança de 8) */
    const stack = new Int32Array(NP), found = [];
    for (let s = 0; s < NP; s++){
      if (!bin[s]) continue; let top = 0; stack[top++] = s; bin[s] = 0;
      let a = 0, minx = SZ, maxx = 0, miny = SZ, maxy = 0, mxs = 0, mys = 0, xx = 0, yy = 0, xy = 0;
      while (top){
        const i = stack[--top], x = i % SZ, y = (i / SZ) | 0; a++; mxs += x; mys += y; xx += x * x; yy += y * y; xy += x * y;
        if (x < minx) minx = x; if (x > maxx) maxx = x; if (y < miny) miny = y; if (y > maxy) maxy = y;
        for (let dy = -1; dy <= 1; dy++) for (let dx = -1; dx <= 1; dx++){ if (!dx && !dy) continue; const nx = x + dx, ny = y + dy; if (nx < 0 || ny < 0 || nx >= SZ || ny >= SZ) continue; const j = ny * SZ + nx; if (bin[j]){ bin[j] = 0; stack[top++] = j; } }
      }
      if (a < 10) continue;
      const cxm = mxs / a, cym = mys / a, vxx = xx / a - cxm * cxm, vyy = yy / a - cym * cym, vxy = xy / a - cxm * cym;
      const tr = vxx + vyy, det = vxx * vyy - vxy * vxy, disc = Math.sqrt(Math.max(0, tr * tr / 4 - det)), l1 = tr / 2 + disc, l2 = Math.max(.05, tr / 2 - disc);
      found.push({ type: Math.sqrt(l1 / l2) > 3.2 ? 'scratch' : 'dent', area: a, x: minx, y: miny, w: maxx - minx + 1, h: maxy - miny + 1 });
    }
    found.sort((p, q) => q.area - p.area);
    result = { found, ms: performance.now() - t0, npx };
  }
  function paint(){
    if (!image) return; ctx.putImageData(image, 0, 0);
    const v = $('#vVerdict'), list = $('#vDefects'), met = $('#vMetrics'); list.textContent = ''; met.textContent = '';
    const OK = '<svg viewBox="0 0 20 20" aria-hidden="true"><circle cx="10" cy="10" r="8" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M6 10.4l2.6 2.6L14 7.6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    const KO = '<svg viewBox="0 0 20 20" aria-hidden="true"><circle cx="10" cy="10" r="8" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M7 7l6 6M13 7l-6 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>';
    if (!result){ v.dataset.v = 'idle'; v.textContent = t().vIdle; return; }
    const bad = result.found.length > 0; v.dataset.v = bad ? 'ko' : 'ok'; v.innerHTML = bad ? KO : OK; v.append(document.createTextNode(bad ? t().vKo : t().vOk));
    ctx.save(); ctx.font = '700 11px Calibri, Carlito, sans-serif'; ctx.textBaseline = 'middle';
    result.found.forEach((f, i) => {
      const label = `${t()[f.type]} ${i + 1}`, x = Math.max(2, f.x - 5), y = Math.max(2, f.y - 5), w = f.w + 10, h = f.h + 10;
      ctx.strokeStyle = '#ff5a5a'; ctx.lineWidth = 2; ctx.strokeRect(x, y, w, h);
      const tw = ctx.measureText(label).width + 10, ty = y > 18 ? y - 16 : y + h; ctx.fillStyle = '#ff5a5a'; ctx.fillRect(Math.min(x, SZ - tw - 2), ty, tw, 15); ctx.fillStyle = '#1a0606'; ctx.fillText(label, Math.min(x, SZ - tw - 2) + 5, ty + 8);
      const li = el('li'); li.append(el('span', '', label), el('span', '', `${f.w} × ${f.h} px · ${f.area} px²`)); list.append(li);
    });
    ctx.restore();
    if (!bad) list.append(el('li', '', t().none));
    [[fmt(result.ms) + ' ms', t().mTime], [Number(result.npx).toLocaleString(t().locale), t().mPx], [t().bytes, t().mSent]].forEach(([b, s]) => { const dv = el('div'); dv.append(el('b', '', b), el('span', '', s)); met.append(dv); });
  }
  $('#vNew').addEventListener('click', () => { generate(); paint(); });
  $('#vRun').addEventListener('click', () => { if (!image) generate(); inspect(); paint(); });
  generate(); inspect(); paint(); langHooks.push(paint);
})();

/* =====================================================================
   6. Assistente de contacto — guião fixo: recolhe dados de contacto e nada mais.
      Não usa modelo de IA. O destino do pedido vem de assets/config.js (window.PROMENEUM_CONFIG):
        leadEndpoint preenchido -> o pedido é enviado para esse endereço (webhook);
        leadEndpoint vazio      -> o visitante envia o pedido a partir do seu próprio e-mail.
      Sem config.js (protótipo) nada é enviado nem guardado.
   ===================================================================== */
const Lead = (() => {
  const CFG = window.PROMENEUM_CONFIG || null;
  const MAILBOX = (CFG && CFG.contactEmail) || 'inquiries@promeneum.com';
  const log = $('#leadLog'), quick = $('#leadQuick'), form = $('#leadForm'), input = $('#leadInput');
  const FIELDS = ['name', 'company', 'email', 'phone', 'area', 'msg'], ORDER = FIELDS.concat('confirm');
  const ASK = { name:'askName', company:'askCompany', email:'askEmail', phone:'askPhone', area:'askArea', msg:'askMsg', fix:'askFix' };
  const LIMIT = { name:80, company:100, email:120, phone:25, area:60, msg:600, confirm:40, fix:40 };
  const AUTO = { name:'name', company:'organization', email:'email', phone:'tel' }, MODE = { email:'email', phone:'tel' };
  const AREA_RE = { legal:/jurisvis|\blegal|\bjurid|\blaw\b/, auto:/\bvisao|\bvision|automa|intelig|\b(ia|ai)\b/, training:/\bforma|\btrain/, rep:/\brepresent/, other:/\boutr|other/ };
  const CLOSED = ['done', 'sending', 'failed', 'mail'];     /* passos em que já não se escreve */
  const entries = [];                     /* a conversa guarda chaves, não frases: assim muda de língua sem perder nada */
  let data = {}, pending = null, step = '', fixing = false, started = false, copiedOnce = false;
  const L = () => t().ld;
  const norm = v => v.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

  function node(en){
    if (en.who === 'user') return el('div', 'msg user', en.k ? L()[en.k] : en.area ? L().areas[en.area] : en.field ? L().f[en.field] : en.text);
    if (en.who === 'note') return el('div', 'msg note', L()[en.k]);
    if (en.who === 'summary'){
      const b = el('div', 'msg bot', L().summary), dl = el('dl', 'summary');
      FIELDS.forEach(f => { const v = en.data[f]; dl.append(el('dt', '', L().f[f]), el('dd', '', f === 'area' ? L().areas[v] : v || L().none)); });
      b.append(dl); return b;
    }
    const m = L()[en.k]; return el('div', 'msg bot', typeof m === 'function' ? m(...en.a) : m);
  }
  function add(en){ entries.push(en); log.append(node(en)); log.scrollTop = log.scrollHeight; }
  const bot = (k, ...a) => add({ who:'bot', k, a });
  const ask = () => bot(ASK[step], ...(step === 'company' ? [data.name] : []));

  /* texto do pedido, para a mensagem de e-mail e para o botão de copiar */
  const lines = p => FIELDS.map(f => `${L().f[f]}: ${f === 'area' ? L().areas[p[f]] : p[f] || L().none}`);
  const mailto = p => `mailto:${MAILBOX}?subject=${encodeURIComponent(L().mailSubject(L().areas[p.area], p.name))}&body=${encodeURIComponent([L().mailIntro, ''].concat(lines(p)).join('\r\n'))}`;

  function chips(){
    if (step === 'company' || step === 'phone' || step === 'msg') return [['skip', L().skip]];
    if (step === 'area') return Object.keys(L().areas).map(k => ['area:' + k, L().areas[k]]);
    if (step === 'confirm') return [['confirm', L().confirm], ['fix', L().fix]];
    if (step === 'fix') return FIELDS.map(f => ['field:' + f, L().f[f]]);
    if (step === 'failed') return [['retry', L().retry], ['bymail', L().byMail]];
    if (step === 'mail') return [['mailto', L().openMail], ['copy', L().copy], ['restart', L().restart]];
    if (step === 'done') return [['restart', L().restart]];
    return [];
  }
  function controls(){
    quick.textContent = '';
    chips().forEach(([v, label]) => {
      if (v === 'mailto'){ const a = el('a', 'chip chip-primary', label); a.href = mailto(pending); quick.append(a); return; }
      const b = el('button', 'chip', label); b.type = 'button'; b.addEventListener('click', () => choose(v)); quick.append(b);
    });
    form.hidden = CLOSED.includes(step);
    input.placeholder = L().ph[step] || ''; input.maxLength = LIMIT[step] || 80;
    input.setAttribute('autocomplete', AUTO[step] || 'off'); input.setAttribute('inputmode', MODE[step] || 'text');
  }
  function go(next){ step = next; if (next === 'confirm') add({ who:'summary', data:{ ...data } }); else ask(); controls(); }
  function advance(){ if (fixing) { fixing = false; go('confirm'); } else go(ORDER[ORDER.indexOf(step) + 1]); }
  function begin(){ data = {}; pending = null; fixing = false; bot('hello'); go('name'); }
  function restart(){ entries.length = 0; log.textContent = ''; begin(); }

  /* fecho: protótipo, webhook ou e-mail do próprio visitante */
  function finish(){
    if (!CFG){ bot('done'); add({ who:'note', k:'proto' }); data = {}; step = 'done'; controls(); return; }
    pending = { ...data }; data = {};
    if (CFG.leadEndpoint) send(); else handOff();
  }
  function handOff(){ bot('mailHint', MAILBOX); step = 'mail'; controls(); }
  async function send(){
    step = 'sending'; controls(); bot('sending');
    const p = pending, body = new URLSearchParams({ nome:p.name, empresa:p.company || '', email:p.email, telefone:p.phone || '', assunto:T.pt.ld.areas[p.area], mensagem:p.msg || '', lingua:lang, origem:location.origin + location.pathname });
    const ctl = new AbortController(), timer = setTimeout(() => ctl.abort(), 15000);
    try {
      /* formulário simples (sem cabeçalhos próprios): o browser não faz pedido prévio de CORS */
      const res = await fetch(CFG.leadEndpoint, { method:'POST', body, signal:ctl.signal });
      if (!res.ok) throw new Error('HTTP ' + res.status);
      pending = null; bot('sent'); step = 'done';
    } catch (e) { bot('sendFail'); step = 'failed'; }
    clearTimeout(timer); controls();
    const target = $('button, a', quick); if (target) target.focus({ preventScroll: true });
  }
  async function copy(){
    const text = lines(pending).join('\n'); let ok = false;
    try { await navigator.clipboard.writeText(text); ok = true; } catch (e) {
      const ta = el('textarea'); ta.value = text; ta.setAttribute('readonly', ''); ta.style.position = 'fixed'; ta.style.opacity = '0'; document.body.append(ta); ta.select();
      try { ok = document.execCommand('copy'); } catch (e2) { ok = false; } ta.remove();
    }
    if (ok && !copiedOnce){ copiedOnce = true; add({ who:'note', k:'copied' }); }
  }

  /* resposta escrita: valida o dado pedido; a uma pergunta responde que só recolhe contactos */
  function answer(raw){
    const v = raw.replace(/\s+/g, ' ').trim(); if (!v || CLOSED.includes(step)) return;
    add({ who:'user', text:v });
    const question = v.includes('?') && step !== 'msg';
    const retry = bad => { if (!question) return bot(bad); bot('offTopic'); if (ASK[step]) ask(); else bot('badChoice'); };
    const n = norm(v);
    if (step === 'name'){ if (question || v.length < 2 || !/\p{L}/u.test(v) || /[@\d]/.test(v)) return retry('badName'); data.name = v; return advance(); }
    if (step === 'company'){ if (question || !/[\p{L}\d]/u.test(v)) return retry('badCompany'); data.company = v; return advance(); }
    if (step === 'email'){ if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)) return retry('badEmail'); data.email = v; return advance(); }
    if (step === 'phone'){ const d = v.replace(/\D/g, ''); if (!/^\+?[\d\s().-]+$/.test(v) || d.length < 6 || d.length > 15) return retry('badPhone'); data.phone = v; return advance(); }
    if (step === 'area'){ const k = question ? null : Object.keys(AREA_RE).find(a => AREA_RE[a].test(n)); if (!k) return retry('badChoice'); data.area = k; return advance(); }
    if (step === 'msg'){ data.msg = v.slice(0, LIMIT.msg); return advance(); }
    if (step === 'confirm'){
      if (!question && /^(sim|s|ok|yes|y)\b|^(confirm|enviar|send)/.test(n)) return finish();
      if (!question && /^(nao|n|no)\b|^(corrig|alter|emend|amend|fix|change)/.test(n)) return go('fix');
      return retry('badChoice');
    }
    if (step === 'fix'){ const k = question ? null : FIELDS.find(f => n.includes(norm(T.pt.ld.f[f])) || n.includes(norm(T.en.ld.f[f]))); if (!k) return retry('badChoice'); fixing = true; return go(k); }
  }
  /* resposta por botão */
  function choose(v){
    if (v === 'copy') return copy();
    if (v === 'restart') restart();
    else if (v === 'retry'){ add({ who:'user', k:'retry' }); return send(); }
    else if (v === 'bymail'){ add({ who:'user', k:'byMail' }); handOff(); }
    else if (v === 'skip'){ add({ who:'user', k:'skip' }); data[step] = ''; advance(); }
    else if (v.startsWith('area:')){ const k = v.slice(5); add({ who:'user', area:k }); data.area = k; advance(); }
    else if (v === 'confirm'){ add({ who:'user', k:'confirm' }); finish(); }
    else if (v === 'fix'){ add({ who:'user', k:'fix' }); go('fix'); }
    else if (v.startsWith('field:')){ const f = v.slice(6); add({ who:'user', field:f }); fixing = true; go(f); }
    const target = form.hidden ? $('button, a', quick) : input; if (target) target.focus({ preventScroll: true });
  }
  form.addEventListener('submit', e => { e.preventDefault(); const v = input.value; input.value = ''; answer(v); if (!form.hidden) input.focus({ preventScroll: true }); });
  langHooks.push(() => {
    if (!started) return;
    log.setAttribute('aria-live', 'off'); log.textContent = ''; entries.forEach(en => log.append(node(en))); log.scrollTop = log.scrollHeight; controls();
    setTimeout(() => log.setAttribute('aria-live', 'polite'), 0);
  });
  return { start(){ if (!started) { started = true; begin(); } } };
})();

/* ---- arranque ---- */
let start = 'pt';
try { const saved = localStorage.getItem('promeneum.lang'); if (saved === 'pt' || saved === 'en') start = saved; else if (!/^pt/i.test(navigator.language || 'pt')) start = 'en'; } catch (e) { if (!/^pt/i.test(navigator.language || 'pt')) start = 'en'; }
setLang(start, false);
routeHash();
})();
