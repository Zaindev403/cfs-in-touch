"use client";

import React from 'react';

export const TerminalBox = () => {
  return (
    <div>
      <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
        <span className="material-symbols-outlined text-primary-fixed">settings</span>
        Step 2: Configuration
      </h3>
      <p className="text-on-surface-variant mb-4">Introduce yourself to Git. This information is attached to every commit you make.</p>
      <div className="bg-surface-container-lowest p-6 rounded-lg font-mono text-sm relative border border-outline-variant/20 code-glow">
        <div className="flex gap-2 absolute top-4 right-4">
          <div className="w-3 h-3 rounded-full bg-error-container"></div>
          <div className="w-3 h-3 rounded-full bg-primary-container"></div>
          <div className="w-3 h-3 rounded-full bg-secondary-container"></div>
        </div>
        <div className="space-y-3">
          <div className="flex">
            <span className="text-secondary mr-4">$</span>
            <span className="text-on-surface">git config --global user.name "Your Name"</span>
          </div>
          <div className="flex">
            <span className="text-secondary mr-4">$</span>
            <span className="text-on-surface">git config --global user.email "email@example.com"</span>
          </div>
          <div className="flex pt-2 border-t border-zinc-800/50">
            <span className="text-zinc-500 mr-4">#</span>
            <span className="text-zinc-500 italic">Verify your settings</span>
          </div>
          <div className="flex">
            <span className="text-secondary mr-4">$</span>
            <span className="text-on-surface">git config --list</span>
          </div>
        </div>
      </div>
    </div>
  );
};