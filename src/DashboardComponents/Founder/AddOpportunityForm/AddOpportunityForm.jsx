"use client";
import { Opportunities } from "@/api/serverMutation";
import React, { useState } from "react";
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const AddOpportunityForm = ({ user, plan, founderOpportunitiesData }) => {
  const planLimit = plan.find((item) => item.planName === user?.plan);

  const isLimitReached =
    founderOpportunitiesData?.length >= planLimit?.applicationLimit;
  const router = useRouter();
  const [formData, setFormData] = useState({
    roleTitle: "",
    startupName: "",
    requiredSkills: [],
    applicationDeadline:new Date().toISOString().split("T")[0],
    compensation: "",
    workType: "",
    commitmentLevel: "",
    workEnvironmentAllocation: "",
    ecosystemSegment: "",
    sector: "",
    corePulseBackendSystems: "",
    description: "",
    userId: user?.id,
    createdAt: new Date().toLocaleDateString("en-GB"),
  });
  const [skillInput, setSkillInput] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddSkill = (e) => {
    e.preventDefault();
    const trimmedSkill = skillInput.trim();
    if (trimmedSkill && !formData.requiredSkills.includes(trimmedSkill)) {
      setFormData((prev) => ({
        ...prev,
        requiredSkills: [...prev.requiredSkills, trimmedSkill],
      }));
      setSkillInput("");
    }
  };

  const handleRemoveSkill = (skillToRemove) => {
    setFormData((prev) => ({
      ...prev,
      requiredSkills: prev.requiredSkills.filter(
        (skill) => skill !== skillToRemove,
      ),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    window.location.reload();
    if (isLimitReached) {
      toast.error(
        "Limit reached. Please upgrade your account to add more opportunities.",
      );
      return;
    }

    const founderPost = await Opportunities(formData);
    if (founderPost) {
      router.refresh();
      toast.success("Opportunity Post Successfully !");
    } else {
      toast.error("Opportunity Post Failed !");
    }
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
            Configure parameters to deploy this position onto the ecosystem
            pipeline.
          </p>
        </div>

        {/* Dynamic Limit Banner Alert */}
        <div
          className={`mb-6 p-4 rounded-xl border flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 ${isLimitReached ? "border-purple-500/40 bg-purple-950/10 text-purple-200" : "border-slate-800 bg-[#161820]/40"}`}
        >
          <div>
            <h4 className="font-semibold text-sm">
              {founderOpportunitiesData.length} of {planLimit?.applicationLimit}{" "}
              slots used {isLimitReached ? "👑" : "🚀"}
            </h4>
            <p className="text-xs text-slate-400 mt-0.5">
              {isLimitReached
                ? "Maximum free listing limit reached. Upgrade for unlimited registrations."
                : "You can add more positions on your current plan."}
            </p>
          </div>
          {isLimitReached && (
            <Link
              href="/plan"
              className="w-full sm:w-auto px-4 py-2 text-center bg-linear-to-r from-purple-600 to-indigo-600 text-white text-xs font-semibold rounded-lg shadow-md transition active:scale-95"
            >
              Upgrade Plan
            </Link>
          )}
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
                  disabled={isLimitReached}
                  value={formData.roleTitle}
                  onChange={handleChange}
                  placeholder="Cloud Infrastructure Architect"
                  className="w-full h-11 sm:h-12 px-4 rounded-lg bg-[#1a1d26] border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/20 transition-all text-sm disabled:opacity-50"
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
                  disabled={isLimitReached}
                  value={formData.startupName}
                  onChange={handleChange}
                  placeholder="SkyForge"
                  className="w-full h-11 sm:h-12 px-4 rounded-lg bg-[#1a1d26] border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/20 transition-all text-sm disabled:opacity-50"
                  required
                />
              </div>
            </div>
          </div>

          {/* Section 2: Logistics & Terms */}
          <div className="bg-[#161820]/60 p-4 sm:p-6 rounded-xl border border-slate-800/60 space-y-4">
            <h3 className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-purple-400">
              Logistics & Alignment
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              <div>
                <label className="block mb-1.5 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Work Type
                </label>
                <select
                  name="workType"
                  disabled={isLimitReached}
                  value={formData.workType}
                  onChange={handleChange}
                  className="w-full h-11 sm:h-12 px-4 rounded-lg bg-[#1a1d26] border border-slate-800 text-white focus:outline-none focus:border-purple-500 transition-all text-sm cursor-pointer disabled:opacity-50"
                  required
                >
                  <option value="">Select Structure</option>
                  <option value="Remote">Remote</option>
                  <option value="Hybrid">Hybrid</option>
                  <option value="Onsite">Onsite</option>
                </select>
              </div>

              <div>
                <label className="block mb-1.5 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Commitment Level
                </label>
                <select
                  name="commitmentLevel"
                  disabled={isLimitReached}
                  value={formData.commitmentLevel}
                  onChange={handleChange}
                  className="w-full h-11 sm:h-12 px-4 rounded-lg bg-[#1a1d26] border border-slate-800 text-white focus:outline-none focus:border-purple-500 transition-all text-sm cursor-pointer disabled:opacity-50"
                  required
                >
                  <option value="">Select Level</option>
                  <option value="Full-time">Full-time</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Contract">Contract</option>
                </select>
              </div>

              <div className="sm:col-span-2 lg:col-span-1">
                <label className="block mb-1.5 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Deadline
                </label>
                <input
                  type="date"
                  name="applicationDeadline"
                  disabled={isLimitReached}
                  value={formData.applicationDeadline}
                  onChange={handleChange}
                  className="w-full h-11 sm:h-12 px-4 rounded-lg bg-[#1a1d26] border border-slate-800 text-white focus:outline-none focus:border-purple-500 transition-all text-sm scheme-dark disabled:opacity-50"
                  required
                />
              </div>
            </div>
          </div>

          {/* Section 3: Engineering Architecture Details */}
          <div className="bg-[#161820]/60 p-4 sm:p-6 rounded-xl border border-slate-800/60 space-y-4">
            <h3 className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-purple-400">
              Technical Engine & Context
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <div className="sm:col-span-2">
                <label className="block mb-1.5 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Required Skills (Add One by One)
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    disabled={isLimitReached}
                    value={skillInput}
                    onChange={(e) => setSkillInput(e.target.value)}
                    placeholder="e.g., Kubernetes"
                    className="flex-1 h-11 sm:h-12 px-4 rounded-lg bg-[#1a1d26] border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/20 transition-all text-sm disabled:opacity-50"
                  />
                  <button
                    type="button"
                    disabled={isLimitReached}
                    onClick={handleAddSkill}
                    className="h-11 sm:h-12 px-5 rounded-lg bg-purple-600/20 hover:bg-purple-600 text-purple-400 hover:text-white border border-purple-500/30 font-medium transition-all text-sm disabled:opacity-50"
                  >
                    Add
                  </button>
                </div>

                {formData.requiredSkills?.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-3 p-3 bg-[#111319] rounded-lg border border-slate-800/50">
                    {formData.requiredSkills.map((skill, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium bg-purple-500/10 text-purple-300 border border-purple-500/20 rounded-full"
                      >
                        {skill}
                        <button
                          type="button"
                          disabled={isLimitReached}
                          onClick={() => handleRemoveSkill(skill)}
                          className="text-purple-400 hover:text-purple-200 transition-colors focus:outline-none ml-1 font-bold disabled:opacity-50"
                        >
                          &times;
                        </button>
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="sm:col-span-2 lg:col-span-1">
                <label className="block mb-1.5 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-slate-400">
                  CorePulse Backend Systems
                </label>
                <input
                  type="text"
                  name="corePulseBackendSystems"
                  disabled={isLimitReached}
                  value={formData.corePulseBackendSystems}
                  onChange={handleChange}
                  placeholder="Node.js, Go, Distributed Pipelines"
                  className="w-full h-11 sm:h-12 px-4 rounded-lg bg-[#1a1d26] border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/20 transition-all text-sm disabled:opacity-50"
                />
              </div>

              <div>
                <label className="block mb-1.5 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Allocation Breakdown
                </label>
                <input
                  type="text"
                  name="workEnvironmentAllocation"
                  disabled={isLimitReached}
                  value={formData.workEnvironmentAllocation}
                  onChange={handleChange}
                  placeholder="70% Remote / 30% Onsite"
                  className="w-full h-11 sm:h-12 px-4 rounded-lg bg-[#1a1d26] border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/20 transition-all text-sm disabled:opacity-50"
                />
              </div>

              <div>
                <label className="block mb-1.5 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Ecosystem Segment
                </label>
                <input
                  type="text"
                  name="ecosystemSegment"
                  disabled={isLimitReached}
                  value={formData.ecosystemSegment}
                  onChange={handleChange}
                  placeholder="Infrastructure Layer"
                  className="w-full h-11 sm:h-12 px-4 rounded-lg bg-[#1a1d26] border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/20 transition-all text-sm disabled:opacity-50"
                />
              </div>

              <div>
                <label className="block mb-1.5 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Sector
                </label>
                <input
                  type="text"
                  name="sector"
                  disabled={isLimitReached}
                  value={formData.sector}
                  onChange={handleChange}
                  placeholder="Cloud Computing"
                  className="w-full h-11 sm:h-12 px-4 rounded-lg bg-[#1a1d26] border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/20 transition-all text-sm disabled:opacity-50"
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
              disabled={isLimitReached}
              value={formData.compensation}
              onChange={handleChange}
              placeholder="$180k - $240k + 2% Equity"
              className="w-full h-11 sm:h-12 px-4 rounded-lg bg-[#1a1d26] border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/20 transition-all text-sm disabled:opacity-50"
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
              disabled={isLimitReached}
              value={formData.description}
              onChange={handleChange}
              placeholder="Outline the core technical engineering roadmap or product milestones for this role..."
              className="w-full p-4 rounded-lg bg-[#1a1d26] border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/20 transition-all text-sm resize-none disabled:opacity-50"
              required
            ></textarea>
          </div>

          {/* Action Button Changes Based On Free Account Limits */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isLimitReached}
              className={`w-full h-11 sm:h-12 rounded-xl text-white transform transition-all duration-300 shadow-xl text-xs sm:text-sm tracking-widest uppercase font-semibold active:scale-[0.99] bg-size-[200%_auto] ${isLimitReached ? "bg-slate-800 cursor-not-allowed shadow-none border border-slate-700/50 opacity-40" : "bg-linear-to-r from-purple-600 via-indigo-600 to-purple-600 hover:bg-right shadow-purple-900/30"}`}
            >
              {isLimitReached ? "Posting Limit Reached" : "Publish Opportunity"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddOpportunityForm;
