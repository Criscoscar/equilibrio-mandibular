import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  MessageCircle, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  Brain, 
  Moon, 
  Stethoscope, 
  Sparkles,
  ShieldCheck,
  MapPin
} from 'lucide-react';

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-[#b8975a]/20 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none group"
      >
        <span className="text-lg md:text-xl font-medium text-[#1a4a5c] group-hover:text-[#b8975a] transition-colors">
          {question}
        </span>
        {isOpen ? (
          <ChevronUp className="text-[#b8975a] w-6 h-6 shrink-0" />
        ) : (
          <ChevronDown className="text-[#b8975a] w-6 h-6 shrink-0" />
        )}
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-gray-600 leading-relaxed text-lg font-light">
          {answer}
        </p>
      </div>
    </div>
  );
};

function App() {
  const whatsappUrl = "https://wa.me/5532988748235?text=Olá%20Dra.%20Gisele%20gostaria%20de%20agendar%20uma%20avaliação";

  return (
    <div className="font-sans text-[#1c1c1c] bg-[#f7f3ee] antialiased selection:bg-[#b8975a]/30">
      
      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen flex flex-col items-center justify-center bg-[#0d2e3a] text-white px-6 overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#b8975a] rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#1a4a5c] rounded-full blur-[120px]" />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 flex flex-col items-center max-w-[1000px] text-center"
        >
          <div className="mb-8 px-6 py-1.5 border border-[#b8975a] rounded-full inline-block backdrop-blur-sm">
            <span className="text-[10px] tracking-[4px] uppercase text-[#d4b07a] font-bold">
              Fisioterapia Especializada em DTM
            </span>
          </div>

          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.1] mb-8 font-medium">
            Você convive com dor na mandíbula, estalos e tensão constante — <span className="text-[#d4b07a] italic">e já tentou de tudo.</span>
          </h1>

          <p className="text-lg md:text-2xl text-white/80 mb-12 font-light max-w-[850px] leading-relaxed">
            O que falta não é força de vontade nem mais um remédio. É um diagnóstico preciso e um tratamento que trata você como um caso único — não como mais um paciente com DTM.
          </p>

          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-[#b8975a] hover:bg-[#d4b07a] text-[#0d2e3a] px-10 py-5 rounded-full font-bold transition-all hover:scale-105 active:scale-95 flex items-center gap-3 shadow-[0_20px_50px_rgba(184,151,90,0.3)] text-xl"
          >
            Quero entender minha dor
            <MessageCircle className="w-6 h-6" />
          </a>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-12 font-display text-2xl text-[#d4b07a] italic opacity-90"
          >
            Recupere a liberdade de comer, falar e sorrir sem medo.
          </motion.p>
          
          <div className="mt-16 flex flex-col md:flex-row items-center gap-6 opacity-60 text-[10px] uppercase tracking-[3px] font-medium">
            <span className="flex items-center gap-2">Avaliação inicial completa</span>
            <span className="hidden md:block">|</span>
            <span className="flex items-center gap-2">Juiz de Fora – MG</span>
            <span className="hidden md:block">|</span>
            <span className="flex items-center gap-2">Dra. Gisele Milão</span>
          </div>
        </motion.div>
      </section>

      {/* --- SINTOMAS --- */}
      <section className="py-32 px-6 bg-white flex justify-center overflow-hidden">
        <div className="max-w-[1000px] w-full">
          <div className="text-center mb-20">
            <span className="text-[10px] tracking-[4px] uppercase text-[#b8975a] font-bold mb-4 block">Identificação</span>
            <h2 className="font-display italic text-5xl md:text-7xl text-[#1a4a5c]">Sinta se esta é a sua rotina:</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
            {[
              {
                icon: <Moon className="w-8 h-8 text-[#b8975a]" />,
                title: "O despertar cansado",
                text: "Você acorda e sente que seu rosto trabalhou a noite toda. A mandíbula está pesada, travada ou dolorida logo cedo."
              },
              {
                icon: <MessageCircle className="w-8 h-8 text-[#b8975a]" />,
                title: "O medo do 'estalo'",
                text: "Evita comer uma maçã ou bocejar em público por medo do barulho ou de a mandíbula 'sair do lugar'."
              },
              {
                icon: <ShieldCheck className="w-8 h-8 text-[#b8975a]" />,
                title: "O limite da placa",
                text: "Você usa a placa de mordida e ela ajuda — mas percebe que a tensão e a dor continuam aparecendo. Algo ainda precisa de atenção."
              },
              {
                icon: <Brain className="w-8 h-8 text-[#b8975a]" />,
                title: "A dor de cabeça 'fantasma'",
                text: "Dores na têmpora ou atrás dos olhos que parecem enxaqueca, mas que remédios comuns não resolvem de forma definitiva."
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                viewport={{ once: true }}
                className="bg-[#f7f3ee] p-10 rounded-[40px] border-l-[8px] border-[#b8975a] hover:shadow-xl transition-shadow group"
              >
                <div className="mb-6 bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="font-sans font-bold text-[#1a4a5c] mb-4 text-2xl">{item.title}</h3>
                <p className="text-gray-600 font-light text-lg leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- INFOGRAFICO / MÉTODO --- */}
      <section className="py-32 px-6 bg-[#f7f3ee] flex justify-center">
        <div className="max-w-[1200px] w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#b8975a]/10 rounded-full blur-3xl animate-pulse" />
            <div className="relative z-10 rounded-[60px] overflow-hidden shadow-2xl skew-y-1">
              <img 
                src="https://i.postimg.cc/X78kgNDg/Imagem-redimencionada.jpg" 
                alt="Dra. Gisele Milão" 
                className="w-full h-auto object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700 hover:scale-105"
              />
            </div>
            <div className="mt-8 text-center">
              <p className="font-display italic text-[#1a4a5c] text-3xl mb-2">Dra. Gisele Milão</p>
              <p className="text-[#b8975a] font-medium tracking-[3px] uppercase text-xs">Fisioterapeuta · CREFITO 126817-F</p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="text-[10px] tracking-[4px] uppercase text-[#b8975a] font-bold mb-6 block">O Diferencial</span>
            <h2 className="font-display text-5xl md:text-7xl text-[#1a4a5c] leading-tight mb-12">
              Conheça o Método <span className="italic">Equilíbrio Integrado</span>
            </h2>
            
            <div className="space-y-10">
              <p className="text-xl text-gray-700 font-light leading-relaxed">
                Minha abordagem não é sobre apenas aliviar a dor do dia, mas sobre entender as <strong>tensões invisíveis</strong> que fazem seu corpo travar. 
              </p>
              
              <div className="space-y-6">
                {[
                  "Diagnóstico Funcional detalhado",
                  "Técnicas manuais de precisão",
                  "Reequilíbrio muscular mandibular",
                  "Acompanhamento personalizado"
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <CheckCircle2 className="text-[#b8975a] w-6 h-6 flex-shrink-0" />
                    <span className="text-lg text-[#1a4a5c] font-medium">{text}</span>
                  </div>
                ))}
              </div>

              <div className="pt-8 italic font-display text-2xl text-[#b8975a] border-t border-[#b8975a]/20">
                "Passamos da fase de sobreviver à dor para a fase de esquecer que a dor existia."
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- DEPOIMENTOS --- */}
      <section className="py-32 px-6 bg-white overflow-hidden flex justify-center">
        <div className="max-w-[1200px] w-full">
          <div className="text-center mb-24">
            <span className="text-[10px] tracking-[4px] uppercase text-[#b8975a] font-bold mb-4 block">Experiências</span>
            <h2 className="font-display text-5xl md:text-7xl text-[#1a4a5c]">Quem já transformou sua rotina</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                text: "Em 4 semanas eu já não lembrava o que era dor de cabeça. Antes, eu dependia de analgésicos todos os dias para conseguir trabalhar.",
                name: "Fernanda R.",
                info: "38 anos · Juiz de Fora"
              },
              {
                text: "Eu tinha pavor de bocejar em público pelos estalos. O tratamento me deu segurança e hoje sorrio sem medo de travar.",
                name: "Camila S.",
                info: "44 anos · Empresária"
              },
              {
                text: "O método da Dra. Gisele é diferente de tudo que já tentei. É focado na causa, não só nos sintomas momentâneos.",
                name: "Beatriz M.",
                info: "27 anos · Advogada"
              }
            ].map((d, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="bg-[#f7f3ee] p-12 rounded-[50px] relative transition-transform duration-500"
              >
                <div className="absolute top-0 right-12 transform -translate-y-1/2">
                  <Sparkles className="text-[#b8975a] w-12 h-12" />
                </div>
                <p className="italic text-gray-600 mb-8 font-light text-xl leading-relaxed">"{d.text}"</p>
                <div>
                  <p className="font-bold text-[#1a4a5c] text-lg">{d.name}</p>
                  <p className="text-[#b8975a]/80 text-sm tracking-wide uppercase font-medium">{d.info}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA FINAL --- */}
      <section className="py-32 px-6 bg-[#0d2e3a] relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_center,_#b8975a_0%,_transparent_70%)] opacity-20" />
        </div>

        <div className="relative z-10 max-w-[850px] mx-auto">
          <h2 className="font-display text-5xl md:text-7xl text-white mb-10 leading-tight">
            Pronta para dar o primeiro passo para o <span className="text-[#d4b07a] italic">seu alívio definitivo?</span>
          </h2>
          <p className="text-white/70 text-xl font-light mb-12 max-w-[600px] mx-auto leading-relaxed">
            As vagas para avaliações personalizadas são limitadas para garantir a qualidade de cada tratamento.
          </p>
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 bg-[#b8975a] hover:bg-[#d4b07a] text-[#0d2e3a] px-16 py-8 rounded-full font-bold text-2xl shadow-[0_25px_60px_rgba(0,0,0,0.4)] transition-all hover:scale-105 active:scale-95 group"
          >
            Falar diretamente com a Dra. Gisele
            <MessageCircle className="w-8 h-8 group-hover:rotate-12 transition-transform" />
          </a>
        </div>
      </section>

      {/* --- FAQ --- */}
      <section className="py-32 px-6 bg-white flex justify-center">
        <div className="max-w-[850px] w-full">
          <div className="text-center mb-16">
            <span className="text-[10px] tracking-[4px] uppercase text-[#b8975a] font-bold mb-4 block">Sobre o tratamento</span>
            <h2 className="font-display text-5xl md:text-6xl text-[#1a4a5c]">Dúvidas Frequentes</h2>
          </div>
          
          <div className="space-y-4">
            <FAQItem 
              question="Fisioterapia realmente trata DTM?" 
              answer="Sim! Enquanto o dentista cuida da estrutura dentária, o fisioterapeuta especializado cuida da função muscular e articular, devolvendo a mobilidade e eliminando a tensão acumulada." 
            />
            <FAQItem 
              question="Quantas sessões são necessárias?" 
              answer="Cada caso é único. Após a avaliação inicial, montamos um plano específico para você. Muitos pacientes relatam alívio significativo já nas primeiras semanas." 
            />
            <FAQItem 
              question="Preciso de indicação médica para começar?" 
              answer="Não. Como fisioterapeuta, sou profissional de primeiro contato. Posso realizar sua avaliação detalhada e iniciar o tratamento imediatamente." 
            />
            <FAQItem 
              question="Onde fica o consultório?" 
              answer="Atendo em Juiz de Fora - MG, em um ambiente preparado para oferecer o máximo de conforto e privacidade durante as sessões." 
            />
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-24 bg-[#0d2e3a] text-center px-6">
        <p className="text-white/40 text-[11px] uppercase tracking-[4px] font-medium max-w-[600px] mx-auto leading-loose mb-4">
          DRA. GISELE MILÃO DE CARVALHO COSTA · CREFITO 126817-F · FISIOTERAPIA EM DTM E DOR OROFACIAL
        </p>
        <p className="text-white/30 text-[11px] font-medium tracking-[3px]">
          © 2026 · <a href="politica-de-privacidade.html" className="text-[#b8975a] hover:text-[#d4b07a] transition-colors">Política de Privacidade</a>
        </p>
      </footer>

    </div>
  );
}

export default App;
