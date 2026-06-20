"use client";

import React, { useState } from "react";
import { 
  Building2, 
  User, 
  Cpu, 
  CheckCircle2, 
  Clock, 
  Trash2, 
  ShieldCheck, 
  Inbox 
} from "lucide-react";

export default function ManageStartups() {
  const [startups, setStartups] = useState([
    { id: 1, name: "SkyForge", founder: "John Doe", sector: "Cloud", status: "Pending" },
    { id: 2, name: "CorePulse", founder: "Sarah Lee", sector: "AI", status: "Approved" },
    { id: 3, name: "DevNest", founder: "Mike Ross", sector: "DevTools", status: "Pending" },
  ]);

  const handleApprove = (id) => {
    setStartups((prev) =>
      prev.map((s) => (s.id === id ? { ...s, status: "Approved" } : s))
    );
  };

  const handleRemove = (id) => {
    setStartups((prev) => prev.filter((s) => s.id !== id));
  };

  return (
    <div className="max-w-7xl mx-auto p-2 space-y-4">
      {/* Table Title Module */}
      <div className="border-b border-slate-800/60 pb-4">
        <h2 className="text-base font-bold text-white flex items-center gap-2">
          <Building2 className="size-4.5 text-purple-400" /> Startup Directory Approvals
        </h2>
        <p className="text-xs text-slate-400 mt-0.5">Approve incoming venture applications or safely purge decommissioned organizations.</p>
      </div>

      {/* Main Wrapper Box */}
      <div className="overflow-hidden bg-[#0d0e12] border border-slate-800/80 rounded-xl shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            {/* Header Structure */}
            <thead>
              <tr className="border-b border-slate-950 bg-[#111217] text-slate-400 font-semibold uppercase tracking-wider text-[10px]">
                <th className="py-3.5 px-4 w-12 text-center">#</th>
                <th className="py-3.5 px-4">Startup</th>
                <th className="py-3.5 px-4">Founder</th>
                <th className="py-3.5 px-4">Sector</th>
                <th className="py-3.5 px-4">Status</th>
                <th className="py-3.5 px-4 text-right w-48">Actions</th>
              </tr>
            </thead>

            {/* Dynamic Body Element */}
            <tbody className="divide-y divide-slate-900/60 text-slate-300">
              {startups.map((startup, index) => {
                const isApproved = startup.status === "Approved";
                
                return (
                  <tr 
                    key={startup.id} 
                    className="hover:bg-slate-950/40 transition-colors duration-150 group"
                  >
                    {/* Index Counter */}
                    <td className="py-3.5 px-4 text-center font-mono text-slate-500 text-[11px]">
                      {String(index + 1).padStart(2, "0")}
                    </td>

                    {/* Startup Name */}
                    <td className="py-3.5 px-4 font-semibold text-white tracking-tight">
                      <div className="flex items-center gap-2">
                        <div className="size-2 rounded-full bg-slate-800 group-hover:bg-purple-500 transition-colors" />
                        {startup.name}
                      </div>
                    </td>

                    {/* Founder Name */}
                    <td className="py-3.5 px-4 text-slate-400 font-medium">
                      <div className="flex items-center gap-1.5">
                        <User className="size-3.5 text-slate-600" />
                        {startup.founder}
                      </div>
                    </td>

                    {/* Tech Sector Tag */}
                    <td className="py-3.5 px-4">
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-semibold tracking-wide uppercase bg-blue-500/5 border border-blue-500/20 text-blue-400">
                        <Cpu className="size-2.5" />
                        {startup.sector}
                      </span>
                    </td>

                    {/* Operational Review Status Badge */}
                    <td className="py-3.5 px-4">
                      {isApproved ? (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shadow-xs shadow-emerald-950/50">
                          <CheckCircle2 className="size-3" /> Approved
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium bg-amber-500/10 border border-amber-500/20 text-amber-400 animate-pulse">
                          <Clock className="size-3" /> Pending Review
                        </span>
                      )}
                    </td>

                    {/* Action Panel Track */}
                    <td className="py-3.5 px-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        {/* Approve Trigger */}
                        {!isApproved ? (
                          <button
                            onClick={() => handleApprove(startup.id)}
                            className="h-7 px-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-[11px] flex items-center gap-1 transition shadow-md shadow-emerald-950/30 active:scale-97 cursor-pointer"
                          >
                            <ShieldCheck className="size-3.5" />
                            Approve
                          </button>
                        ) : (
                          // Uniform Spacer placeholder keeping grid width absolute
                          <div className="h-7 w-20" />
                        )}

                        {/* Remove Destructive Trigger */}
                        <button
                          onClick={() => handleRemove(startup.id)}
                          className="h-7 w-7 rounded-lg bg-transparent border border-slate-800 hover:border-red-500/30 text-slate-400 hover:text-red-400 flex items-center justify-center transition hover:bg-red-950/20 cursor-pointer"
                          title="Purge Startup Profile"
                        >
                          <Trash2 className="size-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Empty Directory Fallback Layout */}
        {startups.length === 0 && (
          <div className="p-12 text-center flex flex-col items-center justify-center bg-[#0d0e12]">
            <div className="h-12 w-12 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-500 mb-3 shadow-inner">
              <Inbox className="size-5" />
            </div>
            <h3 className="text-sm font-bold text-white tracking-tight">Ecosystem Directory Empty</h3>
            <p className="text-xs text-slate-500 max-w-xs mt-1 leading-relaxed">
              No registration requests detected. New startup applications will populate here automatically.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}