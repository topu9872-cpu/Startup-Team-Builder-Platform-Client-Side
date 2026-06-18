"use client";

import React, { useState } from "react";
import { Search, SlidersHorizontal, ChevronDown, Sparkles, X } from "lucide-react";

export default function StartupSearchBar() {
  const [searchRole, setSearchRole] = useState("");
  const [searchSkills, setSearchSkills] = useState("");
  const [workType, setWorkType] = useState("");
  const [industry, setIndustry] = useState("");
  const [showFilters, setShowFilters] = useState(true); // Toggle drawer state

  const handleFilterSubmit = (e) => {
    e.preventDefault();
    console.log("Form query submitted:", { searchRole, searchSkills, workType, industry });
  };

  const clearFilters = () => {
    setSearchRole("");
    setSearchSkills("");
    setWorkType("");
    setIndustry("");
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 bg-slate-950">
      <form onSubmit={handleFilterSubmit} className="space-y-3">
        
        {/* 1. MAIN SEARCH BAR CONTROLLERS CONTAINER */}
        <div className="flex gap-2 items-center bg-slate-900/40 p-2 rounded-lg border border-slate-900 shadow-xl focus-within:border-slate-800 transition-all">
          <div className="relative flex-1 flex items-center">
            <Search size={16} className="absolute left-3 text-slate-500 shrink-0" />
            <input
              type="text"
              placeholder="Search by intended & Role (e.g. Core Systems Architect Architecture Operator...)"
              value={searchRole}
              onChange={(e) => setSearchRole(e.target.value)}
              className="w-full bg-transparent border-0 rounded-md py-2.5 pl-10 pr-4 text-xs font-mono text-slate-200 placeholder-slate-600 focus:outline-hidden focus:ring-0"
            />
          </div>

          {/* ADVANCED CONFIG SWITCH TOGGLE */}
          <button
            type="button"
            onClick={() => setShowFilters(!showFilters)}
            className={`flex items-center gap-2 px-3.5 py-2.5 rounded font-mono text-[11px] font-semibold tracking-wide border transition-all ${
              showFilters 
                ? "bg-purple-950/40 text-purple-400 border-purple-900/60" 
                : "bg-slate-900/60 text-slate-400 border-slate-800 hover:text-slate-200"
            }`}
          >
            <SlidersHorizontal size={12} className={showFilters ? "animate-pulse" : ""} />
            <span className="hidden sm:inline">Parameters</span>
          </button>

          {/* PRIMARY PIPELINE INGEST RUN ACTION */}
          <button
            type="submit"
            className="flex items-center justify-center gap-1.5 px-4 py-2.5 bg-purple-600 hover:bg-purple-500 text-white font-mono font-bold text-[11px] uppercase tracking-wider rounded border border-purple-500/20 hover:border-indigo-400 shadow-md transition-all shrink-0"
          >
           Search
          </button>
        </div>

        {/* 2. SLIDE DRAWER FILTER EXPANSION MODULE */}
        {showFilters && (
          <div className="bg-slate-900/20 border border-slate-900/80 rounded-lg p-4 space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
            
            {/* UTILITY BAR SYSTEM INFO */}
            <div className="flex items-center justify-between border-b border-slate-900/60 pb-2">
              <div className="flex items-center gap-1.5 text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                <Sparkles size={11} className="text-indigo-500" />
                <span>Filter Opportunities Matrix</span>
              </div>
              
              {(searchRole || searchSkills || workType || industry) && (
                <button
                  type="button"
                  onClick={clearFilters}
                  className="flex items-center gap-1 font-mono text-[9px] text-slate-500 hover:text-rose-400 transition-colors uppercase"
                >
                  <X size={10} />
                  <span>Flush Filters</span>
                </button>
              )}
            </div>

            {/* EXPANDED INNER CONTROL GRID inputs */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              
              {/* Core Skill Vector Filter */}
              <div className="flex flex-col space-y-1.5">
                <label className="text-[10px] font-mono text-slate-600 uppercase tracking-wider">Required Core Skills</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="e.g. Rust, WebGPU, WGSL"
                    value={searchSkills}
                    onChange={(e) => setSearchSkills(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-900 focus:border-purple-900/60 rounded px-3 py-2 text-xs font-mono text-slate-300 placeholder-slate-700 focus:outline-hidden transition-colors"
                  />
                </div>
              </div>

              {/* Work Type Custom Framework Selection Dropdown */}
              <div className="flex flex-col space-y-1.5">
                <label className="text-[10px] font-mono text-slate-600 uppercase tracking-wider">Work Environment Allocation</label>
                <div className="relative">
                  <select
                    value={workType}
                    onChange={(e) => setWorkType(e.target.value)}
                    className="w-full appearance-none bg-slate-950 border border-slate-900 focus:border-purple-900/60 rounded px-3 py-2 text-xs font-mono text-slate-300 focus:outline-hidden transition-colors cursor-pointer"
                  >
                    <option value="" className="text-slate-600">All Work Frameworks</option>
                    <option value="full-time">Full-Time Synchronous</option>
                    <option value="part-time">Part-Time Synchronous</option>
                    <option value="contract">Asynchronous Contract</option>
                    <option value="remote">Sovereign Remote Node</option>
                  </select>
                  <ChevronDown size={12} className="absolute right-3 top-3 text-slate-600 pointer-events-none" />
                </div>
              </div>

              {/* Industry Selection Deployment Selector */}
              <div className="flex flex-col space-y-1.5">
                <label className="text-[10px] font-mono text-slate-600 uppercase tracking-wider">Ecosystem Segment Sector</label>
                <div className="relative">
                  <select
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                    className="w-full appearance-none bg-slate-950 border border-slate-900 focus:border-purple-900/60 rounded px-3 py-2 text-xs font-mono text-slate-300 focus:outline-hidden transition-colors cursor-pointer"
                  >
                    <option value="" className="text-slate-600">All Industrial Sectors</option>
                    <option value="ai">AI Models & Infrastructure</option>
                    <option value="fintech">Decentralized Finance Layers</option>
                    <option value="biotech">Computational Biotech Systems</option>
                    <option value="saas">SaaS Infrastructure Protocols</option>
                  </select>
                  <ChevronDown size={12} className="absolute right-3 top-3 text-slate-600 pointer-events-none" />
                </div>
              </div>

            </div>

          </div>
        )}
      </form>
    </div>
  );
}