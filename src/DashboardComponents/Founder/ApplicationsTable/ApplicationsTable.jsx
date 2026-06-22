"use client";

import { UpdateApplicationsStatus } from "@/api/serverMutation";
import { useState } from "react";
import toast from "react-hot-toast";
import { 
  FiCheck, 
  FiX, 
  FiInbox, 
  FiRefreshCw, 
  FiMail, 
  FiCalendar, 
  FiBriefcase 
} from "react-icons/fi";

export default function ApplicationsTable({ applications: initialApplications }) {
  const [apps, setApps] = useState(initialApplications || []);
  const [loadingId, setLoadingId] = useState(null);

  const handleUpdateStatus = async (id, newStatus) => {
    const originalApps = [...apps];
    setLoadingId(id);

    // Optimistic UI update
    setApps(prev => prev.map(app => app._id === id ? { ...app, status: newStatus } : app));

    try {
      const success = await UpdateApplicationsStatus(id, { status: newStatus });
      if (success) {
        toast.success(`Candidate ${newStatus.toLowerCase()}`, {
          style: { background: '#09090b', color: '#f4f4f5', border: '1px solid #27272a' }
        });
      } else {
        throw new Error();
      }
    } catch {
      toast.error("Failed to update status");
      setApps(originalApps); // Rollback
    } finally {
      setLoadingId(null);
    }
  };

  // --- EMPTY STATE ---
  if (!apps || apps.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-88 bg-[#030303] text-center p-8">
        <FiInbox className="w-8 h-8 text-zinc-700 mb-3 stroke-[1.5]" />
        <h3 className="text-sm font-medium text-zinc-200">No applications</h3>
        <p className="text-xs text-zinc-500 mt-1 max-w-60">New candidate profiles will appear here dynamically.</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 inline-flex items-center gap-2 text-xs text-zinc-400 hover:text-white bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-lg transition-all"
        >
          <FiRefreshCw className="w-3 h-3" /> Refresh
        </button>
      </div>
    );
  }

  // --- MODERN PRESTIGE TABLE ---
  return (
    <div className="w-full bg-[#030303] text-zinc-400 min-h-screen p-6 font-sans antialiased">
      <div className="max-w-6xl mx-auto">
        
        <div className="overflow-x-auto w-full bg-[#09090b] border border-zinc-900 rounded-xl shadow-2xl">
          <table className="w-full border-collapse text-left">
            
            {/* Minimal Headings */}
            <thead>
              <tr className="border-b border-zinc-900 text-[11px] font-medium tracking-wider text-zinc-500 uppercase bg-[#050507]">
                <th className="py-4 px-6 w-12 text-center font-mono">#</th>
                <th className="py-4 px-4">Applicant</th>
                <th className="py-4 px-4">Role</th>
                <th className="py-4 px-4">Applied Date</th>
                <th className="py-4 px-4">Status</th>
                <th className="py-4 px-6 text-right">Actions</th>
              </tr>
            </thead>

            {/* Premium Flat Rows */}
            <tbody className="divide-y divide-zinc-900/50 text-sm">
              {apps.map((app, index) => {
                const isAccepted = app.status === "Accepted";
                const isRejected = app.status === "Rejected";
                const isPending = !isAccepted && !isRejected;

                return (
                  <tr key={app._id} className="group hover:bg-zinc-900/30 transition-colors duration-150">
                    
                    {/* Index Counter */}
                    <td className="py-4 px-6 text-center font-mono text-xs text-zinc-600 group-hover:text-zinc-400">
                      {String(index + 1).padStart(2, '0')}
                    </td>

                    {/* Candidate Identity */}
                    <td className="py-4 px-4">
                      <div className="flex flex-col">
                        <span className="font-medium text-zinc-200 group-hover:text-white transition-colors">
                          {app.name}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-xs text-zinc-500 mt-0.5">
                          <FiMail className="w-3 h-3 text-zinc-600" />
                          {app.applicantEmail}
                        </span>
                      </div>
                    </td>

                    {/* Target Job Role */}
                    <td className="py-4 px-4">
                      <span className="inline-flex items-center gap-2 text-zinc-300">
                        <FiBriefcase className="w-3.5 h-3.5 text-zinc-600" />
                        {app.role}
                      </span>
                    </td>

                    {/* Entry Date */}
                    <td className="py-4 px-4">
                      <span className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-500">
                        <FiCalendar className="w-3.5 h-3.5 text-zinc-600" />
                        {app.appliedDate}
                      </span>
                    </td>

                    {/* Micro Indicator Glow Badge */}
                    <td className="py-4 px-4">
                      <div className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md text-[11px] font-mono border tracking-tight
                        ${isAccepted ? "bg-emerald-500/5 text-emerald-400 border-emerald-500/10" : ""}
                        ${isRejected ? "bg-rose-500/5 text-rose-400 border-rose-500/10" : ""}
                        ${isPending ? "bg-amber-500/5 text-amber-400 border-amber-500/10" : ""}
                      `}>
                        <span className={`w-1 h-1 rounded-full 
                          ${isAccepted ? "bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.4)]" : ""}
                          ${isRejected ? "bg-rose-400" : ""}
                          ${isPending ? "bg-amber-400 animate-pulse" : ""}
                        `} />
                        {app.status}
                      </div>
                    </td>

                    {/* Flat Command Layout Buttons */}
                    <td className="py-4 px-6 text-right">
                      <div className="inline-flex items-center gap-1.5">
                        
                        {/* Accept Button */}
                        <button
                          disabled={loadingId === app._id || isAccepted}
                          onClick={() => handleUpdateStatus(app._id, "Accepted")}
                          className={`h-7 px-2.5 text-xs font-medium rounded-lg border transition-all duration-150 flex items-center gap-1
                            ${isAccepted 
                              ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400 pointer-events-none" 
                              : "bg-zinc-900 border-zinc-800 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200 active:scale-95"
                            } disabled:opacity-40`}
                        >
                          <FiCheck className="w-3 h-3 stroke-[2.5]" />
                          {!isAccepted && <span>Accept</span>}
                        </button>

                        {/* Reject Button */}
                        <button
                          disabled={loadingId === app._id || isRejected}
                          onClick={() => handleUpdateStatus(app._id, "Rejected")}
                          className={`h-7 px-2.5 text-xs font-medium rounded-lg border transition-all duration-150 flex items-center gap-1
                            ${isRejected 
                              ? "bg-rose-500/10 border-rose-500/20 text-rose-400 pointer-events-none" 
                              : "bg-zinc-900 border-zinc-800 text-zinc-500 hover:bg-rose-950/20 hover:border-rose-500/30 hover:text-rose-400 active:scale-95"
                            } disabled:opacity-40`}
                        >
                          <FiX className="w-3 h-3 stroke-[2.5]" />
                          {!isRejected && <span>Reject</span>}
                        </button>

                      </div>
                    </td>

                  </tr>
                );
              })}
            </tbody>

          </table>
        </div>

      </div>
    </div>
  );
}