"use client";

import { Lock, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function UnauthorizedPage() {
  const router = useRouter();

  return (
    <div className="h-screen w-full flex items-center justify-center bg-black relative overflow-hidden">
      
      {/* Purple Glow Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-113 h-113 bg-purple-600/20 blur-[130px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/3 right-1/3 w-88 h-88 bg-violet-500/20 blur-[120px] rounded-full animate-pulse" />
      </div>

      {/* Content */}
      <div className="relative text-center flex flex-col items-center gap-5">

        {/* Icon */}
        <div className="w-20 h-20 rounded-full border border-purple-500/30 bg-purple-500/10 flex items-center justify-center animate-pulse">
          <Lock className="text-purple-400 w-8 h-8" />
        </div>

        {/* Title */}
        <h1 className="text-white text-3xl font-bold">
          Access Denied
        </h1>

        {/* Subtitle */}
        <p className="text-slate-400 text-sm max-w-sm">
          You don’t have permission to access this page.
        </p>

        {/* Button */}
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 px-5 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-sm font-medium transition-all active:scale-95"
        >
          <ArrowLeft className="w-4 h-4" />
          Go Back
        </button>

      </div>
    </div>
  );
}