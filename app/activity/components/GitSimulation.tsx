"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const STEPS = ["Fork", "Clone", "Upstream", "Branch", "Push", "PR"];

export default function GitSimulation() {
  const [currentStep, setCurrentStep] = useState(2); // Initialized to 'Upstream'
  const [logs, setLogs] = useState([
    { id: 1, text: "# Configure remote tracking branch", color: "text-secondary" },
    { id: 2, text : "git clone https://your-clone-fork" , color : "text-on-surface"},
    { id: 3, text: "git remote add upstream https://github.com/kaiden-A/open-source-demo.git", color: "text-on-surface" },
    { id: 4, text: "git branch fix/button-color", color: "text-on-surface" },
    { id: 5, text: "git branch checkout fix/button-color", color: "text-on-surface" }
  ]);
  const [status, setStatus] = useState("Execute");

  const runSimulation = () => {
    setStatus("EXECUTING...");
    setTimeout(() => {
      setLogs((prev) => [
        ...prev,
        { id: prev.length + 1, text: "git push origin master", color: "text-secondary" },
      ]);
      setCurrentStep(5);
      setStatus("SUCCESS");
    }, 1000);
  };

  return (
    <section className="glass-panel border border-outline-variant/20 rounded-sm overflow-hidden flex flex-col shadow-2xl">
      <div className="bg-surface-container px-4 md:px-8 py-4 md:py-6 border-b border-outline-variant/10 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-primary text-xl animate-spin-[8s_linear_infinite]">public</span>
          <div>
            <h2 className="font-headline font-bold uppercase tracking-widest text-sm">01. Open Source Contribution</h2>
            <span className="text-[10px] text-on-surface-variant font-mono uppercase">Master upstream synchronization</span>
          </div>
        </div>
        <div className="px-3 py-1 bg-secondary/10 border border-secondary/20 rounded-full">
          <span className="text-[9px] font-mono text-secondary uppercase font-bold tracking-widest flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" /> Active
          </span>
        </div>
      </div>

      <div className="p-4 md:p-10">
        {/* Progress Stepper */}
        <div className="relative flex justify-between items-start mb-12 px-8">
          <div className="absolute top-6 left-0 w-full h-0.5 bg-surface-container-highest">
            <motion.div 
              className="h-full bg-primary shadow-[0_0_15px_rgba(0,163,255,0.5)]"
              animate={{ width: `${(currentStep / (STEPS.length - 1)) * 100}%` }}
            />
          </div>
          {STEPS.map((step, i) => (
            <div 
              key={step} 
              className="relative z-10 flex flex-col items-center gap-3 cursor-pointer"
              onClick={() => setCurrentStep(i)}
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${i <= currentStep ? 'bg-primary text-on-primary-fixed' : 'bg-surface-container-highest text-on-surface-variant'}`}>
                {i + 1}
              </div>
              <span className={`text-[10px] font-mono font-bold uppercase tracking-widest ${i <= currentStep ? 'text-primary' : 'text-on-surface-variant'}`}>
                {step}
              </span>
            </div>
          ))}
        </div>

        {/* Terminal Window */}
        <div className="bg-surface-container-lowest border border-outline-variant/20 rounded-sm p-6 shadow-2xl relative scanline-effect overflow-hidden min-h-50">
          <div className="font-mono text-sm space-y-1 relative z-10">
            {logs.map((log, i) => (
              <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} key={log.id} className="flex gap-4">
                <span className="text-outline-variant w-8">0{i + 1}</span>
                <span className={`${log.color} break-all`}>{log.text}</span>
              </motion.div>
            ))}
            <div className="flex gap-4 pt-4">
              <span className="text-outline-variant w-8">0{logs.length + 1}</span>
              <span className="text-primary-dim animate-pulse">_</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between border-t border-outline-variant/10 mt-8 pt-8 gap-6">
          <div className="text-center sm:text-left">
            <span className="text-[10px] text-on-surface-variant uppercase tracking-widest font-bold font-mono">Target_Repo</span>
            <div className="font-headline font-black text-xl text-primary">OSS_KERNEL_V4</div>
          </div>
          <div className="flex gap-4 w-full sm:w-auto">
            <button onClick={() => window.location.reload()} className="flex-1 px-6 py-3 border border-outline-variant text-xs font-bold uppercase hover:border-white transition-all">Reset</button>
            <button 
              onClick={runSimulation}
              disabled={status === "SUCCESS"}
              className={`flex-1 px-10 py-3 font-headline font-black uppercase tracking-widest text-sm transition-all ${status === "SUCCESS" ? 'bg-on-secondary-fixed-variant' : 'bg-linear-to-r from-primary to-primary-container text-on-primary-fixed shadow-lg hover:shadow-primary/20'}`}
            >
              {status}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}