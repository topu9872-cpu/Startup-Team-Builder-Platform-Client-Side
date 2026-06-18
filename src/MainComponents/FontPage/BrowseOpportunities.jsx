"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, DollarSign, Briefcase, ArrowUpRight } from "lucide-react";

const OPPORTUNITIES = [
  {
    role: "Senior Full-Stack Engineer",
    startup: "AuraAI",
    type: "Full-Time",
    location: "Remote (US/EU)",
    compensation: "$130k - $160k • 0.5%",
    tags: ["Next.js", "Python", "AI/ML"],
    posted: "2d ago",
  },
  {
    role: "Solidity Developer",
    startup: "DeFiPulse",
    type: "Contract",
    location: "Remote",
    compensation: "$90/hr - $120/hr",
    tags: ["Solidity", "Ethers.js", "Web3"],
    posted: "1w ago",
  },
  {
    role: "Lead UI/UX Product Designer",
    startup: "EcoTrace",
    type: "Full-Time",
    location: "Hybrid (SF)",
    compensation: "$110k - $135k • 0.2%",
    tags: ["Figma", "Design Systems", "B2B SaaS"],
    posted: "Just now",
  },
];

export default function BrowseOpportunities() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.06 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-8">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div className="space-y-1">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-100">Hot Roles</h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
            Apply directly to active open positions backed by verified startup workspace infrastructure.
          </p>
        </div>
        <button className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 flex items-center gap-1 transition-colors group self-start sm:self-auto">
          Explore all roles <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
      </div>

      {/* Structured Minimal List */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        className="space-y-3"
      >
        {OPPORTUNITIES.map((opp, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            whileHover={{ x: 3, borderColor: "rgba(99, 102, 241, 0.25)", backgroundColor: "rgba(15, 23, 42, 0.6)" }}
            className="group flex flex-col md:flex-row md:items-center justify-between p-4 rounded-xl bg-slate-900/30 border border-slate-900/80 transition-all duration-200 cursor-pointer gap-4"
          >
            {/* Core Info Panel */}
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-sm sm:text-base font-bold text-slate-200 group-hover:text-indigo-400 transition-colors">
                  {opp.role}
                </h3>
                <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700/30 font-medium">
                  {opp.type}
                </span>
              </div>

              {/* Attributes Meta Row */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-slate-400">
                <div className="flex items-center gap-1">
                  <Briefcase size={13} className="text-slate-600" />
                  <span className="font-semibold text-slate-300">{opp.startup}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin size={13} className="text-slate-600" />
                  <span>{opp.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <DollarSign size={13} className="text-slate-600" />
                  <span className="text-slate-300">{opp.compensation}</span>
                </div>
              </div>
            </div>

            {/* Tech Chips & Action Indicator */}
            <div className="flex items-center justify-between md:justify-end gap-4 pt-2 md:pt-0 border-t md:border-t-0 border-slate-900/60">
              <div className="flex flex-wrap gap-1">
                {opp.tags.map((tag, i) => (
                  <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-indigo-500/5 text-indigo-300/90 border border-indigo-500/10">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-slate-500 hidden sm:inline">{opp.posted}</span>
                <div className="p-1.5 rounded-lg bg-slate-900/80 text-slate-500 group-hover:text-indigo-400 group-hover:bg-indigo-500/10 transition-colors">
                  <ArrowUpRight size={14} />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}