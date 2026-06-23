"use client";

import React from "react";
import { FileText, CheckCircle, XCircle, TrendingUp } from "lucide-react";
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

// Custom layout for chart interactive hover tooltips
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-[#0f111a] border border-slate-800 p-3 rounded-xl shadow-2xl backdrop-blur-md">
        <p className="text-[10px] font-bold tracking-wider text-slate-400 uppercase">
          {data.name}
        </p>
        <p className="text-lg font-bold text-white mt-0.5">{data.value}</p>
      </div>
    );
  }
  return null;
};

export default function CollaboratorDashboard({ CollaboratorData,user }) {
  const Accepted = CollaboratorData.filter(
    (collaborator) => collaborator.status === "Accepted",
  );
  const Rejected = CollaboratorData.filter(
    (collaborator) => collaborator.status === "Rejected",
  );

  const stats = {
    totalApplications: CollaboratorData.length || 0,
    accepted: Accepted.length || 0,
    rejected: Rejected.length || 0,
  };

  // Processing sequential radial tracks
  const chartData = [
    {
      name: "Total Applications",
      value: CollaboratorData.length || 0,
      fill: "#3b82f6",
    },
    { name: "Accepted Roles", value: Accepted.length || 0, fill: "#10b981" },
    {
      name: "Rejected Node Tracks",
      value: Rejected.length || 0,
      fill: "#ef4444",
    },
  ];

  // Calculate success conversion against closed loops
  const totalDecided = stats.accepted + stats.rejected;
  const successRate =
    totalDecided > 0 ? ((stats.accepted / totalDecided) * 100).toFixed(0) : 0;

  return (
    <div className="space-y-6 max-w-7xl mx-auto p-2">
      {/* Page Header Block */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-800/60 pb-5">
        <div>
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
            Track your submission pipelines, processing velocity, and historical
            outcome states.
          </p>
        </div>
      </div>

      {/* ===== STATS CARDS ===== */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Card 1: Total Applications */}
        <div className="p-5 rounded-xl bg-[#0d0e12] border border-slate-800/80 shadow-lg transition-all duration-300 hover:border-blue-500/30">
          <div className="flex items-center justify-between">
            <div className="h-9 w-9 bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center rounded-lg">
              <FileText className="size-4.5" />
            </div>
            <span className="text-[10px] font-medium text-blue-400 bg-blue-500/5 border border-blue-500/10 px-2 py-0.5 rounded-full">
              Active Pipeline
            </span>
          </div>
          <div className="mt-4">
            <h2 className="text-2xl font-bold tracking-tight text-white">
              {stats.totalApplications}
            </h2>
            <p className="text-xs font-medium text-slate-400 mt-0.5">
              Total Applications
            </p>
          </div>
        </div>

        {/* Card 2: Accepted */}
        <div className="p-5 rounded-xl bg-[#0d0e12] border border-slate-800/80 shadow-lg transition-all duration-300 hover:border-emerald-500/30">
          <div className="flex items-center justify-between">
            <div className="h-9 w-9 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center rounded-lg">
              <CheckCircle className="size-4.5" />
            </div>
            <span className="text-[10px] font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
              {successRate}% Decision Win
            </span>
          </div>
          <div className="mt-4">
            <h2 className="text-2xl font-bold tracking-tight text-white">
              {stats.accepted}
            </h2>
            <p className="text-xs font-medium text-slate-400 mt-0.5">
              Accepted Roles
            </p>
          </div>
        </div>

        {/* Card 3: Rejected */}
        <div className="p-5 rounded-xl bg-[#0d0e12] border border-slate-800/80 shadow-lg transition-all duration-300 hover:border-red-500/30">
          <div className="flex items-center justify-between">
            <div className="h-9 w-9 bg-red-500/10 border border-red-500/20 text-red-400 flex items-center justify-center rounded-lg">
              <XCircle className="size-4.5" />
            </div>
            <span className="text-[10px] font-medium text-red-400 bg-red-500/5 border border-red-500/10 px-2 py-0.5 rounded-full">
              Archived Nodes
            </span>
          </div>
          <div className="mt-4">
            <h2 className="text-2xl font-bold tracking-tight text-white">
              {stats.rejected}
            </h2>
            <p className="text-xs font-medium text-slate-400 mt-0.5">
              Total Rejected
            </p>
          </div>
        </div>
      </div>

      {/* ===== OVERVIEW RADIAL PROGRESS CHART ===== */}
      <div className="bg-[#0d0e12] border border-slate-800/80 p-5 sm:p-6 rounded-xl shadow-xl grid grid-cols-1 md:grid-cols-5 gap-6 items-center">
        {/* Left Descriptive Label Pillar */}
        <div className="md:col-span-2 space-y-4">
          <div className="space-y-1">
            <h2 className="text-sm font-bold tracking-tight text-white flex items-center gap-2">
              <TrendingUp className="size-4 text-blue-400" /> Lifecycle Status
              Ratios
            </h2>
            <p className="text-xs text-slate-400 leading-relaxed">
              Monitoring application vectors. The dynamic ratio maps successful
              onboardings directly against your total closed recruitment loops.
            </p>
          </div>

          {/* Inline Premium Custom Chart Legends */}
          <div className="space-y-2 pt-2 border-t border-slate-900">
            <div className="flex items-center gap-2 text-xs">
              <div className="size-2 rounded-full bg-blue-500" />
              <span className="text-slate-400">Applications Filed</span>
              <span className="text-white font-semibold ml-auto">
                {stats.totalApplications}
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <div className="size-2 rounded-full bg-emerald-500" />
              <span className="text-slate-400">Accepted Roles</span>
              <span className="text-white font-semibold ml-auto">
                {stats.accepted}
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <div className="size-2 rounded-full bg-red-500" />
              <span className="text-slate-400">Archived/Rejected</span>
              <span className="text-white font-semibold ml-auto">
                {stats.rejected}
              </span>
            </div>
          </div>
        </div>

        {/* Right Radial Chart Dynamic Render Engine */}
        <div className="md:col-span-3 h-65 w-full relative flex items-center justify-center">
          <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart
              cx="50%"
              cy="50%"
              innerRadius="35%"
              outerRadius="100%"
              barSize={12}
              data={chartData}
              startAngle={90}
              endAngle={-270}
            >
              <RadialBar
                background={{ fill: "#161925" }}
                dataKey="value"
                cornerRadius={6}
              />
              <Tooltip content={<CustomTooltip />} />
            </RadialBarChart>
          </ResponsiveContainer>

          {/* Absolute Center Score Node Badge */}
          <div className="absolute flex flex-col items-center justify-center pointer-events-none">
            <span className="text-2xl font-black text-white tracking-tight">
              {successRate}%
            </span>
            <span className="text-[9px] uppercase font-bold tracking-widest text-slate-500 mt-0.5">
              Win Rate
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
