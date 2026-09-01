"use client"
import Image from "next/image";
import { useState } from "react";
import { 
  FaWhatsapp, 
  FaChevronDown, 
  FaCheckCircle, 
  FaQuoteLeft, 
  FaShieldAlt, 
  FaExclamationTriangle,
  FaArrowRight,
  FaCheck
} from "react-icons/fa";

const modules = [
  {
    number: "01",
    aula: "MÓDULO 1",
    title: "Metanóia: MUDANÇA DE MENTE",
    subtitle: "A transição definitiva de marceneiro para empresário",
    quote: "O maior equipamento da sua marcenaria não é a CNC ou a esquadrejadeira. É a sua mente. Quando ela evolui, o faturamento acompanha.",
    content: [
      "Quebra definitiva de crenças limitantes sobre precificação e dinheiro.",
      "Como assumir 100% da postura de dono e líder de alto rendimento.",
      "Planejamento de visão, metas e faturamento previsível para 12 meses.",
      "Tomada de decisões cirúrgicas baseadas em números reais.",
      "Como eliminar o medo de cobrar caro, investir e contratar equipe."
    ]
  },
  {
    number: "02",
    aula: "MÓDULO 2",
    title: "PRECIFICAÇÃO & LUCRO REAL",
    subtitle: "Chega de trabalhar de graça e ver o dinheiro sumir no fim do mês",
    quote: "Faturamento é ego, lucro é sanidade e caixa é rei.",
    content: [
      "A fórmula exata de custo fixo, custo variável e margem líquida real.",
      "Como incluir horas de projeto, imprevistos e montagem sem tomar prejuízo.",
      "Diferença entre margem de markup e margem de contribuição na marcenaria.",
      "Planilha prática de orçamento automatizada para não errar nunca mais.",
      "Técnica para apresentar o preço com firmeza e sem dar descontos."
    ]
  },
  {
    number: "03",
    aula: "MÓDULO 3",
    title: "VENDAS DE ALTO PADRÃO",
    subtitle: "Atraia clientes exigentes que valorizam e pagam à vista",
    quote: "Quem compete por preço morre por preço. Posicione-se como o melhor e seja disputado.",
    content: [
      "Posicionamento magnético no Instagram e Google para clientes Classe A/B.",
      "Script de atendimento e fechamento no primeiro contato do WhatsApp.",
      "Como criar propostas comerciais irresistíveis em 3D que fecham sozinhas.",
      "Parcerias estratégicas lucrativas com Arquitetos e Designers.",
      "Estratégia de indicação premiada para ter fila de espera o ano todo."
    ]
  },
  {
    number: "04",
    aula: "MÓDULO 4",
    title: "GESTÃO, PROCESSOS & EQUIPE",
    subtitle: "Como sair da operação pesada sem perder qualidade",
    quote: "Se a marcenaria para quando você viaja, você não tem uma empresa. Tem um emprego com alto risco.",
    content: [
      "Mapeamento de fluxo de produção: do corte à montagem sem retrabalho.",
      "Checklists operacionais à prova de erros para auxiliares e marceneiros.",
      "Como contratar, treinar e reter bons marceneiros com comissões justas.",
      "Gestão de prazos rigorosa para nunca mais atrasar uma entrega.",
      "Como estruturar a marcenaria para funcionar no piloto automático."
    ]
  },
  {
    number: "05",
    aula: "MÓDULO 5",
    title: "CONSTRUÇÃO DE LEGADO",
    subtitle: "Multiplicação de patrimônio e perpetuação do seu nome",
    quote: "O maior penhor que você pode deixar a um filho é o legado.",
    content: [
      "Separação definitiva das contas pessoais da conta da marcenaria.",
      "Reserva de emergência empresarial e reinvestimento inteligente.",
      "Construção de marca própria sólida e reconhecida no mercado.",
      "Sucessão familiar e profissionalização da empresa.",
      "Mentoria contínua e networking com os maiores marceneiros do país."
    ]
  }
];

const painPoints = [
  { icon: "⏰", title: "Escravo da própria oficina", desc: "Trabalha 12 a 16 horas por dia cortando e montando, mas o dinheiro nunca sobra no final do mês." },
  { icon: "💸", title: "Refém do cliente 'chorão'", desc: "Clientes que só pedem desconto e comparam seu trabalho artesanal com móveis de magazine." },
  { icon: "😰", title: "Insegurança na Precificação", desc: "Medo constante de cobrar caro e perder a venda, ou cobrar barato e pagar para trabalhar." },
  { icon: "👨‍👩‍👧", title: "Sem tempo para a família", desc: "Não consegue tirar férias porque se você não estiver na oficina, a produção para totalmente." },
  { icon: "📉", title: "Faturamento estagnado", desc: "Trabalha cada vez mais, mas o lucro não cresce. Sem método de gestão, o teto de vidro nunca quebra." },
  { icon: "🔧", title: "Preso no operacional", desc: "Você faz tudo: corta, monta, atende, cobra, compra material. Não sobra tempo para crescer." }
];

const targetAudiences = [
  {
    step: "01",
    title: "Quer sair do operacional",
    desc: "Você ama marcenaria, mas está exausto do trabalho pesado diário e quer se tornar um verdadeiro empresário.",
    image: "/WhatsApp Image 2026-06-25 at 19.12.41 (26).jpeg"
  },
  {
    step: "02",
    title: "Quer dobrar o lucro",
    desc: "Já tem estrutura montada, entrega qualidade, mas o faturamento estagnou e falta gestão profissional.",
    image: "/WhatsApp Image 2026-06-25 at 19.12.41 (8).jpeg"
  },
  {
    step: "03",
    title: "Quer construir um legado",
    desc: "Não quer ser apenas mais um marceneiro. Quer construir uma marca respeitada e duradoura por gerações.",
    image: "/WhatsApp Image 2026-06-25 at 19.12.41 (4).jpeg"
  }
];

export default function MentoriaPage() {
  const [openModule, setOpenModule] = useState<number | null>(0);
  const whatsappLink = "https://chat.whatsapp.com/C8CiQWBbNg9Cs9hrMGwDnV";

  return (
    <main className="min-h-screen text-white bg-[#060606] font-sans overflow-x-hidden">

      {/* ================================================================
          HERO — Full Viewport, Cinematic Background
         ================================================================ */}
      <section className="relative w-full min-h-screen flex items-end justify-center overflow-hidden">
        
        {/* Full Background Photo */}
        <Image
          src="/WhatsApp Image 2026-06-25 at 19.12.41 (2).jpeg"
          alt="Edriano Bittencourt"
          fill
          priority
          className="object-cover object-top brightness-[0.55]"
        />

        {/* Cinematic Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#060606] via-[#060606]/60 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#060606]/80 via-transparent to-[#060606]/40"></div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#060606] to-transparent"></div>

        {/* Hero Content Overlay */}
        <div className="relative z-10 w-full max-w-[1100px] mx-auto px-6 sm:px-10 pb-16 sm:pb-24 flex flex-col gap-6">

          {/* Exclusivity Tag */}
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-black/50 backdrop-blur-md border border-[#c77a16]/50 w-fit shadow-[0_0_30px_rgba(199,122,22,0.15)]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#e2a836] shadow-[0_0_12px_#e2a836] animate-pulse"></span>
            <span className="text-[11px] sm:text-xs font-black tracking-[0.2em] uppercase text-[#e2a836]">
              MENTORIA EXCLUSIVA • VAGAS LIMITADAS
            </span>
          </div>

          {/* Giant Headline */}
          <h1 className="text-[42px] sm:text-[56px] md:text-[72px] lg:text-[86px] font-black uppercase leading-[0.95] tracking-tighter max-w-[900px]">
            <span className="text-white/90">DO OPERACIONAL</span><br/>
            <span className="text-white/90">AO </span>
            <span className="bg-gradient-to-r from-[#e2a836] via-[#f7d58b] to-[#c77a16] bg-clip-text text-transparent">
              EMPRESARIAL
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-neutral-300 text-base sm:text-lg leading-relaxed max-w-[560px] font-medium">
            O método prático para marceneiros que desejam <strong className="text-white">multiplicar o lucro</strong>, atrair clientes de alto padrão e conquistar a <strong className="text-white">liberdade</strong> que sempre sonharam.
          </p>

          {/* CTA + Authority Row */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-2">
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 sm:py-5 rounded-2xl bg-gradient-to-r from-[#c77a16] via-[#e2a836] to-[#c77a16] bg-[length:200%_auto] hover:bg-right transition-all duration-500 text-[#060606] font-black text-sm sm:text-base uppercase tracking-wider flex items-center gap-3 shadow-[0_0_50px_rgba(226,168,54,0.35)] active:scale-[0.97] hover:-translate-y-0.5"
            >
              <FaWhatsapp className="text-2xl" />
              ENTRAR NO GRUPO VIP
              <FaArrowRight className="text-sm" />
            </a>

            <div className="flex items-center gap-3 text-sm text-neutral-400">
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 backdrop-blur border border-white/10">
                <span className="text-[#e2a836] font-black text-lg">+40</span>
                <span className="text-xs leading-tight font-medium">Anos de<br/>Experiência</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 backdrop-blur border border-white/10">
                <span className="text-[#e2a836] font-black text-lg">+25</span>
                <span className="text-xs leading-tight font-medium">Anos de<br/>Marcenaria</span>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* ================================================================
          DIAGNÓSTICO — O Teto de Vidro (Pain Points Grid)
         ================================================================ */}
      <section className="relative w-full py-20 sm:py-28 overflow-hidden">

        {/* Subtle background glow */}
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#c77a16]/5 blur-[150px] pointer-events-none"></div>

        <div className="relative z-10 max-w-[1100px] mx-auto px-6 sm:px-10">

          <div className="text-center mb-14">
            <span className="text-[11px] text-[#e2a836] font-black uppercase tracking-[0.3em] block mb-3">
              DIAGNÓSTICO EMPRESARIAL
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase leading-tight">
              VOCÊ ATINGIU O SEU<br/>
              <span className="bg-gradient-to-r from-[#e2a836] via-[#f7d58b] to-[#c77a16] bg-clip-text text-transparent">
                TETO DE VIDRO?
              </span>
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-4 max-w-[550px] mx-auto leading-relaxed">
              A maioria dos marceneiros talentosos fica presa na armadilha do esforço sem escala. Reconhece estes sinais?
            </p>
          </div>

          {/* Pain Points Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {painPoints.map((item, i) => (
              <div 
                key={i}
                className="group p-6 rounded-3xl bg-gradient-to-b from-[#110d08] to-[#0a0805] border border-[#c77a16]/15 hover:border-[#c77a16]/50 transition-all duration-300 flex flex-col gap-3 shadow-lg hover:shadow-[0_10px_40px_rgba(199,122,22,0.1)]"
              >
                <div className="text-3xl mb-1">{item.icon}</div>
                <h3 className="font-black text-white text-base uppercase tracking-tight">{item.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 p-6 rounded-2xl bg-[#0e0a06] border border-[#c77a16]/30 text-center max-w-[700px] mx-auto">
            <p className="text-neutral-200 text-sm sm:text-base font-medium">
              💡 <strong>A boa notícia:</strong> Não é falta de trabalho ou de qualidade. É apenas a falta do <strong className="text-[#e2a836]">Método Certo de Gestão</strong>. E ele existe.
            </p>
          </div>

        </div>
      </section>


      {/* ================================================================
          PARA QUEM É — Poster Cards (Inspirado na Ref. 3)
         ================================================================ */}
      <section className="relative w-full py-20 sm:py-28 bg-gradient-to-b from-[#060606] via-[#0a0704] to-[#060606]">

        <div className="max-w-[1100px] mx-auto px-6 sm:px-10">

          <div className="text-center mb-14">
            <span className="text-[11px] text-[#e2a836] font-black uppercase tracking-[0.3em] block mb-3">
              PERFIL IDEAL
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase leading-tight">
              A MENTORIA É<br/>
              <span className="bg-gradient-to-r from-[#e2a836] via-[#f7d58b] to-[#c77a16] bg-clip-text text-transparent">
                PARA VOCÊ QUE:
              </span>
            </h2>
          </div>

          {/* 3-Column Poster Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {targetAudiences.map((aud, i) => (
              <div 
                key={i}
                className="relative w-full aspect-[3/4] rounded-3xl overflow-hidden border border-[#c77a16]/25 group shadow-[0_20px_60px_rgba(0,0,0,0.6)] hover:border-[#c77a16]/60 transition-all duration-500"
              >
                <Image 
                  src={aud.image} 
                  alt={aud.title} 
                  fill 
                  className="object-cover object-top group-hover:scale-110 transition-transform duration-1000 brightness-[0.7] group-hover:brightness-[0.85]" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060606] via-[#060606]/60 to-transparent"></div>

                <div className="absolute inset-0 p-6 sm:p-7 flex flex-col justify-between z-10">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#c77a16] to-[#e2a836] text-[#060606] font-black text-xl flex items-center justify-center shadow-xl">
                    {aud.step}
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight leading-tight">
                      {aud.title}
                    </h3>
                    <p className="text-neutral-300 text-sm mt-3 leading-relaxed font-medium">
                      {aud.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-neutral-400 text-base mt-10 font-medium max-w-[500px] mx-auto">
            Não precisa de experiência em gestão. <br/>
            <strong className="text-[#e2a836]">Vamos do zero ao empresarial.</strong>
          </p>

        </div>
      </section>


      {/* ================================================================
          MÓDULOS — Accordion (Inspirado na Ref. 2)
         ================================================================ */}
      <section className="relative w-full py-20 sm:py-28">

        <div className="absolute inset-0 opacity-[0.06] pointer-events-none" style={{ backgroundImage: "url('/wood_bg.png')", backgroundSize: "cover", backgroundPosition: "center" }}></div>

        <div className="relative z-10 max-w-[800px] mx-auto px-6 sm:px-10">

          <div className="text-center mb-14">
            <span className="text-[11px] text-[#e2a836] font-black uppercase tracking-[0.3em] block mb-3">
              MÉTODO COMPLETO
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase leading-tight">
              O QUE VOCÊ VAI<br/>
              <span className="bg-gradient-to-r from-[#e2a836] via-[#f7d58b] to-[#c77a16] bg-clip-text text-transparent">
                DOMINAR
              </span>
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-4 max-w-[480px] mx-auto leading-relaxed">
              5 pilares estratégicos para transformar a sua marcenaria em uma máquina de lucro e respeito.
            </p>
          </div>

          {/* Module Accordions */}
          <div className="flex flex-col gap-3">
            {modules.map((mod, idx) => {
              const isOpen = openModule === idx;
              return (
                <div 
                  key={idx}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen 
                      ? "bg-gradient-to-b from-[#140e08] to-[#0a0704] border-[#c77a16]/50 shadow-[0_15px_50px_rgba(199,122,22,0.12)]" 
                      : "bg-[#0c0906] border-white/5 hover:border-[#c77a16]/25"
                  }`}
                >
                  <button 
                    onClick={() => setOpenModule(isOpen ? null : idx)}
                    className="w-full p-5 sm:p-6 flex items-center justify-between text-left gap-4"
                  >
                    <div className="flex items-center gap-4">
                      <span className={`w-12 h-12 rounded-xl flex items-center justify-center font-black text-base shrink-0 transition-all duration-300 ${
                        isOpen 
                          ? "bg-gradient-to-br from-[#c77a16] to-[#e2a836] text-[#060606] shadow-[0_0_20px_rgba(199,122,22,0.3)]" 
                          : "bg-[#1a120b] text-[#e2a836] border border-[#c77a16]/20"
                      }`}>
                        {mod.number}
                      </span>
                      <div>
                        <span className="text-[10px] font-black tracking-widest text-[#e2a836] uppercase block">
                          {mod.aula}
                        </span>
                        <h3 className="font-bold text-white text-base sm:text-lg leading-tight mt-0.5">
                          {mod.title}
                        </h3>
                      </div>
                    </div>
                    
                    <FaChevronDown className={`text-[#e2a836] text-sm transition-transform duration-300 shrink-0 ${isOpen ? "rotate-180" : ""}`} />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 border-t border-[#c77a16]/10 flex flex-col gap-5">
                      <p className="text-neutral-300 text-sm font-semibold">
                        {mod.subtitle}
                      </p>

                      <div className="p-4 rounded-xl bg-[#0a0704] border border-[#c77a16]/20 flex gap-3 items-start">
                        <FaQuoteLeft className="text-[#c77a16] text-base shrink-0 mt-0.5" />
                        <p className="text-[#e2a836] text-sm font-serif italic leading-relaxed">
                          &quot;{mod.quote}&quot;
                        </p>
                      </div>

                      <div className="flex flex-col gap-2.5">
                        {mod.content.map((item, cIdx) => (
                          <div key={cIdx} className="flex items-start gap-3 text-sm text-neutral-300">
                            <FaCheckCircle className="text-[#e2a836] text-sm shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* CTA Below Modules */}
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 w-full py-5 rounded-2xl bg-gradient-to-r from-[#c77a16] via-[#e2a836] to-[#c77a16] bg-[length:200%_auto] hover:bg-right transition-all duration-500 text-[#060606] font-black text-sm sm:text-base uppercase tracking-wider flex items-center justify-center gap-3 shadow-[0_0_40px_rgba(226,168,54,0.3)] active:scale-[0.97]"
          >
            <FaWhatsapp className="text-2xl" />
            QUERO TER ACESSO A ESSE CONTEÚDO
          </a>

        </div>
      </section>


      {/* ================================================================
          SOBRE O MENTOR — Full-Width Split Section
         ================================================================ */}
      <section className="relative w-full py-20 sm:py-28 bg-gradient-to-b from-[#060606] via-[#0e0a06] to-[#060606] overflow-hidden">
        
        <div className="absolute top-0 right-[-200px] w-[500px] h-[500px] bg-[#c77a16]/5 blur-[150px] pointer-events-none"></div>

        <div className="max-w-[1100px] mx-auto px-6 sm:px-10">

          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
            
            {/* Photo */}
            <div className="w-full lg:w-[45%] shrink-0">
              <div className="relative w-full aspect-[3/4] rounded-3xl overflow-hidden border border-[#c77a16]/30 shadow-[0_30px_80px_rgba(0,0,0,0.7)]">
                <Image 
                  src="/WhatsApp Image 2026-06-25 at 19.12.41 (24).jpeg" 
                  alt="Edriano Bittencourt" 
                  fill 
                  className="object-cover object-top brightness-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060606]/80 via-transparent to-transparent"></div>
                
                {/* Badge overlay */}
                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-black/60 backdrop-blur-md border border-[#c77a16]/30 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] text-[#e2a836] font-black uppercase tracking-widest">MENTOR PRINCIPAL</p>
                    <p className="text-lg font-bold text-white">Edriano Bittencourt</p>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-black text-[#e2a836] block leading-none">+40</span>
                    <span className="text-[9px] text-neutral-400 font-bold uppercase tracking-wider">Anos</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bio Text */}
            <div className="w-full lg:w-[55%] flex flex-col gap-6">
              
              <div>
                <span className="text-[11px] text-[#e2a836] font-black uppercase tracking-[0.3em] block mb-2">
                  CONHEÇA SEU MENTOR
                </span>
                <h2 className="text-3xl sm:text-4xl font-black uppercase leading-tight">
                  EDRIANO <span className="text-[#e2a836]">BITTENCOURT</span>
                </h2>
              </div>

              <div className="flex gap-4">
                <div className="px-4 py-3 rounded-xl bg-[#c77a16]/10 border border-[#c77a16]/30 text-center">
                  <span className="text-xl font-black text-[#e2a836] block">40+</span>
                  <span className="text-[10px] text-neutral-400 uppercase tracking-wider font-bold">Carpintaria</span>
                </div>
                <div className="px-4 py-3 rounded-xl bg-[#c77a16]/10 border border-[#c77a16]/30 text-center">
                  <span className="text-xl font-black text-[#e2a836] block">25+</span>
                  <span className="text-[10px] text-neutral-400 uppercase tracking-wider font-bold">Marcenaria</span>
                </div>
                <div className="px-4 py-3 rounded-xl bg-[#c77a16]/10 border border-[#c77a16]/30 text-center">
                  <span className="text-xl font-black text-[#e2a836] block">100+</span>
                  <span className="text-[10px] text-neutral-400 uppercase tracking-wider font-bold">Mentorados</span>
                </div>
              </div>

              <div className="text-neutral-300 text-sm sm:text-base leading-relaxed flex flex-col gap-4">
                <p>
                  A marcenaria não foi uma profissão que escolhi. <strong className="text-white">Foi um legado que recebi, uma missão que abracei e um propósito que decidi viver.</strong>
                </p>
                <p>
                  Filho de carpinteiro, Edriano aprendeu na prática que o caráter vale mais do que qualquer ferramenta e que a palavra de um homem tem valor inegociável.
                </p>
                <p>
                  Hoje, sua missão é guiar donos de marcenarias de todo o Brasil a transformarem o trabalho com a madeira em <strong className="text-white">empresas lucrativas, organizadas e respeitadas por gerações.</strong>
                </p>
              </div>

              {/* Quote */}
              <div className="p-5 rounded-2xl bg-[#0a0704] border border-[#c77a16]/30 flex gap-3 items-start">
                <FaQuoteLeft className="text-[#c77a16] text-xl shrink-0 mt-1" />
                <p className="text-white font-serif italic text-base sm:text-lg leading-relaxed">
                  O maior penhor que você pode deixar a um filho é o legado.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>


      {/* ================================================================
          FECHAMENTO — CTA Final com Escassez
         ================================================================ */}
      <section className="relative w-full py-24 sm:py-32 overflow-hidden">
        
        {/* Background Image */}
        <Image
          src="/WhatsApp Image 2026-06-25 at 19.12.41 (3).jpeg"
          alt="Background"
          fill
          className="object-cover object-top brightness-[0.2]"
        />
        <div className="absolute inset-0 bg-[#060606]/70"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#060606] via-transparent to-[#060606]"></div>

        <div className="relative z-10 max-w-[700px] mx-auto px-6 sm:px-10 text-center flex flex-col items-center gap-8">

          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-black/50 backdrop-blur-md border border-[#c77a16]/50 shadow-[0_0_30px_rgba(199,122,22,0.2)]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-pulse shadow-[0_0_10px_#25D366]"></span>
            <span className="text-xs font-black tracking-[0.2em] uppercase text-[#e2a836]">GRUPO VIP ABERTO AGORA</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-[0.95] tracking-tight">
            DÊ O PRIMEIRO<br/>
            PASSO RUMO<br/>
            <span className="bg-gradient-to-r from-[#e2a836] via-[#f7d58b] to-[#c77a16] bg-clip-text text-transparent">
              AO SEU LEGADO
            </span>
          </h2>

          <p className="text-neutral-300 text-base sm:text-lg leading-relaxed max-w-[500px]">
            As vagas são extremamente limitadas para garantir o acompanhamento direto de cada marcenaria. Entre no grupo antes que feche.
          </p>

          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-[500px] py-5 sm:py-6 rounded-2xl bg-gradient-to-r from-[#c77a16] via-[#e2a836] to-[#c77a16] bg-[length:200%_auto] hover:bg-right transition-all duration-500 text-[#060606] font-black text-base sm:text-lg uppercase tracking-wider flex items-center justify-center gap-4 shadow-[0_0_60px_rgba(226,168,54,0.4)] active:scale-[0.97] hover:-translate-y-1"
          >
            <FaWhatsapp className="text-3xl" />
            GARANTIR MINHA VAGA
          </a>

          <div className="flex items-center gap-2 text-neutral-500 text-xs">
            <FaShieldAlt className="text-[#e2a836]" /> 
            <span>Entrada imediata • Sem custo para entrar no grupo</span>
          </div>

        </div>
      </section>


      {/* Footer */}
      <footer className="w-full py-8 bg-[#060606] border-t border-white/5 text-center">
        <p className="text-sm text-neutral-500 font-medium">
          © {new Date().getFullYear()} Mentoria Viver de Marcenaria — Todos os direitos reservados.
        </p>
        <a href="https://www.wasventure.com.br" target="_blank" rel="noopener noreferrer" className="inline-block mt-2 opacity-50 hover:opacity-100 transition-opacity">
          <span className="text-[9px] text-neutral-500 tracking-[0.2em] font-black uppercase">Desenvolvido por WAS.</span>
        </a>
      </footer>

    </main>
  );
}
