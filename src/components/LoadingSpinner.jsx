import React from 'react'

export default function LoadingSpinner({ message = "Analyzing your resume..." }) {
  return (
    <div className="flex flex-col items-center justify-center py-12 relative">
      {/* Custom Keyframe Styles */}
      <style>{`
        @keyframes scan {
          0%, 100% { top: 0%; opacity: 0.8; }
          50% { top: 100%; opacity: 0.8; }
        }
        @keyframes pulseGlow {
          0%, 100% { transform: scale(0.98); opacity: 0.4; }
          50% { transform: scale(1.02); opacity: 0.8; }
        }
        .scanner-line {
          animation: scan 2.5s ease-in-out infinite;
        }
        .glow-circle {
          animation: pulseGlow 2s ease-in-out infinite;
        }
      `}</style>

      {/* Futuristic Scan Area */}
      <div className="relative w-28 h-32 flex items-center justify-center mb-8">
        
        {/* Pulsing Background Radar Grid */}
        <div className="absolute inset-0 border border-indigo-500/10 rounded-2xl glow-circle bg-indigo-500/5 backdrop-blur-sm"></div>
        <div className="absolute inset-2 border border-purple-500/10 rounded-xl glow-circle bg-purple-500/5 [animation-delay:0.5s]"></div>

        {/* Animated Resume Card Outline */}
        <div className="relative w-16 h-20 border border-slate-700 bg-slate-950/80 rounded-lg p-2 flex flex-col justify-between overflow-hidden shadow-2xl">
          
          {/* Laser scanning line */}
          <div className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-indigo-400 to-transparent shadow-[0_0_8px_#818cf8] scanner-line"></div>

          {/* Mini lines inside mock resume */}
          <div className="space-y-1.5 mt-1">
            <div className="w-10 h-1.5 bg-indigo-400/40 rounded"></div>
            <div className="w-12 h-1 bg-slate-800 rounded"></div>
            <div className="w-8 h-1 bg-slate-800 rounded"></div>
            <div className="w-10 h-1 bg-slate-800 rounded"></div>
          </div>
          
          <div className="space-y-1 mb-1">
            <div className="w-6 h-1 bg-purple-400/30 rounded"></div>
            <div className="w-10 h-1 bg-slate-800 rounded"></div>
            <div className="w-8 h-1 bg-slate-800 rounded"></div>
          </div>
        </div>

        {/* Outer Rotating Gear (decorative) */}
        <div className="absolute -inset-4 border border-dashed border-indigo-500/20 rounded-full animate-spin [animation-duration:12s] pointer-events-none"></div>
        <div className="absolute -inset-6 border border-dashed border-purple-500/10 rounded-full animate-spin [animation-duration:20s] [animation-direction:reverse] pointer-events-none"></div>
      </div>

      {/* Message and loading subtext */}
      <h3 className="text-xl font-bold bg-gradient-to-r from-indigo-200 to-purple-300 bg-clip-text text-transparent tracking-wide text-center">
        AI Processing Engine
      </h3>
      <p className="mt-2 text-sm text-gray-400 tracking-wider font-mono animate-pulse text-center">
        {message.toUpperCase()}
      </p>
    </div>
  )
}