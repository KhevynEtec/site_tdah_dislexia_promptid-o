/* ====== Tabs (views) ====== */
const viewInicio = document.getElementById('view-inicio');
const viewChat = document.getElementById('view-chatbot');
function showView(name){
  if(name === 'chatbot'){
    viewInicio.classList.add('hidden');
    viewChat.classList.remove('hidden');
    setTimeout(()=>document.getElementById('msg')?.focus(), 50);
  } else {
    viewChat.classList.add('hidden');
    viewInicio.classList.remove('hidden');
  }
  window.scrollTo({top:0, behavior:'smooth'});
}
document.querySelectorAll('a.tab').forEach(a=>{
  a.addEventListener('click', (e)=>{
    const v = a.dataset.view;
    if(v === 'chatbot'){ e.preventDefault(); showView('chatbot'); }
    else { showView('inicio'); }
  });
});
document.getElementById('ctaChat').addEventListener('click', ()=> showView('chatbot'));

/* ====== Modo escuro ====== */
const darkBtn = document.getElementById('darkBtn');
darkBtn.addEventListener('click', ()=>{
  document.body.classList.toggle('dark');
  darkBtn.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});

/* ====== Alto contraste ====== */
document.getElementById('contrastBtn').addEventListener('click', ()=>{
  document.body.classList.toggle('high-contrast');
});

/* ====== Fonte dislexia ====== */
document.getElementById('dysBtn').addEventListener('click', ()=>{
  document.body.classList.toggle('dyslexia-font');
});

/* ====== Carrossel ====== */
const track = document.getElementById('track');
const slides = track.children;
const dotsWrap = document.getElementById('dots');
let idx = 0;
for(let i=0;i<slides.length;i++){
  const d = document.createElement('button');
  d.className = 'dot' + (i===0?' active':'');
  d.setAttribute('aria-label', 'Ir para slide ' + (i+1));
  d.addEventListener('click', ()=> go(i));
  dotsWrap.appendChild(d);
}
function go(i){
  idx = (i + slides.length) % slides.length;
  track.style.transform = `translateX(-${idx*100}%)`;
  [...dotsWrap.children].forEach((d,k)=> d.classList.toggle('active', k===idx));
}
document.getElementById('prev').addEventListener('click', ()=> go(idx-1));
document.getElementById('next').addEventListener('click', ()=> go(idx+1));
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if(!reduced){ setInterval(()=> go(idx+1), 7000); }

/* ====== Tradução PT/EN ====== */
const i18n = {
  'pt-BR': {
    skip:'Pular para o conteúdo', brand:'Aprender com Acolhimento',
    nav_home:'Início', nav_about:'Sobre', nav_tips:'Dicas', nav_resources:'Recursos', nav_chat:'Chatbot',
    contrast:'Contraste',
    hero_tag:'Apoio para Dislexia e TDAH no Ensino Fundamental',
    hero_title_1:'Aprender pode ser', hero_title_2:'leve, divertido e possível',
    hero_sub:'Um espaço acolhedor para alunos, pais e professores. Entenda a Dislexia e o TDAH com linguagem simples, dicas práticas e um chatbot que ajuda nos estudos.',
    cta_explore:'🚀 Começar a explorar', cta_chat:'💬 Converse com o ajudante de estudos!',
    pill_about:'Entenda', about_title:'O que é Dislexia e TDAH?',
    about_lead:'Explicações simples e acolhedoras para crianças e responsáveis.',
    dys_title:'Dislexia', dys_desc:'É uma forma diferente do cérebro processar a leitura e a escrita. Não tem a ver com inteligência — crianças com dislexia são muito capazes, só precisam aprender de um jeito que funcione melhor para elas.',
    tdah_title:'TDAH', tdah_desc:'Significa Transtorno do Déficit de Atenção e Hiperatividade. A criança pode ter dificuldade em manter o foco, ficar parada por muito tempo ou esperar a vez. Com apoio, ela aprende muito bem!',
    ok_title:'Está tudo bem ser diferente', ok_desc:'Cada cérebro aprende de um jeito. O importante é encontrar caminhos que respeitem o ritmo e os talentos de cada um.',
    pill_signs:'Observar', signs_title:'Sinais e sintomas comuns',
    signs_dys:'Sinais de Dislexia',
    dys_s1:'Dificuldade para ler em voz alta', dys_s2:'Troca, inversão ou omissão de letras',
    dys_s3:'Cansaço rápido ao ler', dys_s4:'Dificuldade em soletrar e copiar do quadro',
    signs_tdah:'Sinais de TDAH',
    tdah_s1:'Distrai-se com facilidade', tdah_s2:'Dificuldade em terminar tarefas',
    tdah_s3:'Inquietação, mexer-se muito', tdah_s4:'Esquecimentos frequentes',
    pill_tips:'Praticar', tips_title:'Dicas de estudo e organização',
    tips_lead:'Deslize o carrossel para ver dicas práticas.',
    tip1_t:'📅 Rotina visual', tip1_d:'Use um quadro com horários ilustrados. Ver a rotina ajuda muito alunos com TDAH e dislexia.',
    tip2_t:'⏱️ Estude em blocos curtos', tip2_d:'15 a 20 minutos focados, depois uma pausa de 5 minutos. Isso respeita o ritmo do cérebro.',
    tip3_t:'🎧 Leitura com áudio', tip3_d:'Audiolivros e leitores de tela ajudam quem tem dislexia a entender melhor o conteúdo.',
    tip4_t:'🧠 Mapas mentais', tip4_d:'Resumir com cores, ícones e desenhos torna o estudo mais visual e divertido.',
    pill_help:'Apoiar', help_title:'Como pais e professores podem ajudar',
    help1_t:'Acolher antes de corrigir', help1_d:'Elogie o esforço, não só o resultado. Crie um ambiente seguro para errar e tentar de novo.',
    help2_t:'Dividir tarefas em passos', help2_d:'Instruções curtas e visuais ajudam o aluno a saber por onde começar e o que vem depois.',
    help3_t:'Usar múltiplos sentidos', help3_d:'Ouvir, ver, tocar e movimentar — quanto mais sentidos envolvidos, melhor a aprendizagem.',
    pill_res:'Explorar', res_title:'Recursos e atividades recomendadas',
    res1_t:'Jogos de leitura', res1_d:'Aplicativos com sílabas, rimas e histórias interativas tornam a leitura prazerosa.',
    res2_t:'Caderno colorido', res2_d:'Use cores diferentes por matéria. Ajuda na organização visual e na memória.',
    res3_t:'Pausas ativas', res3_d:'Alongamentos, respiração e pequenas brincadeiras renovam o foco entre as tarefas.',
    pill_support:'Onde buscar apoio', support_title:'Você não está sozinho 💙',
    sup1_t:'Escola', sup1_d:'Converse com a coordenação pedagógica. A escola pode oferecer adaptações e acompanhamento.',
    sup2_t:'Profissionais', sup2_d:'Psicopedagogos, fonoaudiólogos, neuropediatras e psicólogos ajudam no diagnóstico e no plano de apoio.',
    sup3_t:'Associações',
    chat_title:'Ajudante de Estudos', chat_lead:'Tire dúvidas, peça explicações em palavras simples ou peça dicas para estudar melhor.',
    chat_bot_name:'Amiguinho dos Estudos', chat_bot_sub:'Pronto para ajudar com paciência e carinho.',
    chat_send:'Enviar',
    footer:'Feito com carinho para apoiar a aprendizagem de todas as crianças.',
    chat_welcome:'Oi! 👋 Eu sou o Amiguinho dos Estudos. Posso explicar matérias com palavras simples, dar dicas de leitura e ajudar a organizar suas tarefas. O que você quer aprender hoje?',
    chat_typing:'Digitando...', chat_error:'⚠️ Erro ao conectar com o servidor.', chat_nores:'Desculpe, não consegui responder.',
    chat_placeholder:'Escreva sua dúvida...'
  },
  'en': {
    skip:'Skip to content', brand:'Learning with Care',
    nav_home:'Home', nav_about:'About', nav_tips:'Tips', nav_resources:'Resources', nav_chat:'Chatbot',
    contrast:'Contrast',
    hero_tag:'Support for Dyslexia and ADHD in Elementary School',
    hero_title_1:'Learning can be', hero_title_2:'gentle, fun and possible',
    hero_sub:'A welcoming space for students, parents and teachers. Understand Dyslexia and ADHD with simple language, practical tips and a study helper chatbot.',
    cta_explore:'🚀 Start exploring', cta_chat:'💬 Talk to the study buddy!',
    pill_about:'Understand', about_title:'What are Dyslexia and ADHD?',
    about_lead:'Simple, caring explanations for kids and caregivers.',
    dys_title:'Dyslexia', dys_desc:'It is a different way the brain processes reading and writing. It has nothing to do with intelligence — kids with dyslexia are very capable, they just need to learn in a way that works better for them.',
    tdah_title:'ADHD', tdah_desc:'It stands for Attention Deficit Hyperactivity Disorder. The child may have trouble focusing, sitting still, or waiting their turn. With support, they learn very well!',
    ok_title:'It is okay to be different', ok_desc:'Every brain learns in its own way. What matters is finding paths that respect each one’s rhythm and talents.',
    pill_signs:'Notice', signs_title:'Common signs and symptoms',
    signs_dys:'Signs of Dyslexia',
    dys_s1:'Difficulty reading aloud', dys_s2:'Swapping, inverting or skipping letters',
    dys_s3:'Quickly tired when reading', dys_s4:'Trouble spelling and copying from the board',
    signs_tdah:'Signs of ADHD',
    tdah_s1:'Easily distracted', tdah_s2:'Trouble finishing tasks',
    tdah_s3:'Restlessness, fidgeting a lot', tdah_s4:'Frequent forgetfulness',
    pill_tips:'Practice', tips_title:'Study and organization tips',
    tips_lead:'Slide through the carousel for practical tips.',
    tip1_t:'📅 Visual routine', tip1_d:'Use a board with illustrated schedules. Seeing the routine helps a lot.',
    tip2_t:'⏱️ Study in short blocks', tip2_d:'15–20 focused minutes, then a 5-minute break. This respects the brain’s rhythm.',
    tip3_t:'🎧 Reading with audio', tip3_d:'Audiobooks and screen readers help dyslexic students understand content better.',
    tip4_t:'🧠 Mind maps', tip4_d:'Summarizing with colors, icons and drawings makes study more visual and fun.',
    pill_help:'Support', help_title:'How parents and teachers can help',
    help1_t:'Welcome before correcting', help1_d:'Praise the effort, not only the result. Create a safe space to make mistakes and try again.',
    help2_t:'Break tasks into steps', help2_d:'Short, visual instructions help the student know where to start and what comes next.',
    help3_t:'Use multiple senses', help3_d:'Hear, see, touch and move — the more senses involved, the better the learning.',
    pill_res:'Explore', res_title:'Recommended resources and activities',
    res1_t:'Reading games', res1_d:'Apps with syllables, rhymes and interactive stories make reading enjoyable.',
    res2_t:'Colorful notebook', res2_d:'Use a color per subject. It helps with visual organization and memory.',
    res3_t:'Active breaks', res3_d:'Stretches, breathing and small games renew focus between tasks.',
    pill_support:'Where to find support', support_title:'You are not alone 💙',
    sup1_t:'School', sup1_d:'Talk to the pedagogical team. The school can offer adaptations and follow-up.',
    sup2_t:'Professionals', sup2_d:'Educational psychologists, speech therapists, neuropediatricians and psychologists help with diagnosis and a support plan.',
    sup3_t:'Associations',
    chat_title:'Study Buddy', chat_lead:'Ask questions, request simple explanations or tips to study better.',
    chat_bot_name:'Study Buddy', chat_bot_sub:'Ready to help with patience and care.',
    chat_send:'Send',
    footer:'Made with care to support every child’s learning.',
    chat_welcome:'Hi! 👋 I am the Study Buddy. I can explain subjects in simple words, give reading tips and help you organize tasks. What do you want to learn today?',
    chat_typing:'Typing...', chat_error:'⚠️ Error connecting to the server.', chat_nores:'Sorry, I could not answer.',
    chat_placeholder:'Type your question...'
  }
};
let lang = 'pt-BR';
function applyLang(){
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const k = el.dataset.i18n;
    if(i18n[lang][k]) el.textContent = i18n[lang][k];
  });
  document.getElementById('msg').placeholder = i18n[lang].chat_placeholder;
  document.getElementById('langLabel').textContent = lang === 'pt-BR' ? 'EN' : 'PT';
}
document.getElementById('langBtn').addEventListener('click', ()=>{
  lang = (lang === 'pt-BR') ? 'en' : 'pt-BR';
  applyLang();
});
applyLang();

/* ====== Chatbot conectado ao n8n ====== */
const N8N_WEBHOOK = "https://dariik.app.n8n.cloud/webhook/a79da60c-de8d-45de-bfe5-86a2d21e072b";

function adicionarMensagem(texto, tipo, id = null) {
  const chat = document.getElementById("chat");
  const div = document.createElement("div");
  div.classList.add("msg", tipo);
  if (id) div.id = id;
  div.innerText = texto;
  chat.appendChild(div);
  chat.scrollTop = chat.scrollHeight;
}

async function enviar() {
  const input = document.getElementById("msg");
  const mensagem = input.value.trim();
  if (!mensagem) return;
  adicionarMensagem(mensagem, "user");
  input.value = "";
  adicionarMensagem(i18n[lang].chat_typing, "bot", "typing");
  try {
    const resposta = await fetch(N8N_WEBHOOK, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: mensagem })
    });
    const data = await resposta.json();
    document.getElementById("typing")?.remove();
    adicionarMensagem(data.message || data.reply || i18n[lang].chat_nores, "bot");
  } catch (error) {
    document.getElementById("typing")?.remove();
    adicionarMensagem(i18n[lang].chat_error, "bot");
    console.error(error);
  }
}
window.enviar = enviar;

document.getElementById("msg").addEventListener("keydown", (e) => {
  if (e.key === "Enter") { e.preventDefault(); enviar(); }
  if (e.key === "Escape") { showView('inicio'); }
});

// Pega ou cria um sessionId único pro navegador
let sessionId = localStorage.getItem('chat_session_id');
if (!sessionId) {
  sessionId = 'user_' + Date.now() + '_' + Math.random().toString(36).slice(2);
  localStorage.setItem('chat_session_id', sessionId);
}

/* Mensagem inicial do bot */
adicionarMensagem(i18n[lang].chat_welcome, "bot");
