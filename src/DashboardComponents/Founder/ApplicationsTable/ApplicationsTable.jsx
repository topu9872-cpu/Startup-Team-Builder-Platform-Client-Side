"use client";

import { UpdateApplicationsStatus } from "@/api/serverMutation";
import { useRouter } from "next/navigation";

import toast from "react-hot-toast";

export default function ApplicationsTable({ applications }) {
const router=useRouter()
  const getBadge = (status) => {
    if (status === "Accepted") return "bg-emerald-500/20 text-emerald-400 border-emerald-500/40";
    if (status === "Rejected") return "bg-rose-500/20 text-rose-400 border-rose-500/40";
    return "bg-amber-500/20 text-amber-400 border-amber-500/40";
  };

  // High-Contrast Empty State Box
  if (!applications || applications.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-75 p-4">
        <div className="bg-[#0f1115] border border-zinc-800 rounded-xl shadow-2xl p-8 text-center max-w-md w-full">
          <h2 className="text-xl font-bold text-white tracking-tight">No Applications Yet</h2>
          <p className="text-zinc-400 text-sm mt-2 leading-relaxed">
            You don't have any applications right now. Once candidates apply,
            they will appear here.
          </p>

          <div className="mt-5">
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-purple-600 hover:bg-purple-500 active:bg-purple-700 text-white text-xs font-bold font-mono tracking-wider uppercase rounded-lg transition-colors shadow-lg shadow-purple-600/10"
            >
              Refresh Table
            </button>
          </div>
        </div>
      </div>
    );
  }

  const handleUpdateStatus = async (id, status) => {
    const updateStatus = await UpdateApplicationsStatus(id, { status });

    if (updateStatus) {
      toast.success("updated status");
router.refresh()
    } else {
      toast.error("failed to update status");
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#030303] p-1">
      <div className="w-full overflow-x-auto bg-[#0f1115] border border-zinc-800 rounded-xl shadow-2xl">
        <table className="w-full border-collapse text-left text-sm text-zinc-300">
          
          {/* TRACK HEADER */}
          <thead>
            <tr className="border-b border-zinc-800 text-xs font-bold tracking-wider text-zinc-200 uppercase font-mono bg-[#161920]">
              <th className="py-4 px-6 w-16 text-center text-zinc-400">#</th>
              <th className="py-4 px-4">Applicant</th>
              <th className="py-4 px-4">Email</th>
              <th className="py-4 px-4">Role</th>
              <th className="py-4 px-4 font-mono">Date</th>
              <th className="py-4 px-4">Status</th>
              <th className="py-4 px-6 text-right w-44">Actions</th>
            </tr>
          </thead>

          {/* TABLE DATA ROWS */}
          <tbody className="divide-y divide-zinc-800">
            {applications.map((app, index) => (
              <tr key={app._id} className="group hover:bg-[#161920] transition-colors duration-100">
                
                {/* Index Row */}
                <td className="py-4 px-6 text-center font-mono text-sm font-bold text-zinc-500 group-hover:text-zinc-300">
                  {index + 1}
                </td>

                {/* Applicant Name */}
                <td className="py-4 px-4 font-bold text-white text-[15px] tracking-tight">
                  {app.name}
                </td>

                {/* Email Address */}
                <td className="py-4 px-4 text-zinc-100 font-medium break-all">
                  {app.applicantEmail}
                </td>

                {/* Applied Role */}
                <td className="py-4 px-4 text-zinc-300 font-semibold">
                  {app.role}
                </td>

                {/* Submission Date */}
                <td className="py-4 px-4 font-mono text-sm text-zinc-400">
                  {app.appliedDate}
                </td>

                {/* Status Ring Pill */}
                <td className="py-4 px-4">
                  <span className={`inline-flex items-center gap-1.5 text-xs font-bold font-mono tracking-wide px-2.5 py-1 rounded-md border-2 uppercase ${getBadge(app.status)}`}>
                    <span className={`w-1.5 h-1.5 rounded-full
                      ${app.status === "Accepted" ? "bg-emerald-400" : ""}
                      ${app.status === "Rejected" ? "bg-rose-400" : ""}
                      ${app.status !== "Accepted" && app.status !== "Rejected" ? "bg-amber-400 animate-pulse" : ""}
                    `} />
                    {app.status}
                  </span>
                </td>

                {/* Explicit Functional Action Buttons */}
                <td className="py-4 px-6 text-right">
                  <div className="flex gap-2 justify-end">
                    <button
                      onClick={() => handleUpdateStatus(app._id, "Accepted")}
                      className="px-3 py-1.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold font-mono text-[11px] uppercase tracking-wide rounded transition-all transform active:scale-95 shadow-md shadow-emerald-500/10"
                    >
                      Accept
                    </button>
                    <button
                      onClick={() => handleUpdateStatus(app._id, "Rejected")}
                      className="px-3 py-1.5 bg-rose-500/20 hover:bg-rose-500 border border-rose-500/40 hover:border-rose-500 text-rose-400 hover:text-white font-bold font-mono text-[11px] uppercase tracking-wide rounded transition-all transform active:scale-95"
                    >
                      Reject
                    </button>
                  </div>
                </td>

              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
}