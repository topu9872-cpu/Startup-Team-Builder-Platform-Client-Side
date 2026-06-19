"use client";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full bg-black flex flex-col items-center justify-center p-4 overflow-hidden relative selection:bg-purple-500/30">
      
      {/* Animated Glowing Background Orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-600/10 rounded-full blur-[100px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] animate-pulse pointer-events-none delay-1000" />

      {/* Main Content Card */}
      <div className="text-center max-w-md z-10 space-y-6">
        
        {/* Animated 404 Canvas Art */}
        <div className="relative flex items-center justify-center h-40">
          {/* Floating Floating Ring Base */}
          <div className="absolute w-36 h-36 rounded-full border border-dashed border-purple-500/30 animate-[spin_20s_linear_infinite]" />
          <div className="absolute w-48 h-48 rounded-full border border-purple-500/10 animate-[spin_35s_linear_infinite_reverse]" />
          
          {/* Main Glitch Text Stack */}
          <h1 className="text-8xl md:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-linear-to-b from-white via-neutral-200 to-neutral-500 animate-[bounce_3s_ease-in-out_infinite]">
            404
          </h1>
        </div>

        {/* Text Details */}
        <div className="space-y-2">
          <h2 className="text-xl font-bold tracking-tight text-white md:text-2xl">
            Startup Lost in Space
          </h2>
          <p className="text-sm text-neutral-400 max-w-xs mx-auto leading-relaxed">
            The page you're trying to reach has either floated away, been acquired, or never existed in this dimension.
          </p>
        </div>

        {/* Dynamic Navigation Action Grid */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
          <button 
            onClick={() => window.history.back()}
            className="px-5 py-2.5 rounded-lg border border-neutral-800 hover:border-neutral-700 bg-neutral-950 text-xs font-medium text-neutral-300 transition-all hover:text-white active:scale-98"
          >
            ← Go Back
          </button>
          
          <Link 
            href="/"
            className="px-5 py-2.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-xs font-medium text-white shadow-lg shadow-purple-600/20 transition-all hover:shadow-purple-600/30 active:scale-98"
          >
            Return to Directory
          </Link>
        </div>
      </div>

      {/* Subtle bottom grid/dot pattern line overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,black)] bg-cover pointer-events-none opacity-70" />
    </div>
  );
}