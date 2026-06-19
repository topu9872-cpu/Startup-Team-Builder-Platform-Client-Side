"use client";

import React, { useState } from "react";
import { 
  Users, 
  Mail, 
  Shield, 
  CheckCircle2, 
  Ban, 
  UserCheck,
  UserX
} from "lucide-react";

export default function ManageUsers() {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "john@gmail.com", role: "Founder", status: "Active" },
    { id: 2, name: "Sarah Lee", email: "sarah@gmail.com", role: "Collaborator", status: "Blocked" },
    { id: 3, name: "Mike Ross", email: "mike@gmail.com", role: "Admin", status: "Active" },
  ]);

  const toggleStatus = (id) => {
    setUsers((prev) =>
      prev.map((user) =>
        user.id === id
          ? { ...user, status: user.status === "Active" ? "Blocked" : "Active" }
          : user
      )
    );
  };

  // Get dynamic custom styles for system roles
  const getRoleBadgeStyles = (role) => {
    switch (role) {
      case "Admin":
        return "bg-purple-500/10 border-purple-500/30 text-purple-400";
      case "Founder":
        return "bg-blue-500/10 border-blue-500/30 text-blue-400";
      default:
        return "bg-slate-800 border-slate-700 text-slate-300";
    }
  };

  // Extract initials for modern placeholder avatars
  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <div className="max-w-7xl mx-auto p-2 space-y-4">
      
      {/* Control Module Title Header */}
      <div className="border-b border-slate-800/60 pb-4">
        <h2 className="text-base font-bold text-white flex items-center gap-2">
          <Users className="size-4.5 text-blue-400" /> Identity & Access Management
        </h2>
        <p className="text-xs text-slate-400 mt-0.5">Audit user authorization scopes, manage security lifecycle access, and restrict network privileges.</p>
      </div>

      {/* Main Table View Wrapper */}
      <div className="overflow-hidden bg-[#0d0e12] border border-slate-800/80 rounded-xl shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            
            {/* Table Header Row */}
            <thead>
              <tr className="border-b border-slate-950 bg-[#111217] text-slate-400 font-semibold uppercase tracking-wider text-[10px]">
                <th className="py-3.5 px-4 w-12 text-center">#</th>
                <th className="py-3.5 px-4">User Profile</th>
                <th className="py-3.5 px-4">Identity Role</th>
                <th className="py-3.5 px-4">Network Status</th>
                <th className="py-3.5 px-4 text-right w-40">Access Control</th>
              </tr>
            </thead>

            {/* Table Body Content */}
            <tbody className="divide-y divide-slate-900/60 text-slate-300">
              {users.map((user, index) => {
                const isActive = user.status === "Active";

                return (
                  <tr 
                    key={user.id} 
                    className="hover:bg-slate-950/40 transition-colors duration-150 group"
                  >
                    {/* Index Index Track */}
                    <td className="py-3.5 px-4 text-center font-mono text-slate-500 text-[11px]">
                      {String(index + 1).padStart(2, "0")}
                    </td>

                    {/* Integrated User Profile Card Segment */}
                    <td className="py-3.5 px-4">
                      <div className="flex items-center gap-3">
                        {/* High-End Cyber Initials Avatar Box */}
                        <div className={`h-8 w-8 rounded-lg flex items-center justify-center font-bold text-[11px] border tracking-wider transition-all duration-300
                          ${isActive 
                            ? "bg-slate-900 border-slate-800 text-slate-200 group-hover:border-blue-500/30 group-hover:text-blue-400" 
                            : "bg-red-950/10 border-red-950 text-slate-600"
                          }`}
                        >
                          {getInitials(user.name)}
                        </div>
                        {/* User Identity Details Bundle */}
                        <div className="flex flex-col space-y-0.5">
                          <span className={`font-semibold tracking-tight transition-colors ${isActive ? "text-white" : "text-slate-500 line-through"}`}>
                            {user.name}
                          </span>
                          <span className="text-slate-500 font-medium text-[11px] flex items-center gap-1">
                            <Mail className="size-3 text-slate-700" />
                            {user.email}
                          </span>
                        </div>
                      </div>
                    </td>

                    {/* Custom Scaled Role Badge */}
                    <td className="py-3.5 px-4 vertical-align-middle">
                      <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-semibold tracking-wide uppercase border ${getRoleBadgeStyles(user.role)}`}>
                        <Shield className="size-2.5" />
                        {user.role}
                      </span>
                    </td>

                    {/* Security Network Access Status Indicator */}
                    <td className="py-3.5 px-4">
                      {isActive ? (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shadow-xs">
                          <CheckCircle2 className="size-3" /> Active Session
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium bg-red-500/10 border border-red-500/20 text-red-400">
                          <Ban className="size-3" /> Blocked / Revoked
                        </span>
                      )}
                    </td>

                    {/* Context-Aware Security Controls */}
                    <td className="py-3.5 px-4 text-right">
                      <button
                        onClick={() => toggleStatus(user.id)}
                        className={`h-7 px-3 rounded-lg font-medium text-[11px] inline-flex items-center gap-1.5 transition-all active:scale-97 cursor-pointer
                          ${isActive
                            ? "bg-transparent border border-slate-800 hover:border-red-500/30 text-slate-400 hover:text-red-400 hover:bg-red-950/10"
                            : "bg-emerald-600 hover:bg-emerald-500 text-white shadow-md shadow-emerald-950/30"
                          }`}
                      >
                        {isActive ? (
                          <>
                            <UserX className="size-3.5" />
                            Block User
                          </>
                        ) : (
                          <>
                            <UserCheck className="size-3.5" />
                            Unblock User
                          </>
                        )}
                      </button>
                    </td>

                  </tr>
                );
              })}
            </tbody>

          </table>
        </div>
      </div>

    </div>
  );
}