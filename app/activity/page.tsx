"use client"

import GitSimulation from "./components/GitSimulation";
import TeamSyncCard from "./components/TeamSyncCard";

export default function ActivityPage() {
  return (
    <main className="pt-24 md:pt-32 pb-16 px-4 md:px-10 max-w-360 mx-auto min-h-screen">
      {/* Hero Section */}
      <section className="mb-20 relative text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-150 h-100 bg-primary/5 blur-[120px] rounded-full pointer-events-none animate-pulse" />
        <div className="flex flex-col items-center gap-4 relative z-10">
          <span className="text-secondary text-xs font-mono tracking-[0.4em] uppercase animate-pulse">
            Simulations // Training_Module_01
          </span>
          <h1 className="text-5xl md:text-8xl font-black font-headline tracking-tighter leading-none uppercase">
            PRACTICE <span className="text-primary-dim">PROTOCOL</span>
          </h1>
          <p className="text-on-surface-variant max-w-2xl text-lg opacity-80">
            Interactive sandboxes designed to master high-stakes Git operations. Execute real-world workflows in zero-risk architecture.
          </p>
        </div>
      </section>

      <div className="space-y-12">
        <GitSimulation />
        <TeamSyncCard />
      </div>
      
      {/* System Footer Bar */}
      <footer className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8 p-10 border border-outline-variant/10 rounded-sm bg-surface-container/30 backdrop-blur-sm">
         {/* Footer items mapping the original HTML structure */}
         <div className="flex flex-col gap-3">
            <span className="text-[9px] font-mono text-outline font-bold uppercase">System_Load</span>
            <div className="w-full h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
                <div className="w-3/4 h-full bg-primary-dim animate-pulse"></div>
            </div>
            <span className="text-[9px] font-mono text-on-surface-variant uppercase">Stability: 98.4%</span>
         </div>
         {/* ... (Repeat for other footer cols) */}
      </footer>
    </main>
  );
}