"use client";

import React, { useState } from 'react';

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Trigger Button - Only visible on small screens */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-primary text-on-primary rounded-md shadow-lg"
      >
        <span className="material-symbols-outlined">
          {isOpen ? 'close' : 'menu'}
        </span>
      </button>

      {/* Backdrop for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <aside className={`
        fixed lg:relative h-screen w-64 bg-zinc-900 flex flex-col border-r border-white/5 shrink-0 z-40
        transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        
        <div className="pt-20 lg:pt-16 px-6 mb-8 shrink-0">
          <h2 className="text-blue-500 font-bold font-space-grotesk text-sm uppercase tracking-widest">Module 1</h2>
          <p className="text-zinc-500 text-[10px] tracking-widest mt-1 uppercase">Git Fundamentals</p>
        </div>

        <div className="flex-1 overflow-y-auto custom-scrollbar font-space-grotesk text-sm uppercase tracking-widest">
          <nav className="flex flex-col">
            <a className="px-6 py-4 flex items-center gap-3 text-blue-400 font-bold bg-zinc-800/50 border-r-4 border-blue-500 cursor-pointer">
              <span className="material-symbols-outlined text-xl">info</span>
              <span>Introduction</span>
            </a>
            
            {["How Git Works", "Motivation Behind Git", "Environment Setup"].map(item => (
              <a 
                key={item} 
                onClick={() => setIsOpen(false)} // Close on click for mobile
                className="px-6 py-4 flex items-center gap-3 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800 transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-xl">terminal</span>
                <span>{item}</span>
              </a>
            ))}
          </nav>
        </div>

        <div className="px-6 py-6 border-t border-zinc-800/50 shrink-0">
          <a className="flex items-center gap-3 text-zinc-500 hover:text-zinc-300 transition-colors" href="#">
            <span className="material-symbols-outlined text-xl">map</span>
            <span>Course Map</span>
          </a>
        </div>
      </aside>
    </>
  );
};