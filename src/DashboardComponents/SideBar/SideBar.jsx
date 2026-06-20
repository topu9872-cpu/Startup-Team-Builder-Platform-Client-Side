"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  LayoutDashboard,
  Briefcase,
  Settings,
  Landmark,
  LogOut,
  ShieldAlert,
  SquareActivity,
  Dock,
} from "lucide-react";
import { TbTransactionDollar, TbUsersGroup } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { FaRegLightbulb } from "react-icons/fa";
import { authClient } from "@/lib/auth-client";

export default function Sidebar() {
  const { data: session } = authClient.useSession();

  const user = session?.user;

  const AdminNavMenu = [
    { label: "Overview", href: "/dashboard/overview", icon: LayoutDashboard },
    { label: "Manage Users", href: "/dashboard/manage-users", icon: TbUsersGroup },
    {
      label: "Manage Startups",
      href: "/dashboard/manage-startups",
      icon: Landmark,
    },
    {
      label: "View Transactions",
      href: "/dashboard/view-transactions",
      icon: TbTransactionDollar,
    },
    
    { label: "Profile", href: "/dashboard/adminprofile", icon: CgProfile },
  ];

  const FounderNavMenu = [
    {
      label: "Overview",
      href: "/dashboard/founder-overview",
      icon: LayoutDashboard,
    },
    {
      label: "My Startup",
      href: "/dashboard/founder-my-startup",
      icon: Briefcase,
    },
    {
      label: "Add Opportunity",
      href: "/dashboard/founder-add-opportunity",
      icon: FaRegLightbulb,
    },
    {
      label: "Applications",
      href: "/dashboard/founder-applications",
      icon: TbUsersGroup,
    },
    {
      label: "Manage Opportunities",
      href: "/dashboard/founder-manage-opportunities",
      icon: Settings,
    },
    { label: "Profile", href: "/dashboard/founderprofile", icon: CgProfile },
  ];

  const CollaboratorNavMenu = [
    {
      label: "Overview",
      href: "/dashboard/collaboratoroverview",
      icon: LayoutDashboard,
    },
    {
      label: "My Applications",
      href: "/dashboard/collaboratormy-applications",
      icon: Dock,
    },
    {
      label: "Profile",
      href: "/dashboard/collaboratorprofile",
      icon: CgProfile,
    },
  ];

  const menus = {
    admin: AdminNavMenu,
    founder: FounderNavMenu,
    collaborator: CollaboratorNavMenu,
  };
  const role = user?.role.toLowerCase();

  // const role = "collaborator";
  const activeMenu = menus?.[role] ?? [];

  const [isOpen, setIsOpen] = useState(false);
  // Replace this role state with your actual global auth/context role parameter

  const pathname = usePathname();

  const toggleSidebar = () => setIsOpen(!isOpen);

  // Determine active dataset based on context layer node

  // Render navigation lists with responsive layouts
  const NavLinks = () => (
    <nav className="space-y-1.5 px-3 py-4">
      {activeMenu.map((item) => {
        const isActive = pathname === item.href;
        const Icon = item.icon;

        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setIsOpen(false)}
            className={`flex items-center gap-3 px-3 py-2.5 rounded text-xs font-mono tracking-wide relative transition-all duration-200 group ${
              isActive
                ? "text-purple-400 font-bold bg-purple-950/30 border border-purple-900/50"
                : "text-slate-400 hover:text-slate-100 hover:bg-slate-900/50 border border-transparent"
            }`}
          >
            {/* Visual indicator bar running on left edge of the active button item */}
            {isActive && (
              <motion.div
                layoutId="activeIndicator"
                className="absolute left-0 top-2 bottom-2 w-0.5 bg-linear-to-b from-purple-500 to-indigo-500 rounded-r"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}

            <Icon
              size={16}
              className={`transition-colors shrink-0 ${
                isActive
                  ? "text-purple-400"
                  : "text-slate-500 group-hover:text-slate-300"
              }`}
            />
            <span className="truncate">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );

  // Common Logo block structure
  const LogoContainer = () => (
    <Link href="/" className="flex items-center gap-2.5 group">
      <div className="h-9 w-9 rounded-lg bg-linear-to-br from-purple-600 to-indigo-700 flex items-center justify-center border border-purple-500/30 shadow-md shadow-purple-950/50 group-hover:scale-105 transition-transform duration-200">
        <ShieldAlert size={18} className="text-white animate-pulse" />
      </div>
      <div className="flex flex-col">
        <span className="font-mono font-black text-sm text-slate-100 tracking-wider leading-none">
          NEXUS
        </span>
        <span className="text-[9px] font-mono font-bold text-purple-400/80 tracking-widest uppercase mt-0.5">
          view
        </span>
      </div>
    </Link>
  );

  return (
    <>
      {/* 1. COMPACT TOP HEADER BAR ON SMALL SCREENS (< 1024px) */}
      <div className="lg:hidden w-full h-16 bg-slate-950/80 backdrop-blur-md border-b border-slate-900/80 flex items-center justify-between px-4 sticky top-0 z-40">
        <LogoContainer />

        <button
          onClick={toggleSidebar}
          className="p-2 text-slate-400 hover:text-slate-100 hover:bg-slate-900/60 rounded border border-slate-900 transition-colors"
          aria-label="Toggle Navigation Panel"
        >
          <Menu size={20} />
        </button>
      </div>

      {/* 2. PERSISTENT FIXED SIDEBAR ON DESKTOP LAYOUTS (>= 1024px) */}
      <aside className="hidden lg:flex flex-col w-64 h-screen bg-slate-950 border-r border-slate-900 fixed left-0 top-0 z-30 justify-between">
        <div>
          {/* Brand Frame Area */}
          <div className="h-16 flex items-center px-6 border-b border-slate-900/80">
            <LogoContainer />
          </div>

          {/* Demonstration Role Switcher Component */}

          <NavLinks />
        </div>

        {/* Footer Area Action Trigger */}
        <div className="p-4 border-t border-slate-900/80">
          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded text-xs font-mono text-rose-400/90 hover:text-rose-300 hover:bg-rose-950/20 border border-transparent hover:border-rose-950/40 transition-all duration-200">
            <LogOut size={16} className="shrink-0" />
            <span>Terminate Session</span>
          </button>
        </div>
      </aside>

      {/* 3. MOBILE SYSTEM SLIDE-IN PANEL DRAWER (AnimatePresence Layer) */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Shading Blur Mask */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleSidebar}
              className="lg:hidden fixed inset-0 bg-black/70 backdrop-blur-xs z-40"
            />

            {/* Sliding Panel Window */}
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 26, stiffness: 220 }}
              className="lg:hidden fixed left-0 top-0 bottom-0 w-72 bg-slate-950 border-r border-slate-900 z-50 flex flex-col justify-between shadow-2xl"
            >
              <div>
                {/* Mobile Drawer Top Header */}
                <div className="h-16 flex items-center justify-between px-4 border-b border-slate-900/80">
                  <LogoContainer />
                  <button
                    onClick={toggleSidebar}
                    className="p-1.5 text-slate-500 hover:text-slate-300 transition-colors"
                  >
                    <X size={18} />
                  </button>
                </div>
                <NavLinks />
              </div>

              {/* Mobile Drawer Logout Area */}
              <div className="p-4 border-t border-slate-900/80">
                <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded text-xs font-mono text-rose-400 hover:text-rose-300 hover:bg-rose-950/20 transition-all duration-200">
                  <LogOut size={16} className="shrink-0" />
                  <span>Terminate Session</span>
                </button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
