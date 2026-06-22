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
  Inbox,
  XCircle,
} from "lucide-react";
import toast from "react-hot-toast";
import {
  founderStartupsDataDelete,
  founderStartupsDataUpdate,
} from "@/api/serverMutation";

import { useRouter } from "next/navigation";
import { IoMdRemoveCircleOutline } from "react-icons/io";
import StarupsDelete from "./StartupsDatate";


export default function ManageStartups({ startupsManage }) {
  const rouder = useRouter();

  const handleApprove = async (id, status) => {
    await founderStartupsDataUpdate(id, { status });
    toast.success("Approved");
    rouder.refresh();
  };

 

  return (
    <div className="max-w-7xl mx-auto p-2 space-y-4">
      {/* Table Title Module */}
      <div className="border-b border-slate-800/60 pb-4">
        <h2 className="text-base font-bold text-white flex items-center gap-2">
          <Building2 className="size-4.5 text-purple-400" /> Startup Directory
          Approvals
        </h2>
        <p className="text-xs text-slate-400 mt-0.5">
          Approve incoming venture applications or safely purge decommissioned
          organizations.
        </p>
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
                <th className="py-3.5 px-4">FundingStage</th>
                <th className="py-3.5 px-4">Status</th>
                <th className="py-3.5 px-4 text-right w-48">Actions</th>
              </tr>
            </thead>

            {/* Dynamic Body Element */}
            <tbody className="divide-y divide-slate-900/60 text-slate-300">
              {startupsManage.map((startup, index) => {
                const isApproved = startup.status === "Approved";
                const isRejected = startup.status === "isRejected";

                return (
                  <tr
                    key={startup._id}
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
                        {startup.startupName}
                      </div>
                    </td>

                    {/* Founder Name */}
                    <td className="py-3.5 px-4 text-slate-400 font-medium">
                      <div className="flex items-center gap-1.5">
                        <User className="size-3.5 text-slate-600" />
                        {startup.founderName}
                      </div>
                    </td>

                    {/* Tech Sector Tag */}
                    <td className="py-3.5 px-4">
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-semibold tracking-wide uppercase bg-blue-500/5 border border-blue-500/20 text-blue-400">
                        <Cpu className="size-2.5" />
                        {startup.fundingStage}
                      </span>
                    </td>

                    {/* Operational Review Status Badge */}
                    <td className="py-3.5 px-4">
                      {isApproved ? (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                          <CheckCircle2 className="size-3" />
                          Approved
                        </span>
                      ) : isRejected ? (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium bg-red-500/10 border border-red-500/20 text-red-400">
                          <XCircle className="size-3" />
                          Rejected
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium bg-amber-500/10 border border-amber-500/20 text-amber-400 animate-pulse">
                          <Clock className="size-3" />
                          Pending Review
                        </span>
                      )}
                    </td>

                    {/* Action Panel Track */}
                    <td className="py-3.5 px-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        {!isApproved && !isRejected && (
                          <button
                            onClick={() =>
                              handleApprove(startup._id, "Approved")
                            }
                            className="h-7 px-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-[11px] flex items-center gap-1 transition cursor-pointer"
                          >
                            <ShieldCheck className="size-3.5" />
                            Approve
                          </button>
                        )}

                        {isApproved && (
                          <button
                            onClick={() =>
                              handleApprove(startup._id, "Rejected")
                            }
                            className="h-7 px-2.5 rounded-lg bg-red-600 hover:bg-red-500 text-white font-medium text-[11px] flex items-center gap-1 transition cursor-pointer"
                          >
                            <IoMdRemoveCircleOutline className="size-3.5" />
                            Reject
                          </button>
                        )}

                        <StarupsDelete id={startup} />
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Empty Directory Fallback Layout */}
        {startupsManage.length === 0 && (
          <div className="p-12 text-center flex flex-col items-center justify-center bg-[#0d0e12]">
            <div className="h-12 w-12 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-500 mb-3 shadow-inner">
              <Inbox className="size-5" />
            </div>
            <h3 className="text-sm font-bold text-white tracking-tight">
              Ecosystem Directory Empty
            </h3>
            <p className="text-xs text-slate-500 max-w-xs mt-1 leading-relaxed">
              No registration requests detected. New startup applications will
              populate here automatically.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
