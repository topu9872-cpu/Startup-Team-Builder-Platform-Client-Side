"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Milestone } from "lucide-react";
import { getOpportunities } from "@/api/serverMutation";
import OpportunitiesCards from "../OpportunitiesCards/OpportunitiesCards";

export default function FeaturedOpportunitiesPage() {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    const handleServer = async () => {
      const opportunitiesData = await getOpportunities();
      setDatas(opportunitiesData.data);
    };

    handleServer();
  }, []);

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-8 sm:py-12 text-slate-100 font-sans bg-slate-950 space-y-10">
      {/* 1. TOP TITLE / HERO HEADER */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="space-y-3 pb-8 border-b border-slate-900"
      >
        <div className="inline-flex items-center gap-1.5 text-[10px] font-mono text-emerald-400 bg-emerald-950/40 px-2.5 py-1 rounded-full border border-emerald-900/40">
          <Milestone size={10} className="animate-pulse" />
          <span>Active Requisitions Indexed</span>
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight bg-linear-to-r from-slate-100 via-slate-200 to-slate-400 bg-clip-text text-transparent">
          Featured Engineering Pipelines
        </h1>

        <p className="text-xs sm:text-sm text-slate-400 max-w-2xl leading-relaxed">
          Direct target nodes seeking immediate infrastructure reinforcement.
          Filtered strictly by verified technical depth, runways, and
          open-source alignment.
        </p>
      </motion.div>

      {/* 2. OPPORTUNITIES GRID CONTAINER */}
      <div className="space-y-4">
        {/* INNER GRID SUB-HEADER */}
        <div className="flex items-center justify-between pb-2">
          <div className="flex items-center gap-2">
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </div>
            <h2 className="text-xs font-mono text-slate-400 uppercase tracking-wider">
              Open Telemetry Requisitions
            </h2>
          </div>
          <span className="text-[10px] font-mono text-slate-500 bg-slate-900/60 px-2 py-0.5 rounded border border-slate-800">
            Verified Bands
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-11/12 mx-auto my-6">
          {datas?.slice(0, 3).map((opp) => (
            <OpportunitiesCards key={opp._id} opportunities={opp} />
          ))}
        </div>
      </div>
    </div>
  );
}
