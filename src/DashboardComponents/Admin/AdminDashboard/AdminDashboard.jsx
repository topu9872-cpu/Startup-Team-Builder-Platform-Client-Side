"use client";

import React, { useEffect } from "react";
import {
  Users,
  Building2,
  Briefcase,
  DollarSign,
  Activity,
  ArrowUpRight,
} from "lucide-react";
import {
  ComposedChart,
  Area,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Custom premium hover panel for checking contrasting data matrices
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#0f111a] border border-slate-800 p-3 rounded-xl shadow-2xl backdrop-blur-md space-y-2">
        <p className="text-[10px] font-bold tracking-wider text-slate-500 uppercase">
          {label}
        </p>
        <div className="space-y-1.5">
          {payload.map((item, ind) => {
            const isRevenue = item.name === "Revenue";
            return (
              <div key={ind} className="flex items-center gap-5 text-xs">
                <div className="flex items-center gap-1.5">
                  <div
                    className="size-1.5 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-slate-400 text-[11px]">
                    {item.name}:
                  </span>
                </div>
                <span className="text-white font-semibold ml-auto">
                  {isRevenue ? `$${item.value.toLocaleString()}` : item.value}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
  return null;
};

export default function AdminDashboard({
  allUsers,
  allStaups,
  allSubcriptions,
  allOpportunities,
}) {
  const activeStartups = allStaups.filter((item) => item.status === "Approved");
  console.log(activeStartups);
  const total = allSubcriptions.reduce(
    (sum, item) => sum + Number(item.price),
    0,
  );
 
  const current =new Date().toLocaleString('en-US',{
    month:'short'
  });

  const stats = {
    totalUsers: allUsers.length || 0,
    totalStartups: activeStartups.length || 0,
    totalOpportunities: allOpportunities.length || 0,
    totalRevenue: total.toFixed(2),
  };

  // Synchronized metrics timeline showing entity counts mapped against platform ARR growth
  const chartData = [
    {
      month: current,
      Users: allUsers.length || 0,
      Startups: activeStartups.length || 0,
      Opportunities: allOpportunities.length || 0,
      Revenue: total.toFixed(2),
    },
   
  ];

  return (
    <div className="space-y-6 max-w-7xl mx-auto p-2">
      {/* Page Header Block */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-800/60 pb-5">
        <div>
          <h1 className="text-xl font-bold tracking-tight text-white">
            System Administration
          </h1>
          <p className="text-xs text-slate-400 mt-0.5">
            Global platform metrics, user directory indexing, and monetization
            pipelines.
          </p>
        </div>
      </div>

      {/* ===== STATS CARDS ===== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1: Total Users */}
        <div className="p-5 rounded-xl bg-[#0d0e12] border border-slate-800/80 shadow-lg transition-all duration-300 hover:border-blue-500/30">
          <div className="flex items-center justify-between">
            <div className="h-9 w-9 bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center rounded-lg">
              <Users className="size-4.5" />
            </div>
            <span className="text-[10px] font-medium text-blue-400 bg-blue-500/5 border border-blue-500/10 px-2 py-0.5 rounded-full flex items-center gap-1">
              <ArrowUpRight className="size-3" /> +24%
            </span>
          </div>
          <div className="mt-4">
            <h2 className="text-2xl font-bold tracking-tight text-white">
              {stats.totalUsers}
            </h2>
            <p className="text-xs font-medium text-slate-400 mt-0.5">
              Total Registered Users
            </p>
          </div>
        </div>

        {/* Card 2: Total Startups */}
        <div className="p-5 rounded-xl bg-[#0d0e12] border border-slate-800/80 shadow-lg transition-all duration-300 hover:border-purple-500/30">
          <div className="flex items-center justify-between">
            <div className="h-9 w-9 bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center rounded-lg">
              <Building2 className="size-4.5" />
            </div>
            <span className="text-[10px] font-medium text-purple-400 bg-purple-500/5 border border-purple-500/10 px-2 py-0.5 rounded-full">
              Vetted
            </span>
          </div>
          <div className="mt-4">
            <h2 className="text-2xl font-bold tracking-tight text-white">
              {stats.totalStartups}
            </h2>
            <p className="text-xs font-medium text-slate-400 mt-0.5">
              Total Active Startups
            </p>
          </div>
        </div>

        {/* Card 3: Total Opportunities */}
        <div className="p-5 rounded-xl bg-[#0d0e12] border border-slate-800/80 shadow-lg transition-all duration-300 hover:border-emerald-500/30">
          <div className="flex items-center justify-between">
            <div className="h-9 w-9 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center rounded-lg">
              <Briefcase className="size-4.5" />
            </div>
            <span className="text-[10px] font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
              Open Nodes
            </span>
          </div>
          <div className="mt-4">
            <h2 className="text-2xl font-bold tracking-tight text-white">
              {stats.totalOpportunities}
            </h2>
            <p className="text-xs font-medium text-slate-400 mt-0.5">
              Total Opportunities
            </p>
          </div>
        </div>

        {/* Card 4: Total Revenue */}
        <div className="p-5 rounded-xl bg-[#0d0e12] border border-slate-800/80 shadow-lg transition-all duration-300 hover:border-amber-500/30">
          <div className="flex items-center justify-between">
            <div className="h-9 w-9 bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center rounded-lg">
              <DollarSign className="size-4.5" />
            </div>
            <span className="text-[10px] font-medium text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded-full flex items-center gap-1">
              Gross ARR
            </span>
          </div>
          <div className="mt-4">
            <h2 className="text-2xl font-bold tracking-tight text-white">
              ${stats.totalRevenue.toLocaleString()}
            </h2>
            <p className="text-xs font-medium text-slate-400 mt-0.5">
              Total Platform Revenue
            </p>
          </div>
        </div>
      </div>

      {/* ===== CO-AXIS COMBINED METRICS PROGRESSION ENGINE ===== */}
      <div className="bg-[#0d0e12] border border-slate-800/80 p-5 sm:p-6 rounded-xl shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800/60 pb-4 mb-6 gap-3">
          <div className="space-y-0.5">
            <h2 className="text-sm font-bold tracking-tight text-white flex items-center gap-2">
              <Activity className="size-4 text-amber-400" /> Platform
              Operational & Financial Vectors
            </h2>
            <p className="text-xs text-slate-400">
              Comparing network node volume scales (Left Axis) directly against
              ARR conversion growth trends (Right Axis).
            </p>
          </div>

          {/* Quick Custom Legend Identifiers */}
          <div className="flex flex-wrap items-center gap-4 text-[11px] font-medium">
            <div className="flex items-center gap-1.5">
              <div className="size-2 rounded bg-blue-500" />{" "}
              <span className="text-slate-400">Users</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="size-2 rounded bg-purple-500" />{" "}
              <span className="text-slate-400">Startups</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="size-2 rounded bg-emerald-500" />{" "}
              <span className="text-slate-400">Jobs</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-4 h-0.5 bg-amber-400" />{" "}
              <span className="text-slate-400">Revenue</span>
            </div>
          </div>
        </div>

        {/* Composed Chart Arena */}
        <div className="h-85 w-full text-xs">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart
              data={chartData}
              margin={{ top: 10, right: -10, left: -25, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorRevGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.12} />
                  <stop offset="95%" stopColor="#f59e0b" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="#1e293b"
                opacity={0.25}
              />
              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#94a3b8", fontSize: 11 }}
              />
              {/* Left Y Axis for numeric counts */}
              <YAxis
                yAxisId="left"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#64748b", fontSize: 10 }}
              />
              {/* Right Y Axis for revenue mapping currency intervals */}
              <YAxis
                yAxisId="right"
                orientation="right"
                axisLine={false}
                tickLine={false}
                tickFormatter={(val) => `$${val / 1000}k`}
                tick={{ fill: "#92400e", fontSize: 10 }}
              />
              <Tooltip content={<CustomTooltip />} />

              {/* Volume Metrics Visual Sublayers */}
              <Bar
                yAxisId="left"
                dataKey="Users"
                fill="#3b82f6"
                radius={[4, 4, 0, 0]}
                maxBarSize={20}
              />
              <Bar
                yAxisId="left"
                dataKey="Startups"
                fill="#a855f7"
                radius={[4, 4, 0, 0]}
                maxBarSize={20}
              />
              <Bar
                yAxisId="left"
                dataKey="Opportunities"
                fill="#10b981"
                radius={[4, 4, 0, 0]}
                maxBarSize={20}
              />

              {/* Overlay Revenue Financial Curve Mapped to the Secondary Axis */}
              <Area
                yAxisId="right"
                type="monotone"
                dataKey="Revenue"
                fill="url(#colorRevGrad)"
                stroke="transparent"
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="Revenue"
                stroke="#f59e0b"
                strokeWidth={2.5}
                dot={{
                  fill: "#0d0e12",
                  stroke: "#f59e0b",
                  strokeWidth: 2,
                  r: 4,
                }}
                activeDot={{ r: 6 }}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
