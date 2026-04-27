import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

// --- Components ---

const WhatsAppIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const WarningIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#b8975a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
);

const FadeIn = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.1 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

const FAQItem = ({ question, answer }: { key?: React.Key; question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`}>
      <button className="faq-btn" onClick={() => setIsOpen(!isOpen)}>
        <span>{question}</span>
        <span className="faq-icon">⌄</span>
      </button>
      <div className="faq-answer" style={{ maxHeight: isOpen ? '500px' : '0', paddingBottom: isOpen ? '24px' : '0' }}>
        {answer}
      </div>
    </div>
  );
};

// --- App ---

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const whatsappUrl = "https://wa.me/5532988748235?text=Olá%20Dra.%20Gisele%2C%20vim%20pelo%20link%20e%20gostaria%20de%20agendar%20uma%20avaliação.";

  return (
    <div className="min-h-screen">
      
      {/* HERO */}
      <section id="hero" className="flex flex-col items-center justify-center relative min-h-screen bg-petrol-dark text-white text-center px-6 py-[60px] overflow-hidden">
        {/* Pseudo-elements represented as absolute divs */}
        <div className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] border border-gold/10 rounded-full pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] border border-gold/10 rounded-full pointer-events-none" />
        
        <FadeIn>
          <div className="hero-inner flex flex-col items-center max-w-[900px]">
            <span className="hero-badge mb-8 px-5 py-1 border border-gold rounded-full text-[10px] tracking-[3px] uppercase text-gold-light">
              Fisioterapia Especializada em DTM
            </span>
            <h1 className="font-display text-[clamp(2rem,5vw,3.5rem)] leading-[1.2] mb-8 text-white">
              Você convive com dor na mandíbula, estalos e tensão constante — e já tentou de tudo sem resultado duradouro.
            </h1>
            <p className="text-[clamp(1rem,2.5vw,1.2rem)] text-white/80 font-light max-w-[750px] mb-10 leading-[1.8]">
              O que falta não é força de vontade nem mais um remédio. É um diagnóstico preciso e um tratamento que trata você como um caso único — não como mais um paciente com DTM.
            </p>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-gold">
              Quero entender o que está causando minha dor
              <WhatsAppIcon />
            </a>
            <p className="hero-italic mt-12 font-display italic text-2xl text-gold-light">
              Recupere a liberdade de comer, falar e sorrir sem medo.
            </p>
            <p className="hero-meta mt-4 text-[9px] text-white/30 tracking-[3px] uppercase">
              Avaliação inicial completa · Sem compromisso · Juiz de Fora – MG
            </p>
            <p className="mt-2 text-[9px] text-white/25 tracking-[3px] uppercase">
              Dra. Gisele Milão · CREFITO 126817-F
            </p>
          </div>
        </FadeIn>
      </section>

      {/* SINTOMAS */}
      <section className="section-padding bg-white text-center">
        <div className="container">
          <FadeIn>
            <span className="section-label">Sintomas</span>
            <h2 className="title-display italic">Você se identifica com isso?</h2>
            <p className="text-text-muted italic text-[1.05rem] mb-2 font-display">Sinta se esta é a sua rotina atual:</p>
            <div className="mt-12 flex flex-col gap-5 max-w-[800px] mx-auto text-left">
              {[
                { title: "O despertar cansado", text: "Você acorda e sente que seu rosto trabalhou a noite toda. A mandíbula está pesada, travada ou dolorida logo cedo." },
                { title: "O medo do \"estalo\"", text: "Evita comer uma maçã ou bocejar em público por medo do barulho ou de a mandíbula \"sair do lugar\"." },
                { title: "A dor de cabeça \"fantasma\"", text: "Aquela pressão nas têmporas que nenhum analgésico comum parece resolver de verdade." },
                { title: "A frustração do silêncio", text: "Você tenta explicar a dor no ouvido ou o zumbido, mas os exames dizem que está tudo bem, enquanto o incômodo continua ali." },
                { title: "O limite da placa", text: "Você usa a placa de mordida e ela ajuda — mas percebe que a tensão, a dor e o travamento continuam aparecendo. Algo além da articulação ainda precisa de atenção." }
              ].map((s, idx) => (
                <div key={idx} className="sintoma-card">
                  <WarningIcon />
                  <div>
                    <h3 className="font-sans font-bold text-petrol-dark mb-1.5 text-base">{s.title}</h3>
                    <p className="text-text-muted font-light text-[0.95rem] leading-[1.7]">{s.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* INIMIGO OCULTO */}
      <section className="section-padding bg-petrol-dark text-white">
        <div className="container">
          <FadeIn>
            <div className="text-center max-w-[800px] mx-auto">
              <span className="section-label">O Inimigo Oculto</span>
              <h2 className="font-display text-[clamp(1.8rem,4vw,2.8rem)] mb-10 text-white italic">Por que nada funcionou até agora?</h2>
              <p className="text-lg font-light leading-[1.8] text-white/80 mb-6">
                A maioria das pessoas que sofre com DTM cai no ciclo do <strong className="text-gold-light font-medium">"tratamento isolado"</strong>. O dentista foca apenas nos dentes, o médico foca apenas no remédio, e a fisioterapia comum foca apenas no relaxamento muscular.
              </p>
              <p className="text-lg font-light leading-[1.8] text-white/80 mb-6">
                O problema é que a DTM é <strong className="text-gold-light font-medium">multifatorial</strong>. Ela envolve sua postura, seus hábitos, seu sistema nervoso e como sua mandíbula se integra ao resto do corpo. Tentar resolver isso apenas com uma placa ou um relaxante muscular é como tentar consertar um carro desalinhado apenas trocando o pneu.
              </p>
              <div className="quote-dark mt-2 border border-gold/20 p-8 rounded-2xl bg-white/5 font-display italic text-[1.4rem] text-gold-light leading-relaxed">
                Sem um diagnóstico preciso que conecte todos esses pontos, você continuará gastando tempo e dinheiro em soluções temporárias.
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* MÉTODO */}
      <section className="section-padding bg-white">
        <div className="container">
          <FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="text-left">
                <span className="section-label">O Método</span>
                <h2 className="font-display italic text-[clamp(1.8rem,4vw,2.8rem)] text-petrol-dark mb-8 leading-tight">
                  Conheça o Método Equilíbrio Mandibular Integrado
                </h2>
                <p className="font-light leading-[1.8] mb-5 text-[1.05rem]">
                  Desenvolvido pela Dra. Gisele Milão, esta abordagem não é sobre "fazer massagem no rosto". É sobre <strong className="text-petrol font-medium">reeducação e reequilíbrio</strong>.
                </p>
                <p className="font-light leading-[1.8] mb-5 text-[1.05rem]">
                  Eu não olho apenas para onde dói. Eu mapeio como você se move, como você respira e como suas tensões acumuladas estão sobrecarregando sua articulação.
                </p>
                <div className="quote-cream bg-cream p-6 border-l-4 border-gold rounded-xl font-display italic text-2xl text-petrol-dark leading-snug mt-6">
                  A transformação aqui é profunda: passamos da fase de "sobreviver à dor" para a fase de "esquecer que a dor existia".
                </div>
              </div>
              <div className="metodo-img-wrap relative w-full max-w-[400px] mx-auto md:order-last order-first">
                {/* Visual shadow effect using the wrapper before pseudo-class styling defined in CSS */}
                <img 
                  src="https://i.postimg.cc/X78kgNDg/Imagem-redimencionada.jpg" 
                  alt="Dra. Gisele Milão" 
                  className="metodo-img w-full aspect-[4/5] object-cover rounded-2xl shadow-2xl z-10 relative"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* PASSOS */}
      <section className="section-padding bg-cream text-center">
        <div className="container">
          <FadeIn>
            <span className="section-label">Passo a Passo</span>
            <h2 className="title-display italic">Três passos simples para sua nova rotina</h2>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[800px] mx-auto">
              {[
                { n: "1", t: "Mapeamento de Causa", d: "Uma avaliação detalhada onde eu escuto sua história e identifico os gatilhos específicos da sua dor." },
                { n: "2", t: "Intervenção de Precisão", d: "Aplicamos técnicas manuais e exercícios terapêuticos desenhados exclusivamente para o seu tipo de DTM." },
                { n: "3", t: "Autonomia e Manutenção", d: "Você aprende como gerenciar seu corpo para que os resultados sejam duradouros e você não dependa de consultórios para sempre." }
              ].map((p, i) => (
                <div key={i} className="passo-card bg-white p-8 rounded-2xl shadow-sm border border-gold/10 flex flex-col items-center">
                  <div className="passo-num w-12 h-12 bg-petrol-dark text-gold font-display text-2xl flex items-center justify-center rounded-full mb-5 shrink-0">{p.n}</div>
                  <h3 className="font-sans font-bold text-petrol-dark mb-3 text-base">{p.t}</h3>
                  <p className="text-text-muted font-light text-[0.9rem] leading-relaxed">{p.d}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="section-padding bg-white text-center">
        <div className="container">
          <FadeIn>
            <span className="section-label">Prova Social</span>
            <h2 className="title-display italic">Quem já viveu essa transformação</h2>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-7">
              {[
                { 
                  text: "Vivia à base de analgésicos e tinha medo de comer em reuniões por causa dos estalos. Meu dentista já tinha me indicado a placa e ajudou bastante, mas ele mesmo percebeu que precisava de algo a mais e me encaminhou para a Dra. Gisele. Na primeira consulta ela me fez perguntas que nenhum outro profissional tinha feito — queria entender minha rotina, meu stress, como eu dormia. Em 4 semanas eu já não lembrava o que era dor de cabeça. Hoje como de tudo e recuperei minha confiança.",
                  name: "Fernanda R., 38 anos",
                  info: "Servidora pública · Juiz de Fora"
                },
                {
                  text: "Acordava todo dia com o rosto travado. Já estava em acompanhamento com meu dentista e usando a placa, mas ele identificou que minha tensão muscular e postura precisavam de atenção especializada. Me encaminhou para a Gisele e foi a peça que faltava. O que me surpreendeu foi a forma como ela me ouviu — ela não tratou só o sintoma, ela quis entender de onde vinha tudo aquilo. Hoje acordo descansada e com disposição — algo que não sentia há anos.",
                  name: "Camila S., 44 anos",
                  info: "Professora · Juiz de Fora"
                },
                {
                  text: "Comecei a ter dor na mandíbula na época da faculdade e fui ignorando achando que era estresse. Quando os sintomas foram piorando — zumbido, dor no pescoço, dor de ouvido — fui ao dentista e ele já me encaminhou direto para a Dra. Gisele. O que eu não esperava era sair da primeira consulta já entendendo o que estava acontecendo comigo. Ela explicou tudo, conectou os pontos que eu não conseguia conectar sozinha. O tratamento foi progressivo, sem pressa. Hoje estou sem sintomas e sei o que fazer para não deixar voltar.",
                  name: "Beatriz M., 27 anos",
                  info: "Estudante de medicina · Juiz de Fora"
                }
              ].map((dep, i) => (
                <div key={i} className="dep-card bg-cream p-8 rounded-2xl flex flex-col h-full text-left">
                  <p className="italic text-text-muted font-light leading-[1.8] mb-6 flex-grow">"{dep.text}"</p>
                  <div className="dep-author border-t border-gold/20 pt-4 mt-auto">
                    <strong className="text-petrol-dark font-sans font-bold">{dep.name}</strong>
                    <span className="text-xs text-text-muted">{dep.info}</span>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA PRINCIPAL */}
      <section className="section-padding bg-petrol-dark text-center">
        <div className="container">
          <FadeIn>
            <div className="max-w-[700px] mx-auto">
              <h2 className="font-display text-[clamp(1.8rem,4vw,2.8rem)] text-white mb-6">Pronto para dar o primeiro passo para o seu alívio?</h2>
              <p className="text-white/70 text-lg font-light leading-[1.8] mb-10">Dê o primeiro passo para o seu alívio. Sem pressão, apenas uma conversa técnica e humana sobre o seu caso.</p>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-gold">
                Quero agendar minha avaliação inicial
                <WhatsAppIcon />
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white text-center">
        <div className="container">
          <FadeIn>
            <span className="section-label">FAQ</span>
            <h2 className="title-display italic">Perguntas Frequentes</h2>
            <div className="mt-12 max-w-[700px] mx-auto text-left">
              {[
                { q: "Fisioterapia realmente trata DTM? Achei que era coisa só de dentista.", a: "A fisioterapia e a odontologia atuam em conjunto no tratamento da DTM. Enquanto o dentista cuida da oclusão e da estrutura dental, a fisioterapeuta trata os músculos, a postura, a tensão e os padrões de movimento que alimentam a dor. Um complementa o outro — e é exatamente por isso que muitos dentistas encaminham seus pacientes para a Dra. Gisele." },
                { q: "Eu já uso placa. A fisioterapia vai ajudar?", a: "Sim — e muito. A placa é uma ferramenta importante, mas ela age principalmente na proteção dos dentes. A fisioterapia atua nas causas musculares e posturais que continuam gerando tensão mesmo com o uso da placa. A combinação dos dois tratamentos costuma acelerar significativamente a recuperação." },
                { q: "Em quanto tempo vou sentir melhora?", a: "A maioria dos pacientes relata melhora perceptível já nas primeiras semanas de tratamento. O tempo total varia de acordo com cada caso — histórico, gravidade e hábitos do dia a dia influenciam no processo. O que podemos garantir é que você não vai ficar no escuro: já na primeira consulta você sai com clareza sobre o seu caso e o que esperar." },
                { q: "O tratamento dói?", a: "Não. Todas as técnicas utilizadas não são invasivas e adaptadas à sensibilidade de cada paciente. O objetivo é aliviar a dor — não gerar mais desconforto. Alguns pacientes relatam uma leve sensação de pressão durante o trabalho muscular, mas nada que cause desconforto significativo." },
                { q: "Meu caso é muito grave. Ainda tem solução?", a: "Casos mais complexos são exatamente os que mais se beneficiam de um tratamento estruturado e individualizado. A Dra. Gisele já atendeu pacientes com histórico longo de dor, múltiplas tentativas frustradas e sintomas variados. A avaliação inicial é justamente o momento de entender a profundidade do seu caso e traçar o melhor caminho." },
                { q: "Já tentei vários tratamentos e nada funcionou. Por que seria diferente agora?", a: "Essa é a dúvida mais comum de quem chega aqui — e é completamente legítima. A diferença está no ponto de partida: antes de qualquer técnica, fazemos uma avaliação detalhada para entender o que está gerando a sua dor de forma específica. Tratamentos genéricos falham porque ignoram as particularidades de cada caso. Aqui o ponto de partida é o seu histórico, não um protocolo padrão." },
                { q: "Como funciona a primeira consulta?", a: "A avaliação inicial é completa — inclui escuta ativa do seu histórico, avaliação postural, funcional da mandíbula e do pescoço. Ao final você já tem clareza sobre o que está causando sua dor e qual é o plano de tratamento indicado para o seu caso. Não é uma consulta de triagem — é o início do processo." },
                { q: "Preciso de encaminhamento médico ou odontológico?", a: "Não. Você pode agendar diretamente pelo WhatsApp, sem necessidade de encaminhamento. Se você já está em acompanhamento com um dentista, ótimo — o tratamento vai complementar o que ele está fazendo." }
              ].map((faq, i) => (
                <FAQItem key={i} question={faq.q} answer={faq.a} />
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="section-padding bg-cream-dark text-center">
        <div className="container">
          <FadeIn>
            <div className="max-w-[700px] mx-auto">
              <h2 className="font-display italic text-[clamp(1.8rem,4vw,2.8rem)] text-petrol-dark mb-6">Ainda tem dúvida se o seu caso tem solução?</h2>
              <p className="text-text-muted text-lg font-light leading-[1.8] mb-10 max-w-[500px] mx-auto">Não continue tentando adivinhar. Clique no botão abaixo e fale diretamente comigo pelo WhatsApp. Vamos entender se o meu método é o ideal para você.</p>
              <button onClick={() => window.open(whatsappUrl, '_blank')} className="btn-dark">
                Falar com a Dra. Gisele agora
                <WhatsAppIcon />
              </button>
              <p className="mt-4 text-[10px] text-text-muted uppercase tracking-[2px]">Atendimento humanizado e individualizado em Juiz de Fora</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-petrol-dark py-12 px-6 text-center border-t border-white/5">
        <p className="text-white/30 text-[10px] uppercase tracking-[2px] mb-2 leading-relaxed">
          DRA. GISELE MILÃO DE CARVALHO COSTA · CREFITO 126817-F · FISIOTERAPIA EM DTM E DOR OROFACIAL
        </p>
        <p className="text-white/30 text-[10px] uppercase tracking-[2px] mb-2">
          Rua São Mateus, 846. Bairro São Mateus - Juiz de Fora - MG
        </p>
        <p className="text-white/30 text-[10px] uppercase tracking-[2px]">
          © 2026 · <button className="text-gold hover:text-gold-light transition-colors text-[10px] uppercase tracking-[1px] cursor-pointer" onClick={() => {setIsModalOpen(true); document.body.style.overflow='hidden'}}>Política de Privacidade</button>
        </p>
      </footer>

      {/* MODAL */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[999] p-5 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-petrol-dark/90 backdrop-blur-sm"
              onClick={() => {setIsModalOpen(false); document.body.style.overflow='auto'}}
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="modal-box relative bg-white w-full max-w-[700px] max-h-[85vh] overflow-y-auto rounded-3xl p-12 shadow-2xl z-[1000]"
            >
              <button 
                className="absolute top-5 right-6 text-3xl text-text-muted cursor-pointer hover:text-petrol-dark transition-colors"
                onClick={() => {setIsModalOpen(false); document.body.style.overflow='auto'}}
              >
                &times;
              </button>
              <h2 className="font-display text-[2rem] text-petrol-dark mb-2 pb-4 border-b border-gold">Política de Privacidade</h2>
              <p className="text-[11px] text-text-muted mb-6">Última atualização: abril de 2026</p>
              
              <div className="space-y-4 text-[0.9rem] text-text-muted font-light leading-[1.8]">
                <p>Sua privacidade é importante para nós. Esta política explica de forma clara e objetiva quais informações coletamos, como as utilizamos e quais são os seus direitos — em conformidade com a Lei Geral de Proteção de Dados (LGPD · Lei nº 13.709/2018).</p>
                
                <h3 className="font-sans font-semibold text-petrol-dark text-[0.95rem] mt-5">1. Quem somos</h3>
                <p>Dra. Gisele Milão de Carvalho Costa, fisioterapeuta especialista em DTM e Dor Orofacial, CREFITO 126817-F, Juiz de Fora – MG.</p>
                
                <h3 className="font-sans font-semibold text-petrol-dark text-[0.95rem] mt-5">2. Quais dados coletamos</h3>
                <p>Este site não possui formulários de cadastro. Os dados coletados são apenas os fornecidos voluntariamente via WhatsApp: nome e telefone para agendamento. Este site pode utilizar ferramentas como Google Analytics, Google Ads e Meta Pixel para mensurar desempenho e veicular anúncios relevantes. Essas ferramentas coletam dados como IP e comportamento de navegação de forma anonimizada. Você pode desativar o rastreamento nas configurações do seu navegador.</p>
                
                <h3 className="font-sans font-semibold text-petrol-dark text-[0.95rem] mt-5">3. Para que usamos seus dados</h3>
                <p>Exclusivamente para responder contatos, realizar agendamentos e enviar orientações relacionadas ao atendimento.</p>
                
                <h3 className="font-sans font-semibold text-petrol-dark text-[0.95rem] mt-5">4. Compartilhamento de dados</h3>
                <p>Seus dados não são vendidos, alugados ou compartilhados com terceiros para fins comerciais. Compartilhamento ocorre apenas por obrigação legal ou com sua autorização.</p>
                
                <h3 className="font-sans font-semibold text-petrol-dark text-[0.95rem] mt-5">5. Por quanto tempo guardamos seus dados</h3>
                <p>Pelo tempo necessário para prestação do serviço e cumprimento de obrigações legais.</p>
                
                <h3 className="font-sans font-semibold text-petrol-dark text-[0.95rem] mt-5">6. Seus direitos como titular</h3>
                <p>Conforme a LGPD você tem direito a confirmar, acessar, corrigir, excluir seus dados e revogar consentimento. Entre em contato pelo WhatsApp: (32) 98874-8235.</p>
                
                <h3 className="font-sans font-semibold text-petrol-dark text-[0.95rem] mt-5">7. Segurança</h3>
                <p>Adotamos medidas para proteger suas informações. Conversas pelo WhatsApp usam criptografia de ponta a ponta.</p>
                
                <h3 className="font-sans font-semibold text-petrol-dark text-[0.95rem] mt-5">8. Alterações</h3>
                <p>Esta política pode ser atualizada. A data de revisão estará sempre no topo desta página.</p>
                
                <h3 className="font-sans font-semibold text-petrol-dark text-[0.95rem] mt-5">9. Contato</h3>
                <p>Dra. Gisele Milão de Carvalho Costa · WhatsApp: (32) 98874-8235 · Juiz de Fora – MG · CREFITO 126817-F</p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
