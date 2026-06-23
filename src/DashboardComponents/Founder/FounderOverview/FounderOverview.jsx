"use client";

import React from "react";
import {
  Briefcase,
  FileText,
  Users,
  TrendingUp,
  ArrowUpRight,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

// Custom premium styling configurations for the charts
const CHART_THEME = {
  Opportunities: { gradient: ["#a855f7", "#7c3aed"], label: "Opportunities" },
  Applications: { gradient: ["#3b82f6", "#2563eb"], label: "Applications" },
  Accepted: { gradient: ["#10b981", "#059669"], label: "Accepted Members" },
};

// Custom layout for the chart interactive tooltips
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-[#0f111a] border border-slate-800 p-3 rounded-xl shadow-2xl backdrop-blur-md">
        <p className="text-[10px] font-bold tracking-wider text-slate-400 uppercase">
          {data.name}
        </p>
        <p className="text-lg font-bold text-white mt-0.5">
          {payload[0].value}
        </p>
      </div>
    );
  }
  return null;
};
export default function FounderOverview({
  applications,
  ManageOpportunities,
  user,
}) {
  console.log(user);
  const filter = applications.filter(
    (applicant) => applicant.status === "Accepted",
  );

  // Dummy Metrics Dataset
  const stats = {
    totalOpportunities: ManageOpportunities.length || 0,
    totalApplications: applications.length || 0,
    acceptedMembers: filter.length || 0,
  };

  const chartData = [
    {
      name: "Opportunities",
      value: stats.totalOpportunities,
      colorStart: "#a855f7",
      colorEnd: "#7c3aed",
    },
    {
      name: "Applications",
      value: applications.length || 0,
      colorStart: "#3b82f6",
      colorEnd: "#2563eb",
    },
    {
      name: "Accepted",
      value: filter.length || 0,
      colorStart: "#10b981",
      colorEnd: "#059669",
    },
  ];

  return (
    <div className="space-y-6 max-w-7xl mx-auto p-2">
      {/* Page Title Header Block */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-800/60 pb-5">
        <div className="text-start">
          <h1 className="text-2xl font-bold tracking-tight text-white">
            Founder Hub Overview
          </h1>
          <div className="flex gap-3">
            <h1 className="text-xl font-bold tracking-tight text-white">
              Wellcome, {user?.name}{" "}
            </h1>
            {user?.isBlock === false ? (
              <span className=" text-green-500">Varifyed</span>
            ) : (
              <span className=" text-yellow-500">Blocked</span>
            )}
          </div>

          <p className="text-xs text-slate-400 mt-0.5">
            Track venture pipelines, conversion ratios, and developer ecosystem
            growth nodes.
          </p>
        </div>
      </div>

      {/* ===== STATS CARDS GRID ===== */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Card 1: Total Opportunities */}
        <div className="p-5 rounded-xl bg-[#0d0e12] border border-slate-800/80 shadow-lg relative group transition-all duration-300 hover:border-purple-500/30">
          <div className="flex items-center justify-between">
            <div className="h-9 w-9 bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center rounded-lg">
              <Briefcase className="size-4.5" />
            </div>
            <span className="text-[10px] font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full flex items-center gap-1">
              Active Node
            </span>
          </div>
          <div className="mt-4">
            <h2 className="text-2xl font-bold tracking-tight text-white">
              {stats.totalOpportunities}
            </h2>
            <p className="text-xs font-medium text-slate-400 mt-0.5">
              Total Core Opportunities
            </p>
          </div>
        </div>

        {/* Card 2: Total Applications */}
        <div className="p-5 rounded-xl bg-[#0d0e12] border border-slate-800/80 shadow-lg relative group transition-all duration-300 hover:border-blue-500/30">
          <div className="flex items-center justify-between">
            <div className="h-9 w-9 bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center rounded-lg">
              <FileText className="size-4.5" />
            </div>
            <span className="text-[10px] font-medium text-slate-400 bg-slate-800 border border-slate-700/60 px-2 py-0.5 rounded-full flex items-center gap-1">
              <ArrowUpRight className="size-3 text-slate-400" /> +14% This Wk
            </span>
          </div>
          <div className="mt-4">
            <h2 className="text-2xl font-bold tracking-tight text-white">
              {stats.totalApplications}
            </h2>
            <p className="text-xs font-medium text-slate-400 mt-0.5">
              Incoming Applications
            </p>
          </div>
        </div>

        {/* Card 3: Accepted Members */}
        <div className="p-5 rounded-xl bg-[#0d0e12] border border-slate-800/80 shadow-lg relative group transition-all duration-300 hover:border-emerald-500/30">
          <div className="flex items-center justify-between">
            <div className="h-9 w-9 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center rounded-lg">
              <Users className="size-4.5" />
            </div>
            <span className="text-[10px] font-medium text-purple-400 bg-purple-500/10 border border-purple-500/20 px-2 py-0.5 rounded-full">
              18.7% Conversion
            </span>
          </div>
          <div className="mt-4">
            <h2 className="text-2xl font-bold tracking-tight text-white">
              {stats.acceptedMembers}
            </h2>
            <p className="text-xs font-medium text-slate-400 mt-0.5">
              Accepted Contributors
            </p>
          </div>
        </div>
      </div>

      {/* ===== PIPELINE METRICS CHART CONTAINER ===== */}
      <div className="bg-[#0d0e12] border border-slate-800/80 p-5 sm:p-6 rounded-xl shadow-xl">
        <div className="flex items-start justify-between border-b border-slate-800/60 pb-4 mb-6">
          <div className="space-y-0.5">
            <h2 className="text-sm font-bold tracking-tight text-white flex items-center gap-2">
              <TrendingUp className="size-4 text-purple-400" /> Pipeline
              Conversions
            </h2>
            <p className="text-xs text-slate-400">
              Visual mapping comparing opportunity generation to closed
              applications.
            </p>
          </div>
        </div>

        {/* Chart Dynamic Output Window */}
        <div className="h-75 w-full text-xs">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              margin={{ top: 10, right: 10, left: -25, bottom: 0 }}
            >
              <defs>
                {chartData.map((data) => (
                  <linearGradient
                    key={data.name}
                    id={`grad-${data.name}`}
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop
                      offset="0%"
                      stopColor={data.colorStart}
                      stopOpacity={1}
                    />
                    <stop
                      offset="100%"
                      stopColor={data.colorEnd}
                      stopOpacity={0.15}
                    />
                  </linearGradient>
                ))}
              </defs>
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="#1e293b"
                opacity={0.3}
              />
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#94a3b8", fontSize: 11, fontWeight: 500 }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#64748b", fontSize: 10 }}
              />
              <Tooltip
                content={<CustomTooltip />}
                cursor={{ fill: "rgba(255,255,255,0.02)", radius: 8 }}
              />
              <Bar dataKey="value" radius={[6, 6, 0, 0]} maxBarSize={50}>
                {chartData.map((entry) => (
                  <Cell
                    key={`cell-${entry.name}`}
                    fill={`url(#grad-${entry.name})`}
                    stroke={entry.colorStart}
                    strokeWidth={1}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
