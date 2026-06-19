"use client";
import React, { useState } from "react";

const AddOpportunityForm = () => {
  const [formData, setFormData] = useState({
    roleTitle: "",
    startupName: "",
    requiredSkills: "",
    applicationDeadline: "",
    compensation: "",
    workType: "",
    commitmentLevel: "",
    workEnvironmentAllocation: "",
    ecosystemSegment: "",
    sector: "",
    corePulseBackendSystems: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Opportunity Data:", formData);
  };

  return (
    <div className="w-full max-w-4xl mx-auto my-4 sm:my-10 bg-[#0d0e12] text-slate-100 rounded-2xl border border-slate-800/80 shadow-2xl overflow-hidden relative">
      {/* Top Laser Accent */}
      <div className="h-1 bg-linear-to-r from-transparent via-purple-500 to-transparent w-full absolute top-0 left-0" />

      <div className="p-5 sm:p-8">
        <div className="mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
            Add New Opportunity
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Configure parameters to deploy this position onto the ecosystem pipeline.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
          {/* Section 1: Core Positions */}
          <div className="bg-[#161820]/60 p-4 sm:p-6 rounded-xl border border-slate-800/60 space-y-4">
            <h3 className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-purple-400">
              Primary Blueprint
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <div>
                <label className="block mb-1.5 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Role Title
                </label>
                <input
                  type="text"
                  name="roleTitle"
                  value={formData.roleTitle}
                  onChange={handleChange}
                  placeholder="Cloud Infrastructure Architect"
                  className="w-full h-11 sm:h-12 px-4 rounded-lg bg-[#1a1d26] border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/20 transition-all text-sm"
                  required
                />
              </div>
              <div>
                <label className="block mb-1.5 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Startup Name
                </label>
                <input
                  type="text"
                  name="startupName"
                  value={formData.startupName}
                  onChange={handleChange}
                  placeholder="SkyForge"
                  className="w-full h-11 sm:h-12 px-4 rounded-lg bg-[#1a1d26] border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/20 transition-all text-sm"
                  required
                />
              </div>
            </div>
          </div>

          {/* Section 2: Logistics & Terms */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-5">
            <div>
              <label className="block mb-1.5 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-slate-400">
                Work Type
              </label>
              <select
                name="workType"
                value={formData.workType}
                onChange={handleChange}
                className="w-full h-11 sm:h-12 px-4 rounded-lg bg-[#1a1d26] border border-slate-800 text-white focus:outline-none focus:border-purple-500 transition-all text-sm cursor-pointer"
                required
              >
                <option value="" className="bg-[#1a1d26]">Select Structure</option>
                <option value="Remote" className="bg-[#1a1d26]">Remote</option>
                <option value="Hybrid" className="bg-[#1a1d26]">Hybrid</option>
                <option value="Onsite" className="bg-[#1a1d26]">Onsite</option>
                <option value="Full-time" className="bg-[#1a1d26]">Full-time</option>
                <option value="Part-time" className="bg-[#1a1d26]">Part-time</option>
                <option value="Contract" className="bg-[#1a1d26]">Contract</option>
              </select>
            </div>

            <div>
              <label className="block mb-1.5 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-slate-400">
                Deadline
              </label>
              <input
                type="date"
                name="applicationDeadline"
                value={formData.applicationDeadline}
                onChange={handleChange}
                className="w-full h-11 sm:h-12 px-4 rounded-lg bg-[#1a1d26] border border-slate-800 text-white focus:outline-none focus:border-purple-500 transition-all text-sm scheme-dark"
                required
              />
            </div>
          </div>

          {/* Section 3: Engineering Architecture Details */}
          <div className="bg-[#161820]/60 p-4 sm:p-6 rounded-xl border border-slate-800/60 space-y-4">
            <h3 className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-purple-400">
              Technical Engine
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <div className="sm:col-span-2">
                <label className="block mb-1.5 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Required Skills
                </label>
                <input
                  type="text"
                  name="requiredSkills"
                  value={formData.requiredSkills}
                  onChange={handleChange}
                  placeholder="AWS, Terraform, Kubernetes, Networking"
                  className="w-full h-11 sm:h-12 px-4 rounded-lg bg-[#1a1d26] border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/20 transition-all text-sm"
                  required
                />
              </div>
              <div className="sm:col-span-2 lg:col-span-1">
                <label className="block mb-1.5 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-slate-400">
                  CorePulse Backend Systems
                </label>
                <input
                  type="text"
                  name="corePulseBackendSystems"
                  value={formData.corePulseBackendSystems}
                  onChange={handleChange}
                  placeholder="Node.js, Go, Distributed Pipelines"
                  className="w-full h-11 sm:h-12 px-4 rounded-lg bg-[#1a1d26] border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/20 transition-all text-sm"
                />
              </div>
              <div>
                <label className="block mb-1.5 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Allocation Breakdown
                </label>
                <input
                  type="text"
                  name="workEnvironmentAllocation"
                  value={formData.workEnvironmentAllocation}
                  onChange={handleChange}
                  placeholder="70% Remote / 30% Onsite"
                  className="w-full h-11 sm:h-12 px-4 rounded-lg bg-[#1a1d26] border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/20 transition-all text-sm"
                />
              </div>
              <div>
                <label className="block mb-1.5 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Sector
                </label>
                <input
                  type="text"
                  name="sector"
                  value={formData.sector}
                  onChange={handleChange}
                  placeholder="Cloud Computing"
                  className="w-full h-11 sm:h-12 px-4 rounded-lg bg-[#1a1d26] border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/20 transition-all text-sm"
                />
              </div>
            </div>
          </div>

          {/* Section 4: Budget & Compensation */}
          <div>
            <label className="block mb-1.5 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-slate-400">
              Compensation Structure
            </label>
            <input
              type="text"
              name="compensation"
              value={formData.compensation}
              onChange={handleChange}
              placeholder="$180k - $240k + 2% Equity"
              className="w-full h-11 sm:h-12 px-4 rounded-lg bg-[#1a1d26] border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/20 transition-all text-sm"
              required
            />
          </div>

          {/* Section 5: Rich Narrative Description */}
          <div>
            <label className="block mb-1.5 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-slate-400">
              Description
            </label>
            <textarea
              name="description"
              rows="4"
              value={formData.description}
              onChange={handleChange}
              placeholder="Outline the core technical engineering roadmap or product milestones for this role..."
              className="w-full p-4 rounded-lg bg-[#1a1d26] border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/20 transition-all text-sm resize-none"
              required
            ></textarea>
          </div>

          {/* Premium High-Gloss Neon Purple Button */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full h-11 sm:h-12 rounded-xl text-white bg-linear-to-r from-purple-600 via-indigo-600 to-purple-600 bg-size-[200%_auto] hover:bg-right active:scale-[0.99] transform transition-all duration-300 shadow-xl shadow-purple-900/30 text-xs sm:text-sm tracking-widest uppercase font-semibold"
            >
              Publish Opportunity
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddOpportunityForm;