"use client";

import React from "react";
import { Users, Layers, User, ArrowUpRight, Sparkles } from "lucide-react";

const FEATURED_STARTUPS = [
  {
    id: "st-001",
    name: "AuraAI",
    founder: "Elena Rostova",
    industry: "Artificial Intelligence",
    teamSizeNeeded: "2-3 Operators",
    techBadge: "LLM Infra"
  },
  {
    id: "st-002",
    name: "DeFiPulse",
    founder: "Marcus Vance",
    industry: "Web3 / Fintech",
    teamSizeNeeded: "1 UI Architect",
    techBadge: "Solidity"
  },
  {
    id: "st-003",
    name: "EcoTrace",
    founder: "Siddharth Mehta",
    industry: "GreenTech / IoT",
    teamSizeNeeded: "4 Core Devs",
    techBadge: "Rust Edge"
  }
];

export default function FeaturedStartupsPage() {
  const handleSelectStartup = (id) => {
    console.log(`Initializing system layout allocation for node: ${id}`);
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-8 sm:py-12 text-slate-100 font-sans bg-slate-950 space-y-10">
      
      {/* 1. TOP TITLE / HERO HEADER */}
      <div className="space-y-3 pb-8 border-b border-slate-900">
        <div className="inline-flex items-center gap-1.5 text-[10px] font-mono text-indigo-400 bg-indigo-950/40 px-2.5 py-1 rounded-full border border-indigo-900/40">
          <Sparkles size={10} className="animate-pulse" />
          <span>Ecosystem Nodes Live</span>
        </div>
        
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight bg-linear-to-r from-slate-100 via-slate-200 to-slate-400 bg-clip-text text-transparent">
          Explore Featured Ventures
        </h1>
        
        <p className="text-xs sm:text-sm text-slate-400 max-w-2xl leading-relaxed">
          Connect directly with sovereign engineering teams. Review transparent code dependency footprints, open-source stack indexes, and verified compensation metrics.
        </p>
      </div>

      {/* 2. LIVE FEED CLUSTER GRID */}
      <div className="space-y-4">
        {/* INNER FEED SUB-HEADER */}
        <div className="flex items-center justify-between pb-2">
          <div className="flex items-center gap-2">
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500" />
            </div>
            <h2 className="text-xs font-mono text-slate-400 uppercase tracking-wider">
              Active Registry
            </h2>
          </div>
          <span className="text-[10px] font-mono text-slate-500 bg-slate-900/60 px-2 py-0.5 rounded border border-slate-800">
            Realtime Stream
          </span>
        </div>

        {/* CARDS DISPLAY CONTAINER */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {FEATURED_STARTUPS.map((startup) => (
            <div
              key={startup.id}
              onClick={() => handleSelectStartup(startup.id)}
              className="group p-4 rounded bg-slate-900/20 border border-slate-900 hover:bg-slate-900/40 hover:border-slate-800 transition-all duration-300 ease-out cursor-pointer flex flex-col justify-between"
            >
              <div className="space-y-3">
                {/* BRAND METADATA */}
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="text-sm font-bold text-slate-200 group-hover:text-indigo-400 transition-colors duration-200">
                      {startup.name}
                    </h3>
                    <div className="flex items-center gap-1 text-[10px] text-slate-500 mt-0.5">
                      <Layers size={10} />
                      <span>{startup.industry}</span>
                    </div>
                  </div>
                  <span className="text-[9px] font-mono font-bold text-slate-400 bg-slate-950 px-1.5 py-0.5 rounded border border-slate-900">
                    {startup.techBadge}
                  </span>
                </div>

                {/* FOUNDER DETAIL */}
                <div className="flex items-center gap-1.5 py-1.5 px-2 bg-slate-950/40 rounded border border-slate-900/40 text-[11px]">
                  <User size={11} className="text-slate-500" />
                  <span className="text-slate-500">Founder:</span>
                  <span className="text-slate-300 font-semibold truncate">{startup.founder}</span>
                </div>
              </div>

              {/* TARGET REQUISITION FOOTER */}
              <div className="mt-4 pt-3 border-t border-slate-900/60 flex items-center justify-between text-[11px]">
                <div className="flex items-center gap-1.5 text-emerald-400 font-mono">
                  <Users size={12} className="text-emerald-500/80" />
                  <span>{startup.teamSizeNeeded} Needed</span>
                </div>
                
                <div className="p-1 rounded bg-slate-950 border border-slate-900 text-slate-600 group-hover:text-indigo-400 group-hover:border-slate-800 group-hover:bg-indigo-500/5 transition-all duration-200">
                  <ArrowUpRight size={12} className="transform transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

    </div>
  );
}