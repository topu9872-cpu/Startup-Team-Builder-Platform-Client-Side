"use client";

import React from "react";
import { Users, Layers, User, Sparkles } from "lucide-react";
import Image from "next/image";

export default function StartupsCards({ startups }) {
  const {
    description,

    founderName,


    industry,
    logo,
    startupName,
    teamSizeNeeded,
  } = startups;

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-4 rounded text-slate-100 font-sans bg-slate-950 space-y-10">
      {/* INTERIOR CLUSTER GRID MAP AREA */}
      <div className="space-y-4">
        {/* DYNAMIC CARD INJECTION CONTAINER */}

        <div className="w-full rounded bg-slate-900/20 border border-slate-900 hover:border-slate-800 p-5 flex flex-col justify-between space-y-4 hover:bg-slate-900/30 transition-all duration-300 group shadow-md hover:shadow-xl">
          {/* 1. IDENTITY & BRAND FRAME */}
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-3">
              <Image
                src={logo}
                width={80}
                height={80}
                alt={`asset`}
                className="h-11 w-11 rounded border border-slate-800 object-contain bg-slate-950"
              />

              <div className="space-y-0.5">
                <h3 className="text-sm font-bold text-slate-200 group-hover:text-purple-400 transition-colors duration-200 line-clamp-1">
                  {startupName}
                </h3>
                <div className="flex items-center gap-1.5 text-[10px] text-slate-500 font-mono">
                  <Layers size={10} className="text-slate-600" />
                  <span className="truncate max-w-45">{industry}</span>
                </div>
              </div>
            </div>
          </div>

          {/* 2. DESCRIPTION CONTENT STREAM */}
          <p className="text-xs text-slate-400 leading-relaxed font-normal h-10 line-clamp-2">
            {description}
          </p>

          {/* 3. METADATA SYSTEM ATTRIBUTES GRID */}
          <div className="grid grid-cols-2 gap-2 pt-1 text-[11px] font-mono">
            <div className="flex items-center gap-2 text-slate-400 bg-slate-900/40 p-1.5 rounded border border-slate-900/40">
              <User size={12} className="text-slate-600 shrink-0" />
              <div className="flex flex-col truncate">
                <span className="text-[9px] text-slate-600 leading-none uppercase">
                  Founder
                </span>
                <span className="text-slate-300 font-medium truncate mt-0.5">
                  {founderName}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-slate-400 bg-slate-900/40 p-1.5 rounded border border-slate-900/40">
              <Users size={12} className="text-slate-600 shrink-0" />
              <div className="flex flex-col truncate">
                <span className="text-[9px] text-slate-600 leading-none uppercase">
                  Seats Needed
                </span>
                <span className="text-slate-300 font-medium truncate mt-0.5">
                  {teamSizeNeeded}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
