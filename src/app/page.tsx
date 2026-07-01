"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaYoutube, FaInstagram, FaWhatsapp, FaArrowRight, FaUsers, FaLaptop, FaHammer, FaCalendarAlt, FaChevronRight } from "react-icons/fa";

export default function Home() {
  const [greeting, setGreeting] = useState("Olá");

  useEffect(() => {
    // Greeting logic based on local time
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) setGreeting("Bom dia");
    else if (hour >= 12 && hour < 18) setGreeting("Boa tarde");
    else setGreeting("Boa noite");
  }, []);

  return (
    <main className="min-h-screen relative flex justify-center overflow-x-hidden font-sans text-neutral-100 bg-[#0d0d0d]">
      
      {/* Background Texture & Pulse Effect */}
      <div className="absolute inset-0 z-0 opacity-[0.12] pointer-events-none" style={{ backgroundImage: "url('/wood_bg.png')", backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "fixed" }}></div>
      <div className="absolute top-0 w-full h-[500px] bg-gradient-to-b from-[#c77a16]/10 via-[#0d0d0d]/90 to-[#0d0d0d] z-0 pointer-events-none animate-pulse" style={{ animationDuration: '4s' }}></div>



      {/* Main Content - Interactive App UX */}
      <div className="w-full max-w-[480px] px-5 py-12 pb-24 relative z-10 flex flex-col gap-6">
        
        {/* Dynamic Profile Section */}
        <div className="flex flex-col items-center text-center animate-fade-in-up delay-100">
          <span className="text-neutral-400 text-[11px] font-bold uppercase tracking-[0.2em] mb-3">{greeting}, marceneiro!</span>
          
          <div className="relative w-[115px] h-[115px] mb-4 group">
            {/* Glowing rings */}
            <div className="absolute inset-0 rounded-full border border-[#c77a16]/30 animate-ping" style={{ animationDuration: '3s' }}></div>
            <div className="absolute inset-[-4px] rounded-full bg-gradient-to-tr from-[#c77a16] to-[#e2a836] p-[3px] shadow-[0_0_30px_rgba(199,122,22,0.5)] transition-transform duration-500 group-hover:scale-105">
              <div className="w-full h-full bg-[#1a1a1a] rounded-full overflow-hidden relative border-4 border-[#0d0d0d]">
                <Image src="/WhatsApp Image 2026-06-25 at 19.12.41 (6).jpeg" alt="Edriano" fill className="object-cover object-[center_top] group-hover:scale-110 transition-transform duration-700" />
              </div>
            </div>
          </div>
          
          <h1 className="text-2xl font-black tracking-wider uppercase text-white mt-1">Edriano</h1>
          <p className="text-[#c77a16] text-[10px] tracking-[0.3em] uppercase font-bold mt-1">Apaixonados por Marcenaria</p>
          <p className="text-neutral-400 text-[13px] mt-4 leading-relaxed max-w-[280px]">
            Transformando oficinas em negócios lucrativos e escaláveis.
          </p>
        </div>

        {/* Action Buttons Row */}
        <div className="grid grid-cols-2 gap-3 animate-fade-in-up delay-200">
          <a href="https://wa.me/5547999695575" target="_blank" rel="noopener noreferrer" className="col-span-1 rounded-2xl bg-[#1a1a1a]/80 backdrop-blur hover:bg-[#25D366] transition-colors py-3 px-4 flex items-center justify-center gap-2 group border border-white/5 hover:border-[#25D366] shadow-lg">
            <FaWhatsapp className="text-[#25D366] group-hover:text-white text-lg transition-colors" />
            <span className="font-bold text-[11px] uppercase tracking-wider text-neutral-300 group-hover:text-white transition-colors">Fale Comigo</span>
          </a>

          <a href="#comunidade" className="col-span-1 rounded-2xl bg-[#1a1a1a]/80 backdrop-blur hover:bg-[#5865F2] transition-colors py-3 px-4 flex items-center justify-center gap-2 group border border-white/5 hover:border-[#5865F2] shadow-lg">
            <FaUsers className="text-[#5865F2] group-hover:text-white text-lg transition-colors" />
            <span className="font-bold text-[11px] uppercase tracking-wider text-neutral-300 group-hover:text-white transition-colors">Comunidade VIP</span>
          </a>
        </div>

        {/* Pulsing Hero Card (Mentoria) */}
        <div className="relative animate-fade-in-up delay-300 mt-2">
          {/* Subtle pulse ring behind the hero card */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#c77a16] to-[#e2a836] rounded-3xl opacity-20 blur-lg animate-pulse" style={{ animationDuration: '3s' }}></div>
          
          <a href="https://wa.me/5547999695575?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20a%20Mentoria%20Viver%20de%20Marcenaria!" target="_blank" rel="noopener noreferrer" className="relative w-full h-[200px] rounded-3xl overflow-hidden group border border-[#c77a16]/30 block active:scale-[0.98] transition-all shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
            <Image src="/WhatsApp Image 2026-06-25 at 19.12.41 (3).jpeg" alt="Mentoria" fill className="object-cover object-[center_30%] group-hover:scale-110 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/80 to-transparent"></div>
            
            <div className="absolute top-4 left-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#c77a16] animate-ping"></span>
              <span className="px-2 py-0.5 bg-[#c77a16]/20 backdrop-blur-md text-[9px] font-black tracking-widest uppercase text-[#c77a16] border border-[#c77a16]/30 rounded">Vagas Abertas</span>
            </div>

            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
              <div>
                <h3 className="font-bold text-white text-2xl font-serif italic tracking-wide">Mentoria Viver de Marcenaria</h3>
                <p className="text-neutral-400 text-[11px] mt-1 max-w-[85%] leading-relaxed">Do operacional ao empresarial. Construa o seu império.</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-[#c77a16] flex items-center justify-center shadow-[0_0_15px_rgba(199,122,22,0.5)] group-hover:scale-110 transition-transform shrink-0">
                <FaArrowRight className="text-[#0d0d0d] text-sm" />
              </div>
            </div>
          </a>
        </div>

        {/* Interactive Horizontal Carousel for Projects */}
        <div className="flex flex-col gap-3 mt-2 animate-fade-in-up delay-400">
          <div className="flex items-center justify-between px-1">
            <h3 className="font-bold text-white text-[13px] tracking-wide uppercase flex items-center gap-2">
               <FaHammer className="text-[#c77a16]" /> Portfólio de Projetos
            </h3>
            <span className="text-[9px] text-neutral-500 uppercase tracking-widest font-bold flex items-center gap-1 animate-pulse">
               Deslize <FaChevronRight className="text-[8px]" />
            </span>
          </div>
          
          <div className="flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory hide-scrollbar -mx-5 px-5">
             {[
               { img: "/WhatsApp Image 2026-06-25 at 19.12.41 (15).jpeg", title: "Cozinhas" },
               { img: "/WhatsApp Image 2026-06-25 at 19.12.41 (18).jpeg", title: "Salas" },
               { img: "/WhatsApp Image 2026-06-25 at 19.12.41 (23).jpeg", title: "Painéis" },
               { img: "/WhatsApp Image 2026-06-25 at 19.12.41 (28).jpeg", title: "Dormitórios" }
             ].map((projeto, i) => (
               <a href="#projetos" key={i} className="relative w-[160px] h-[220px] shrink-0 rounded-3xl overflow-hidden snap-center group border border-white/5 active:scale-[0.98] transition-transform shadow-xl">
                 <Image src={projeto.img} alt={projeto.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/40 to-transparent"></div>
                 <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                   <h4 className="font-bold text-white text-[15px] tracking-wide">{projeto.title}</h4>
                   <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm group-hover:bg-[#c77a16] transition-colors">
                     <FaArrowRight className="text-white text-[10px]" />
                   </div>
                 </div>
               </a>
             ))}
          </div>
        </div>

        {/* Regular Full-Bleed Cards (Evento & Cursos) */}
        <div className="flex flex-col gap-4 animate-fade-in-up delay-500">
          
          {/* Evento Presencial Link */}
          <a href="#evento" className="relative w-full h-[150px] rounded-3xl overflow-hidden group border border-white/5 block active:scale-[0.98] transition-transform shadow-xl">
            <Image src="/WhatsApp Image 2026-06-25 at 19.12.41 (26).jpeg" alt="Evento Presencial" fill className="object-cover object-[center_top] group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/70 to-transparent"></div>
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
              <div>
                <h3 className="font-bold text-white text-lg font-serif italic tracking-wide">Imersão Presencial</h3>
                <p className="text-neutral-400 text-[11px] mt-1 max-w-[85%]">Garanta sua vaga no próximo evento.</p>
              </div>
              <div className="w-9 h-9 rounded-full bg-[#1a1a1a]/80 flex items-center justify-center backdrop-blur-sm group-hover:bg-[#4de782] transition-colors shrink-0 border border-white/10">
                <FaCalendarAlt className="text-white text-sm" />
              </div>
            </div>
          </a>

          {/* Cursos Link */}
          <a href="#cursos" className="relative w-full h-[150px] rounded-3xl overflow-hidden group border border-white/5 block active:scale-[0.98] transition-transform shadow-xl">
            <Image src="/WhatsApp Image 2026-06-25 at 19.12.41 (8).jpeg" alt="Cursos Online" fill className="object-cover object-[center_40%] group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/70 to-transparent"></div>
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
              <div>
                <h3 className="font-bold text-white text-lg tracking-wide uppercase">Cursos Online</h3>
                <p className="text-neutral-400 text-[11px] mt-1">Acesse o Portal do Aluno</p>
              </div>
              <div className="w-9 h-9 rounded-full bg-[#1a1a1a]/80 flex items-center justify-center backdrop-blur-sm group-hover:bg-[#c77a16] transition-colors shrink-0 border border-white/10">
                <FaLaptop className="text-white text-sm" />
              </div>
            </div>
          </a>
        </div>

        {/* YouTube Embedded Video Flat Panel */}
        <div className="bg-[#111] border border-white/5 rounded-3xl flex flex-col overflow-hidden animate-fade-in-up delay-600 shadow-xl mt-2">
          <div className="p-4 flex items-center justify-between border-b border-white/5 bg-[#161616]">
             <div className="flex items-center gap-3">
               <FaYoutube className="text-[#FF0000] text-2xl" />
               <div>
                 <h3 className="font-bold text-[14px] text-white">YouTube</h3>
                 <p className="text-[10px] text-neutral-500 uppercase tracking-wider font-semibold">Último Vídeo</p>
               </div>
             </div>
             <a href="https://www.youtube.com/@APAIXONADOSPORMARCENARIA-o4b?sub_confirmation=1" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-[#FF0000] hover:bg-[#CC0000] transition-colors rounded-xl text-[10px] font-black text-white uppercase tracking-widest shadow-[0_0_15px_rgba(255,0,0,0.3)]">
               Inscrever-se
             </a>
          </div>
          <div className="relative w-full aspect-video bg-black">
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/Nk5fgD_b8fo?rel=0" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
              className="absolute inset-0"
            ></iframe>
          </div>
        </div>

        {/* Instagram Profile Flat Panel */}
        <a href="https://instagram.com/canal.apaixonadospormarcenaria" target="_blank" rel="noopener noreferrer" 
           className="bg-[#111] border border-white/5 rounded-3xl p-5 flex flex-col gap-4 hover:border-[#0095F6]/50 transition-colors block animate-fade-in-up delay-700 shadow-xl mt-1">
          
          <div className="flex items-center gap-4">
            <div className="relative w-[65px] h-[65px] shrink-0">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] p-[2px] shadow-lg">
                <div className="w-full h-full bg-[#111] rounded-full overflow-hidden relative border-[2.5px] border-[#111]">
                  <Image src="/WhatsApp Image 2026-06-25 at 19.12.41 (6).jpeg" alt="Instagram Profile" fill className="object-cover object-[center_top]" />
                </div>
              </div>
            </div>
            
            <div className="flex flex-col flex-1">
              <div className="flex items-center gap-1 mb-1">
                <h3 className="font-bold text-[14px] text-white">canal.apaixonadospormarcenaria</h3>
                <svg viewBox="0 0 24 24" className="w-[14px] h-[14px] text-[#0095F6] fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1.9 14.7L6 12.6l1.5-1.5 2.6 2.6 6.4-6.4 1.5 1.5-7.9 7.9z"/></svg>
              </div>
              <div className="flex items-center justify-between text-[11px] text-neutral-500 mt-1 pr-1">
                <div className="flex flex-col items-center"><span className="font-bold text-sm text-white">1.618</span> posts</div>
                <div className="flex flex-col items-center"><span className="font-bold text-sm text-white">36,6k</span> seguidores</div>
                <div className="flex flex-col items-center"><span className="font-bold text-sm text-white">1.519</span> seguindo</div>
              </div>
            </div>
          </div>

          <div className="text-[12px] text-neutral-400 leading-[1.6]">
            Marcenaria de verdade, do legado à prática.<br/>
            Vídeos reais e técnicas de quem vive isso há 30 anos.<br/>
          </div>

          <div className="w-full py-3 bg-[#0095F6] hover:bg-[#1877F2] rounded-xl text-center text-[11px] font-black transition-colors text-white mt-1 uppercase tracking-widest shadow-[0_4px_15px_rgba(0,149,246,0.3)]">
            Seguir no Instagram
          </div>
        </a>
        
        <footer className="mt-8 text-center animate-fade-in-up delay-1000">
          <p className="text-[9px] text-neutral-600 tracking-[0.25em] uppercase font-bold">
            @canal.apaixonadospormarcenaria
          </p>
        </footer>

      </div>

    </main>
  );
}
