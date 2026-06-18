"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Rocket, Users, Target } from "lucide-react";

export default function HeroBanner() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.12, 
        delayChildren: 0.1 
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.4, ease: [0.21, 1.02, 0.43, 1.01] } 
    },
  };

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center bg-slate-950 overflow-hidden font-sans px-4 sm:px-6 lg:px-8">
      {/* Background Ambient Glows */}
      <motion.div 
        animate={{ x: [0, 15, 0], y: [0, -15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-12 left-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" 
      />
      <motion.div 
        animate={{ x: [0, -15, 0], y: [0, 15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-12 right-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" 
      />

      {/* Mesh Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] `mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]` opacity-70" />

      {/* Main Framework Content Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl text-center space-y-5"
      >
        {/* Top Mini Badge */}
        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs text-indigo-400 font-medium tracking-wide shadow-inner">
          <Rocket className="animate-bounce" size={13} />
          <span>The Ultimate Startup Hub</span>
        </motion.div>

        {/* Main Title Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-100 leading-tight"
        >
          Build Your Dream Team with{" "}
          <span className="bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            StartupForge
          </span>
        </motion.h1>

        {/* Description Text */}
        <motion.p
          variants={itemVariants}
          className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-slate-400 leading-relaxed"
        >
          Connect with talented developers, designers, and marketers. Publish your startup ideas, recruit absolute experts, or join a mission that inspires you.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2"
        >
          <motion.button 
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto flex items-center justify-center gap-2 py-3 px-5 bg-linear-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-medium text-sm rounded-lg shadow-lg shadow-indigo-500/20 transition-colors duration-200 group"
          >
            Explore Startups
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </motion.button>
          
          <motion.button 
            whileHover={{ scale: 1.02, bg: "rgb(30, 41, 59)" }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto flex items-center justify-center gap-2 py-3 px-5 bg-slate-900 border border-slate-800 text-slate-300 font-medium text-sm rounded-lg transition-colors duration-200"
          >
            Post an Opportunity
          </motion.button>
        </motion.div>

        {/* Compact Metrics Panel */}
        <motion.div 
          variants={itemVariants}
          className="pt-8 grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto border-t border-slate-800/80 text-left"
        >
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/10">
              <Users size={18} />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-semibold text-slate-200">10k+ Collaborators</h4>
              <p className="text-[11px] text-slate-500">Ready to build</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/10">
              <Target size={18} />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-semibold text-slate-200">500+ Projects</h4>
              <p className="text-[11px] text-slate-500">Actively recruiting</p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <div className="p-2 rounded-lg bg-pink-500/10 text-pink-400 border border-pink-500/10">
              <Rocket size={18} />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-semibold text-slate-200">$2M+ Funded</h4>
              <p className="text-[11px] text-slate-500">By top Tier VCs</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}