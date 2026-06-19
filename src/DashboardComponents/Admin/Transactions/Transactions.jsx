"use client";

import React, { useState } from "react";
import { 
  CreditCard, 
  Calendar, 
  ArrowUpRight, 
  CheckCircle2, 
  AlertCircle, 
  Clock, 
  DollarSign 
} from "lucide-react";

export default function Transactions() {
  const [transactions] = useState([
    { id: 1, user: "John Doe", amount: 120, date: "20 Jun 2026", status: "Success" },
    { id: 2, user: "Sarah Lee", amount: 80, date: "19 Jun 2026", status: "Pending" },
    { id: 3, user: "Mike Ross", amount: 200, date: "18 Jun 2026", status: "Failed" },
  ]);

  return (
    <div className="max-w-7xl mx-auto p-2 space-y-4">
      
      {/* Transaction Header Info Block */}
      <div className="border-b border-slate-800/60 pb-4">
        <h2 className="text-base font-bold text-white flex items-center gap-2">
          <CreditCard className="size-4.5 text-emerald-400" /> Transaction Ledger
        </h2>
        <p className="text-xs text-slate-400 mt-0.5">Real-time ledger monitor tracking operational inflows, settlement verification, and pipeline failures.</p>
      </div>

      {/* Main Ledger Content Grid */}
      <div className="overflow-hidden bg-[#0d0e12] border border-slate-800/80 rounded-xl shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            
            {/* Table Structured Head */}
            <thead>
              <tr className="border-b border-slate-950 bg-[#111217] text-slate-400 font-semibold uppercase tracking-wider text-[10px]">
                <th className="py-3.5 px-4 w-12 text-center">#</th>
                <th className="py-3.5 px-4">Account Holder</th>
                <th className="py-3.5 px-4">Settlement Amount</th>
                <th className="py-3.5 px-4">Processing Timestamp</th>
                <th className="py-3.5 px-4 text-right pr-6">Status Indicator</th>
              </tr>
            </thead>

            {/* Table Dynamic Rows */}
            <tbody className="divide-y divide-slate-900/60 text-slate-300">
              {transactions.map((tx, index) => {
                const isSuccess = tx.status === "Success";
                const isFailed = tx.status === "Failed";

                return (
                  <tr 
                    key={tx.id} 
                    className="hover:bg-slate-950/40 transition-colors duration-150 group"
                  >
                    {/* Index Numerical Sequence */}
                    <td className="py-3.5 px-4 text-center font-mono text-slate-500 text-[11px]">
                      {String(index + 1).padStart(2, "0")}
                    </td>

                    {/* Customer Account Entity */}
                    <td className="py-3.5 px-4 font-semibold text-white tracking-tight">
                      <div className="flex items-center gap-2">
                        <div className="p-1 rounded-md bg-slate-900 border border-slate-800 text-slate-500 group-hover:text-emerald-400 group-hover:border-emerald-500/20 transition-colors">
                          <ArrowUpRight className="size-3" />
                        </div>
                        {tx.user}
                      </div>
                    </td>

                    {/* Context-Aware Balanced Amount Node */}
                    <td className="py-3.5 px-4">
                      <span className={`inline-flex items-center font-mono font-bold tracking-tight px-2 py-0.5 rounded text-[11px]
                        ${isSuccess ? "bg-emerald-500/5 text-emerald-400 border border-emerald-500/10" : ""}
                        ${isFailed ? "bg-red-500/5 text-red-400 border border-red-500/10 line-through" : ""}
                        {!isSuccess && !isFailed ? "bg-amber-500/5 text-amber-400 border border-amber-500/10" : ""}
                      `}>
                        <DollarSign className="size-3 mr-0.5 opacity-70" />
                        {tx.amount.toFixed(2)}
                      </span>
                    </td>

                    {/* Standard Clock Processing Log */}
                    <td className="py-3.5 px-4 text-slate-400 font-medium">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="size-3.5 text-slate-600" />
                        {tx.date}
                      </div>
                    </td>

                    {/* Strict Status Grid Indicator */}
                    <td className="py-3.5 px-4 text-right pr-6">
                      {isSuccess && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shadow-xs">
                          <CheckCircle2 className="size-3" /> Settled
                        </span>
                      )}
                      {isFailed && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium bg-red-500/10 border border-red-500/20 text-red-400">
                          <AlertCircle className="size-3" /> Declined
                        </span>
                      )}
                      {!isSuccess && !isFailed && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium bg-amber-500/10 border border-amber-500/20 text-amber-400">
                          <Clock className="size-3" /> Escrow / Pending
                        </span>
                      )}
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