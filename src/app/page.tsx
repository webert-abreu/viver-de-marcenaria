"use client"
import Image from "next/image";
import { useState } from "react";
import { 
  FaWhatsapp, 
  FaChevronDown, 
  FaCheckCircle, 
  FaQuoteLeft, 
  FaArrowRight
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
  { title: "ESCRAVO DA PRÓPRIA OFICINA", desc: "Trabalha 12 a 16 horas por dia cortando e montando, mas o dinheiro nunca sobra no final do mês." },
  { title: "REFÉM DO CLIENTE 'CHORÃO'", desc: "Clientes que só pedem desconto e comparam seu trabalho artesanal com móveis de magazine." },
  { title: "INSEGURANÇA NA PRECIFICAÇÃO", desc: "Medo constante de cobrar caro e perder a venda, ou cobrar barato e pagar para trabalhar." },
  { title: "SEM TEMPO PARA A FAMÍLIA", desc: "Não consegue tirar férias porque se você não estiver na oficina, a produção para totalmente." },
  { title: "FATURAMENTO ESTAGNADO", desc: "Trabalha cada vez mais, mas o lucro não cresce. Sem método de gestão, o teto de vidro nunca quebra." },
  { title: "PRESO NO OPERACIONAL", desc: "Você faz tudo: corta, monta, atende, cobra, compra material. Não sobra tempo para crescer." }
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
          HERO — Split Layout with 3D Floating Elements
         ================================================================ */}
      <section className="relative w-full min-h-screen flex items-center overflow-hidden">
        
        {/* Ambient Light Effects */}
        <div className="absolute top-[-150px] right-[-100px] w-[600px] h-[600px] bg-[#c77a16]/8 blur-[180px] pointer-events-none"></div>
        <div className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] bg-[#c77a16]/5 blur-[120px] pointer-events-none"></div>
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: "url('/wood_bg.png')", backgroundSize: "cover" }}></div>

        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 sm:px-10 py-16 flex flex-col lg:flex-row items-center gap-10 lg:gap-6">
          
          {/* LEFT — Text Content */}
          <div className="w-full lg:w-[55%] flex flex-col gap-7">

            <span className="text-[11px] text-[#e2a836] font-black tracking-[0.3em] uppercase">
              MENTORIA EXCLUSIVA — VAGAS LIMITADAS
            </span>

            <h1 className="text-[36px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-black uppercase leading-[0.95] tracking-tighter">
              <span className="text-white/90">DO OPERACIONAL</span><br/>
              <span className="text-white/90">AO </span>
              <span className="bg-gradient-to-r from-[#e2a836] via-[#f7d58b] to-[#c77a16] bg-clip-text text-transparent">
                EMPRESARIAL
              </span>
            </h1>

            <p className="text-neutral-300 text-base sm:text-lg leading-relaxed max-w-[520px]">
              O método prático para marceneiros que desejam <strong className="text-white">multiplicar o lucro</strong>, atrair clientes de alto padrão e conquistar a liberdade que sempre sonharam.
            </p>

            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit px-8 py-4 sm:py-5 rounded-2xl bg-gradient-to-r from-[#c77a16] via-[#e2a836] to-[#c77a16] bg-[length:200%_auto] hover:bg-right transition-all duration-500 text-[#060606] font-black text-sm sm:text-base uppercase tracking-wider flex items-center gap-3 shadow-[0_0_50px_rgba(226,168,54,0.3)] active:scale-[0.97] hover:-translate-y-0.5"
            >
              <FaWhatsapp className="text-2xl" />
              ENTRAR NO GRUPO VIP
              <FaArrowRight className="text-sm" />
            </a>

            <div className="flex items-center gap-6 mt-2">
              <div>
                <span className="text-3xl font-black text-[#e2a836] block leading-none">+40</span>
                <span className="text-[10px] text-neutral-500 uppercase tracking-wider font-bold mt-1 block">Anos de Experiência</span>
              </div>
              <div className="w-px h-10 bg-white/10"></div>
              <div>
                <span className="text-3xl font-black text-[#e2a836] block leading-none">+25</span>
                <span className="text-[10px] text-neutral-500 uppercase tracking-wider font-bold mt-1 block">Anos de Marcenaria</span>
              </div>
              <div className="w-px h-10 bg-white/10"></div>
              <div>
                <span className="text-3xl font-black text-[#e2a836] block leading-none">100+</span>
                <span className="text-[10px] text-neutral-500 uppercase tracking-wider font-bold mt-1 block">Mentorados</span>
              </div>
            </div>
          </div>

          {/* RIGHT — Composited 3D Scene with Photo */}
          <div className="w-full lg:w-[45%] flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[440px] aspect-[3/4]" style={{ perspective: "1200px" }}>

              {/* ===== BACK LAYER — Real 3D tools behind Edriano (slightly blurred) ===== */}
              
              {/* Wood Plank — back left, tilted */}
              <div 
                className="absolute -left-16 top-[12%] w-[160px] h-[160px] animate-float-slow pointer-events-none"
                style={{ transform: "rotateZ(-15deg) rotateY(20deg)", filter: "blur(3px)", zIndex: 1 }}
              >
                <Image src="/wood_plank_3d.jpg" alt="" fill className="object-contain" />
              </div>

              {/* Hammer — back right, angled */}
              <div 
                className="absolute -right-14 top-[5%] w-[150px] h-[150px] animate-float-reverse pointer-events-none"
                style={{ transform: "rotateZ(10deg)", filter: "blur(2px)", zIndex: 1 }}
              >
                <Image src="/hammer_3d.jpg" alt="" fill className="object-contain" />
              </div>

              {/* Chisel — back bottom-left */}
              <div 
                className="absolute -left-10 bottom-[8%] w-[130px] h-[130px] animate-float-medium pointer-events-none"
                style={{ transform: "rotateZ(25deg)", filter: "blur(2px)", zIndex: 1 }}
              >
                <Image src="/chisel_3d.jpg" alt="" fill className="object-contain" />
              </div>


              {/* ===== MIDDLE LAYER — Edriano Photo ===== */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.8)]" style={{ zIndex: 5 }}>
                <Image
                  src="/WhatsApp Image 2026-06-25 at 19.12.41 (2).jpeg"
                  alt="Edriano Bittencourt - Mentor"
                  fill
                  priority
                  className="object-cover object-top brightness-105"
                />
                {/* Edge vignette to blend into dark bg */}
                <div className="absolute inset-0 shadow-[inset_0_0_80px_30px_#060606]"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#060606] via-transparent to-transparent opacity-80"></div>
                <div className="absolute inset-0 bg-gradient-to-l from-[#060606]/50 via-transparent to-[#060606]/50"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-[#060606]/40 via-transparent to-transparent"></div>
                
                {/* Name label */}
                <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black/80 to-transparent" style={{ zIndex: 6 }}>
                  <p className="text-[10px] text-[#e2a836] font-black uppercase tracking-[0.2em]">MENTOR PRINCIPAL</p>
                  <p className="text-xl font-bold text-white">Edriano Bittencourt</p>
                </div>
              </div>


              {/* ===== FRONT LAYER — 3D tools in front with heavy bokeh ===== */}

              {/* Wood Plank piece — front right, strong bokeh */}
              <div 
                className="absolute -right-12 bottom-[28%] w-[140px] h-[140px] animate-float-medium pointer-events-none"
                style={{ transform: "rotateZ(30deg) scaleX(-1)", filter: "blur(8px)", zIndex: 10 }}
              >
                <Image src="/wood_plank_3d.jpg" alt="" fill className="object-contain" />
              </div>

              {/* Chisel — front top-left, bokeh */}
              <div 
                className="absolute -left-8 top-[30%] w-[110px] h-[110px] animate-float-reverse pointer-events-none"
                style={{ transform: "rotateZ(-40deg) scaleX(-1)", filter: "blur(10px)", zIndex: 10 }}
              >
                <Image src="/chisel_3d.jpg" alt="" fill className="object-contain" />
              </div>

              {/* Hammer — front bottom-right, subtle bokeh */}
              <div 
                className="absolute right-[-5%] top-[60%] w-[100px] h-[100px] animate-float-slow pointer-events-none"
                style={{ transform: "rotateZ(-20deg)", filter: "blur(6px)", zIndex: 10 }}
              >
                <Image src="/hammer_3d.jpg" alt="" fill className="object-contain" />
              </div>

              {/* Warm ambient glow — extreme bokeh (gives depth) */}
              <div 
                className="absolute right-[-20px] bottom-[40%] w-[90px] h-[90px] rounded-full bg-[#c77a16]/15 animate-float-slow pointer-events-none"
                style={{ filter: "blur(18px)", zIndex: 10 }}
              ></div>

            </div>
          </div>

        </div>
      </section>


      {/* ================================================================
          DIAGNÓSTICO — O Teto de Vidro (Clean Cards, No Icons)
         ================================================================ */}
      <section className="relative w-full py-20 sm:py-28 overflow-hidden">

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

          {/* Pain Points Grid — Clean, no emojis, no icons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {painPoints.map((item, i) => (
              <div 
                key={i}
                className="p-6 rounded-2xl bg-[#0e0b08] border border-white/5 hover:border-[#c77a16]/30 transition-colors duration-300 flex flex-col gap-3"
              >
                <h3 className="font-black text-white text-sm uppercase tracking-wide leading-snug">{item.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 p-6 rounded-2xl bg-[#0e0a06] border border-[#c77a16]/20 text-center max-w-[700px] mx-auto">
            <p className="text-neutral-200 text-sm sm:text-base font-medium">
              A boa notícia: não é falta de trabalho ou de qualidade. É apenas a falta do <strong className="text-[#e2a836]">Método Certo de Gestão</strong>. E ele existe.
            </p>
          </div>

        </div>
      </section>


      {/* ================================================================
          PARA QUEM É — Poster Cards
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
                className="relative w-full aspect-[3/4] rounded-3xl overflow-hidden border border-white/5 group shadow-[0_20px_60px_rgba(0,0,0,0.6)] hover:border-[#c77a16]/40 transition-all duration-500"
              >
                <Image 
                  src={aud.image} 
                  alt={aud.title} 
                  fill 
                  className="object-cover object-top group-hover:scale-110 transition-transform duration-1000 brightness-[0.6] group-hover:brightness-[0.75]" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060606] via-[#060606]/50 to-transparent"></div>

                <div className="absolute inset-0 p-6 sm:p-7 flex flex-col justify-between z-10">
                  <span className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#c77a16] to-[#e2a836] text-[#060606] font-black text-xl flex items-center justify-center shadow-xl">
                    {aud.step}
                  </span>

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
            Não precisa de experiência em gestão.<br/>
            <strong className="text-[#e2a836]">Vamos do zero ao empresarial.</strong>
          </p>

        </div>
      </section>


      {/* ================================================================
          MÓDULOS — Accordion
         ================================================================ */}
      <section className="relative w-full py-20 sm:py-28">

        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: "url('/wood_bg.png')", backgroundSize: "cover", backgroundPosition: "center" }}></div>

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

          <div className="flex flex-col gap-3">
            {modules.map((mod, idx) => {
              const isOpen = openModule === idx;
              return (
                <div 
                  key={idx}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen 
                      ? "bg-gradient-to-b from-[#140e08] to-[#0a0704] border-[#c77a16]/40 shadow-[0_15px_50px_rgba(199,122,22,0.1)]" 
                      : "bg-[#0c0906] border-white/5 hover:border-[#c77a16]/20"
                  }`}
                >
                  <button 
                    onClick={() => setOpenModule(isOpen ? null : idx)}
                    className="w-full p-5 sm:p-6 flex items-center justify-between text-left gap-4"
                  >
                    <div className="flex items-center gap-4">
                      <span className={`w-12 h-12 rounded-xl flex items-center justify-center font-black text-base shrink-0 transition-all duration-300 ${
                        isOpen 
                          ? "bg-gradient-to-br from-[#c77a16] to-[#e2a836] text-[#060606] shadow-[0_0_20px_rgba(199,122,22,0.25)]" 
                          : "bg-[#1a120b] text-[#e2a836] border border-[#c77a16]/15"
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

                      <div className="p-4 rounded-xl bg-[#0a0704] border border-[#c77a16]/15 flex gap-3 items-start">
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
          SOBRE O MENTOR — Split Section
         ================================================================ */}
      <section className="relative w-full py-20 sm:py-28 bg-gradient-to-b from-[#060606] via-[#0e0a06] to-[#060606] overflow-hidden">
        
        <div className="absolute top-0 right-[-200px] w-[500px] h-[500px] bg-[#c77a16]/5 blur-[150px] pointer-events-none"></div>

        <div className="max-w-[1100px] mx-auto px-6 sm:px-10">

          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
            
            {/* Photo */}
            <div className="w-full lg:w-[45%] shrink-0">
              <div className="relative w-full aspect-[3/4] rounded-3xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.7)]">
                <Image 
                  src="/WhatsApp Image 2026-06-25 at 19.12.41 (24).jpeg" 
                  alt="Edriano Bittencourt" 
                  fill 
                  className="object-cover object-top brightness-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060606]/60 via-transparent to-transparent"></div>
              </div>
            </div>

            {/* Bio */}
            <div className="w-full lg:w-[55%] flex flex-col gap-6">
              
              <div>
                <span className="text-[11px] text-[#e2a836] font-black uppercase tracking-[0.3em] block mb-2">
                  CONHEÇA SEU MENTOR
                </span>
                <h2 className="text-3xl sm:text-4xl font-black uppercase leading-tight">
                  EDRIANO <span className="text-[#e2a836]">BITTENCOURT</span>
                </h2>
              </div>

              <div className="flex gap-8">
                <div>
                  <span className="text-3xl font-black text-[#e2a836] block leading-none">40+</span>
                  <span className="text-[10px] text-neutral-500 uppercase tracking-wider font-bold mt-1 block">Carpintaria</span>
                </div>
                <div>
                  <span className="text-3xl font-black text-[#e2a836] block leading-none">25+</span>
                  <span className="text-[10px] text-neutral-500 uppercase tracking-wider font-bold mt-1 block">Marcenaria</span>
                </div>
                <div>
                  <span className="text-3xl font-black text-[#e2a836] block leading-none">100+</span>
                  <span className="text-[10px] text-neutral-500 uppercase tracking-wider font-bold mt-1 block">Mentorados</span>
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

              <div className="p-5 rounded-2xl bg-[#0a0704] border border-[#c77a16]/20 flex gap-3 items-start">
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
          FECHAMENTO — CTA Final
         ================================================================ */}
      <section className="relative w-full py-24 sm:py-32 overflow-hidden">
        
        <Image
          src="/WhatsApp Image 2026-06-25 at 19.12.41 (3).jpeg"
          alt="Background"
          fill
          className="object-cover object-top brightness-[0.15]"
        />
        <div className="absolute inset-0 bg-[#060606]/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#060606] via-transparent to-[#060606]"></div>

        <div className="relative z-10 max-w-[700px] mx-auto px-6 sm:px-10 text-center flex flex-col items-center gap-8">

          {/* Clean label, no pill */}
          <span className="text-xs font-black tracking-[0.3em] uppercase text-[#e2a836]">
            GRUPO VIP ABERTO AGORA
          </span>

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

          <span className="text-[11px] text-neutral-500 tracking-wider">
            Entrada imediata · Sem custo para entrar no grupo
          </span>

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
