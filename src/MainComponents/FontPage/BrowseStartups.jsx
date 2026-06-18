"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Users, Briefcase, Calendar, ShieldCheck } from "lucide-react";

// Mock Data for the Startups
const STARTUPS = [
  {
    id: 1,
    name: "AuraAI",
    category: "Artificial Intelligence",
    description: "Building next-generation ambient intelligence interfaces for workspaces.",
    hiring: ["React Dev", "ML Engineer"],
    stage: "Seed",
    teamSize: "8-12",
    logoColor: "from-blue-500 to-indigo-500",
  },
  {
    id: 2,
    name: "DeFiPulse",
    category: "Web3 / Fintech",
    description: "Decentralized liquidity aggregation protocol with zero gas optimization.",
    hiring: ["Solidity Dev", "UI Designer"],
    stage: "Pre-seed",
    teamSize: "4",
    logoColor: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    name: "EcoTrace",
    category: "GreenTech",
    description: "Real-time supply chain carbon footprint tracking powered by IoT grids.",
    hiring: ["Node.js Dev", "Data Scientist"],
    stage: "Series A",
    teamSize: "20+",
    logoColor: "from-emerald-500 to-teal-500",
  },
];

export default function BrowseStartups() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.4, ease: "easeOut" } 
    },
  };

  return (
    <section className="relative py-16 bg-slate-950 font-sans px-4 sm:px-6 lg:px-8">
      {/* Background Section Ambient Divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
      
      <div className="max-w-6xl mx-auto space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-100">
              Explore Trending Startups
            </h2>
            <p className="text-sm text-slate-400 max-w-xl">
              Discover early-stage projects, review open positions, and partner with innovators shaping tomorrow.
            </p>
          </div>
          <button className="self-start md:self-auto text-xs font-semibold text-indigo-400 hover:text-indigo-300 flex items-center gap-1 transition-colors group">
            View all projects 
            <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Startups Grid Grid Container */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {STARTUPS.map((startup) => (
            <motion.div
              key={startup.id}
              variants={cardVariants}
              whileHover={{ y: -4, borderColor: "rgba(99, 102, 241, 0.3)" }}
              className="group relative flex flex-col justify-between p-5 rounded-xl bg-slate-900/50 border border-slate-900 hover:bg-slate-900/80 transition-colors duration-300 backdrop-blur-xs"
            >
              <div>
                {/* Card Top Row */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    {/* Dummy Neon Logo Container */}
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${startup.logoColor} flex items-center justify-center font-bold text-white shadow-md text-sm`}>
                      {startup.name[0]}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-200 group-hover:text-indigo-400 transition-colors duration-200">
                        {startup.name}
                      </h3>
                      <span className="text-[11px] font-medium text-slate-500 uppercase tracking-wider">
                        {startup.category}
                      </span>
                    </div>
                  </div>
                  
                  {/* Stage Label */}
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-800 text-[11px] font-medium text-slate-300 border border-slate-700/50">
                    <ShieldCheck size={10} className="text-indigo-400" />
                    {startup.stage}
                  </span>
                </div>

                {/* Project Brief Description */}
                <p className="text-xs text-slate-400 leading-relaxed line-clamp-2 mb-4">
                  {startup.description}
                </p>

                {/* Micro Meta Badges */}
                <div className="flex items-center gap-4 text-slate-500 text-[11px] mb-5">
                  <span className="flex items-center gap-1">
                    <Users size={12} />
                    {startup.teamSize} members
                  </span>
                  <span className="flex items-center gap-1">
                    <Briefcase size={12} />
                    {startup.hiring.length} roles open
                  </span>
                </div>
              </div>

              {/* Card Footer: Roles Hiring Label */}
              <div className="pt-4 border-t border-slate-800/60 flex flex-wrap items-center gap-1.5">
                <span className="text-[10px] uppercase font-bold tracking-wider text-indigo-400 mr-1">Hiring:</span>
                {startup.hiring.map((role, i) => (
                  <span 
                    key={i} 
                    className="text-[11px] px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/5 font-medium"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}