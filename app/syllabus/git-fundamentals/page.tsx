"use client";

import { motion, Variants } from "framer-motion";
import { Sidebar } from "./components/Sidebar";
import { TerminalBox } from "./components/TerminalBox";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: "easeOut" } 
  }
};

export default function GitFundamentalsPage() {
  return (
    <div className="bg-surface font-body text-on-surface antialiased flex h-screen overflow-hidden">
      
      {/* Sidebar - Internal scroll handled inside component */}
      <Sidebar />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        {/* Fixed Header Spacer (Accounts for your 64px header) */}
        <div className="h-16 w-full flex-shrink-0 border-b border-outline-variant/10 bg-zinc-950/80 backdrop-blur-xl" />

        {/* Scrollable Module Content */}
        <div className="flex-1 overflow-y-auto custom-scrollbar pt-12 pb-20 px-8 lg:px-16">
          <motion.div 
            className="max-w-6xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            
            {/* 01. What is Git? */}
            <motion.section variants={itemVariants} className="mb-20">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-mono text-secondary px-2 py-1 bg-secondary-container/20 rounded uppercase tracking-widest">
                  Core Concept
                </span>
                <div className="h-px flex-1 bg-outline-variant/20"></div>
              </div>
              <h1 className="text-5xl lg:text-7xl font-headline font-bold text-on-surface tracking-tighter mb-8 max-w-3xl leading-tight">
                What is <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Git?</span>
              </h1>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                <div className="lg:col-span-7 space-y-6">
                  <p className="text-xl text-on-surface-variant leading-relaxed">
                    At its core, Git is a <span className="text-on-surface font-semibold">Distributed Version Control System (VCS)</span>. It tracks changes in your source code, allowing multiple developers to collaborate without overwriting each other's work.
                  </p>
                  <div className="bg-surface-container-low p-6 rounded-lg border-l-4 border-primary">
                    <p className="text-on-surface-variant italic">
                      "GitHub is to Git what Instagram is to photography. Git is the tool that creates the content; GitHub is the platform where you store and share it."
                    </p>
                  </div>
                </div>
                <div className="lg:col-span-5 relative">
                  <div className="aspect-square bg-surface-container-high rounded-xl overflow-hidden relative group shadow-2xl">
                    <img 
                      alt="Abstract code visualization" 
                      className="object-cover w-full h-full opacity-60 group-hover:scale-105 transition-transform duration-700" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqlXz7eGdUM-X7gZ97aatnU9-mfzn72cb9bDJpVGBAz7YSYC1-oRwqoNiDCuI4hJNOugywB5fVXbOEE-mlIHCFVBtHD5mx3dUWwI7U7uYk_w6l11d6932ufdQhqgdrz8EwND2woD7S1Ck3U4SxKNwp9VhalMk7xhmbmL4cGicmZD2tMtLXYgy56BX2Tt3_bog-eY3mcOc5ksnqE4yngS7pBhayfcnYOd8Djk1Z9SuAoy5b6I0UDPSnN7uUxTG2MTH7cZZS7E6rxAw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-dim to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <p className="text-xs font-mono text-primary mb-1">LOCAL_HOST.SYSTEM</p>
                      <h3 className="font-headline font-bold text-lg">Decentralized Power</h3>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* 02. Motivation */}
            <motion.section variants={itemVariants} className="mb-24 relative">
              <div className="absolute -left-12 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/0 via-primary/40 to-primary/0 hidden lg:block"></div>
              <h2 className="text-3xl font-headline font-bold mb-10 flex items-center gap-4">
                <span className="text-primary-dim opacity-50">02.</span> Motivation Behind Git
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-surface-container p-8 rounded-xl border border-outline-variant/10">
                  <span className="material-symbols-outlined text-error mb-4 text-4xl">folder_zip</span>
                  <h3 className="text-xl font-bold mb-4">The Versioning Chaos</h3>
                  <p className="text-on-surface-variant leading-relaxed mb-4">
                    Before Git, developers relied on naming folders manually:
                  </p>
                  <div className="bg-surface-container-lowest font-mono text-xs p-4 rounded border border-outline-variant/20 space-y-1">
                    <p className="text-zinc-500">📄 final_v1.zip</p>
                    <p className="text-zinc-500">📄 final_v2_REAL_FINAL.zip</p>
                    <p className="text-error">📄 final_v2_REAL_FINAL_v2_USE_THIS.zip</p>
                  </div>
                </div>
                <div className="bg-surface-container-high p-8 rounded-xl relative overflow-hidden group">
                  <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:rotate-12 transition-transform">
                    <span className="material-symbols-outlined text-[160px]">terminal</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4">The Linux Legacy</h3>
                  <p className="text-on-surface-variant leading-relaxed">
                    In 2005, <span className="text-secondary font-semibold">Linus Torvalds</span> created Git to manage the development of the Linux kernel.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* 03. How Git Works */}
            <motion.section variants={itemVariants} className="mb-24">
              <h2 className="text-3xl font-headline font-bold mb-12 flex items-center gap-4">
                <span className="text-primary-dim opacity-50">03.</span> How Git Works
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="p-6 bg-surface-container-low border border-outline-variant/20 rounded-lg">
                  <div className="w-10 h-10 bg-primary/10 rounded flex items-center justify-center mb-6">
                    <span className="material-symbols-outlined text-primary">database</span>
                  </div>
                  <h4 className="font-bold mb-2">The Repository</h4>
                  <p className="text-sm text-on-surface-variant">The entire project history stored in a hidden `.git` folder.</p>
                </div>
                <div className="p-6 bg-surface-container-low border border-outline-variant/20 rounded-lg">
                  <div className="w-10 h-10 bg-secondary/10 rounded flex items-center justify-center mb-6">
                    <span className="material-symbols-outlined text-secondary">camera</span>
                  </div>
                  <h4 className="font-bold mb-2">Snapshots (Commits)</h4>
                  <p className="text-sm text-on-surface-variant">Git takes a "snapshot" of all your files at that exact moment in time.</p>
                </div>
                <div className="p-6 bg-surface-container-low border border-outline-variant/20 rounded-lg">
                  <div className="w-10 h-10 bg-tertiary/10 rounded flex items-center justify-center mb-6">
                    <span className="material-symbols-outlined text-tertiary">lan</span>
                  </div>
                  <h4 className="font-bold mb-2">Local-First</h4>
                  <p className="text-sm text-on-surface-variant">Almost every operation is local. You don't need an internet connection to commit.</p>
                </div>
              </div>
            </motion.section>

            {/* 04. Environment Setup */}
            <motion.section variants={itemVariants} className="mb-24">
              <h2 className="text-3xl font-headline font-bold mb-12 flex items-center gap-4">
                <span className="text-primary-dim opacity-50">04.</span> Environment Setup
              </h2>
              <div className="space-y-12">
                <div>
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary-fixed">download</span>
                    Step 1: Installation
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-center gap-4 p-4 bg-surface-container-highest rounded-lg">
                      <span className="material-symbols-outlined text-2xl">window</span>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-zinc-500">Windows</p>
                        <p className="text-sm">Git for Windows</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-surface-container-highest rounded-lg border border-primary/30">
                      <span className="material-symbols-outlined text-2xl text-primary">terminal</span>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-zinc-500">Linux</p>
                        <p className="text-sm">`sudo apt install git`</p>
                      </div>
                    </div>
                  </div>
                </div>

                <TerminalBox />

                <div>
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary-fixed">keyboard</span>
                    Step 3: Essential Commands
                  </h3>
                  <div className="overflow-hidden rounded-lg border border-outline-variant/10">
                    <table className="w-full text-left">
                      <thead className="bg-surface-container-high text-xs font-mono uppercase text-zinc-500">
                        <tr>
                          <th className="px-6 py-4">Command</th>
                          <th className="px-6 py-4">Description</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-outline-variant/10 bg-surface-container">
                        <tr>
                          <td className="px-6 py-4 font-mono text-secondary">ls</td>
                          <td className="px-6 py-4 text-on-surface-variant">List all files and directories</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-mono text-secondary">cd {"<path>"}</td>
                          <td className="px-6 py-4 text-on-surface-variant">Change current directory</td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 font-mono text-secondary">mkdir &lt;name&gt;</td>
                            <td className="px-6 py-4 text-on-surface-variant">Create a new directory with given name</td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 font-mono text-secondary">clear</td>
                            <td className="px-6 py-4 text-on-surface-variant">Wipe the terminal screen clean</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* CTA */}
            <motion.div 
              variants={itemVariants} 
              className="mt-20 flex flex-col sm:flex-row items-center justify-between p-8 bg-gradient-to-br from-surface-container to-surface-container-high rounded-2xl border border-primary/20 gap-8"
            >
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-primary-dim">
                  <span className="material-symbols-outlined text-4xl">check_circle</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold">Module 1.1 Complete</h4>
                  <p className="text-on-surface-variant">Ready to dive into your first repository?</p>
                </div>
              </div>
              <button className="bg-linear-to-r from-primary to-primary-container text-on-primary-fixed px-10 py-4 font-bold rounded-lg hover:shadow-[0_0_20px_rgba(0,163,255,0.4)] active:scale-95 transition-all flex items-center gap-2 group">
                NEXT LESSON: CORE GIT WORKFLOW
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </button>
            </motion.div>

            {/* Footer */}
            <footer className="mt-20 py-12 border-t border-outline-variant/10">
              <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-zinc-500 text-sm font-mono uppercase tracking-widest">
                  © 2026 CFS_IN_TOUCH // git_core_fundamentals
                </div>
              </div>
            </footer>
          </motion.div>
        </div>
      </main>
    </div>
  );
}