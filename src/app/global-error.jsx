"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="h-screen w-full flex items-center justify-center bg-black relative overflow-hidden">
      
      {/* Purple Glow Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-115 h-113 bg-purple-600/20 blur-[130px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/3 right-1/3 w-88 h-88 bg-violet-500/20 blur-[120px] rounded-full animate-pulse" />
      </div>

      {/* Content */}
      <div className="relative text-center flex flex-col items-center gap-5">
        
        {/* Error Icon */}
        <div className="w-20 h-20 rounded-full border border-red-500/30 bg-red-500/10 flex items-center justify-center animate-pulse">
          <span className="text-red-400 text-2xl font-bold">!</span>
        </div>

        {/* Title */}
        <h1 className="text-white text-2xl font-bold">
          Something went wrong
        </h1>

        {/* Subtitle */}
        <p className="text-slate-400 text-sm max-w-sm">
          An unexpected error occurred. Please try again.
        </p>

        {/* Error message (dev only) */}
        <div className="text-xs text-slate-600 max-w-md break-all">
          {error?.message}
        </div>

        {/* Button */}
        <button
          onClick={() => reset()}
          className="mt-2 px-5 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-sm font-medium transition-all active:scale-95"
        >
          Try Again
        </button>

      </div>
    </div>
  );
}