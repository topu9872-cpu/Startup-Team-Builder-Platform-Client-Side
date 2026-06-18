"use client";

import React from "react";
import { Users, Layers, User, Sparkles } from "lucide-react";

const FEATURED_STARTUPS = [
  {
    startup_name: "QuantumLeap Labs",
    logo: "",
    founder_name: "Sarah Chen",
    industry: "AI Infrastructure",
    team_size_needed: "3 Engineers",
    description: "Building decentralized optimization matrices and low-latency compilation layers for distributed AI models."
  },
  {
    startup_name: "Veloce Energy",
    logo: "",
    founder_name: "Marcus Vance",
    industry: "Grid Decarbonization",
    team_size_needed: "2 Researchers",
    description: "Algorithmic load-balancing protocols designed to optimize renewable input distribution across municipal grids."
  },
  {
    startup_name: "Sovereign Data",
    logo: "",
    founder_name: "Alexei Petrov",
    industry: "Privacy Systems",
    team_size_needed: "1 Cryptographer",
    description: "Zero-knowledge verification frameworks protecting enterprise analytical computations on shared clouds."
  }
];

export default function StartupsCards() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-8 sm:py-12 text-slate-100 font-sans bg-slate-950 space-y-10">
      
    
      {/* INTERIOR CLUSTER GRID MAP AREA */}
      <div className="space-y-4">
        

        {/* DYNAMIC CARD INJECTION CONTAINER */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {FEATURED_STARTUPS.map((startup, index) => {
            const initialLetter = (startup.startup_name || "U").charAt(0).toUpperCase();
            
            return (
              <div 
                key={startup.startup_name + index}
                className="w-full rounded bg-slate-900/20 border border-slate-900 hover:border-slate-800 p-5 flex flex-col justify-between space-y-4 hover:bg-slate-900/30 transition-all duration-300 group shadow-md hover:shadow-xl"
              >
                {/* 1. IDENTITY & BRAND FRAME */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    {startup.logo ? (
                      <img 
                        src={startup.logo} 
                        alt={`${startup.startup_name} asset`} 
                        className="h-11 w-11 rounded border border-slate-800 object-contain bg-slate-950" 
                      />
                    ) : (
                      <div className="h-11 w-11 rounded bg-gradient-to-br from-purple-600/30 to-indigo-800/20 border border-purple-900/40 flex items-center justify-center font-mono font-black text-purple-400 text-lg shadow-inner shrink-0">
                        {initialLetter}
                      </div>
                    )}

                    <div className="space-y-0.5">
                      <h3 className="text-sm font-bold text-slate-200 group-hover:text-purple-400 transition-colors duration-200 line-clamp-1">
                        {startup.startup_name || "Unnamed Venture"}
                      </h3>
                      <div className="flex items-center gap-1.5 text-[10px] text-slate-500 font-mono">
                        <Layers size={10} className="text-slate-600" />
                        <span className="truncate max-w-45">{startup.industry || "General Industry"}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2. DESCRIPTION CONTENT STREAM */}
                <p className="text-xs text-slate-400 leading-relaxed font-normal min-h-[48px] line-clamp-3">
                  {startup.description || "No project parameters or system descriptions provided yet for this active venture node."}
                </p>

                {/* 3. METADATA SYSTEM ATTRIBUTES GRID */}
                <div className="grid grid-cols-2 gap-2 pt-1 text-[11px] font-mono">
                  <div className="flex items-center gap-2 text-slate-400 bg-slate-900/40 p-1.5 rounded border border-slate-900/40">
                    <User size={12} className="text-slate-600 shrink-0" />
                    <div className="flex flex-col truncate">
                      <span className="text-[9px] text-slate-600 leading-none uppercase">Founder</span>
                      <span className="text-slate-300 font-medium truncate mt-0.5">{startup.founder_name }</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-slate-400 bg-slate-900/40 p-1.5 rounded border border-slate-900/40">
                    <Users size={12} className="text-slate-600 shrink-0" />
                    <div className="flex flex-col truncate">
                      <span className="text-[9px] text-slate-600 leading-none uppercase">Seats Needed</span>
                      <span className="text-slate-300 font-medium truncate mt-0.5">{startup.team_size_needed }</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}