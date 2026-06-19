import React from "react";
import {
  FaCalendarAlt,
  FaBriefcase,
  FaMoneyBillWave,
  FaMapMarkerAlt,
  FaTag,
  FaBuilding,
  FaExternalLinkAlt,
} from "react-icons/fa"; // Standard react-icons/fa import
import { getOpportunitiesDetails } from "@/api/serverMutation";
import Link from "next/link";

const OpportunitiesDetailsPage = async ({ params }) => {
  const { id } = await params;
  const OpportunitiesDetailsData = await getOpportunitiesDetails(id);

  const {
    applicationDeadline,
    compBand,
    description,
    ecosystemSegment,
    requiredSkills,
    roleTitle,
    sector,
    startupName,
    workEnvironmentAllocation,
    workType,
    _id
  } = OpportunitiesDetailsData;

  const formattedDeadline = applicationDeadline
    ? new Date(applicationDeadline).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "N/A";

  return (
    <div className="min-h-screen bg-[#07050f] text-zinc-300 antialiased selection:bg-purple-500/30 selection:text-purple-200 py-12 px-4 sm:px-8">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* ================= PREMIUM METADATA HEADER ================= */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pb-8 border-b border-purple-900/20">
          <div className="space-y-4 max-w-2xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase text-purple-400 bg-purple-950/40 border border-purple-900/60 px-3 py-1 rounded-md">
                <FaBuilding className="text-[10px]" /> {startupName}
              </span>
              <span className="text-xs font-semibold tracking-wider uppercase text-zinc-500 bg-zinc-900 px-3 py-1 rounded-md border border-zinc-800">
                {sector}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              {roleTitle}
            </h1>

            <p className="text-sm font-medium tracking-wide text-zinc-500 uppercase">
              Ecosystem Segment:{" "}
              <span className="text-purple-300/80">
                {ecosystemSegment || "N/A"}
              </span>
            </p>
          </div>

          {/* THE ONLY APPLY NOW BUTTON */}
          <div className="w-full md:w-auto shrink-0">
            <Link href={`/opportunities/${_id}/application`} className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white font-bold tracking-wide rounded-xl transition-all duration-200 shadow-lg shadow-purple-950/50 hover:-translate-y-0.5 group">
              Apply Now
              <FaExternalLinkAlt className="text-xs transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        {/* ================= MODULAR CORE INFORMATION ================= */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            {
              icon: <FaCalendarAlt />,
              label: "Deadline",
              value: formattedDeadline,
            },
            {
              icon: <FaMoneyBillWave />,
              label: "Compensation",
              value: compBand,
            },
            {
              icon: <FaMapMarkerAlt />,
              label: "Environment",
              value: workEnvironmentAllocation,
            },
            { icon: <FaBriefcase />, label: "Job Type", value: workType },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-zinc-900/30 border border-zinc-900 rounded-xl p-4 flex flex-col justify-between min-h-25"
            >
              <div className="text-purple-400 text-lg mb-2">{item.icon}</div>
              <div>
                <p className="text-[10px] text-zinc-600 font-bold uppercase tracking-widest">
                  {item.label}
                </p>
                <p className="text-sm font-bold text-zinc-200 mt-0.5 truncate">
                  {item.value || "Not Specified"}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ================= DETAILS & DESCRIPTION ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 pt-4">
          {/* Main Description Block */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-xs font-black uppercase tracking-widest text-purple-400">
              Overview
            </h2>
            <div className="text-zinc-400 text-base leading-relaxed space-y-4 whitespace-pre-line font-light">
              {description ||
                "No job description has been provided for this opening."}
            </div>
          </div>

          {/* Right Floating Competencies Block */}
          <div className="lg:col-span-1 space-y-4">
            <h2 className="text-xs font-black uppercase tracking-widest text-purple-400">
              Required Stack
            </h2>
            <div className="flex flex-wrap gap-1.5">
              {requiredSkills && requiredSkills.length > 0 ? (
                requiredSkills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-zinc-900/60 border border-zinc-800 text-zinc-300 text-xs px-3 py-1.5 rounded-lg font-medium tracking-wide"
                  >
                    {skill}
                  </span>
                ))
              ) : (
                <span className="text-zinc-600 text-xs italic">
                  No skills listed
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpportunitiesDetailsPage;
