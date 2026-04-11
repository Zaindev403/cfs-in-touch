"use client";
import React from "react";

const STREAMS = [
  {
    id: "ui-nav",
    branch: "feature/ui-nav",
    description: "Implementing Responsive TopAppBar and Glassmorphism.",
    status: "Active",
    color: "primary",
  },
  {
    id: "api-auth",
    branch: "feature/api-auth",
    description: "Integrating JWT tokens and Redis session logic.",
    status: "Merging",
    color: "secondary",
  },
];

export default function TeamSyncCard() {
  return (
    <section className="simulation-card w-full">
      <div className="bg-surface-container-low border border-outline-variant/10 rounded-sm overflow-hidden flex flex-col shadow-xl">
        {/* Header */}
        <div className="bg-surface-container px-4 md:px-8 py-4 md:py-6 border-b border-outline-variant/10 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-secondary text-2xl">
              groups
            </span>
            <h2 className="font-headline font-bold uppercase tracking-widest text-sm md:text-base">
              02. Team Sync
            </h2>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-4 md:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Project Info Sidebar */}
            <div className="lg:col-span-1 bg-surface-container-lowest p-5 rounded-sm border border-outline-variant/10 flex flex-row lg:flex-col justify-between items-center lg:items-start gap-4">
              <div>
                <h3 className="text-sm font-mono font-bold text-secondary">
                  WEB_STACK_V1
                </h3>
                <p className="text-[9px] text-on-surface-variant uppercase font-bold mt-1">
                  {STREAMS.length + 2} Active Streams
                </p>
              </div>
              
              {/* Team Avatars */}
              <div className="flex -space-x-2">
                {[1, 2, 3].map((u) => (
                  <img
                    key={u}
                    className="w-8 h-8 rounded-full border-2 border-surface-dim"
                    src={`https://i.pravatar.cc/100?u=${u}`}
                    alt="Team Member"
                  />
                ))}
              </div>
            </div>

            {/* Active Streams List */}
            <div className="lg:col-span-2 space-y-4">
              {STREAMS.map((stream) => (
                <div key={stream.id} className="flex gap-4 group">
                  {/* Timeline Indicator */}
                  <div className={`w-0.5 relative ${stream.color === 'primary' ? 'bg-primary/20' : 'bg-secondary/20'}`}>
                    <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full shadow-lg ${stream.color === 'primary' ? 'bg-primary' : 'bg-secondary'}`} />
                  </div>
                  
                  {/* Branch Card */}
                  <div className={`bg-surface-container-highest/40 p-4 rounded-sm grow border-l-2 ${stream.color === 'primary' ? 'border-primary' : 'border-secondary'}`}>
                    <div className="flex justify-between items-center mb-2">
                      <span className={`text-[10px] font-mono font-bold ${stream.color === 'primary' ? 'text-primary' : 'text-secondary'}`}>
                        {stream.branch}
                      </span>
                      <span className={`text-[8px] px-2 py-0.5 rounded-full uppercase ${stream.color === 'primary' ? 'bg-primary/20 text-primary' : 'bg-secondary/20 text-secondary'}`}>
                        {stream.status}
                      </span>
                    </div>
                    <p className="text-xs text-on-surface-variant">
                      {stream.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}