"use client"
import Image from "next/image";
import { useState } from "react";
import { FaYoutube, FaWhatsapp, FaArrowRight, FaLaptop, FaCalendarAlt, FaShoppingCart } from "react-icons/fa";

export default function Home() {
  const [showBio, setShowBio] = useState(false);
  const [showSchedule, setShowSchedule] = useState(false);

  return (
    <main className="min-h-screen relative flex justify-center overflow-x-hidden font-sans text-neutral-100 bg-[#0d0d0d]">
      
      {/* Background Texture & Pulse Effect */}
      <div className="absolute inset-0 z-0 opacity-[0.12] pointer-events-none" style={{ backgroundImage: "url('/wood_bg.png')", backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "fixed" }}></div>
      <div className="absolute top-0 w-full h-[500px] bg-gradient-to-b from-[#c77a16]/10 via-[#0d0d0d]/90 to-[#0d0d0d] z-0 pointer-events-none animate-pulse" style={{ animationDuration: '4s' }}></div>

      {/* Main Content - Interactive App UX */}
      <div className="w-full max-w-[480px] px-5 py-12 pb-8 relative z-10 flex flex-col gap-6">
        

        {/* Biography & Legacy Section - Styled like Lucas Card */}
        <div className="relative animate-fade-in-up delay-100 flex flex-col gap-3">
          <div className="relative w-full rounded-[24px] overflow-hidden bg-gradient-to-b from-[#1a110a] to-[#0d0d0d] border border-[#c77a16]/30 shadow-[0_10px_40px_rgba(199,122,22,0.15)]">
            
            {/* Background Image of Edriano */}
            <div className="absolute right-[-25%] bottom-0 w-[125%] h-[100%] opacity-100 z-0 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/20 to-transparent z-10"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0d] via-[#0d0d0d]/40 to-transparent z-10"></div>
              <Image src="/WhatsApp Image 2026-06-25 at 19.12.41 (2).jpeg" alt="Edriano Bittencourt" fill className="object-cover object-top brightness-110" />
            </div>

            <div className="relative z-10 p-7 flex flex-col min-h-[460px]">
              
              {/* Top Label */}
              <p className="text-[#c77a16] text-[9px] font-black tracking-widest uppercase mb-4 drop-shadow-md">
                MINHA HISTÓRIA • 40 ANOS DE MARCENARIA
              </p>

              {/* Big Bold Title */}
              <h2 className="text-[32px] font-black uppercase leading-[1.05] mb-5 tracking-tight text-white font-sans drop-shadow-lg">
                CONSTRUA <br />
                <span className="text-[#c77a16]">O SEU</span> <br />
                <span className="text-[#c77a16]">LEGADO</span>
              </h2>
              
              {/* Short text paragraphs */}
              <div className="text-neutral-200 text-[12px] leading-relaxed max-w-[75%] flex flex-col gap-3 font-medium mb-6 drop-shadow-md">
                <p>
                  Você pode ser um bom marceneiro... mas se não construir um legado, seu trabalho será apenas madeira.
                </p>
                <p>
                  Aqui você conhece a história de quem vive o ofício há mais de 4 décadas e aprende que &quot;o maior penhor que você pode deixar a um filho é o legado&quot;.
                </p>
              </div>

              {/* Pills / Checks */}
              <div className="flex flex-col gap-2.5 mb-8 mt-auto">
                <div className="flex items-center gap-2 bg-[#1a110a]/80 border border-[#c77a16]/30 rounded-full px-3 py-1.5 w-fit backdrop-blur-md">
                  <span className="text-[#c77a16] text-[10px]">✓</span>
                  <span className="text-white text-[10px] font-bold tracking-wide">+40 Anos de Experiência</span>
                </div>
                <div className="flex items-center gap-2 bg-[#1a110a]/80 border border-[#c77a16]/30 rounded-full px-3 py-1.5 w-fit backdrop-blur-md">
                  <span className="text-[#c77a16] text-[10px]">✓</span>
                  <span className="text-white text-[10px] font-bold tracking-wide">Marceneiro e Mentor</span>
                </div>
                <div className="flex items-center gap-2 bg-[#1a110a]/80 border border-[#c77a16]/30 rounded-full px-3 py-1.5 w-fit backdrop-blur-md">
                  <span className="text-[#c77a16] text-[10px]">✓</span>
                  <span className="text-white text-[10px] font-bold tracking-wide">Resultados Comprovados</span>
                </div>
              </div>

              {/* Bottom CTA Button */}
              <button onClick={() => setShowBio(!showBio)} className="bg-gradient-to-r from-[#c77a16] to-[#e2a836] text-[#0d0d0d] font-black uppercase text-[11px] tracking-wide py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 w-fit hover:scale-105 transition-transform shadow-[0_0_20px_rgba(199,122,22,0.4)] active:scale-95">
                {showBio ? "FECHAR HISTÓRIA ↑" : "LER HISTÓRIA COMPLETA ➔"}
              </button>
              
            </div>
          </div>

          {/* Expanded Full Biography */}
          {showBio && (
            <div className="bg-[#111] border border-white/5 rounded-3xl p-6 flex flex-col gap-4 shadow-xl animate-fade-in-up">
              <h3 className="text-[#c77a16] text-xl font-serif italic leading-tight">Uma vida construída sobre fé, família e legado</h3>
              
              <div className="text-neutral-400 text-[13px] leading-relaxed flex flex-col gap-3">
                <p><strong className="text-neutral-200">A marcenaria não foi uma profissão que escolhi. Foi um legado que recebi, uma missão que abracei e um propósito que decidi viver.</strong></p>
                <p>Meu nome é <strong className="text-[#c77a16]">Edriano Bittencourt</strong>. Há mais de quatro décadas a madeira faz parte da minha vida. São mais de 40 anos como carpinteiro e 25 anos como marceneiro, mas a minha história não começou em uma marcenaria. Ela começou dentro de casa.</p>
                <p>Meu pai foi meu primeiro mestre. Ensinou que o caráter vale mais do que qualquer ferramenta, que a palavra de um homem tem valor e que todo trabalho feito com excelência honra a Deus.</p>
                <p>Minha mãe despertou em mim o espírito empreendedor. Com ela aprendi que é possível transformar dificuldades em oportunidades.</p>
                <p>Sou casado e pai de uma filha. Tudo o que construo tem um propósito maior: honrar a Deus, honrar meus pais e deixar para minha filha um exemplo que permaneça por gerações.</p>
                <p>Minha missão hoje vai muito além da marcenaria. Quero formar profissionais melhores, empresários mais preparados e líderes mais humanos.</p>
              </div>

              <div className="mt-4 p-5 border border-[#c77a16]/30 bg-gradient-to-br from-[#c77a16]/10 to-[#0d0d0d] rounded-2xl relative overflow-hidden group">
                <p className="text-white font-serif italic text-lg leading-relaxed text-center relative z-10">
                  &quot;O maior penhor que você pode deixar a um filho é o legado.&quot;
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Podcast Section */}
        <div className="bg-[#111] border border-white/5 rounded-3xl flex flex-col overflow-hidden animate-fade-in-up delay-300 shadow-xl mt-2">
          <div className="p-4 flex flex-col gap-3 border-b border-white/5 bg-[#161616]">
             <div className="flex items-center justify-between">
               <div className="flex items-center gap-3">
                 <div className="relative">
                   <FaYoutube className="text-[#FF0000] text-2xl" />
                   <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                     <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                     <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
                   </span>
                 </div>
                 <div>
                   <h3 className="font-bold text-[14px] text-white">Podcast Apaixonados</h3>
                   <div className="flex items-center gap-1.5 mt-0.5">
                     <span className="text-[10px] text-[#FF0000] uppercase tracking-wider font-bold">Programado: 09/07 às 21h</span>
                   </div>
                 </div>
               </div>
               <a href="https://www.youtube.com/@APAIXONADOSPORMARCENARIA-o4b?sub_confirmation=1" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-[#FF0000] hover:bg-[#CC0000] transition-colors rounded-xl text-[10px] font-black text-white uppercase tracking-widest shadow-[0_0_15px_rgba(255,0,0,0.3)]">
                 Inscrever-se
               </a>
             </div>
             
             <div className="flex gap-2">
               <button onClick={() => setShowSchedule(!showSchedule)} className="flex-1 py-2.5 bg-[#1a1a1a] hover:bg-[#222] transition-colors rounded-xl text-[10px] font-bold text-[#c77a16] uppercase tracking-widest text-center border border-[#c77a16]/20 flex items-center justify-center gap-2">
                 <FaCalendarAlt className="text-[#c77a16]" /> {showSchedule ? "Ocultar Agenda" : "Próximos Ao Vivos"}
               </button>
               <a href="https://www.youtube.com/@APAIXONADOSPORMARCENARIA-o4b/videos" target="_blank" rel="noopener noreferrer" className="flex-1 py-2.5 bg-[#1a1a1a] hover:bg-[#222] transition-colors rounded-xl text-[10px] font-bold text-neutral-300 uppercase tracking-widest text-center border border-white/5 flex items-center justify-center gap-2">
                 <FaYoutube className="text-neutral-400" /> Anteriores
               </a>
             </div>
             
             {/* Dropdown de Agenda */}
             {showSchedule && (
               <div className="flex flex-col gap-2 mt-2 bg-[#0a0a0a] border border-white/5 rounded-xl p-3 animate-fade-in-up">
                 <h4 className="text-[11px] text-neutral-400 font-bold uppercase tracking-wider mb-1">Próximos Episódios</h4>
                 {[
                   { id: 1, title: "APAIXONADOS POR MARCENARIA - 77 EP", date: "09/07, 21:00" },
                   { id: 2, title: "APAIXONADOS POR MARCENARIA - 78 EP", date: "16/07, 21:00" },
                   { id: 3, title: "APAIXONADOS POR MARCENARIA - 79 EP", date: "23/07, 21:00" },
                   { id: 4, title: "APAIXONADOS POR MARCENARIA - 80 EP", date: "30/07, 21:00" },
                 ].map((live) => (
                   <div key={live.id} className="flex flex-col gap-1 p-2.5 rounded-lg bg-[#111] border border-white/5">
                     <span className="text-[10px] text-[#FF0000] font-bold uppercase tracking-widest">{live.date}</span>
                     <span className="text-[12px] text-white font-medium">{live.title}</span>
                   </div>
                  ))}
                </div>
              )}
          </div>
          <a href="https://www.youtube.com/live/whtTiSMxFk0" target="_blank" rel="noopener noreferrer" className="relative w-full aspect-video bg-[#0a0a0a] block group cursor-pointer border-t border-white/5 overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="https://img.youtube.com/vi/whtTiSMxFk0/maxresdefault.jpg" 
              alt="Capa do Episódio Ao Vivo"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
              onError={(e) => { e.currentTarget.src = "https://img.youtube.com/vi/whtTiSMxFk0/hqdefault.jpg" }}
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-16 h-12 bg-[#FF0000] rounded-xl flex items-center justify-center shadow-[0_0_30px_rgba(255,0,0,0.6)] group-hover:scale-110 transition-transform duration-300">
                <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-white border-b-[8px] border-b-transparent ml-1"></div>
              </div>
            </div>
            <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex justify-between items-end">
              <span className="text-white text-xs font-bold drop-shadow-md">Assistir no YouTube</span>
            </div>
          </a>
        </div>

        {/* Pulsing Hero Card (Mentoria) */}
        <div className="relative animate-fade-in-up delay-400 mt-2">
          {/* Subtle pulse ring behind the hero card */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#c77a16] to-[#e2a836] rounded-3xl opacity-20 blur-lg animate-pulse" style={{ animationDuration: '3s' }}></div>
          
          <a href="https://wa.me/5547999695575?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20a%20Mentoria%20Viver%20de%20Marcenaria!" target="_blank" rel="noopener noreferrer" className="relative w-full h-[400px] rounded-3xl overflow-hidden group border border-[#c77a16]/30 block active:scale-[0.98] transition-all shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
            <Image src="/WhatsApp Image 2026-06-25 at 19.12.41 (3).jpeg" alt="Mentoria" fill className="object-cover object-top group-hover:scale-110 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/50 to-transparent"></div>
            
            <div className="absolute top-4 left-4 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#c77a16] animate-ping"></span>
              <span className="px-3 py-1 bg-[#c77a16]/20 backdrop-blur-md text-[11px] font-black tracking-widest uppercase text-[#c77a16] border border-[#c77a16]/30 rounded">Vagas Abertas</span>
            </div>

            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <div>
                <h3 className="font-bold text-white text-3xl font-serif italic tracking-wide leading-tight">Mentoria Viver de Marcenaria</h3>
                <p className="text-neutral-300 text-sm mt-2 max-w-[90%] leading-relaxed">Do operacional ao empresarial. Construa o seu império.</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-[#c77a16] flex items-center justify-center shadow-[0_0_15px_rgba(199,122,22,0.5)] group-hover:scale-110 transition-transform shrink-0">
                <FaArrowRight className="text-[#0d0d0d] text-lg" />
              </div>
            </div>
          </a>
        </div>

        {/* Loja Apaixonados por Marcenaria */}
        <div className="relative animate-fade-in-up delay-500 mt-2">
          <a href="https://wa.me/554799691000?text=Ol%C3%A1%2C%20gostaria%20de%20ver%20os%20produtos%20da%20Loja%20Apaixonados%20por%20Marcenaria!" target="_blank" rel="noopener noreferrer" className="relative w-full h-[180px] rounded-3xl overflow-hidden group border border-white/10 block active:scale-[0.98] transition-all shadow-xl bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d]">
            {/* Minimal Background pattern */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('/wood_bg.png')", backgroundSize: "cover", backgroundPosition: "center" }}></div>
            
            <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-bold text-white text-2xl font-serif italic tracking-wide">Loja Apaixonados</h3>
                  <p className="text-[#c77a16] text-[10px] uppercase tracking-[0.2em] font-bold mt-1">Produtos Oficiais</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#111] flex items-center justify-center border border-white/10 shadow-lg group-hover:bg-[#c77a16] group-hover:border-[#c77a16] transition-colors">
                  <FaShoppingCart className="text-white text-sm" />
                </div>
              </div>
              
              <div className="flex items-center justify-between mt-auto">
                <p className="text-neutral-400 text-xs">Camisas • Bonés • Copos</p>
                <span className="text-[10px] font-bold text-white uppercase tracking-wider bg-white/10 px-3 py-1.5 rounded-lg group-hover:bg-white group-hover:text-black transition-colors">
                  Acessar Loja
                </span>
              </div>
            </div>
          </a>
        </div>

        {/* Regular Full-Bleed Cards (Evento & Cursos) */}
        <div className="flex flex-col gap-4 animate-fade-in-up delay-600">
          
          {/* Evento Presencial Link */}
          <a href="#evento" className="relative w-full h-[400px] rounded-3xl overflow-hidden group border border-white/5 block active:scale-[0.98] transition-transform shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
            <Image src="/WhatsApp Image 2026-06-25 at 19.12.41 (26).jpeg" alt="Evento Presencial" fill className="object-cover object-top group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/60 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <div className="flex flex-col items-start">
                <span className="px-3 py-1.5 bg-white/10 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-widest rounded-full mb-3 border border-white/10 flex items-center gap-2 shadow-lg">
                  <svg className="animate-spin h-3 w-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Turma de Outubro
                </span>
                <h3 className="font-bold text-white text-3xl font-serif italic tracking-wide leading-tight drop-shadow-md">Imersão Presencial</h3>
                <p className="text-neutral-300 text-sm mt-2 max-w-[95%] leading-relaxed">
                  Viva a experiência completa. Aprenda na prática os segredos de quem construiu um legado. Em breve, lista de espera para Outubro.
                </p>
              </div>
              <div className="w-12 h-12 rounded-full bg-[#1a1a1a]/80 flex items-center justify-center backdrop-blur-sm group-hover:bg-[#4de782] transition-colors shrink-0 border border-white/10 shadow-lg mb-2">
                <FaCalendarAlt className="text-white text-lg" />
              </div>
            </div>
          </a>

          {/* Cursos Link */}
          <a href="#cursos" className="relative w-full h-[400px] rounded-3xl overflow-hidden group border border-white/5 block active:scale-[0.98] transition-transform shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
            <Image src="/WhatsApp Image 2026-06-25 at 19.12.41 (8).jpeg" alt="Cursos Online" fill className="object-cover object-top group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/60 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <div className="flex flex-col items-start">
                <span className="px-3 py-1 bg-[#c77a16]/20 backdrop-blur-sm text-[#e2a836] text-[10px] font-bold uppercase tracking-widest rounded-full mb-3 border border-[#c77a16]/20">
                  Formação Completa
                </span>
                <h3 className="font-bold text-white text-2xl tracking-wide uppercase leading-tight drop-shadow-md">Cursos Online</h3>
                <p className="text-neutral-300 text-sm mt-2 max-w-[95%] leading-relaxed">
                  Do básico ao avançado. Desenvolva suas habilidades no seu próprio ritmo e alcance o nível profissional. Acesse o Portal do Aluno.
                </p>
              </div>
              <div className="w-12 h-12 rounded-full bg-[#1a1a1a]/80 flex items-center justify-center backdrop-blur-sm group-hover:bg-[#c77a16] transition-colors shrink-0 border border-white/10 shadow-lg mb-2">
                <FaLaptop className="text-white text-lg" />
              </div>
            </div>
          </a>
        </div>

        {/* Instagram Profile Flat Panel */}
        <a href="https://instagram.com/edriano_bittencourt" target="_blank" rel="noopener noreferrer" 
           className="bg-[#111] border border-white/5 rounded-3xl p-5 flex flex-col gap-4 hover:border-[#0095F6]/50 transition-colors block animate-fade-in-up delay-700 shadow-xl mt-1">
          
          <div className="flex items-center gap-4">
            <div className="relative w-[65px] h-[65px] shrink-0">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] p-[2px] shadow-lg">
                <div className="w-full h-full bg-[#111] rounded-full overflow-hidden relative border-[2.5px] border-[#111]">
                  <Image src="/WhatsApp Image 2026-06-25 at 19.12.41 (4).jpeg" alt="Instagram Profile" fill className="object-cover object-[center_top]" />
                </div>
              </div>
            </div>
            
            <div className="flex flex-col flex-1">
              <div className="flex items-center gap-1 mb-1">
                <h3 className="font-bold text-[14px] text-white">edriano_bittencourt</h3>
                <svg viewBox="0 0 24 24" className="w-[14px] h-[14px] text-[#0095F6] fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1.9 14.7L6 12.6l1.5-1.5 2.6 2.6 6.4-6.4 1.5 1.5-7.9 7.9z"/></svg>
              </div>
              <div className="flex items-center justify-between text-[11px] text-neutral-500 mt-1 pr-1">
                <div className="flex flex-col items-center"><span className="font-bold text-sm text-white">479</span> posts</div>
                <div className="flex flex-col items-center"><span className="font-bold text-sm text-white">3.406</span> seguidores</div>
                <div className="flex flex-col items-center"><span className="font-bold text-sm text-white">153</span> seguindo</div>
              </div>
            </div>
          </div>

          <div className="text-[12px] text-neutral-400 leading-[1.6]">
            Profissional da área de marcenaria atua a mais de 30 anos no mercado, criador de conteúdo digital, sócio fundador da...
          </div>

          <div className="w-full py-3 bg-[#0095F6] hover:bg-[#1877F2] rounded-xl text-center text-[11px] font-black transition-colors text-white mt-1 uppercase tracking-widest shadow-[0_4px_15px_rgba(0,149,246,0.3)]">
            Seguir no Instagram
          </div>
        </a>
        
        {/* Action Button - WhatsApp */}
        <div className="w-full animate-fade-in-up delay-1000 mt-2">
          <a href="https://wa.me/5547999695575" target="_blank" rel="noopener noreferrer" className="w-full rounded-2xl bg-[#1a1a1a]/80 backdrop-blur hover:bg-[#25D366] transition-colors py-4 px-4 flex items-center justify-center gap-3 group border border-[#c77a16]/30 hover:border-[#25D366] shadow-[0_5px_20px_rgba(37,211,102,0.15)]">
            <FaWhatsapp className="text-[#25D366] group-hover:text-white text-2xl transition-colors" />
            <span className="font-black text-[13px] uppercase tracking-wider text-neutral-200 group-hover:text-white transition-colors">Fale Comigo no WhatsApp</span>
          </a>
        </div>

        <footer className="mt-4 pb-0 flex justify-center animate-fade-in-up delay-1000">
          <a href="https://www.wasventure.com.br" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity group">
            <span className="text-[9px] text-neutral-500 tracking-[0.2em] font-black uppercase mt-[2px] group-hover:text-neutral-400 transition-colors">Desenvolvido por</span>
            <div className="w-[95px] h-[38px] relative">
              <Image src="/Logotipo ilustrado ervateria chimarrão verde, bege e marrom.png" alt="WAS." fill className="object-contain object-left" />
            </div>
          </a>
        </footer>

      </div>
    </main>
  );
}
