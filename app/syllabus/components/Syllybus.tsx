"use client"
import { useRouter } from "next/navigation";


export const SyllabusModule = ({ index, title, description, tags , link, commands, icon, delay, objectives, milestone, strategy, remotes }: any) => {
    
    const router = useRouter();
  
    return (
    <section className="relative md:pl-20 group animate-fade-up" style={{ animationDelay: delay }}>
      <div className="hidden md:flex absolute left-0 top-2 w-16 h-16 bg-surface-container rounded-full border border-primary/20 items-center justify-center z-10 group-hover:border-primary transition-colors">
        <span className="text-primary font-headline font-bold">{index}</span>
      </div>

      <div className="glow-border bg-surface-container border border-white/5 p-8 rounded-xl hover:border-primary/30 transition-all duration-500 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <span className="material-symbols-outlined text-8xl fill-1!">{icon}</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6">
          <div>
            <h2 className="text-2xl font-headline font-bold text-white mb-2">{title}</h2>
            <p className="text-on-surface-variant mb-4">{description}</p>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag: string) => (
                <span key={tag} className="px-3 py-1 bg-secondary-container/30 text-secondary-fixed text-xs rounded-md font-label uppercase tracking-wider">{tag}</span>
              ))}
            </div>
          </div>
          <div className="shrink-0">
            <div className="bg-surface-container-lowest p-4 rounded-lg border border-outline-variant/20 w-full md:w-64">
              <p className="text-[10px] text-on-surface-variant font-label uppercase tracking-widest mb-2">Terminal</p>
              {commands.map((cmd: string) => (
                <code key={cmd} className="monospaced text-primary-dim block text-sm">$ {cmd}</code>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 items-end">
          <div>
            {objectives && (
              <>
                <h4 className="text-xs uppercase tracking-widest text-primary mb-3 font-bold">Key Objectives</h4>
                <ul className="space-y-2 text-sm text-on-surface-variant mb-6">
                  {objectives.map((obj: string) => (
                    <li key={obj} className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> {obj}</li>
                  ))}
                </ul>
              </>
            )}
            
            {strategy && (
              <div className="mb-6">
                <h4 className="text-xs uppercase tracking-widest text-primary mb-3 font-bold">Strategy Mastery</h4>
                <p className="text-sm text-on-surface-variant">{strategy}</p>
              </div>
            )}
            
            <button onClick={() => router.push(`syllabus/${link}`)} className="px-6 py-2.5 bg-primary text-on-primary rounded-lg text-sm font-headline font-bold uppercase tracking-widest hover:bg-primary-dim transition-all shadow-lg shadow-primary/20">Start Lesson</button>
            
            
          </div>

          {/* Context-Specific Visuals */}
          {milestone && (
            <div className="p-4 bg-surface-container-highest/50 rounded-lg border border-white/5">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                <span className="text-[10px] font-bold uppercase tracking-tighter text-white">Project Milestone</span>
              </div>
              <p className="text-sm text-on-surface-variant leading-relaxed">{milestone}</p>
            </div>
          )}

          {index === "03" && (
            <div className="w-full md:w-72 h-40 bg-surface-container-lowest rounded-lg border border-white/5 p-4 flex flex-col justify-center">
              <div className="relative h-12 flex items-center">
                <div className="h-0.5 w-full bg-outline-variant"></div>
                <div className="absolute left-4 w-3 h-3 rounded-full bg-primary ring-4 ring-primary/20"></div>
                <div className="absolute left-16 w-3 h-3 rounded-full bg-primary ring-4 ring-primary/20"></div>
                <div className="absolute left-16 top-0 h-8 w-0.5 bg-tertiary"></div>
                <div className="absolute left-16 -top-8 h-0.5 w-24 bg-tertiary"></div>
                <div className="absolute left-40 -top-8.75 w-3 h-3 rounded-full bg-tertiary ring-4 ring-tertiary/20"></div>
              </div>
            </div>
          )}
        </div>

        {remotes && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 mb-4">
            {remotes.map((r: any) => (
              <div key={r.name} className="p-6 bg-surface-container-high rounded-xl border border-white/5 text-center">
                <span className="material-symbols-outlined text-primary mb-3">{r.icon}</span>
                <h5 className="text-white text-sm font-bold mb-1">{r.name}</h5>
                <p className="text-xs text-on-surface-variant">{r.desc}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};