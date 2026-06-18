'use client'
import React from "react";
import {
  Cpu,
  GitPullRequest,
  Layers,
  BarChart3,
  Terminal,
  ArrowRight,
  Network,
} from "lucide-react";

// 1. ICON MAP (clean separation)
const ICONS = {
  cpu: Cpu,
  git: GitPullRequest,
  layers: Layers,
  chart: BarChart3,
};

// 2. DATA ONLY (backend-friendly)
const VALUE_PROPS = [
  {
    icon: "cpu",
    title: "Direct Sandbox Access",
    metric: "0% Middlemen",
    description:
      "Bypass typical recruiter layers and automated parsing algorithms. Connect directly with founding technical teams through verified cryptographic infrastructure indexes.",
  },
  {
    icon: "git",
    title: "Vetted Stack Telemetry",
    metric: "100% Transparent",
    description:
      "Review comprehensive data regarding core code dependencies, infrastructure stacks, exact funding rounds, and precise equity/compensation bands before initializing discovery calls.",
  },
  {
    icon: "layers",
    title: "Asynchronous Coordination",
    metric: "Global Nodes",
    description:
      "Built for sovereign engineer networks, technical project tracking, and fractional workspace deployments optimized for distributed systems operators.",
  },
  {
    icon: "chart",
    title: "Programmatic Token Flow",
    metric: "$2.4M Seeding",
    description:
      "Gain rapid entry paths to pre-vetted institutional allocations, internal grant programs, and specialized angel infrastructure capital frameworks directly inside the forge ecosystem.",
  },
];

export const WhyJoinComponent = ({ onNavigate }) => {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-8 space-y-10 text-slate-100 bg-slate-950">

      {/* HEADER */}
      <div className="space-y-3 pb-6 border-b border-slate-900">
        <div className="inline-flex items-center gap-1.5 text-[10px] font-mono text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
          <Network size={10} className="text-indigo-400 animate-pulse" />
          <span>Ecosystem Protocol Abstract</span>
        </div>

        <h1 className="text-2xl md:text-3xl font-bold">
          Why Interface with StartupForge?
        </h1>

        <p className="text-sm text-slate-400 max-w-2xl">
          StartupForge is an open-source system designed to remove friction between engineers and early-stage venture building blocks.
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {VALUE_PROPS.map((item, idx) => {
          const Icon = ICONS[item.icon];

          return (
            <div
              key={idx}
              className="group p-4 rounded bg-slate-900/20 border border-slate-900 hover:border-slate-800 transition"
            >
              <div className="flex items-center justify-between gap-4">

                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 flex items-center justify-center rounded bg-slate-950 border border-slate-900 group-hover:border-slate-700">
                    {Icon && <Icon className="w-5 h-5 text-indigo-400" />}
                  </div>

                  <h3 className="text-sm font-bold">{item.title}</h3>
                </div>

                <span className="text-[9px] font-mono text-slate-500 bg-slate-950 px-2 py-0.5 rounded border border-slate-900">
                  {item.metric}
                </span>
              </div>

              <p className="text-xs text-slate-400 mt-3 group-hover:text-slate-300">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* FOOTER CTA */}
      <div className="p-4 border border-slate-900 bg-slate-900/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">

        <div className="flex gap-3">
          <div className="w-8 h-8 flex items-center justify-center rounded bg-slate-950 border border-slate-900 text-indigo-400">
            <Terminal size={13} />
          </div>

          <div>
            <h4 className="text-xs font-bold">
              Ready to instantiate your platform record?
            </h4>
            <p className="text-[11px] text-slate-500">
              Setup takes less than 60 seconds.
            </p>
          </div>
        </div>

        <button
          onClick={() => onNavigate?.("register")}
          className="flex items-center gap-1.5 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-xs font-semibold rounded"
        >
          Initialize Account Token
          <ArrowRight size={12} />
        </button>
      </div>
    </div>
  );
};