"use client";

import React from "react";

export default function MyApplicationsTable({ CollaboratorData }) {
  if (!CollaboratorData || CollaboratorData.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-50 bg-[#111217] border border-zinc-800 rounded-xl text-center p-6">
        <p className="text-sm font-mono text-zinc-400">No active applications found.</p>
      </div>
    );
  }

  return (
    <div className="w-full overflow-x-auto bg-[#0f1115] border border-zinc-800 rounded-xl shadow-2xl">
      <table className="w-full border-collapse text-left text-sm text-zinc-300">
        
        {/* HEADER TRACK - High-contrast gray background with bold white labels */}
        <thead>
          <tr className="border-b border-zinc-800 text-xs font-bold tracking-wider text-zinc-200 uppercase font-mono bg-[#161920]">
            <th className="py-4 px-6 w-16 text-center text-zinc-400">#</th>
            <th className="py-4 px-4">Opportunity Name</th>
            <th className="py-4 px-4">Startup Name</th>
            <th className="py-4 px-4 font-mono">Applied Date</th>
            <th className="py-4 px-6 text-right w-36">Status</th>
          </tr>
        </thead>

        {/* BODY DATA ROWS */}
        <tbody className="divide-y divide-zinc-800">
          {CollaboratorData.map((app, index) => {
            const isPending = app.status?.toLowerCase() === "pending";
            const isAccept = app.status?.toLowerCase() === "accept" || app.status?.toLowerCase() === "accepted";

            return (
              <tr key={index} className="group hover:bg-[#161920] transition-colors duration-100">
                
                {/* Index Counter - Highly visible bold yellow/gray tracking */}
                <td className="py-4 px-6 text-center font-mono text-sm font-bold text-zinc-500 group-hover:text-zinc-300">
                  {index + 1}
                </td>

                {/* Opportunity Title - Bold crisp white text */}
                <td className="py-4 px-4 font-bold text-white text-[15px] tracking-tight">
                  {app.roleTitle}
                </td>

                {/* Startup Name - Soft clean white text */}
                <td className="py-4 px-4 text-zinc-100 font-semibold">
                  {app.satartupName}
                </td>

                {/* Applied Timeline Date - Readable monospace font */}
                <td className="py-4 px-4 font-mono text-sm text-zinc-300 font-medium">
                  {app.appliedDate}
                </td>

                {/* High-Contrast Color-Coded Badges */}
                <td className="py-4 px-6 text-right">
                  <span
                    className={`inline-flex items-center gap-2 text-xs font-bold font-mono tracking-wide px-3 py-1 rounded-md border-2 uppercase
                      ${isPending ? "bg-amber-500/20 text-amber-400 border-amber-500/40" : ""}
                      ${isAccept ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/40" : ""}
                      ${!isPending && !isAccept ? "bg-rose-500/20 text-rose-400 border-rose-500/40" : ""}
                    `}
                  >
                    <span className={`w-2 h-2 rounded-full 
                      ${isPending ? "bg-amber-400 animate-pulse" : ""}
                      ${isAccept ? "bg-emerald-400 shadow-[0_0_8px_#10b981]" : ""}
                      ${!isPending && !isAccept ? "bg-rose-400" : ""}
                    `} />
                    {app.status}
                  </span>
                </td>

              </tr>
            );
          })}
        </tbody>
        
      </table>
    </div>
  );
}