"use client"
import Image from "next/image";
import { useState } from "react";
import { FaWhatsapp, FaChevronDown, FaCheckCircle, FaQuoteLeft } from "react-icons/fa";

const modules = [
  {
    aula: "AULA 1",
    title: "Metanóia: MUDANÇA DE MENTE",
    subtitle: "O Primeiro Passo para Viver da Marcenaria",
    content: [
      "Mudança de mentalidade: a transição de marceneiro para empresário.",
      "Identificação e quebra de crenças limitantes.",
      "Propósito, visão e metas: saber onde você quer chegar.",
      "Assumir 100% da responsabilidade pelos resultados da empresa.",
      "Hábitos e disciplina dos empresários de alta performance.",
      "Tomada de decisão baseada em números, não em emoções.",
      "Como vencer o medo de vender, investir, contratar e crescer."
    ],
    opening: "“O maior equipamento da sua marcenaria não é a CNC, a esquadrejadeira ou qualquer outra máquina. É a sua mente. Quando ela evolui, a empresa evolui junto.”",
    impact: "“A sua marcenaria nunca crescerá além da mentalidade de quem a lidera. Primeiro muda a mente, depois muda a empresa.”",
    closing: "“Toda grande marcenaria nasceu quando alguém decidiu mudar primeiro a própria mentalidade. O sucesso começa na mente, cresce nas atitudes e aparece nos resultados.”"
  },
  {
    aula: "AULA 2",
    title: "POSICIONAMENTO E MARCA",
    subtitle: "Seja Lembrado Antes de Ser Procurado",
    content: [
      "Construindo uma marca forte e confiável.",
      "Definindo o cliente ideal.",
      "Como vender valor em vez de preço.",
      "Criando autoridade na sua região.",
      "Marketing pessoal do empresário.",
      "Diferenciais que fazem sua marcenaria se destacar.",
      "Como transformar clientes em promotores da sua marca.",
      "Construindo uma empresa que será lembrada por gerações."
    ],
    opening: "“Quem compete por preço luta pela sobrevivência. Quem constrói uma marca conquista o mercado.”",
    impact: "“Sua marca deve chegar antes de você. Quando o cliente confiar no seu nome, o preço deixará de ser o principal fator da decisão.”",
    closing: "“A marca abre portas antes mesmo da primeira conversa.”"
  },
  {
    aula: "AULA 3",
    title: "MARKETING DIGITAL",
    subtitle: "Clientes Todos os Dias",
    content: [
      "Como atrair clientes de forma consistente.",
      "Instagram para gerar autoridade.",
      "Reels que despertam atenção.",
      "Conteúdo que gera confiança.",
      "WhatsApp como ferramenta de vendas.",
      "Google e presença local.",
      "Como produzir vídeos simples e profissionais.",
      "Criando um sistema previsível de geração de clientes."
    ],
    opening: "“Se o mercado não conhece você, ele nunca terá a oportunidade de comprar de você.”",
    impact: "“Quem aparece com estratégia é lembrado. Quem é lembrado vende.”",
    closing: "“Quem aparece com estratégia vende com frequência.”"
  },
  {
    aula: "AULA 4",
    title: "VENDAS DE ALTO IMPACTO",
    subtitle: "Vender Sem Dar Desconto",
    content: [
      "Entendendo o perfil do cliente.",
      "Atendimento consultivo.",
      "Como apresentar valor.",
      "Orçamentos que convencem.",
      "Técnicas de negociação.",
      "Como quebrar objeções.",
      "Fechamento de vendas.",
      "Pós-venda que gera indicações."
    ],
    opening: "“O cliente não compra móveis. Ele compra confiança, segurança e a realização de um sonho.”",
    impact: "“Quem vende por preço fecha uma venda. Quem vende valor conquista um cliente para a vida toda.”",
    closing: "“Grandes vendedores não convencem. Eles ajudam o cliente a tomar a melhor decisão.”"
  },
  {
    aula: "AULA 5",
    title: "PRECIFICAÇÃO",
    subtitle: "Lucro Não É Sorte",
    content: [
      "Como calcular o preço corretamente.",
      "Custos diretos e indiretos.",
      "Margem de lucro.",
      "Custos ocultos.",
      "Formação do preço final.",
      "Como vender sem entrar em guerra de preços. - Será em Live",
      "Indicadores financeiros.",
      "Precificação para crescimento sustentável."
    ],
    opening: "“Quem não conhece seus números trabalha muito e lucra pouco.”",
    impact: "“Preço paga contas. Lucro constrói patrimônio.”",
    closing: "“Faturamento impressiona. Lucro transforma.”"
  },
  {
    aula: "AULA 6",
    title: "GESTÃO FINANCEIRA",
    subtitle: "O Dinheiro Precisa Trabalhar por Você",
    content: [
      "Fluxo de caixa.",
      "Capital de giro.",
      "Controle financeiro.",
      "Planejamento.",
      "Indicadores.",
      "Redução de desperdícios.",
      "Reserva financeira.",
      "Gestão para crescimento."
    ],
    opening: "“Empresas quebram por falta de gestão, não por falta de trabalho.”",
    impact: "“Quem domina as finanças da empresa deixa de apagar incêndios e começa a construir o futuro.”",
    closing: "“Quem controla o dinheiro controla o futuro da empresa.”"
  },
  {
    aula: "AULA 7",
    title: "PRODUÇÃO INTELIGENTE",
    subtitle: "Produzir Mais, Desperdiçar Menos",
    content: [
      "Planejamento da produção.",
      "Padronização.",
      "Organização da oficina.",
      "Controle de qualidade.",
      "Gestão do tempo.",
      "Redução de desperdícios.",
      "Como ter pontualidade.",
      "Aumento da produtividade."
    ],
    opening: "“Organização gera velocidade. Velocidade gera lucro.”",
    impact: "“Uma produção organizada reduz custos, aumenta a qualidade e fortalece a confiança do cliente.”",
    closing: "“Uma produção organizada entrega qualidade, reduz custos e aumenta os resultados.”"
  },
  {
    aula: "AULA 8",
    title: "LIDERANÇA E EQUIPE",
    subtitle: "",
    content: [
      "Como contratar as pessoas certas.",
      "Desenvolvendo líderes.",
      "Comunicação eficiente.",
      "Delegação.",
      "Construindo uma equipe campeã."
    ],
    opening: "“Empresas crescem quando as pessoas crescem.”",
    impact: "“Nenhuma máquina substitui uma equipe comprometida e bem liderada.”",
    closing: "“Nenhuma marcenaria se torna grande sozinha.”"
  },
  {
    aula: "AULA 9",
    title: "TECNOLOGIA",
    subtitle: "A Marcenaria do Futuro",
    content: [
      "Softwares de projeto.",
      "CNC e automação.",
      "Inteligência Artificial.",
      "Máquinas e equipamentos.",
      "Organização digital.",
      "Tendências do setor.",
      "Integração dos processos.",
      "Tecnologia como vantagem competitiva."
    ],
    opening: "“A tecnologia não substitui o marceneiro. Ela potencializa quem está preparado.”",
    impact: "“Quem investe em tecnologia ganha tempo, produtividade e competitividade.”",
    closing: "“Quem aprende primeiro lidera o mercado.”"
  },
  {
    aula: "AULA 10",
    title: "ESCALA E CRESCIMENTO",
    subtitle: "",
    content: [
      "Como sair da operação.",
      "Estrutura organizacional.",
      "Planejamento estratégico.",
      "Indicadores de crescimento.",
      "Expansão da empresa.",
      "Novas fontes de receita.",
      "Criando um legado para as próximas gerações."
    ],
    opening: "“O verdadeiro sucesso é construir uma empresa que cresce mesmo quando você não está presente.”",
    impact: "“Seu objetivo não é trabalhar mais. É construir uma empresa capaz de crescer sem depender exclusivamente de você.”",
    closing: "“O objetivo não é apenas fabricar móveis. É construir uma empresa sólida, lucrativa e um legado que permaneça por gerações.”"
  },
  {
    aula: "AULA 11",
    title: "EXCELÊNCIA NA MONTAGEM",
    subtitle: "",
    content: [
      "Planejamento da montagem antes de sair da fábrica.",
      "Organização de ferramentas e logística.",
      "Técnicas para uma montagem rápida, limpa e segura.",
      "Ajustes e acabamento de alto padrão.",
      "Comunicação com o cliente durante a instalação.",
      "Checklist de entrega e conferência final."
    ],
    opening: "“O projeto encanta no papel. A montagem conquista o cliente.”",
    impact: "“A última impressão é a que permanece. Uma montagem impecável transforma clientes em vendedores da sua marca.”",
    closing: "“Uma montagem de excelência não encerra uma venda. Ela inicia a próxima.”"
  }
];

export default function MentoriaLanding() {
  const [openModule, setOpenModule] = useState<number | null>(0);

  const toggleModule = (index: number) => {
    setOpenModule(openModule === index ? null : index);
  };

  const ctaLink = "https://pay.hotmart.com/S107087265E"; // Checkout Hotmart

  return (
    <main className="min-h-screen font-sans bg-[#0d0d0d] text-neutral-100 overflow-x-hidden selection:bg-[#c77a16] selection:text-white">
      {/* Background Effect */}
      <div className="fixed inset-0 z-0 opacity-[0.07] pointer-events-none" style={{ backgroundImage: "url('/wood_bg.png')", backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "fixed" }}></div>
      <div className="fixed top-0 w-full h-[600px] bg-gradient-to-b from-[#c77a16]/10 via-[#0d0d0d]/80 to-[#0d0d0d] z-0 pointer-events-none"></div>

      {/* --- HERO SECTION --- */}
      <section className="relative z-10 w-full min-h-[90vh] flex flex-col items-center justify-center px-5 pt-20 pb-16 text-center">
        <div className="max-w-[800px] flex flex-col items-center gap-6 animate-fade-in-up">
          <span className="px-4 py-1.5 rounded-full border border-[#c77a16]/40 bg-[#c77a16]/10 text-[#e2a836] text-[10px] sm:text-xs font-black tracking-[0.3em] uppercase shadow-[0_0_20px_rgba(199,122,22,0.2)]">
            A Formação Definitiva
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white font-sans drop-shadow-2xl leading-[1.1]">
            Mentoria <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c77a16] via-[#e2a836] to-[#c77a16]">Viver de Marcenaria</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#c77a16] to-transparent my-2 opacity-50"></div>
          <p className="text-lg sm:text-xl text-neutral-300 font-medium leading-relaxed max-w-[650px] font-serif italic relative">
            <FaQuoteLeft className="absolute -left-6 -top-4 text-3xl text-[#c77a16] opacity-20" />
            &quot;O maior equipamento da sua marcenaria não é a CNC, a esquadrejadeira ou qualquer outra máquina. É a sua mente. Quando ela evolui, a empresa evolui junto.&quot;
          </p>

          <a href={ctaLink} target="_blank" rel="noopener noreferrer" className="mt-8 relative group w-full sm:w-auto">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#c77a16] to-[#e2a836] rounded-xl blur opacity-30 group-hover:opacity-70 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
            <button className="relative w-full sm:w-auto px-8 py-5 bg-gradient-to-br from-[#1a110a] to-[#0a0a0a] border border-[#c77a16]/50 rounded-xl text-[#e2a836] font-black uppercase tracking-widest text-sm sm:text-base shadow-2xl flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-[0.98] transition-all">
              Quero Viver de Marcenaria
            </button>
          </a>
        </div>
      </section>

      {/* --- MENTOR SECTION --- */}
      <section className="relative z-10 w-full px-5 py-20 bg-gradient-to-b from-[#111] to-[#0d0d0d] border-y border-white/5">
        <div className="max-w-[1000px] mx-auto flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2 relative rounded-3xl overflow-hidden border border-[#c77a16]/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)] aspect-square md:aspect-[4/5] group">
             <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent z-10"></div>
             <Image src="/WhatsApp Image 2026-06-25 at 19.12.41 (2).jpeg" alt="Edriano Bittencourt" fill className="object-cover object-top group-hover:scale-105 transition-transform duration-1000" />
             <div className="absolute bottom-6 left-6 right-6 z-20">
               <h3 className="text-3xl font-black text-white uppercase tracking-tight">Edriano Bittencourt</h3>
               <p className="text-[#c77a16] font-bold text-sm tracking-widest uppercase mt-1">Mentor & Marceneiro</p>
             </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            <h2 className="text-3xl sm:text-4xl font-black uppercase text-white leading-tight">
              Mais de <span className="text-[#c77a16]">40 anos</span> <br/> construindo um legado.
            </h2>
            <div className="flex flex-col gap-4 text-neutral-400 text-sm sm:text-base leading-relaxed">
              <p>A marcenaria não foi uma profissão que escolhi. Foi um legado que recebi, uma missão que abracei e um propósito que decidi viver.</p>
              <p>Meu pai foi meu primeiro mestre. Ensinou que o caráter vale mais do que qualquer ferramenta, que a palavra de um homem tem valor e que todo trabalho feito com excelência honra a Deus.</p>
              <p>Minha missão hoje vai muito além da marcenaria. Quero formar profissionais melhores, empresários mais preparados e líderes mais humanos.</p>
            </div>
            
            <div className="p-6 mt-4 rounded-2xl bg-[#1a110a] border border-[#c77a16]/30 relative overflow-hidden">
              <div className="absolute -right-4 -top-4 text-6xl text-[#c77a16] opacity-10 font-serif">&quot;</div>
              <p className="font-serif italic text-white/90 text-lg relative z-10 leading-relaxed">
                Seu objetivo não é trabalhar mais. É construir uma empresa capaz de crescer sem depender exclusivamente de você.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- MODULES SECTION --- */}
      <section className="relative z-10 w-full px-5 py-24">
        <div className="max-w-[800px] mx-auto flex flex-col gap-12">
          
          <div className="text-center flex flex-col items-center gap-4">
            <span className="text-[#c77a16] text-[10px] sm:text-xs font-black tracking-[0.2em] uppercase">A Jornada Completa</span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase text-white tracking-tight">
              O Que Você Vai Aprender
            </h2>
            <p className="text-neutral-400 max-w-[500px] mx-auto text-sm sm:text-base">
              Um método desenhado passo a passo. Do operacional ao estratégico, de marceneiro a empresário de sucesso.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {modules.map((mod, index) => {
              const isOpen = openModule === index;
              return (
                <div key={index} className={`rounded-2xl border transition-all duration-500 overflow-hidden ${isOpen ? 'bg-[#161616] border-[#c77a16]/50 shadow-[0_10px_30px_rgba(199,122,22,0.1)]' : 'bg-[#111] border-white/5 hover:border-white/10'}`}>
                  
                  <button 
                    onClick={() => toggleModule(index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                      <span className={`text-[10px] font-black tracking-widest uppercase px-2 py-1 rounded border ${isOpen ? 'bg-[#c77a16]/20 border-[#c77a16] text-[#c77a16]' : 'bg-white/5 border-transparent text-neutral-500'}`}>
                        {mod.aula}
                      </span>
                      <h3 className={`text-sm sm:text-base font-bold uppercase tracking-wide transition-colors ${isOpen ? 'text-white' : 'text-neutral-300'}`}>
                        {mod.title}
                      </h3>
                    </div>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 shrink-0 ${isOpen ? 'bg-[#c77a16] rotate-180' : 'bg-[#1a1a1a]'}`}>
                      <FaChevronDown className={isOpen ? 'text-black' : 'text-neutral-500'} />
                    </div>
                  </button>

                  <div className={`transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[1000px] opacity-100 pb-6 px-6' : 'max-h-0 opacity-0 px-6 overflow-hidden'}`}>
                    
                    {mod.subtitle && (
                      <h4 className="text-[#e2a836] font-serif italic text-lg mb-4">{mod.subtitle}</h4>
                    )}

                    <div className="flex flex-col gap-2 mb-6 pl-2">
                      {mod.content.map((item, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <FaCheckCircle className="text-[#c77a16] text-sm mt-1 shrink-0" />
                          <p className="text-neutral-300 text-sm leading-relaxed">{item}</p>
                        </div>
                      ))}
                    </div>

                    <div className="bg-[#0a0a0a] rounded-xl p-5 border border-white/5 flex flex-col gap-4">
                       <div>
                         <span className="text-[9px] uppercase font-bold text-neutral-600 tracking-widest mb-1 block">Abertura</span>
                         <p className="text-neutral-400 text-xs italic">{mod.opening}</p>
                       </div>
                       <div className="pl-4 border-l-2 border-[#c77a16]">
                         <span className="text-[9px] uppercase font-bold text-[#c77a16] tracking-widest mb-1 block">Impacto</span>
                         <p className="text-white text-sm font-medium">{mod.impact}</p>
                       </div>
                       <div>
                         <span className="text-[9px] uppercase font-bold text-neutral-600 tracking-widest mb-1 block">Fechamento</span>
                         <p className="text-neutral-400 text-xs italic">{mod.closing}</p>
                       </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* --- OFFER / PRICING SECTION --- */}
      <section className="relative z-10 w-full px-5 py-24 bg-[#111] border-t border-white/5">
        <div className="max-w-[1000px] mx-auto flex flex-col md:flex-row gap-12 items-center justify-center">
          
          <div className="w-full max-w-[450px] bg-gradient-to-b from-[#1a110a] to-[#0d0d0d] rounded-3xl p-8 sm:p-10 border border-[#c77a16]/30 shadow-[0_20px_50px_rgba(199,122,22,0.15)] flex flex-col items-center text-center relative overflow-hidden group">
            
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-[100px] bg-[#c77a16]/30 blur-[60px] pointer-events-none"></div>

            <span className="text-[#c77a16] text-[10px] sm:text-xs font-black tracking-[0.2em] uppercase mb-4 relative z-10">
              Formação Completa
            </span>
            <h3 className="text-3xl font-black uppercase text-white mb-6 relative z-10">
              Mentoria <br/>Viver de Marcenaria
            </h3>

            <div className="flex flex-col gap-3 text-left w-full mb-8 relative z-10">
              <div className="flex items-start gap-3">
                <FaCheckCircle className="text-[#c77a16] mt-1 shrink-0" />
                <span className="text-neutral-300 text-sm">Acesso completo e irrestrito às 11 Aulas exclusivas</span>
              </div>
              <div className="flex items-start gap-3">
                <FaCheckCircle className="text-[#c77a16] mt-1 shrink-0" />
                <span className="text-neutral-300 text-sm">O mapa definitivo de marceneiro a empresário de sucesso</span>
              </div>
              <div className="flex items-start gap-3">
                <FaCheckCircle className="text-[#c77a16] mt-1 shrink-0" />
                <span className="text-neutral-300 text-sm">Do financeiro, processos e montagem até as vendas</span>
              </div>
            </div>

            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8"></div>

            <div className="flex flex-col items-center gap-2 mb-8 relative z-10">
              <span className="text-[#c77a16] font-bold uppercase tracking-widest text-sm mb-1 animate-pulse">Inscrições Abertas</span>
              <p className="text-neutral-400 text-center text-sm leading-relaxed px-4">
                Clique no botão abaixo para garantir sua vaga e conferir as condições especiais de pagamento diretamente no checkout.
              </p>
            </div>

            <a href={ctaLink} target="_blank" rel="noopener noreferrer" className="w-full relative group/btn z-10">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#c77a16] to-[#e2a836] rounded-xl blur opacity-50 group-hover/btn:opacity-100 transition duration-500 animate-pulse"></div>
              <button className="relative w-full py-5 bg-[#0d0d0d] border border-[#c77a16] rounded-xl text-[#e2a836] font-black uppercase tracking-widest text-sm shadow-2xl flex items-center justify-center hover:scale-[1.02] active:scale-[0.98] transition-all">
                Quero Comprar Agora
              </button>
            </a>
            
            <p className="text-neutral-500 text-xs mt-5 flex items-center justify-center gap-2 relative z-10">
              <FaCheckCircle /> Compra 100% segura e garantida (Hotmart)
            </p>
          </div>

        </div>
      </section>

      {/* --- FINAL CTA SECTION --- */}
      <section className="relative z-10 w-full px-5 py-24 bg-gradient-to-t from-[#111] to-[#0d0d0d] border-t border-[#c77a16]/10 text-center">
         <div className="max-w-[700px] mx-auto flex flex-col items-center gap-8">
            <h2 className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight leading-tight">
              Sua marcenaria nunca crescerá além da sua <span className="text-[#c77a16]">mentalidade</span>.
            </h2>
            <p className="text-neutral-400 text-lg">
              Chegou a hora de transformar o seu ofício no seu império.
            </p>
            
            <a href={ctaLink} target="_blank" rel="noopener noreferrer" className="mt-4 relative group w-full sm:w-auto">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#c77a16] to-[#e2a836] rounded-2xl blur opacity-40 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <button className="relative w-full sm:w-auto px-10 py-6 bg-[#0d0d0d] border border-[#c77a16] rounded-2xl text-[#e2a836] font-black uppercase tracking-[0.15em] text-sm sm:text-lg shadow-2xl flex items-center justify-center gap-4 hover:scale-[1.03] active:scale-[0.97] transition-all">
                Garantir Minha Vaga Agora
              </button>
            </a>
         </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="relative z-10 w-full pb-8 pt-12 flex justify-center bg-[#111]">
        <a href="https://www.wasventure.com.br" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity group">
          <span className="text-[10px] text-neutral-500 tracking-[0.2em] font-black uppercase mt-[2px] group-hover:text-neutral-400 transition-colors">Desenvolvido por</span>
          <div className="w-[100px] h-[40px] relative">
            <Image src="/Logotipo ilustrado ervateria chimarrão verde, bege e marrom.png" alt="WAS." fill className="object-contain object-left" />
          </div>
        </a>
      </footer>

    </main>
  );
}
