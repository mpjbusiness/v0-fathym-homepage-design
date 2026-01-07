"use client"

export default function SynapticGovernanceDiagram() {
  return (
    <div className="w-full bg-gradient-to-b from-black to-[#0F172A]/50 py-12 lg:py-16 overflow-x-auto">
      <svg viewBox="0 0 800 900" className="mx-auto w-full max-w-4xl" preserveAspectRatio="xMidYMid meet">
        {/* Define gradients */}
        <defs>
          <linearGradient id="cyanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: "#00FFFF", stopOpacity: 0.3 }} />
            <stop offset="100%" style={{ stopColor: "#00FFFF", stopOpacity: 0.1 }} />
          </linearGradient>
          <linearGradient id="magentaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: "#FF00FF", stopOpacity: 0.3 }} />
            <stop offset="100%" style={{ stopColor: "#FF00FF", stopOpacity: 0.1 }} />
          </linearGradient>
        </defs>

        {/* Outer container */}
        <rect
          x="20"
          y="20"
          width="760"
          height="860"
          rx="8"
          fill="none"
          stroke="#00FFFF"
          strokeWidth="2"
          opacity="0.5"
        />

        {/* Change Request */}
        <text x="400" y="50" fontSize="18" fontWeight="bold" textAnchor="middle" fill="#00FFFF">
          CHANGE REQUEST (Human or AI)
        </text>
        <line x1="400" y1="60" x2="400" y2="90" stroke="#00FFFF" strokeWidth="2" />
        <polygon points="400,95 395,85 405,85" fill="#00FFFF" />

        {/* CLI Stage Gates Section */}
        <rect x="40" y="100" width="720" height="140" rx="6" fill="url(#cyanGrad)" stroke="#00FFFF" strokeWidth="1.5" />
        <text x="400" y="125" fontSize="16" fontWeight="bold" textAnchor="middle" fill="#00FFFF">
          CLI STAGE GATES
        </text>

        <rect
          x="60"
          y="135"
          width="680"
          height="95"
          rx="4"
          fill="none"
          stroke="#00FFFF"
          strokeWidth="1"
          strokeDasharray="5,5"
          opacity="0.5"
        />
        <text x="400" y="160" fontSize="13" fontWeight="600" textAnchor="middle" fill="#FFFFFF">
          HUMAN APPROVAL REQUIRED
        </text>
        <text x="400" y="182" fontSize="12" textAnchor="middle" fill="#CCCCCC">
          AI cannot skip stages. Humans decide when to proceed.
        </text>

        {/* Arrow down */}
        <line x1="400" y1="240" x2="400" y2="270" stroke="#00FFFF" strokeWidth="2" />
        <polygon points="400,275 395,265 405,265" fill="#00FFFF" />

        {/* EaC Governance Layer Section */}
        <rect
          x="40"
          y="280"
          width="720"
          height="180"
          rx="6"
          fill="url(#magentaGrad)"
          stroke="#FF00FF"
          strokeWidth="1.5"
        />
        <text x="400" y="305" fontSize="16" fontWeight="bold" textAnchor="middle" fill="#FF00FF">
          EaC GOVERNANCE LAYER
        </text>

        {/* Governance boxes */}
        <rect x="60" y="330" width="160" height="60" rx="4" fill="none" stroke="#FF00FF" strokeWidth="1.5" />
        <text x="140" y="360" fontSize="12" fontWeight="600" textAnchor="middle" fill="#FFFFFF">
          RBAC
        </text>

        <rect x="320" y="330" width="160" height="60" rx="4" fill="none" stroke="#FF00FF" strokeWidth="1.5" />
        <text x="400" y="360" fontSize="12" fontWeight="600" textAnchor="middle" fill="#FFFFFF">
          Quotas
        </text>

        <rect x="580" y="330" width="160" height="60" rx="4" fill="none" stroke="#FF00FF" strokeWidth="1.5" />
        <text x="660" y="360" fontSize="12" fontWeight="600" textAnchor="middle" fill="#FFFFFF">
          Rate Limits
        </text>

        {/* Audit box */}
        <rect x="100" y="410" width="600" height="45" rx="4" fill="none" stroke="#FF00FF" strokeWidth="1.5" />
        <text x="400" y="438" fontSize="12" textAnchor="middle" fill="#CCCCCC">
          Every change recorded: Who • What • When • Why • AI/Human
        </text>

        {/* Arrow down */}
        <line x1="400" y1="460" x2="400" y2="490" stroke="#FF00FF" strokeWidth="2" />
        <polygon points="400,495 395,485 405,485" fill="#FF00FF" />

        {/* Synaptic AI Governance Section */}
        <rect
          x="40"
          y="500"
          width="720"
          height="310"
          rx="6"
          fill="url(#magentaGrad)"
          stroke="#FF00FF"
          strokeWidth="1.5"
        />
        <text x="400" y="525" fontSize="16" fontWeight="bold" textAnchor="middle" fill="#FF00FF">
          SYNAPTIC AI GOVERNANCE
        </text>

        {/* Circuits as EaC Artifacts */}
        <rect
          x="70"
          y="545"
          width="660"
          height="115"
          rx="4"
          fill="none"
          stroke="#00FFFF"
          strokeWidth="1"
          opacity="0.7"
        />
        <text x="400" y="568" fontSize="12" fontWeight="600" textAnchor="middle" fill="#00FFFF">
          Circuits as EaC Artifacts
        </text>
        <text x="90" y="590" fontSize="11" fill="#CCCCCC">
          • Versioned in git like any other config
        </text>
        <text x="90" y="607" fontSize="11" fill="#CCCCCC">
          • Portable between environments
        </text>
        <text x="90" y="624" fontSize="11" fill="#CCCCCC">
          • Governance inherited from parent EaC
        </text>
        <text x="90" y="641" fontSize="11" fill="#CCCCCC">
          • Multi-tenant isolation enforced
        </text>

        {/* MCP Bridge Governance */}
        <rect
          x="70"
          y="675"
          width="660"
          height="115"
          rx="4"
          fill="none"
          stroke="#00FFFF"
          strokeWidth="1"
          opacity="0.7"
        />
        <text x="400" y="698" fontSize="12" fontWeight="600" textAnchor="middle" fill="#00FFFF">
          MCP Bridge Governance
        </text>
        <text x="90" y="720" fontSize="11" fill="#CCCCCC">
          • AI tools access data through governed MCP servers
        </text>
        <text x="90" y="737" fontSize="11" fill="#CCCCCC">
          • Permissions scoped per tool/resource
        </text>
        <text x="90" y="754" fontSize="11" fill="#CCCCCC">
          • Audit trail of all AI data access
        </text>

        {/* Arrow down */}
        <line x1="400" y1="810" x2="400" y2="840" stroke="#FF00FF" strokeWidth="2" />
        <polygon points="400,845 395,835 405,835" fill="#FF00FF" />

        {/* Final output */}
        <text x="400" y="865" fontSize="14" fontWeight="bold" textAnchor="middle" fill="#FFFF00">
          GOVERNED DEPLOYMENT
        </text>
      </svg>
    </div>
  )
}
