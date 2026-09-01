"use client"
import Image from "next/image";
import { useState } from "react";
import { 
  FaWhatsapp, 
  FaChevronDown, 
  FaCheckCircle, 
  FaQuoteLeft, 
  FaShieldAlt, 
  FaClock, 
  FaUsers, 
  FaExclamationTriangle,
  FaArrowRight,
  FaStar,
  FaGem,
  FaLightbulb,
  FaAward
} from "react-icons/fa";

const modules = [
  {
    number: "01",
    aula: "MÓDULO 1",
    title: "Metanóia: MUDANÇA DE MENTE",
    subtitle: "O Primeiro Passo: A Transição de Marceneiro para Empresário",
    quote: "“O maior equipamento da sua marcenaria não é a CNC, a esquadrejadeira ou qualquer máquina. É a sua mente. Quando ela evolui, o faturamento acompanha.”",
    content: [
      "Quebra definitiva de crenças limitantes sobre precificação e dinheiro.",
      "Como assumir 100% da postura de dono e líder de alto rendimento.",
      "Planejamento de visão, metas e faturamento previsível para os próximos 12 meses.",
      "Tomada de decisões cirúrgicas baseadas em números reais, não em intuição.",
      "Como eliminar o medo de cobrar caro, investir em estrutura e contratar equipe."
    ]
  },
  {
    number: "02",
    aula: "MÓDULO 2",
    title: "PRECIFICAÇÃO & LUCRO REAL",
    subtitle: "Chega de trabalhar de graça e ver o dinheiro sumir no fim do mês",
    quote: "“Faturamento é ego, lucro é sanidade e caixa é rei. Aprenda a precificar para lucrar alto em cada metro de MDF cortado.”",
    content: [
      "A fórmula exata de custo fixo, custo variável e margem líquida real.",
      "Como incluir horas de projeto, imprevistos e montagem sem tomar prejuízo.",
      "Diferença entre margem de markup e margem de contribuição na marcenaria.",
      "Planilha prática de orçamento automatizada para não errar nunca mais.",
      "Técnica para apresentar o preço com firmeza e sem dar descontos desnecessários."
    ]
  },
  {
    number: "03",
    aula: "MÓDULO 3",
    title: "VENDAS DE ALTO PADRÃO & ATRAÇÃO",
    subtitle: "Atraia clientes exigentes que valorizam e pagam à vista",
    quote: "“Quem compete por preço morre por preço. Posicione-se como o melhor marceneiro da sua região e seja disputado pelos clientes certos.”",
    content: [
      "Posicionamento magnético no Instagram e Google para clientes Classe A/B.",
      "Script de atendimento e fechamento no primeiro contato do WhatsApp.",
      "Como criar propostas comerciais irresistíveis em 3D que fecham sozinhas.",
      "Parcerias estratégicas lucrativas com Arquitetos e Designers de Interiores.",
      "Estratégia de indicação premiada para ter fila de espera o ano todo."
    ]
  },
  {
    number: "04",
    aula: "MÓDULO 4",
    title: "GESTÃO, PROCESSOS & EQUIPE",
    subtitle: "Como sair da operação pesada sem deixar a qualidade cair",
    quote: "“Se a marcenaria para quando você viaja, você não tem uma empresa, tem um emprego com alto risco.”",
    content: [
      "Mapeamento de fluxo de produção: do corte à montagem sem retrabalho.",
      "Checklists operacionais à prova de erros para auxiliares e marceneiros.",
      "Como contratar, treinar e reter bons marceneiros com comissões justas.",
      "Gestão de prazos rigorosa para nunca mais atrasar uma entrega de cliente.",
      "Como estruturar a sua marcenaria para funcionar no piloto automático."
    ]
  },
  {
    number: "05",
    aula: "MÓDULO 5",
    title: "CONSTRUÇÃO DE LEGADO",
    subtitle: "Multiplicação de patrimônio e perpetuação do seu nome",
    quote: "“O maior penhor que você pode deixar a um filho é o legado. Construa algo que seus netos terão orgulho de continuar.”",
    content: [
      "Separação definitiva das contas pessoais da conta da marcenaria.",
      "Reserva de emergência empresarial e reinvestimento inteligente.",
      "Construção de marca própria sólida e reconhecida no mercado.",
      "Sucessão familiar e profissionalização da empresa.",
      "Mentoria contínua e networking direto com os maiores marceneiros do país."
    ]
  }
];

const painPoints = [
  {
    id: 1,
    title: "Escravo da própria oficina",
    desc: "Trabalha 12 a 16 horas por dia cortando e montando, mas o dinheiro nunca sobra no final do mês."
  },
  {
    id: 2,
    title: "Refém do cliente 'chorão'",
    desc: "Clientes que só pedem desconto, desvalorizam sua mão de obra e comparam seu trabalho com móveis de magazine."
  },
  {
    id: 3,
    title: "Insegurança na Precificação",
    desc: "Medo constante de cobrar caro e perder a venda, ou cobrar barato e pagar para trabalhar."
  },
  {
    id: 4,
    title: "Falta de tempo e liberdade",
    desc: "Não consegue tirar férias com a família porque se você não estiver na oficina, a produção para totalmente."
  }
];

const targetAudiences = [
  {
    step: "01",
    title: "Para quem quer sair do operacional",
    desc: "Você ama marcenaria, mas está exausto do trabalho pesado diário e quer se tornar um verdadeiro empresário e líder.",
    image: "/WhatsApp Image 2026-06-25 at 19.12.41 (26).jpeg"
  },
  {
    step: "02",
    title: "Para quem quer dobrar o lucro",
    desc: "Já tem uma estrutura montada, entrega móveis de qualidade, mas sente que o faturamento estagnou e falta gestão profissional.",
    image: "/WhatsApp Image 2026-06-25 at 19.12.41 (8).jpeg"
  },
  {
    step: "03",
    title: "Para quem busca construir um legado",
    desc: "Profissionais que não querem ser apenas mais um marceneiro na cidade, mas sim construir uma marca respeitada e duradoura.",
    image: "/WhatsApp Image 2026-06-25 at 19.12.41 (4).jpeg"
  }
];

export default function MentoriaPage() {
  const [openModule, setOpenModule] = useState<number | null>(0);

  const whatsappLink = "https://chat.whatsapp.com/C8CiQWBbNg9Cs9hrMGwDnV";

  return (
    <main className="min-h-screen relative overflow-x-hidden font-sans text-neutral-100 bg-[#080808]">
      
      {/* Background Ambience & Lighting */}
      <div className="fixed inset-0 z-0 opacity-10 pointer-events-none" style={{ backgroundImage: "url('/wood_bg.png')", backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "fixed" }}></div>
      <div className="fixed top-[-100px] left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-b from-[#c77a16]/20 via-[#e2a836]/5 to-transparent blur-[120px] pointer-events-none z-0"></div>
      <div className="fixed bottom-0 right-[-100px] w-[500px] h-[500px] bg-[#c77a16]/10 blur-[150px] pointer-events-none z-0"></div>

      {/* Main Container */}
      <div className="relative z-10 max-w-[540px] mx-auto px-5 py-8 pb-16 flex flex-col gap-12">
        
        {/* =========================================================
            1. HERO SECTION (High Authority & Dark Luxury)
           ========================================================= */}
        <section className="flex flex-col items-center text-center pt-2">
          
          {/* Exclusivity Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1c130b] border border-[#c77a16]/40 shadow-[0_0_20px_rgba(199,122,22,0.2)] mb-6 animate-pulse">
            <span className="w-2 h-2 rounded-full bg-[#e2a836] shadow-[0_0_8px_#e2a836]"></span>
            <span className="text-[10px] font-black tracking-[0.25em] uppercase text-[#e2a836]">
              MENTORIA EXCLUSIVA • VAGAS LIMITADAS
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-[32px] sm:text-[38px] font-black uppercase leading-[1.08] tracking-tight text-white mb-4">
            DO OPERACIONAL <br/>
            AO EMPRESARIAL: <br/>
            <span className="bg-gradient-to-r from-[#e2a836] via-[#f7d58b] to-[#c77a16] bg-clip-text text-transparent drop-shadow-[0_4px_25px_rgba(226,168,54,0.3)]">
              CONSTRUA O SEU IMPÉRIO
            </span> <br/>
            NA MARCENARIA
          </h1>

          {/* Subheadline */}
          <p className="text-neutral-300 text-[13.5px] leading-relaxed max-w-[440px] mb-8 font-medium">
            O método prático para marceneiros que desejam <strong className="text-white">multiplicar seu lucro</strong>, atrair clientes que pagam à vista e conquistar a liberdade que sempre sonharam.
          </p>

          {/* Hero Portrait with Golden Frame Glow */}
          <div className="relative w-full max-w-[380px] h-[440px] rounded-[32px] overflow-hidden border border-[#c77a16]/40 shadow-[0_20px_60px_rgba(0,0,0,0.8),0_0_40px_rgba(199,122,22,0.2)] mb-8 group">
            <Image 
              src="/WhatsApp Image 2026-06-25 at 19.12.41 (2).jpeg" 
              alt="Edriano Bittencourt - Mentor" 
              fill 
              priority
              className="object-cover object-top brightness-105 group-hover:scale-105 transition-transform duration-1000" 
            />
            {/* Dark Dramatic Gradients */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-90"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/40 via-transparent to-transparent"></div>
            
            {/* Floating Authority Badge */}
            <div className="absolute bottom-5 inset-x-5 p-4 rounded-2xl bg-[#120c07]/85 backdrop-blur-md border border-[#c77a16]/30 flex items-center justify-between shadow-xl">
              <div>
                <p className="text-[10px] text-[#e2a836] font-black uppercase tracking-widest">MENTOR PRINCIPAL</p>
                <p className="text-base font-bold text-white leading-tight">Edriano Bittencourt</p>
              </div>
              <div className="px-3 py-1.5 rounded-xl bg-[#c77a16]/20 border border-[#c77a16]/40 text-right">
                <span className="text-[11px] font-black text-[#e2a836] block leading-none">+40 ANOS</span>
                <span className="text-[8px] text-neutral-400 font-bold uppercase tracking-wider">DE OFÍCIO</span>
              </div>
            </div>
          </div>

          {/* Primary Glowing CTA Button */}
          <a 
            href={whatsappLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full max-w-[400px] py-4 px-6 rounded-2xl bg-gradient-to-r from-[#c77a16] via-[#e2a836] to-[#c77a16] bg-[length:200%_auto] hover:bg-right transition-all duration-500 text-[#080808] font-black text-[13px] uppercase tracking-widest flex items-center justify-center gap-3 shadow-[0_0_35px_rgba(226,168,54,0.4)] active:scale-[0.98] transform hover:-translate-y-0.5"
          >
            <FaWhatsapp className="text-2xl text-[#080808]" />
            <span>ENTRAR NO GRUPO VIP DA MENTORIA</span>
            <FaArrowRight className="text-sm" />
          </a>

          <p className="text-[11px] text-neutral-400 mt-3 flex items-center gap-1.5">
            <FaShieldAlt className="text-[#e2a836]" /> Acesso 100% Gratuito ao Grupo de Espera
          </p>

        </section>

        {/* =========================================================
            2. O DIAGNÓSTICO: O TETO DE VIDRO (Inspirado na Ref. 1)
           ========================================================= */}
        <section className="flex flex-col gap-5 pt-4">
          
          <div className="text-center">
            <span className="text-[10px] text-[#e2a836] font-black uppercase tracking-[0.25em] block mb-2">
              DIAGNÓSTICO EMPRESARIAL
            </span>
            <h2 className="text-2xl sm:text-3xl font-black uppercase text-white leading-tight">
              VOCÊ ATINGIU O SEU <br/>
              <span className="text-[#e2a836]">TETO DE VIDRO?</span>
            </h2>
            <p className="text-neutral-400 text-xs mt-2 max-w-[380px] mx-auto leading-relaxed">
              A maioria dos marceneiros talentosos fica presa na armadilha do esforço sem escala. Reconhece estes sinais?
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
            {painPoints.map((item) => (
              <div 
                key={item.id}
                className="p-5 rounded-2xl bg-gradient-to-b from-[#140e08] to-[#0c0805] border border-[#c77a16]/20 flex flex-col gap-2 hover:border-[#c77a16]/50 transition-colors shadow-lg"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-[#c77a16]/20 border border-[#c77a16]/30 flex items-center justify-center shrink-0">
                    <FaExclamationTriangle className="text-[#e2a836] text-xs" />
                  </div>
                  <h3 className="font-bold text-white text-[13px] leading-snug">{item.title}</h3>
                </div>
                <p className="text-neutral-400 text-[11.5px] leading-relaxed pl-1">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-2xl bg-[#140e08] border border-[#c77a16]/30 text-center flex flex-col items-center gap-2 mt-1">
            <p className="text-neutral-200 text-xs font-medium">
              💡 <strong>A boa notícia:</strong> Não é falta de trabalho ou de qualidade. É apenas a falta do <strong>Método Certo de Gestão</strong>.
            </p>
          </div>

        </section>

        {/* =========================================================
            3. A GRADE DE MÓDULOS (Inspirado na Ref. 2)
           ========================================================= */}
        <section className="flex flex-col gap-6 pt-4">
          
          <div className="text-center">
            <span className="text-[10px] text-[#e2a836] font-black uppercase tracking-[0.25em] block mb-2">
              MÉTODO COMPLETO
            </span>
            <h2 className="text-2xl sm:text-3xl font-black uppercase text-white leading-tight">
              O QUE VOCÊ VAI <br/>
              <span className="text-[#e2a836]">DOMINAR NA MENTORIA</span>
            </h2>
            <p className="text-neutral-400 text-xs mt-2 max-w-[360px] mx-auto leading-relaxed">
              5 pilares estratégicos desenhados para transformar a sua marcenaria em uma máquina de lucro e respeito.
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
                      ? "bg-[#140e08] border-[#c77a16]/60 shadow-[0_8px_30px_rgba(199,122,22,0.15)]" 
                      : "bg-[#0f0b07] border-white/5 hover:border-[#c77a16]/30"
                  }`}
                >
                  <button 
                    onClick={() => setOpenModule(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-5 flex items-center justify-between text-left gap-3"
                  >
                    <div className="flex items-center gap-3">
                      <span className={`w-9 h-9 rounded-xl flex items-center justify-center font-black text-sm shrink-0 transition-colors ${
                        isOpen 
                          ? "bg-gradient-to-br from-[#c77a16] to-[#e2a836] text-[#080808]" 
                          : "bg-[#1a120b] text-[#e2a836] border border-[#c77a16]/20"
                      }`}>
                        {mod.number}
                      </span>
                      <div>
                        <span className="text-[9px] font-black tracking-widest text-[#e2a836] uppercase block">
                          {mod.aula}
                        </span>
                        <h3 className="font-bold text-white text-[14px] leading-tight mt-0.5">
                          {mod.title}
                        </h3>
                      </div>
                    </div>
                    
                    <FaChevronDown className={`text-[#e2a836] text-xs transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 border-t border-[#c77a16]/10 flex flex-col gap-4 animate-fade-in-up">
                      <p className="text-neutral-300 text-xs font-semibold">
                        {mod.subtitle}
                      </p>

                      {mod.quote && (
                        <div className="p-3.5 rounded-xl bg-[#0a0704] border border-[#c77a16]/20 flex gap-2.5 items-start">
                          <FaQuoteLeft className="text-[#c77a16] text-sm shrink-0 mt-0.5" />
                          <p className="text-[#e2a836] text-[11px] font-serif italic leading-relaxed">
                            {mod.quote}
                          </p>
                        </div>
                      )}

                      <div className="flex flex-col gap-2">
                        <span className="text-[10px] font-black text-neutral-400 uppercase tracking-wider">Conteúdo Prático:</span>
                        {mod.content.map((item, cIdx) => (
                          <div key={cIdx} className="flex items-start gap-2 text-[12px] text-neutral-300">
                            <FaCheckCircle className="text-[#e2a836] text-xs shrink-0 mt-1" />
                            <span className="leading-snug">{item}</span>
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
            className="w-full py-4 rounded-xl bg-gradient-to-r from-[#c77a16] to-[#e2a836] text-[#080808] font-black text-xs uppercase tracking-widest text-center flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(199,122,22,0.3)] hover:scale-105 active:scale-95 transition-transform"
          >
            <FaWhatsapp className="text-lg" />
            <span>QUERO TER ACESSO A ESSE CONTEÚDO</span>
          </a>

        </section>

        {/* =========================================================
            4. PARA QUEM É A MENTORIA (Inspirado na Ref. 3)
           ========================================================= */}
        <section className="flex flex-col gap-6 pt-4">
          
          <div className="text-center">
            <span className="text-[10px] text-[#e2a836] font-black uppercase tracking-[0.25em] block mb-2">
              PERFIL IDEAL
            </span>
            <h2 className="text-2xl sm:text-3xl font-black uppercase text-white leading-tight">
              A MENTORIA É <br/>
              <span className="text-[#e2a836]">PARA VOCÊ QUE:</span>
            </h2>
          </div>

          <div className="flex flex-col gap-4">
            {targetAudiences.map((aud, i) => (
              <div 
                key={i}
                className="relative w-full h-[280px] rounded-3xl overflow-hidden border border-[#c77a16]/30 group shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
              >
                <Image 
                  src={aud.image} 
                  alt={aud.title} 
                  fill 
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700 brightness-90" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/75 to-transparent"></div>

                <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
                  <div className="w-8 h-8 rounded-full bg-[#c77a16] text-[#080808] font-black text-sm flex items-center justify-center shadow-lg">
                    {aud.step}
                  </div>

                  <div>
                    <h3 className="text-lg font-black text-white uppercase tracking-tight leading-tight">
                      {aud.title}
                    </h3>
                    <p className="text-neutral-300 text-xs mt-2 leading-relaxed max-w-[95%] font-medium">
                      {aud.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </section>

        {/* =========================================================
            5. SOBRE O MENTOR (Autoridade & Legado)
           ========================================================= */}
        <section className="p-6 sm:p-7 rounded-[32px] bg-gradient-to-b from-[#140e08] to-[#0a0704] border border-[#c77a16]/30 flex flex-col gap-6 shadow-2xl relative overflow-hidden">
          
          {/* Subtle glow */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#c77a16]/10 blur-3xl pointer-events-none"></div>

          <div>
            <span className="text-[10px] text-[#e2a836] font-black uppercase tracking-[0.25em] block mb-1">
              CONHEÇA SEU MENTOR
            </span>
            <h2 className="text-2xl font-black uppercase text-white leading-tight">
              EDRIANO BITTENCOURT
            </h2>
            <p className="text-[#c77a16] text-xs font-semibold mt-0.5">
              40 Anos de Carpintaria • 25 Anos de Marcenaria
            </p>
          </div>

          <div className="relative w-full h-[260px] rounded-2xl overflow-hidden border border-white/10 shadow-lg">
            <Image 
              src="/WhatsApp Image 2026-06-25 at 19.12.41 (24).jpeg" 
              alt="Edriano Bittencourt na oficina" 
              fill 
              className="object-cover object-top" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0704] via-transparent to-transparent"></div>
          </div>

          <div className="text-neutral-300 text-xs leading-relaxed flex flex-col gap-3 font-medium">
            <p>
              &quot;A marcenaria não foi uma profissão que escolhi. Foi um legado que recebi, uma missão que abracei e um propósito que decidi viver.&quot;
            </p>
            <p>
              Filho de carpinteiro, Edriano aprendeu na prática que <strong className="text-white">o caráter vale mais do que qualquer ferramenta</strong> e que a palavra de um homem tem valor inegociável.
            </p>
            <p>
              Hoje, sua missão é guiar donos de marcenarias de todo o Brasil a transformarem o trabalho com a madeira em empresas lucrativas, organizadas e respeitadas por gerações.
            </p>
          </div>

          {/* Legacy Quote Highlight */}
          <div className="p-4 rounded-2xl bg-[#080503] border border-[#c77a16]/30 text-center">
            <p className="text-white font-serif italic text-sm leading-relaxed">
              &quot;O maior penhor que você pode deixar a um filho é o legado.&quot;
            </p>
          </div>

        </section>

        {/* =========================================================
            6. CTA FINAL & ESCASSEZ (Fechamento)
           ========================================================= */}
        <section className="p-7 rounded-[32px] bg-gradient-to-br from-[#1a120b] via-[#0f0a06] to-[#080808] border-2 border-[#c77a16]/50 text-center flex flex-col items-center gap-5 shadow-[0_0_50px_rgba(199,122,22,0.25)] relative overflow-hidden">
          
          {/* Top pulse badge */}
          <div className="px-4 py-1.5 rounded-full bg-[#c77a16]/20 border border-[#c77a16]/40 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-ping"></span>
            <span className="text-[10px] font-black uppercase tracking-widest text-[#e2a836]">GRUPO VIP ABERTO</span>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-black uppercase text-white leading-tight">
              DÊ O PRIMEIRO PASSO <br/>
              <span className="bg-gradient-to-r from-[#e2a836] to-[#f7d58b] bg-clip-text text-transparent">
                RUMO AO SEU LEGADO
              </span>
            </h2>
            <p className="text-neutral-300 text-xs mt-3 max-w-[380px] leading-relaxed">
              As vagas para a nova turma da Mentoria são extremamente limitadas para garantir o acompanhamento direto de cada marcenaria.
            </p>
          </div>

          <div className="w-full flex flex-col gap-3 mt-2">
            <a 
              href={whatsappLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#c77a16] via-[#e2a836] to-[#c77a16] bg-[length:200%_auto] hover:bg-right transition-all duration-500 text-[#080808] font-black text-xs sm:text-sm uppercase tracking-widest flex items-center justify-center gap-3 shadow-[0_0_40px_rgba(226,168,54,0.5)] active:scale-[0.98]"
            >
              <FaWhatsapp className="text-2xl text-[#080808]" />
              <span>GARANTIR VAGA NO GRUPO VIP</span>
            </a>

            <p className="text-[10px] text-neutral-500 uppercase tracking-widest">
              Entrada imediata • Sem custo para entrar no grupo
            </p>
          </div>

        </section>

        {/* Footer */}
        <footer className="pt-4 flex flex-col items-center gap-2 text-center">
          <p className="text-[11px] text-neutral-500 font-medium">
            © {new Date().getFullYear()} Mentoria Viver de Marcenaria • Todos os direitos reservados.
          </p>
          <a href="https://www.wasventure.com.br" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
            <span className="text-[8px] text-neutral-500 tracking-[0.2em] font-black uppercase">Desenvolvido por WAS.</span>
          </a>
        </footer>

      </div>
    </main>
  );
}
