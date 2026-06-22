"use client";

export default function Loading() {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-black relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-100 h-100 bg-purple-600/20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/3 right-1/3 w-75 h-75 bg-violet-500/20 blur-[100px] rounded-full animate-pulse" />
      </div>

      {/* Loader Container */}
      <div className="relative flex flex-col items-center gap-6">
        
        {/* Spinner */}
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full border-2 border-slate-800"></div>
          <div className="absolute inset-0 rounded-full border-t-2 border-purple-500 animate-spin"></div>
        </div>

        {/* Text */}
        <div className="text-center">
          <h1 className="text-white text-lg font-semibold tracking-wider">
            Loading
          </h1>
          <p className="text-slate-500 text-xs mt-1">
            Please wait while we prepare everything...
          </p>
        </div>

        {/* Dots Animation */}
        <div className="flex gap-1 mt-2">
          <span className="w-2 h-2 bg-purple-500 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
          <span className="w-2 h-2 bg-purple-500 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
          <span className="w-2 h-2 bg-purple-500 rounded-full animate-bounce"></span>
        </div>

      </div>
    </div>
  );
}