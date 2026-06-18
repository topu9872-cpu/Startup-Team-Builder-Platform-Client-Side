"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  ArrowRight, Rocket, Users, Target, ArrowUpRight, 
  Briefcase, Calendar, ShieldCheck, MapPin, DollarSign, ChevronRight 
} from "lucide-react";

// Mock Data for the Listings
const STARTUPS = [
  {
    name: "AuraAI",
    category: "Artificial Intelligence",
    description: "Building next-generation ambient intelligence interfaces for workspaces.",
    hiring: ["React Dev", "ML Engineer"],
    stage: "Seed",
    teamSize: "8-12 members",
    location: "Remote / NY",
    funding: "$1.2M",
    techStack: ["Next.js", "Python", "Tailwind"],
  },
  {
    name: "DeFiPulse",
    category: "Web3 / Fintech",
    description: "Decentralized liquidity aggregation protocol with zero gas optimization.",
    hiring: ["Solidity Dev", "UI Designer"],
    stage: "Pre-seed",
    teamSize: "4 members",
    location: "Remote",
    funding: "Bootstrapped",
    techStack: ["Solidity", "React", "GraphQL"],
  },
  {
    name: "EcoTrace",
    category: "GreenTech",
    description: "Real-time supply chain carbon footprint tracking powered by IoT grids.",
    hiring: ["Node.js Dev", "Data Scientist"],
    stage: "Series A",
    teamSize: "20+ members",
    location: "Hybrid / SF",
    funding: "$5.0M",
    techStack: ["Node.js", "AWS", "TypeScript"],
  },
];

export default function StartupHub() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased overflow-x-hidden">
      
      {/* SECTION 1: HERO BANNER */}
      <section className="relative min-h-[70vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 border-b border-slate-900">
        <div className="absolute top-12 left-1/4 w-72 h-72 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-12 right-1/4 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-70" />

        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="relative z-10 max-w-4xl text-center space-y-5">
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs text-indigo-400 font-medium tracking-wide">
            <Rocket className="animate-bounce" size={13} />
            <span>The Ultimate Startup Hub</span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Build Your Dream Team with{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">StartupForge</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-slate-400 leading-relaxed">
            Connect with talented developers, designers, and marketers. Publish your startup ideas, recruit absolute experts, or join a mission that inspires you.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 py-3 px-5 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium text-sm rounded-lg shadow-lg shadow-indigo-500/20 group">
              Explore Startups
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 py-3 px-5 bg-slate-900 border border-slate-800 text-slate-300 font-medium text-sm rounded-lg">
              Post an Opportunity
            </button>
          </motion.div>

          <motion.div variants={itemVariants} className="pt-8 grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto border-t border-slate-800/80 text-left">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/10"><Users size={18} /></div>
              <div>
                <h4 className="text-xs sm:text-sm font-semibold text-slate-200">10k+ Collaborators</h4>
                <p className="text-[11px] text-slate-500">Ready to build</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/10"><Target size={18} /></div>
              <div>
                <h4 className="text-xs sm:text-sm font-semibold text-slate-200">500+ Projects</h4>
                <p className="text-[11px] text-slate-500">Actively recruiting</p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-3">
              <div className="p-2 rounded-lg bg-pink-500/10 text-pink-400 border border-pink-500/10"><Rocket size={18} /></div>
              <div>
                <h4 className="text-xs sm:text-sm font-semibold text-slate-200">$2M+ Funded</h4>
                <p className="text-[11px] text-slate-500">By top Tier VCs</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* SECTION 2: BROWSE STARTUPS GRID */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-1">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-100">Explore Trending Startups</h2>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
              Discover early-stage projects, review open positions, and partner with innovators shaping tomorrow.
            </p>
          </div>
          <button className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 flex items-center gap-1 transition-colors group self-start">
            View all projects <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {STARTUPS.map((startup, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -3, borderColor: "rgba(99, 102, 241, 0.25)" }}
              className="group flex flex-col justify-between p-5 rounded-xl bg-slate-900/40 border border-slate-900 hover:bg-slate-900/70 transition-all duration-300 backdrop-blur-xs"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-indigo-600/20 text-indigo-400 border border-indigo-500/10 flex items-center justify-center font-bold text-sm shadow-inner">
                      {startup.name[0]}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-200 group-hover:text-indigo-400 transition-colors">{startup.name}</h3>
                      <span className="text-[10px] text-slate-500 font-medium tracking-wider uppercase">{startup.category}</span>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-800 text-[10px] font-medium text-slate-300 border border-slate-700/40">
                    <ShieldCheck size={10} className="text-indigo-400" />
                    {startup.stage}
                  </span>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed line-clamp-2 mb-4">{startup.description}</p>

                <div className="grid grid-cols-2 gap-y-2 text-[11px] text-slate-400 mb-4 bg-slate-950/40 p-2.5 rounded-lg border border-slate-900/50">
                  <div className="flex items-center gap-1.5"><Users size={12} className="text-slate-500" /> <span>{startup.teamSize}</span></div>
                  <div className="flex items-center gap-1.5"><MapPin size={12} className="text-slate-500" /> <span>{startup.location}</span></div>
                  <div className="flex items-center gap-1.5"><DollarSign size={12} className="text-slate-500" /> <span>{startup.funding}</span></div>
                  <div className="flex items-center gap-1.5"><Calendar size={12} className="text-slate-500" /> <span>{startup.techStack[0]} stack</span></div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800/60 flex items-center justify-between">
                <div className="flex flex-wrap items-center gap-1">
                  {startup.hiring.map((role, i) => (
                    <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/5">
                      {role}
                    </span>
                  ))}
                </div>
                <ChevronRight size={14} className="text-slate-600 group-hover:text-indigo-400 transition-transform group-hover:translate-x-0.5" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

    </div>
  );
}