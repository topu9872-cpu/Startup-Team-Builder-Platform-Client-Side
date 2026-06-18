"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, Code, ArrowUpRight, Eye } from "lucide-react";
import Link from "next/link";

const FEATURED_OPPORTUNITIES = [
  {
    id: "opp-001",
    roleTitle: "Lead Systems Engineer",
    startupName: "AuraAI",
    requiredSkills: ["Rust", "Distributed Systems", "gRPC", "Kubernetes"],
    applicationDeadline: "July 15, 2026",
    compBand: "$160k - $210k + 1.5% Equity",
  },
  {
    id: "opp-002",
    roleTitle: "Senior Full-Stack Architect",
    startupName: "DeFiPulse",
    requiredSkills: ["Next.js", "TypeScript", "TailwindCSS", "Ethers.js"],
    applicationDeadline: "July 02, 2026",
    compBand: "$140k - $180k + 0.8% Equity",
  },
  {
    id: "opp-003",
    roleTitle: "Core Infrastructure Dev",
    startupName: "EcoTrace",
    requiredSkills: ["Go", "C++", "WebAssembly", "Embedded Systems"],
    applicationDeadline: "August 01, 2026",
    compBand: "$150k - $195k + 1.2% Equity",
  },
];

// Framer Motion Parent Grid Variant Orchestrator
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

// Framer Motion Component Entry Frame Variants
const itemVariants = {
  hidden: { y: 12, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 260, damping: 25 },
  },
};

const OpportunitiesCards = () => {
  const handleViewDetails = (id, e) => {
    e.stopPropagation();
    console.log(
      `Opening technical specifications panel for requisition node: ${id}`,
    );
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-8 sm:py-12 text-slate-100 font-sans bg-slate-950 space-y-10">
      <div className="space-y-4">
        {/* CARDS DISPLAY CONTAINER */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {FEATURED_OPPORTUNITIES.map((opp) => (
            <motion.div
              key={opp.id}
              variants={itemVariants}
              whileHover={{ y: -4, scale: 1.015 }}
              whileTap={{ scale: 0.99 }}
              className="group p-4 rounded bg-slate-900/20 border border-slate-900 hover:bg-slate-900/40 hover:border-slate-800 transition-colors duration-300 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                {/* ROLE TITLE & STARTUP NAME */}
                <div className="space-y-1">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-sm font-bold text-slate-200 group-hover:text-indigo-400 transition-colors duration-200 line-clamp-1">
                      {opp.roleTitle}
                    </h3>
                    <span className="text-[9px] font-mono font-bold text-slate-500 bg-slate-950 px-1.5 py-0.5 rounded border border-slate-900 shrink-0">
                      {opp.startupName}
                    </span>
                  </div>
                  <div className="text-[10px] text-slate-500 font-mono">
                    {opp.compBand}
                  </div>
                </div>

                {/* REQUIRED SKILLS LABELS BOX */}
                <div className="space-y-1.5">
                  <div className="flex items-center gap-1 text-[10px] text-slate-500">
                    <Code size={10} className="text-slate-600" />
                    <span>Prerequisite Graph</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {opp.requiredSkills.map((skill, index) => (
                      <span
                        key={index}
                        className="text-[9px] font-mono text-slate-300 bg-slate-900/80 border border-slate-800/60 px-1.5 py-0.5 rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* ACTION LOWER BAR PANEL */}
              <div className="pt-3 border-t border-slate-900/60 flex flex-col gap-3">
                {/* TIMELINE LOG */}
                <div className="flex items-center gap-1.5 text-slate-400 font-mono text-[11px]">
                  <Calendar size={12} className="text-slate-600 shrink-0" />
                  <span className="text-slate-500">TTL:</span>
                  <span className="text-slate-400 font-medium">
                    {opp.applicationDeadline}
                  </span>
                </div>

                {/* EXPLICIT DETAILS BUTTON */}
                <Link
                  href={`/opportunities/${opp.id}`}
                  className="w-full flex items-center justify-center z-50 gap-1.5 py-3 px-3 bg-purple-700 hover:bg-purple-600 text-slate-300 hover:text-white font-mono font-semibold text-[10px] uppercase tracking-wider rounded border border-slate-800 hover:border-indigo-500 transition-all duration-200 shadow-sm"
                >
                  <Eye size={11} />
                  <span>View Requirements</span>
                  <ArrowUpRight
                    size={11}
                    className="transition-transform duration-200 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default OpportunitiesCards;
