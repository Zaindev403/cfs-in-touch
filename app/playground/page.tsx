"use client";
import { useState, useRef, useEffect } from 'react';
import { useGit } from '@/hooks/use-git';
import { PlaygroundHeader } from './components/Header';

export default function PlaygroundPage() {
  const { branch, staged, commits, files, execute } = useGit();
  const [mounted, setMounted] = useState(false);
  
  const [terminalLogs, setTerminalLogs] = useState<{msg: string, type: string}[]>([]);
  const [neuraLogs, setNeuraLogs] = useState<string[]>([]);
  const [athenaMessages, setAthenaMessages] = useState<{role: 'ai' | 'user', text: string}[]>([]);
  
  const [input, setInput] = useState('');
  const [athenaInput, setAthenaInput] = useState('');
  const termEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    // Initializing with "help" as the first suggestion
    setTerminalLogs([
      { msg: "Welcome to Motion-U Git Lab v2.4", type: "info" },
      { msg: "Type 'help' to see available commands.", type: "slate-500" }
    ]);
    setNeuraLogs(["Neura initialized. Awaiting system input..."]);
    setAthenaMessages([
      { role: 'ai', text: "Hello! I'm Athena. You can start by typing 'help' in the terminal to see what we can do!" }
    ]);
  }, []);

  useEffect(() => {
    if (mounted) {
      termEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [terminalLogs, mounted]);

  const handleTerminal = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && input.trim()) {
      const result = execute(input);
      
      // 1. Update Terminal
      setTerminalLogs(prev => [
        ...prev, 
        { msg: `user@motion-u $ ${input}`, type: 'user' }, 
        { msg: result.res, type: result.type }
      ]);

      // 2. Automated Neura Logging based on Hook Action
      const timeStr = new Date().toLocaleTimeString();
      if (result.action) {
        let logEntry = "";
        switch(result.action) {
          case 'INIT': logEntry = "VFS_ROOT_CREATED: .git directory live."; break;
          case 'ADD': logEntry = `INDEX_SYNC: ${files.length} blobs moved to staging.`; break;
          case 'COMMIT': logEntry = `OBJECT_WRITE: Node ${result.data?.hash} finalized.`; break;
          case 'BRANCH_CREATE': logEntry = `REF_CREATED: Pointer added for new branch.`; break;
          case 'CHECKOUT': logEntry = `HEAD_DETACHED: Moving to ${result.res.split("'")[1]}.`; break;
        }
        if (logEntry) setNeuraLogs(p => [...p, `[${timeStr}] ${logEntry}`]);
      }

      setInput('');
    }
  };

  if (!mounted) return <div className="h-screen bg-background-dark" />;

  return (
    <div className="flex flex-col h-screen">
      <PlaygroundHeader />
      
      <main className="flex-1 flex overflow-hidden p-4 gap-4 bg-background-dark">
        
        {/* LEFT: Git Visualizer & Filesystem */}
        <aside className="w-72 hidden lg:flex flex-col gap-4">
          {/* Git Graph */}
          <div className="bg-terminal-black border border-primary/20 rounded-xl flex-[0.6] flex flex-col overflow-hidden glow-border">
            <div className="p-3 border-b border-primary/10 bg-primary/5 flex justify-between items-center">
              <span className="text-[10px] font-bold text-primary tracking-widest uppercase">Git Graph</span>
              <span className="text-[9px] font-mono text-slate-500">{branch}</span>
            </div>
            <div className="flex-1 p-4 overflow-y-auto custom-scrollbar space-y-4">
              {commits.length === 0 && <p className="text-[10px] text-slate-600 italic">No commits yet.</p>}
              {commits.map(c => (
                <div key={c.hash} className="border-l border-primary/30 pl-4 relative animate-fade-up">
                  <div className="absolute -left-[4.5px] top-0 size-2 rounded-full bg-primary neon-box-glow" />
                  <p className="text-[10px] font-mono text-primary leading-none">{c.hash}</p>
                  <p className="text-xs text-slate-200 mt-1">{c.msg}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Filesystem Tab */}
          <div className="bg-terminal-black border border-primary/10 rounded-xl flex-[0.4] flex flex-col overflow-hidden">
            <div className="p-3 border-b border-primary/10 bg-white/5 flex items-center justify-between">
              <span className="text-[10px] font-bold text-slate-400 tracking-widest uppercase">Filesystem</span>
              <span className="text-[9px] text-slate-600">{staged.length}/{files.length} staged</span>
            </div>
            <div className="p-4 space-y-2">
              {files.map(f => (
                <div key={f} className={`flex items-center gap-2 text-xs font-mono transition-colors ${staged.includes(f) ? 'text-primary' : 'text-slate-500'}`}>
                   <span className="material-symbols-outlined text-[14px]">{staged.includes(f) ? 'drafts' : 'description'}</span>
                   {f}
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* CENTER: Terminal */}
        <section className="flex-1 flex flex-col bg-terminal-black border border-primary/20 rounded-xl shadow-2xl overflow-hidden relative">
          <div className="flex-1 p-6 font-mono text-sm overflow-y-auto custom-scrollbar space-y-2">
            {terminalLogs.map((l, i) => (
              <div key={i} className={l.type === 'user' ? 'text-primary font-bold' : l.type === 'error' ? 'text-red-400' : 'text-slate-400'}>
                {l.msg}
              </div>
            ))}
            <div ref={termEndRef} />
          </div>
          <div className="p-4 bg-black/40 border-t border-primary/10 flex items-center gap-2">
            <span className="text-primary font-bold tracking-tighter">$</span>
            <input 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleTerminal}
              className="w-full bg-transparent border-none p-0 focus:ring-0 text-primary font-mono outline-none"
              placeholder="Type help..."
              autoFocus
            />
          </div>
        </section>

        {/* RIGHT: Dual Agents */}
        <aside className="w-80 hidden xl:flex flex-col gap-4">
          {/* Athena Chatbox */}
          <div className="flex-[0.6] bg-terminal-black border border-amber-500/20 rounded-xl flex flex-col overflow-hidden glow-border transition-all">
            <div className="p-3 border-b border-amber-500/20 bg-amber-500/5 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-amber-500 text-sm">auto_awesome</span>
                <span className="text-xs font-bold text-amber-500 uppercase tracking-tighter">Athena</span>
              </div>
            </div>
            <div className="flex-1 p-3 overflow-y-auto custom-scrollbar space-y-3">
              {athenaMessages.map((m, i) => (
                <div key={i} className={`${m.role === 'ai' ? 'bg-amber-500/5 border-l-2 border-amber-500 p-2 text-slate-200' : 'text-right text-slate-500 italic'} text-[11px]`}>
                  {m.text}
                </div>
              ))}
            </div>
            <div className="p-3 border-t border-amber-500/10 bg-black/20">
              <input 
                value={athenaInput}
                onChange={(e) => setAthenaInput(e.target.value)}
                placeholder="Message Athena..."
                className="w-full bg-white/5 border border-amber-500/20 rounded-lg px-3 py-2 text-[11px] outline-none text-slate-200 focus:border-amber-500/50 transition-all"
              />
            </div>
          </div>

          {/* Neura Monitor */}
          <div className="flex-[0.4] bg-terminal-black border border-primary/20 rounded-xl flex flex-col overflow-hidden">
            <div className="p-3 border-b border-primary/20 bg-primary/5 text-[10px] font-bold text-primary tracking-widest uppercase">Neura Monitor</div>
            <div className="flex-1 p-3 font-mono text-[9px] space-y-1.5 overflow-y-auto custom-scrollbar">
              {neuraLogs.map((log, i) => (
                <div key={i} className="text-slate-500 flex gap-2">
                  <span className="text-primary/30 shrink-0">{log.substring(0, 10)}</span>
                  <span className="animate-in fade-in slide-in-from-left-1">{log.substring(10)}</span>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}