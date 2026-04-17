import { motion } from "motion/react";
import { ChevronRight, HelpCircle, CheckCircle2, AlertCircle } from "lucide-react";
import { useState } from "react";

const WhatsAppIcon = ({ size = 20, className = "" }: { size?: number, className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const WHATSAPP_PACIENTE = "https://wa.me/5532988748235?text=Olá%20Dra.%20Gisele%2C%20vim%20pelo%20link%20e%20gostaria%20de%20agendar%20uma%20avaliação.";
const WHATSAPP_DENTISTA = "https://wa.me/5532988748235?text=Olá%20Dra.%20Gisele%2C%20sou%20dentista%20e%20gostaria%20de%20conversar%20sobre%20uma%20parceria.";

function FAQItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gold/20 py-4">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left hover:text-gold transition-colors"
      >
        <span className="font-sans font-medium text-petrol-dark">{question}</span>
        <HelpCircle size={20} className={`text-gold transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <motion.p 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="mt-4 text-text-muted font-light leading-relaxed"
        >
          {answer}
        </motion.p>
      )}
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-cream selection:bg-gold/30">
      {/* 1. HERO */}
      <section className="relative min-h-screen flex flex-col items-center justify-center bg-petrol-dark text-white px-6 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] border border-gold/10 rounded-full pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] border border-gold/10 rounded-full pointer-events-none" />

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 flex flex-col items-center text-center max-w-[900px]"
        >
          <div className="mb-8 px-4 py-1 border border-gold rounded-full">
            <span className="section-label text-gold-light">Fisioterapia Especializada em DTM</span>
          </div>

          <h1 className="font-display text-3xl md:text-5xl lg:text-6xl mb-8 leading-tight text-white">
            Você convive com dor na mandíbula, estalos e tensão constante — e já tentou de tudo sem resultado duradouro.
          </h1>

          <p className="font-sans text-lg md:text-xl text-white/80 mb-6 font-light max-w-[750px] leading-relaxed">
            O que falta não é força de vontade nem mais um remédio. É um diagnóstico preciso e um tratamento que trata você como um caso único — não como mais um paciente com DTM.
          </p>

          <motion.a
            href={WHATSAPP_PACIENTE}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="bg-gold hover:bg-gold-light text-petrol-dark px-10 py-5 rounded-full font-sans font-medium transition-colors flex items-center gap-2 shadow-lg text-lg"
          >
            Quero entender o que está causando minha dor
            <WhatsAppIcon size={20} />
          </motion.a>

          <p className="mt-12 font-display text-xl md:text-2xl text-gold-light italic">
            Recupere a liberdade de comer, falar e sorrir sem medo.
          </p>

          <p className="mt-8 font-sans text-[10px] text-white/50 uppercase tracking-[2px]">
            Avaliação inicial completa · Sem compromisso · Juiz de Fora – MG
          </p>
          
          <p className="mt-4 font-sans text-[9px] text-white/30 uppercase tracking-[3px]">
            Dra. Gisele Milão · CREFITO 126817-F
          </p>
        </motion.div>
      </section>

      {/* 3. VOCÊ SE IDENTIFICA COM ISSO? */}
      <section className="py-24 px-6 bg-white flex justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-[800px] w-full"
        >
          <span className="section-label mb-6 block text-center">Sintomas</span>
          <h2 className="title-display text-petrol-dark mb-12 text-center">Você se identifica com isso?</h2>
          <p className="text-center text-text-muted mb-12 text-lg italic">Sinta se esta é a sua rotina atual:</p>
          
          <div className="space-y-8">
            {[
              { title: "O despertar cansado", desc: "Você acorda e sente que seu rosto trabalhou a noite toda. A mandíbula está pesada, travada ou dolorida logo cedo." },
              { title: "O medo do \"estalo\"", desc: "Evita comer uma maçã ou bocejar em público por medo do barulho ou de a mandíbula \"sair do lugar\"." },
              { title: "A dor de cabeça \"fantasma\"", desc: "Aquela pressão nas têmporas que nenhum analgésico comum parece resolver de verdade." },
              { title: "A frustração do silêncio", desc: "Você tenta explicar a dor no ouvido ou o zumbido, mas os exames dizem que está tudo bem, enquanto o incômodo continua ali." },
              { title: "O limite da placa", desc: "Você usa a placa de mordida e ela ajuda — mas percebe que a tensão, a dor e o travamento continuam aparecendo. Algo além da articulação ainda precisa de atenção." }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4 items-start bg-cream p-6 rounded-2xl border-l-4 border-gold">
                <AlertCircle className="text-gold flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-sans font-bold text-petrol-dark mb-1">{item.title}</h3>
                  <p className="text-text-muted font-light leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 4. POR QUE NADA FUNCIONOU ATÉ AGORA? */}
      <section className="py-24 px-6 bg-petrol-dark text-white flex justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-[800px] w-full"
        >
          <span className="section-label text-gold mb-6 block text-center">O Inimigo Oculto</span>
          <h2 className="title-display mb-12 text-center">Por que nada funcionou até agora?</h2>
          
          <div className="space-y-8 text-lg font-light leading-relaxed text-white/80">
            <p>
              A maioria das pessoas que sofre com DTM cai no ciclo do <strong className="text-gold-light">"tratamento isolado"</strong>. O dentista foca apenas nos dentes, o médico foca apenas no remédio, e a fisioterapia comum foca apenas no relaxamento muscular.
            </p>
            <p>
              O problema é que a DTM é <strong className="text-gold-light">multifatorial</strong>. Ela envolve sua postura, seus hábitos, seu sistema nervoso e como sua mandíbula se integra ao resto do corpo. Tentar resolver isso apenas com uma placa ou um relaxante muscular é como tentar consertar um carro desalinhado apenas trocando o pneu.
            </p>
            <div className="bg-white/5 border border-gold/20 p-8 rounded-2xl italic font-display text-2xl text-gold-light">
              Sem um diagnóstico preciso que conecte todos esses pontos, você continuará gastando tempo e dinheiro em soluções temporárias.
            </div>
          </div>
        </motion.div>
      </section>

      {/* 5. APRESENTAÇÃO DO MÉTODO */}
      <section className="py-24 px-6 bg-white flex justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-[1000px] w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
        >
          <div className="order-2 md:order-1">
            <span className="section-label mb-6 block">O Método</span>
            <h2 className="font-display italic text-4xl md:text-5xl text-petrol-dark mb-10">
              Conheça o Método Equilíbrio Mandibular Integrado
            </h2>
            
            <div className="space-y-6 text-text leading-relaxed font-light text-lg">
              <p>
                Desenvolvido pela Dra. Gisele Milão, esta abordagem não é sobre "fazer massagem no rosto". É sobre <strong className="font-medium text-petrol">reeducação e reequilíbrio</strong>.
              </p>
              <p>
                Eu não olho apenas para onde dói. Eu mapeio como você se move, como você respira e como suas tensões acumuladas estão sobrecarregando sua articulação.
              </p>
              <div className="bg-cream p-6 rounded-xl border-l-4 border-gold italic font-display text-xl text-petrol-dark">
                A transformação aqui é profunda: passamos da fase de "sobreviver à dor" para a fase de "esquecer que a dor existia".
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-full max-w-[400px] aspect-[4/5]">
              <div className="absolute inset-0 border border-gold translate-x-4 translate-y-4 rounded-2xl -z-10 opacity-20" />
              <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://i.postimg.cc/X78kgNDg/Imagem-redimencionada.jpg" 
                  alt="Dra. Gisele Milão" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 6. COMO FUNCIONA O PROCESSO */}
      <section className="py-24 px-6 bg-cream flex justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-[800px] w-full"
        >
          <span className="section-label mb-4 block text-center">Passo a Passo</span>
          <h2 className="title-display text-petrol-dark mb-12 text-center">Três passos simples para sua nova rotina</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Mapeamento de Causa", desc: "Uma avaliação detalhada onde eu escuto sua história e identifico os gatilhos específicos da sua dor." },
              { title: "Intervenção de Precisão", desc: "Aplicamos técnicas manuais e exercícios terapêuticos desenhados exclusivamente para o seu tipo de DTM." },
              { title: "Autonomia e Manutenção", desc: "Você aprende como gerenciar seu corpo para que os resultados sejam duradouros e você não dependa de consultórios para sempre." }
            ].map((step, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gold/10 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-petrol-dark text-gold flex items-center justify-center font-display text-2xl mb-6">
                  {idx + 1}
                </div>
                <h3 className="font-sans font-bold text-petrol-dark mb-4">{step.title}</h3>
                <p className="text-text-muted font-light text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 7. DEPOIMENTOS */}
      <section className="py-24 px-6 bg-white flex justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-[1000px] w-full"
        >
          <span className="section-label mb-4 block text-center">Prova Social</span>
          <h2 className="title-display text-petrol-dark mb-16 text-center">Quem já viveu essa transformação</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Fernanda R.", age: 38, job: "Servidora pública", city: "Juiz de Fora", text: "Vivia à base de analgésicos e tinha medo de comer em reuniões por causa dos estalos. Meu dentista já tinha me indicado a placa e ajudou bastante, mas ele mesmo percebeu que precisava de algo a mais e me encaminhou para a Dra. Gisele. Na primeira consulta ela me fez perguntas que nenhum outro profissional tinha feito — queria entender minha rotina, meu stress, como eu dormia. Em 4 semanas eu já não lembrava o que era dor de cabeça. Hoje como de tudo e recuperei minha confiança." },
              { name: "Camila S.", age: 44, job: "Professora", city: "Juiz de Fora", text: "Acordava todo dia com o rosto travado. Já estava em acompanhamento com meu dentista e usando a placa, mas ele identificou que minha tensão muscular e postura precisavam de atenção especializada. Me encaminhou para a Gisele e foi a peça que faltava. O que me surpreendeu foi a forma como ela me ouviu — ela não tratou só o sintoma, ela quis entender de onde vinha tudo aquilo. Hoje acordo descansada e com disposição — algo que não sentia há anos." },
              { name: "Beatriz M.", age: 27, job: "Estudante de medicina", city: "Juiz de Fora", text: "Comecei a ter dor na mandíbula na época da faculdade e fui ignorando achando que era estresse. Quando os sintomas foram piorando — zumbido, dor no pescoço, dor de ouvido — fui ao dentista e ele já me encaminhou direto para a Dra. Gisele. O que eu não esperava era sair da primeira consulta já entendendo o que estava acontecendo comigo. Ela explicou tudo, conectou os pontos que eu não conseguia conectar sozinha. O tratamento foi progressivo, sem pressa. Hoje estou sem sintomas e sei o que fazer para não deixar voltar." }
            ].map((dep, idx) => (
              <div key={idx} className="bg-cream p-8 rounded-2xl flex flex-col h-full">
                <p className="italic text-text-muted mb-8 font-light leading-relaxed flex-grow">"{dep.text}"</p>
                <div className="border-t border-gold/20 pt-4">
                  <p className="font-sans font-bold text-petrol-dark">{dep.name}, {dep.age} anos</p>
                  <p className="text-xs text-text-muted">{dep.job} · {dep.city}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 8. CTA PRINCIPAL */}
      <section className="py-24 px-6 bg-petrol-dark flex justify-center text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-[700px] w-full"
        >
          <h2 className="title-display text-white mb-8">Pronto para dar o primeiro passo para o seu alívio?</h2>
          <p className="text-white/70 text-lg mb-12 font-light leading-relaxed">
            Dê o primeiro passo para o seu alívio. Sem pressão, apenas uma conversa técnica e humana sobre o seu caso.
          </p>
          <motion.a
            href={WHATSAPP_PACIENTE}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-petrol-dark px-10 py-5 rounded-full font-sans font-medium transition-colors shadow-xl text-lg"
          >
            Quero agendar minha avaliação inicial
            <WhatsAppIcon size={20} />
          </motion.a>
        </motion.div>
      </section>

      {/* 9. FAQ */}
      <section className="py-24 px-6 bg-white flex justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-[700px] w-full"
        >
          <span className="section-label mb-4 block text-center">FAQ</span>
          <h2 className="title-display text-petrol-dark mb-12 text-center">Perguntas Frequentes</h2>
          
          <div className="space-y-2">
            <FAQItem 
              question="Fisioterapia realmente trata DTM? Achei que era coisa só de dentista." 
              answer="A fisioterapia e a odontologia atuam em conjunto no tratamento da DTM. Enquanto o dentista cuida da oclusão e da estrutura dental, a fisioterapeuta trata os músculos, a postura, a tensão e os padrões de movimento que alimentam a dor. Um complementa o outro — e é exatamente por isso que muitos dentistas encaminham seus pacientes para a Dra. Gisele." 
            />
            <FAQItem 
              question="Eu já uso placa. A fisioterapia vai ajudar?" 
              answer="Sim — e muito. A placa é uma ferramenta importante, mas ela age principalmente na proteção dos dentes. A fisioterapia atua nas causas musculares e posturais que continuam gerando tensão mesmo com o uso da placa. A combinação dos dois tratamentos costuma acelerar significativamente a recuperação." 
            />
            <FAQItem 
              question="Em quanto tempo vou sentir melhora?" 
              answer="A maioria dos pacientes relata melhora perceptível já nas primeiras semanas de tratamento. O tempo total varia de acordo com cada caso — histórico, gravidade e hábitos do dia a dia influenciam no processo. O que podemos garantir é que você não vai ficar no escuro: já na primeira consulta você sai com clareza sobre o seu caso e o que esperar." 
            />
            <FAQItem 
              question="O tratamento dói?" 
              answer="Não. Todas as técnicas utilizadas não são invasivas e adaptadas à sensibilidade de cada paciente. O objetivo é aliviar a dor — não gerar mais desconforto. Alguns pacientes relatam uma leve sensação de pressão durante o trabalho muscular, mas nada que cause desconforto significativo." 
            />
            <FAQItem 
              question="Meu caso é muito grave. Ainda tem solução?" 
              answer="Casos mais complexos são exatamente os que mais se beneficiam de um tratamento estruturado e individualizado. A Dra. Gisele já atendeu pacientes com histórico longo de dor, múltiplas tentativas frustradas e sintomas variados. A avaliação inicial é justamente o momento de entender a profundidade do seu caso e traçar o melhor caminho." 
            />
            <FAQItem 
              question="Já tentei vários tratamentos e nada funcionou. Por que seria diferente agora?" 
              answer="Essa é a dúvida mais comum de quem chega aqui — e é completamente legítima. A diferença está no ponto de partida: antes de qualquer técnica, fazemos uma avaliação detalhada para entender o que está gerando a sua dor de forma específica. Tratamentos genéricos falham porque ignoram as particularidades de cada caso. Aqui o ponto de partida é o seu histórico, não um protocolo padrão." 
            />
            <FAQItem 
              question="Como funciona a primeira consulta?" 
              answer="A avaliação inicial é completa — inclui escuta ativa do seu histórico, avaliação postural, funcional da mandíbula e do pescoço. Ao final você já tem clareza sobre o que está causando sua dor e qual é o plano de tratamento indicado para o seu caso. Não é uma consulta de triagem — é o início do processo." 
            />
            <FAQItem 
              question="Preciso de encaminhamento médico ou odontológico?" 
              answer="Não. Você pode agendar diretamente pelo WhatsApp, sem necessidade de encaminhamento. Se você já está em acompanhamento com um dentista, ótimo — o tratamento vai complementar o que ele está fazendo." 
            />
          </div>
        </motion.div>
      </section>

      {/* 10. CTA FINAL */}
      <section className="py-24 px-6 bg-cream-dark flex justify-center text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-[600px] w-full"
        >
          <h2 className="title-display text-petrol-dark mb-8">Ainda tem dúvida se o seu caso tem solução?</h2>
          <p className="text-text-muted text-lg mb-12 font-light leading-relaxed">
            Não continue tentando adivinhar. Clique no botão abaixo e fale diretamente comigo pelo WhatsApp. Vamos entender se o meu método é o ideal para você.
          </p>
          <motion.a
            href={WHATSAPP_PACIENTE}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 bg-petrol-dark hover:bg-petrol text-white px-10 py-5 rounded-full font-sans font-medium transition-colors shadow-xl mb-8"
          >
            Falar com a Dra. Gisele agora
            <WhatsAppIcon size={20} />
          </motion.a>
          <p className="text-text-muted text-xs uppercase tracking-widest mt-4">Atendimento humanizado e individualizado em Juiz de Fora</p>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-6 bg-petrol-dark text-center border-t border-white/5">
        <div className="max-w-[600px] mx-auto space-y-2">
          <p className="text-white/30 font-sans text-[10px] uppercase tracking-[2px] leading-loose">
            DRA. GISELE MILÃO DE CARVALHO COSTA · CREFITO 126817-F · FISIOTERAPIA EM DTM E DOR OROFACIAL
          </p>
          <p className="text-white/30 font-sans text-[10px] uppercase tracking-[1px]">
            © 2026 · <a href="/politica-de-privacidade.html" className="text-gold no-underline hover:text-gold-light transition-colors">Política de Privacidade</a>
          </p>
        </div>
      </footer>
    </div>
  );
}
