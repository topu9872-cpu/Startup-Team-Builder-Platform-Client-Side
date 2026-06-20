

import React from "react";
import { Users, Layers, User, Sparkles } from "lucide-react";
import StartupsCards from "../StartupsCards/StartupsCards";
import { getStartups } from "@/api/serverMutation";



export default async function FeaturedStartupsPage() {

    const startupsData = await getStartups();
  
  return (
    <div className=" px-16 mx-auto  py-16 text-slate-100 font-sans bg-slate-950 space-y-10">
      
      {/* HEADER SECTION */}
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

      {/* INTERIOR CLUSTER GRID MAP AREA */}
      <div className="space-y-4">
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

       <div >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
      {startupsData.slice(0,3).map((startups) => (
        <StartupsCards key={startups._id} startups={startups} />
      ))}
    </div>
    </div>
      </div>

    </div>
  );
}