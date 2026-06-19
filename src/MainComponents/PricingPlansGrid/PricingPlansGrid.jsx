"use client";

import React from "react";
import { Sparkles, CheckCircle2, Zap, Building2, CalendarRange } from "lucide-react";
import toast from "react-hot-toast";

export default function PricingPlansGrid() {
  return (
    <div className="w-full max-w-5xl mx-auto font-sans">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        
        {/* PLAN 1: STARTER / FREE */}
        <div className="p-6 rounded-xl border border-slate-800 bg-slate-950/40 flex flex-col backdrop-blur-md opacity-75">
          <div className="flex-1">
            <div className="flex items-center gap-2 text-slate-400 font-semibold text-sm mb-2">
              <Zap className="w-4 h-4 text-slate-400" /> Starter
            </div>
            
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-black text-slate-100">$0</span>
              <span className="text-slate-500 text-xs">/ free</span>
            </div>
            
            <p className="text-xs text-rose-400/90 font-medium mt-2 flex items-center gap-1">
              <CalendarRange className="w-3.5 h-3.5" /> Limit: 3 applications / month
            </p>

            <div className="mt-5 space-y-2.5 border-t border-slate-900 pt-4">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                <span>Standard applicant indexing</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                <span>Public board routing access</span>
              </div>
            </div>
          </div>
          
          <div className="mt-6">
            <button 
              disabled 
              className="w-full py-2 bg-slate-800 border border-slate-700/40 text-rose-400 text-xs font-semibold rounded-lg cursor-not-allowed text-center"
            >
              Monthly Cap Reached
            </button>
          </div>
        </div>

        {/* PLAN 2: PROFESSIONAL */}
        <div className="p-6 rounded-xl border border-indigo-500/40 bg-linear-to-b from-indigo-950/30 to-slate-950/80 flex flex-col backdrop-blur-md relative shadow-xl transition-all duration-300">
          <div className="absolute top-0 right-0 p-1.5 border-b border-l rounded-bl-lg text-[9px] uppercase tracking-wider font-bold flex items-center gap-1 bg-indigo-500/20 border-indigo-500/30 text-indigo-300">
            <Sparkles className="w-2.5 h-2.5" /> Recommended Upgrade
          </div>
          
          <div className="flex-1">
            <div className="flex items-center gap-2 font-semibold text-sm mb-2 text-indigo-400">
              <Sparkles className="w-4 h-4" /> Pro Developer
            </div>
            
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-black text-slate-100">$12</span>
              <span className="text-slate-400 text-xs">/ month</span>
            </div>
            
            <p className="text-xs text-emerald-400 font-semibold mt-2 flex items-center gap-1">
              <CalendarRange className="w-3.5 h-3.5" /> Limit: 20 applications / month
            </p>

            <div className="mt-5 space-y-2.5 border-t border-slate-800 pt-4">
              <div className="flex items-center gap-2 text-xs text-slate-200">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-indigo-400" />
                <span className="font-semibold text-slate-100">Extended monthly submission capacity</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-indigo-400" />
                <span>Priority premium submission tracking</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-indigo-400" />
                <span>Direct team workspace contact loops</span>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <button
              onClick={() => toast.success("Redirecting to Pro checkout setup...")}
              className="w-full py-2 text-white font-semibold text-xs rounded-lg transition-all shadow-md text-center bg-linear-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 shadow-indigo-500/20"
            >
              Upgrade to Pro (20/mo)
            </button>
          </div>
        </div>

        {/* PLAN 3: ENTERPRISE */}
        <div className="p-6 rounded-xl border border-slate-800 bg-slate-950/40 flex flex-col backdrop-blur-md">
          <div className="flex-1">
            <div className="flex items-center gap-2 text-purple-400 font-semibold text-sm mb-2">
              <Building2 className="w-4 h-4 text-purple-400" /> Enterprise
            </div>
            
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-black text-slate-100">$49</span>
              <span className="text-slate-500 text-[12px]">/ month</span>
            </div>
            
            <p className="text-xs text-purple-400 font-semibold mt-2 flex items-center gap-1">
              <CalendarRange className="w-3.5 h-3.5" /> Limit: 50 applications / month
            </p>

            <div className="mt-5 space-y-2.5 border-t border-slate-900 pt-4">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                <span className="font-semibold text-slate-100">High-volume operational quota ceiling</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                <span>Dedicated accounts engineering liaison</span>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <button
              onClick={() => toast.success("Redirecting to corporate validation tracking...")}
              className="w-full py-2 bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 text-xs font-semibold rounded-lg transition-all text-center"
            >
              Get Enterprise (50/mo)
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}