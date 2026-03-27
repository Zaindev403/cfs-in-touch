import Image from 'next/image';

export function PlaygroundHeader() {
  return (
    <header className="flex items-center justify-between border-b border-primary/20 bg-terminal-black/80 backdrop-blur-md px-4 md:px-8 py-3 z-50">
      <div className="flex items-center gap-3">
        {/* Logo Replacement */}
        <div className="relative size-10 md:size-12 shrink-0">
          <Image 
            src="/logo.png" 
            alt="Motion-U Logo" 
            fill 
            className="object-contain"
            priority
          />
        </div>
        
        <div className="flex flex-col">
          <h2 className="text-white text-base md:text-lg font-bold leading-tight">
            CFS <span className="text-primary md:text-white">in Touch</span>
          </h2>
          {/* Hidden on very small phones to save space */}
          <p className="hidden xs:block text-primary text-[9px] md:text-[10px] uppercase tracking-widest font-bold opacity-80">
            A Motion-U Initiative
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3 md:gap-6">
        <div className="flex items-center gap-2 text-slate-500 text-[9px] md:text-[10px] font-mono bg-primary/5 px-2 py-1 rounded-full border border-primary/10">
          <div className="size-1.5 md:size-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_#00d2ff]" />
          <span className="hidden sm:inline">SYSTEM_READY // </span>
          <span>SESSION_ACTIVE</span>
        </div>
      </div>
    </header>
  );
}