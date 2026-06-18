import React from "react";
import { 
  TrendingUp, 
  Terminal, 
  Award, 
  Code, 
  Activity, 
  ArrowRight,
  ShieldCheck,
  Briefcase
} from "lucide-react";

// 1. Core Success Metrics & Chronological Trackers
const TIMELINE_EVENTS = [
  {
    time: "6 Months Timeline",
    nodeId: "Node 0412",
    title: "From Fractional Contributor to CTO",
    role: "Systems Engineer (Rust / High-Throughput Pipelines)",
    match: "Connected directly with an infrastructure telemetry startup via our direct cryptographic index layer.",
    project: "Brought on initially to rewrite a legacy Go-based API gateway that was throttling enterprise traffic at 40k req/s.",
    outcome: "Successfully refactored the gateway into Rust, cutting latency by 68% and reducing cloud compute overhead by $14,000/month.",
    status: "Absorbed full-time as Founding CTO within 180 days with a 12% equity allocation.",
    accentColor: "border-indigo-500 text-indigo-400 bg-indigo-500/10"
  },
  {
    time: "3 Months Timeline",
    nodeId: "Node 0983",
    title: "Seed Funding via Internal Token Flow",
    role: "Distributed Database Developers (2-Person Sovereign Node)",
    match: "Utilized the Programmatic Capital Flow track to pitch a low-latency caching layer built for decentralized databases.",
    project: "Built an open-source proof of concept inside StartupForge's internal sandboxed architecture.",
    outcome: "Discovered by an institutional venture syndicate monitoring our platform's open telemetry data feed.",
    status: "Closed a $450,000 pre-seed funding round entirely off the validated code repository metrics tracked by the forge.",
    accentColor: "border-emerald-500 text-emerald-400 bg-emerald-500/10"
  },
  {
    time: "45 Days Timeline",
    nodeId: "Node 1105",
    title: "Asynchronous Migration for Tier-1 Platform",
    role: "Senior Frontend Architect (Distributed Core Schedule)",
    match: "Flagged by an early-stage fintech platform requiring a complete architectural overhaul from a bloated legacy React bundle.",
    project: "Reconfigured the entire state layout and application render cycle without hopping onto a single live standup call.",
    outcome: "Core Web Vitals score rose from 41 to 98. Performance-based conversion drop-offs fell to absolute zero.",
    status: "Retained as a principal fractional engineer at an ongoing $180/hr contract structure.",
    accentColor: "border-amber-500 text-amber-400 bg-amber-500/10"
  }
];

const METRICS_TABLE = [
  { metric: "Time to Initial Code Review", traditional: "14 to 21 Days", forge: "Under 48 Hours", highlight: true },
  { metric: "Average Interview Rounds", traditional: "5 to 7 Touchpoints", forge: "2 Technical Iterations", highlight: false },
  { metric: "Venture Retention (1 Year)", traditional: "64% Industry Avg", forge: "91% Active Retention", highlight: false },
  { metric: "Hidden Cap Table Visibility", traditional: "0% (Blind Negotiation)", forge: "100% Equity/Runway Audit", highlight: true }
];

export const SuccessStoriesComponent = () => {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8 space-y-12 text-slate-100 font-sans antialiased bg-slate-950">
      
      {/* SECTION HEADER */}
      <div className="space-y-3 pb-6 border-b border-slate-900">
        <div className="inline-flex items-center gap-1.5 text-[10px] font-mono text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
          <TrendingUp size={10} className="text-indigo-400 animate-pulse" />
          <span>Ecosystem Metric Ledger</span>
        </div>
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-slate-100">
          Operator Deployments & Success Stories
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 max-w-2xl leading-relaxed">
          Real performance data from engineers and technical operators who bypassed standard recruiting friction to build directly with capital-backed ventures.
        </p>
      </div>

      {/* CHRONOLOGICAL TIMELINE VERTICAL GRID */}
      <div className="space-y-8 relative before:absolute before:inset-y-0 before:left-3.5 before:w-px before:bg-slate-900">
        {TIMELINE_EVENTS.map((event, idx) => (
          <div key={idx} className="relative pl-8 sm:pl-10 group">
            
            {/* Timeline Dot Node Indicator */}
            <div className={`absolute left-1.5 top-1 w-4 h-4 rounded-full border-2 bg-slate-950 flex items-center justify-center transition-transform duration-300 group-hover:scale-115 ${event.accentColor.split(' ')[0]}`}>
              <div className="w-1 h-1 rounded-full bg-current" />
            </div>

            {/* Main Content Box */}
            <div className="p-4 sm:p-5 rounded bg-slate-900/20 border border-slate-900 hover:bg-slate-900/40 hover:border-slate-800 transition-all duration-300 space-y-3">
              
              {/* Header Telemetry */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-950 text-slate-400 border border-slate-900">
                    {event.nodeId}
                  </span>
                  <h3 className="text-xs sm:text-sm font-bold text-slate-200 group-hover:text-white transition-colors">
                    {event.title}
                  </h3>
                </div>
                <span className={`text-[10px] font-mono font-medium px-2 py-0.5 rounded self-start sm:self-auto border ${event.accentColor}`}>
                  {event.time}
                </span>
              </div>

              {/* Scope Subheading */}
              <p className="text-[11px] text-indigo-300 font-medium font-mono">
                // {event.role}
              </p>

              {/* Step Logs Structure */}
              <div className="space-y-1.5 text-slate-400 text-[11px] sm:text-xs leading-relaxed">
                <p><strong className="text-slate-300">Pipeline Match:</strong> {event.match}</p>
                <p><strong className="text-slate-300">Operational Target:</strong> {event.project}</p>
                <p><strong className="text-slate-300">System Outcome:</strong> {event.outcome}</p>
              </div>

              {/* Status Banner */}
              <div className="pt-2.5 border-t border-slate-900/60 flex items-center gap-2 text-[11px] text-emerald-400 font-medium">
                <ShieldCheck size={12} className="shrink-0" />
                <span>Current Status: {event.status}</span>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* METRICS COMPARISON DATA TABLE */}
      <div className="space-y-3 pt-4">
        <div className="flex items-center gap-2">
          <Activity size={12} className="text-indigo-400" />
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400">Ecosystem Aggregation Metrics</h2>
        </div>
        
        <div className="w-full overflow-x-auto rounded border border-slate-900 bg-slate-900/10">
          <table className="w-full text-left border-collapse text-[11px] sm:text-xs">
            <thead>
              <tr className="border-b border-slate-900 bg-slate-950 text-slate-500 font-mono text-[10px] uppercase tracking-wider">
                <th className="p-3 font-bold">Metric Measured</th>
                <th className="p-3 font-bold">Traditional Path</th>
                <th className="p-3 font-bold">StartupForge Pipeline</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-900/60 text-slate-300">
              {METRICS_TABLE.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-900/20 transition-colors">
                  <td className="p-3 font-medium text-slate-200">{row.metric}</td>
                  <td className="p-3 text-slate-500 line-through decoration-slate-800">{row.traditional}</td>
                  <td className={`p-3 font-semibold ${row.highlight ? "text-indigo-400" : "text-emerald-400"}`}>
                    {row.forge}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* FOOTER ACTION UNIT */}
      <div className="p-4 rounded border border-slate-900 bg-slate-900/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded bg-slate-950 border border-slate-900 flex items-center justify-center text-indigo-400 shrink-0 mt-0.5">
            <Terminal size={13} />
          </div>
          <div className="space-y-0.5">
            <h4 className="text-xs font-bold text-slate-200">84% of initialized nodes match within 14 days</h4>
            <p className="text-[11px] text-slate-500 leading-normal">
              No resumes, no agency recruiters, just unmitigated system architecture alignment telemetry.
            </p>
          </div>
        </div>

        <button className="w-full sm:w-auto flex items-center justify-center gap-1.5 py-2 px-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs rounded transition-all duration-200 group whitespace-nowrap">
          Establish System Node
          <ArrowRight size={12} className="transition-transform duration-200 transform group-hover:translate-x-0.5" />
        </button>
      </div>

    </div>
  );
};