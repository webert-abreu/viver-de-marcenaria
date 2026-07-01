import Image from "next/image";
import { FaYoutube, FaInstagram, FaWhatsapp, FaArrowRight, FaUsers, FaLaptop } from "react-icons/fa";

export default function Home() {
  return (
    <main className="min-h-screen relative flex justify-center overflow-x-hidden font-sans text-white">
      {/* Sleek Modern Background */}
      <div className="fixed inset-0 z-0 bg-neutral-950">
        {/* Animated Orbs */}
        <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-[#c77a16]/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen"></div>
        <div className="absolute bottom-[10%] right-[20%] w-[500px] h-[500px] bg-[#e6683c]/5 blur-[120px] rounded-full pointer-events-none mix-blend-screen"></div>
      </div>

      {/* Main Content - Bento Box Layout */}
      <div className="w-full max-w-[500px] px-5 py-8 relative z-10 flex flex-col">
        
        {/* Bento Grid */}
        <div className="grid grid-cols-2 gap-4">
          
          {/* Profile Card (Span 2) */}
          <div className="col-span-2 rounded-[24px] bg-white/5 backdrop-blur-md border border-white/10 p-5 flex items-center gap-5 shadow-2xl animate-fade-in-up delay-100">
            <div className="relative w-20 h-20 shrink-0">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#c77a16] to-[#e2a836] p-[2px]">
                <div className="w-full h-full bg-[#1a110a] rounded-full overflow-hidden relative">
                  <Image src="/WhatsApp Image 2026-06-25 at 19.12.41 (6).jpeg" alt="Edriano" fill className="object-cover object-[center_top]" />
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold tracking-wide">Edriano</h1>
              <p className="text-[#e2a836] text-[10px] tracking-[0.2em] uppercase font-bold mt-1">Apaixonados por Marcenaria</p>
              <p className="text-gray-300 text-xs mt-2 leading-relaxed">
                Transformando oficinas em negócios lucrativos e escaláveis.
              </p>
            </div>
          </div>

          {/* Mentoria Hero (Span 2) */}
          <a href="https://wa.me/5547999695575?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20a%20Mentoria%20Viver%20de%20Marcenaria!" target="_blank" rel="noopener noreferrer" className="col-span-2 group rounded-[24px] bg-white/5 backdrop-blur-md border border-white/10 overflow-hidden relative active:scale-[0.98] transition-all shadow-xl block animate-fade-in-up delay-200">
            <div className="relative h-44 w-full">
              <Image src="/WhatsApp Image 2026-06-25 at 19.12.41 (3).jpeg" alt="Mentoria" fill className="object-cover object-[center_30%] opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
              
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-black/50 backdrop-blur-sm border border-white/10 rounded-full text-[10px] font-bold text-[#e2a836] uppercase tracking-widest">Premium</span>
              </div>

              <div className="absolute bottom-0 left-0 w-full p-5">
                <h2 className="text-2xl font-serif italic font-bold mb-1">Mentoria <span className="text-[#e2a836]">Viver de Marcenaria</span></h2>
                <div className="flex items-center justify-between">
                  <p className="text-xs text-gray-300 max-w-[80%]">Do operacional ao empresarial. Construa o seu império.</p>
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#c77a16] transition-colors">
                    <FaArrowRight className="text-sm" />
                  </div>
                </div>
              </div>
            </div>
          </a>

          {/* YouTube Embedded Video (Span 2) */}
          <div className="col-span-2 rounded-[24px] bg-white/5 backdrop-blur-md border border-white/10 overflow-hidden relative shadow-xl flex flex-col group animate-fade-in-up delay-300">
            <div className="p-4 flex items-center justify-between border-b border-white/10 bg-white/5">
               <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-full bg-[#FF0000]/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                   <FaYoutube className="text-[#FF0000] text-xl" />
                 </div>
                 <div>
                   <h3 className="font-bold text-sm text-white">Assista no YouTube</h3>
                   <p className="text-[10px] text-gray-400 uppercase tracking-wider">Aulas & Dicas</p>
                 </div>
               </div>
               <a href="https://www.youtube.com/@APAIXONADOSPORMARCENARIA-o4b?sub_confirmation=1" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-[#FF0000] hover:bg-[#CC0000] transition-colors rounded-full text-xs font-bold text-white flex items-center gap-2 shadow-lg hover:scale-105 active:scale-95">
                 Inscrever-se
               </a>
            </div>
            <div className="relative w-full aspect-video bg-black">
              {/* Replace video ID 'M7lc1UVf-VE' with the latest video ID from the channel */}
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

          {/* Instagram Profile Card (Span 2) */}
          <a href="https://instagram.com/canal.apaixonadospormarcenaria" target="_blank" rel="noopener noreferrer" 
             className="col-span-2 rounded-[24px] bg-[#121212]/80 backdrop-blur-md border border-white/10 p-5 flex flex-col gap-4 active:scale-[0.98] transition-all shadow-xl block hover:border-white/20 animate-fade-in-up delay-400">
            
            <div className="flex items-center gap-4">
              {/* Profile Picture with Instagram Gradient Ring */}
              <div className="relative w-[72px] h-[72px] shrink-0">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] p-[2.5px]">
                  <div className="w-full h-full bg-[#121212] rounded-full overflow-hidden relative border-[2.5px] border-[#121212]">
                    <Image src="/WhatsApp Image 2026-06-25 at 19.12.41 (6).jpeg" alt="Instagram Profile" fill className="object-cover object-[center_top]" />
                  </div>
                </div>
              </div>
              
              {/* Info */}
              <div className="flex flex-col flex-1">
                <div className="flex items-center gap-1 mb-1">
                  <h3 className="font-bold text-[15px] text-white">canal.apaixonadospormarcenaria</h3>
                  {/* Verified Badge */}
                  <svg viewBox="0 0 24 24" className="w-[14px] h-[14px] text-[#0095F6] fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1.9 14.7L6 12.6l1.5-1.5 2.6 2.6 6.4-6.4 1.5 1.5-7.9 7.9z"/></svg>
                </div>
                
                {/* Stats */}
                <div className="flex items-center justify-between text-[11px] text-white mt-1 pr-2">
                  <div className="flex flex-col items-center"><span className="font-bold text-sm">1.618</span> posts</div>
                  <div className="flex flex-col items-center"><span className="font-bold text-sm">36,6 mil</span> seguidores</div>
                  <div className="flex flex-col items-center"><span className="font-bold text-sm">1.519</span> seguindo</div>
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="text-[13px] text-gray-200 leading-[1.4]">
              <span className="text-gray-400">Digital creator</span><br/>
              Marcenaria de verdade, do legado à prática.<br/>
              Vídeos reais e técnicas de quem vive isso há 30 anos.<br/>
              ▶ Assista e apaixone-se<br/>
            </div>

            {/* Follow Button */}
            <div className="w-full py-2 bg-[#0095F6] hover:bg-[#1877F2] rounded-lg text-center text-[13px] font-bold transition-colors text-white mt-1">
              Seguir
            </div>
          </a>

          {/* Action Buttons Row (Span 2) */}
          <div className="col-span-2 grid grid-cols-2 gap-4">
            {/* Comunidade VIP */}
            <a href="#comunidade" className="col-span-1 rounded-[16px] bg-white/5 backdrop-blur-md border border-white/10 py-4 px-4 flex items-center justify-center gap-2 active:scale-[0.95] transition-all hover:bg-[#5865F2]/20 hover:border-[#5865F2]/50 hover:text-[#5865F2] animate-fade-in-up delay-500 group">
              <FaUsers className="text-white group-hover:text-[#5865F2] transition-colors text-xl" />
              <span className="font-bold text-sm text-white transition-colors">Comunidade</span>
            </a>

            {/* WhatsApp */}
            <a href="https://wa.me/5547999695575" target="_blank" rel="noopener noreferrer" className="col-span-1 rounded-[16px] bg-white/5 backdrop-blur-md border border-white/10 py-4 px-4 flex items-center justify-center gap-2 active:scale-[0.95] transition-all hover:bg-[#25D366]/20 hover:border-[#25D366]/50 hover:text-[#25D366] animate-fade-in-up delay-500 group">
              <FaWhatsapp className="text-white group-hover:text-[#25D366] transition-colors text-xl" />
              <span className="font-bold text-sm text-white transition-colors">WhatsApp</span>
            </a>
          </div>

          {/* Evento Presencial (Span 2) */}
          <a href="#evento" className="col-span-2 mt-2 group rounded-[24px] bg-white/5 backdrop-blur-md border border-white/10 overflow-hidden relative active:scale-[0.98] transition-all duration-300 shadow-xl block animate-fade-in-up delay-600">
            <div className="relative p-6 flex flex-col justify-between min-h-[190px]">
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <Image 
                  src="/WhatsApp Image 2026-06-25 at 19.12.41 (26).jpeg" 
                  alt="Evento Presencial" 
                  fill 
                  className="object-cover object-top opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30"></div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-3">
                   <span className="w-2 h-2 rounded-full bg-[#4de782] animate-pulse"></span>
                   <span className="text-[#4de782] text-[10px] font-bold tracking-widest uppercase">Evento Presencial ao Vivo</span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-white mb-2">Palestras & Imersão</h3>
                <p className="text-xs text-gray-300 mb-5 leading-relaxed">
                  Transforme a realidade da sua marcenaria em um final de semana intenso de muito aprendizado.
                </p>
              </div>

              <div className="relative z-10 w-full py-3 bg-white/10 group-hover:bg-[#c77a16]/30 border border-white/20 rounded-xl text-center text-sm font-bold transition-all text-white">
                Garantir minha vaga
              </div>
            </div>
          </a>

          {/* Projetos e Portfólio (Span 2) */}
          <a href="#projetos" className="col-span-2 mt-2 h-40 rounded-[24px] bg-white/5 backdrop-blur-md border border-white/10 overflow-hidden relative active:scale-[0.98] transition-all shadow-xl group block animate-fade-in-up delay-700">
            <Image src="/WhatsApp Image 2026-06-25 at 19.12.41 (10).jpeg" alt="Projetos" fill className="object-cover object-[center_30%] opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
            <div className="absolute inset-0 p-5 flex flex-col justify-end">
              <h3 className="text-2xl font-serif font-bold mb-1 text-white relative z-10">Portfólio de Móveis</h3>
              <p className="text-xs text-gray-300 uppercase tracking-wider relative z-10">Veja nossos projetos</p>
            </div>
          </a>

          {/* Cursos Online (Span 2) */}
          <a href="#cursos" className="col-span-2 mt-2 rounded-[24px] bg-white/5 backdrop-blur-md border border-white/10 p-6 flex flex-col relative overflow-hidden active:scale-[0.98] transition-all group animate-fade-in-up delay-800">
            <div className="absolute -left-10 -bottom-10 w-32 h-32 bg-[#e6683c]/20 blur-[40px] rounded-full pointer-events-none group-hover:bg-[#e6683c]/40 transition-colors"></div>
            
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center border border-white/10 group-hover:border-white/30 transition-colors">
                <FaLaptop className="text-white text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Cursos Online</h3>
                <p className="text-xs text-[#e6683c] uppercase tracking-wider font-semibold">Portal do Aluno</p>
              </div>
            </div>
            <p className="text-sm text-gray-300 mb-5 leading-relaxed relative z-10">
              Acesse suas aulas, apostilas e todo o material didático de onde estiver.
            </p>
            <div className="w-full py-3 bg-white/10 group-hover:bg-white/20 border border-white/20 rounded-xl text-center text-sm font-bold transition-all relative z-10 text-white">
              Acessar Plataforma
            </div>
          </a>

        </div>
        
        <footer className="mt-12 text-center pb-6">
          <p className="text-[10px] text-gray-500 tracking-[0.25em] uppercase">
            @canal.apaixonadospormarcenaria
          </p>
        </footer>

      </div>

      {/* Floating Action Button (FAB) for WhatsApp */}
      <a href="https://wa.me/5547999695575" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:scale-110 active:scale-95 transition-all animate-fade-in-up delay-900 group">
        <FaWhatsapp className="text-white text-3xl group-hover:scale-110 transition-transform" />
      </a>
    </main>
  );
}
