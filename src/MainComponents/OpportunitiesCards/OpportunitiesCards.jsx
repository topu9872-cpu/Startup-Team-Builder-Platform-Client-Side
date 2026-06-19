"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, Code, ArrowUpRight, Eye } from "lucide-react";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { y: 12, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 260, damping: 25 },
  },
};

const OpportunitiesCards = ({ opportunities }) => {
  const {
    _id,
    applicationDeadline,
    compBand,
    requiredSkills,
    roleTitle,
    startupName,
    workType,
  } = opportunities;

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="h-full"
    >
      <motion.div
        variants={itemVariants}
        whileHover={{ y: -4, scale: 1.015 }}
        whileTap={{ scale: 0.99 }}
        className="group h-full p-4 rounded bg-slate-900/20 border border-slate-900 hover:bg-slate-900/40 hover:border-slate-800 transition-colors duration-300 flex flex-col"
      >
        {/* TOP CONTENT */}
        <div className="space-y-3 flex-1">
          {/* ROLE TITLE & STARTUP */}
          <div className="space-y-1">
            <div className="flex items-start justify-between gap-2">
              <h3 className="text-sm font-bold text-slate-200 group-hover:text-indigo-400 transition-colors duration-200 line-clamp-2">
                {roleTitle}
              </h3>

              <span className="text-[9px] font-mono font-bold text-slate-500 bg-slate-950 px-1.5 py-0.5 rounded border border-slate-900 shrink-0">
                {workType}
              </span>
            </div>

            <div className="text-[10px] text-slate-500 font-mono">
              {compBand}
            </div>
          </div>

          {/* SKILLS */}
          <div className="space-y-1.5">
            <div className="flex items-center gap-1 text-[10px] text-slate-500">
              <Code size={10} className="text-slate-600" />
              <span>Required Skills</span>
            </div>

            <div className="flex flex-wrap gap-1">
              {requiredSkills?.map((skill, index) => (
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

        {/* BOTTOM SECTION */}
        <div className="mt-auto pt-3 border-t border-slate-900/60 flex flex-col gap-3">
          <div className=" gap-1.5 text-slate-400 font-mono text-[11px]">
           

    
           
           <div className="flex items-center"> 
            <Calendar size={12} className="text-slate-600 shrink-0" />
             <span className="text-slate-500">Deadline:</span>

            <span className="text-slate-400 font-medium">
              {applicationDeadline}
            </span></div>
           <div> <span className="text-slate-500">StartupName:</span>

            <span className="text-slate-400 font-medium">
              {startupName}
            </span></div>
   
          </div>

          <Link
            href={`/opportunities/${_id}`}
            className="w-full flex items-center justify-center gap-1.5 py-3 px-3 bg-purple-700 hover:bg-purple-600 text-slate-300 hover:text-white font-mono font-semibold text-[10px] uppercase tracking-wider rounded border border-slate-800 hover:border-indigo-500 transition-all duration-200 shadow-sm"
          >
            <Eye size={11} />

            <span>View Requirements</span>

            <ArrowUpRight
              size={11}
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default OpportunitiesCards;
