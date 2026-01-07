"use client"

export function EacEcosystemDiagram() {
  return (
    <div className="relative w-full overflow-hidden py-8 sm:py-12 lg:py-16">
      {/* Background glow effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0A0A0A] to-black" />
      <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-[#00FFFF]/5 blur-3xl" />
      <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-[#FF00FF]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <p className="mt-3 text-sm sm:text-base text-gray-400">A unified model for the entire software system</p>
        </div>

        {/* Main diagram container */}
        <div className="relative mx-auto max-w-full aspect-[2/1] min-h-[300px] sm:min-h-[400px] lg:min-h-[500px] overflow-hidden">
          {/* Center circle - EaC Core */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="relative flex h-32 sm:h-40 lg:h-48 w-32 sm:w-40 lg:w-48 items-center justify-center">
              <div className="absolute inset-0 animate-pulse rounded-full bg-gradient-to-br from-[#00FFFF] to-[#FF00FF] opacity-20 blur-xl" />
              <div className="relative z-10 flex h-28 sm:h-36 lg:h-40 w-28 sm:w-36 lg:w-40 items-center justify-center rounded-full border-2 border-[#00FFFF] bg-black/90 backdrop-blur-sm">
                <div className="text-center">
                  <div className="text-xs sm:text-sm font-bold text-[#00FFFF]">Everything</div>
                  <div className="text-[10px] sm:text-xs lg:text-xs text-gray-400">as</div>
                  <div className="text-xs sm:text-sm font-bold text-[#FF00FF]">Code</div>
                </div>
              </div>
            </div>
          </div>

          {/* Orbital rings */}
          <svg
            className="absolute inset-0 h-full w-full z-10"
            viewBox="0 0 800 400"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Inner ring */}
            <ellipse
              cx="400"
              cy="200"
              rx="200"
              ry="120"
              fill="none"
              stroke="url(#gradient1)"
              strokeWidth="1"
              strokeDasharray="4 4"
              opacity="0.3"
            />
            {/* Middle ring */}
            <ellipse
              cx="400"
              cy="200"
              rx="280"
              ry="170"
              fill="none"
              stroke="url(#gradient2)"
              strokeWidth="1"
              strokeDasharray="4 4"
              opacity="0.3"
            />
            {/* Outer ring */}
            <ellipse
              cx="400"
              cy="200"
              rx="360"
              ry="200"
              fill="none"
              stroke="url(#gradient3)"
              strokeWidth="1"
              strokeDasharray="4 4"
              opacity="0.3"
            />

            {/* Gradients */}
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00FFFF" />
                <stop offset="50%" stopColor="#FF00FF" />
                <stop offset="100%" stopColor="#00FFFF" />
              </linearGradient>
              <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FF00FF" />
                <stop offset="50%" stopColor="#FFFF00" />
                <stop offset="100%" stopColor="#FF00FF" />
              </linearGradient>
              <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00FFFF" />
                <stop offset="50%" stopColor="#00FFFF" />
                <stop offset="100%" stopColor="#FF00FF" />
              </linearGradient>
            </defs>
          </svg>

          {/* Ecosystem nodes positioned around the center */}
          <div className="absolute left-[5%] top-[20%] w-24 sm:w-28 lg:w-32 z-30">
            <div className="rounded-lg border border-[#00FFFF]/40 bg-black/80 px-2 sm:px-3 lg:px-4 py-1 sm:py-2 text-center backdrop-blur-sm">
              <div className="text-[10px] sm:text-xs lg:text-xs font-semibold text-[#00FFFF]">Applications</div>
            </div>
          </div>

          <div className="absolute right-[5%] top-[20%] w-24 sm:w-28 lg:w-32 z-30">
            <div className="rounded-lg border border-[#FF00FF]/40 bg-black/80 px-2 sm:px-3 lg:px-4 py-1 sm:py-2 text-center backdrop-blur-sm">
              <div className="text-[10px] sm:text-xs lg:text-xs font-semibold text-[#FF00FF]">Data & APIs</div>
            </div>
          </div>

          <div className="absolute left-[5%] bottom-[20%] w-24 sm:w-28 lg:w-32 z-30">
            <div className="rounded-lg border border-[#FFFF00]/40 bg-black/80 px-2 sm:px-3 lg:px-4 py-1 sm:py-2 text-center backdrop-blur-sm">
              <div className="text-[10px] sm:text-xs lg:text-xs font-semibold text-[#FFFF00]">Infrastructure</div>
            </div>
          </div>

          <div className="absolute right-[5%] bottom-[20%] w-24 sm:w-28 lg:w-32 z-30">
            <div className="rounded-lg border border-[#00FFFF]/40 bg-black/80 px-2 sm:px-3 lg:px-4 py-1 sm:py-2 text-center backdrop-blur-sm">
              <div className="text-[10px] sm:text-xs lg:text-xs font-semibold text-[#00FFFF]">Identity & Auth</div>
            </div>
          </div>

          <div className="absolute left-1/2 top-[5%] w-24 sm:w-28 lg:w-32 -translate-x-1/2 z-30">
            <div className="rounded-lg border border-[#FF00FF]/40 bg-black/80 px-2 sm:px-3 lg:px-4 py-1 sm:py-2 text-center backdrop-blur-sm">
              <div className="text-[10px] sm:text-xs lg:text-xs font-semibold text-[#FF00FF]">AI Agents</div>
            </div>
          </div>

          <div className="absolute bottom-[5%] left-1/2 w-24 sm:w-28 lg:w-32 -translate-x-1/2 z-30">
            <div className="rounded-lg border border-[#FFFF00]/40 bg-black/80 px-2 sm:px-3 lg:px-4 py-1 sm:py-2 text-center backdrop-blur-sm">
              <div className="text-[10px] sm:text-xs lg:text-xs font-semibold text-[#FFFF00]">Environments</div>
            </div>
          </div>

          <div className="absolute left-[15%] top-[10%] w-20 sm:w-24 lg:w-28 z-30">
            <div className="rounded-lg border border-[#00FFFF]/30 bg-black/70 px-2 sm:px-3 py-1 text-center backdrop-blur-sm">
              <div className="text-[8px] sm:text-[10px] font-medium text-gray-400">Runtimes</div>
            </div>
          </div>

          <div className="absolute right-[15%] top-[10%] w-20 sm:w-24 lg:w-28 z-30">
            <div className="rounded-lg border border-[#FF00FF]/30 bg-black/70 px-2 sm:px-3 py-1 text-center backdrop-blur-sm">
              <div className="text-[8px] sm:text-[10px] font-medium text-gray-400">Workflows</div>
            </div>
          </div>
        </div>

        {/* Bottom text */}
        <div className="mt-8 sm:mt-12 lg:mt-16 text-center">
          <p className="text-xs sm:text-sm text-gray-500">All components unified under a single declarative model</p>
        </div>
      </div>
    </div>
  )
}
