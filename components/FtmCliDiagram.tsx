"use client"

export default function FtmCliDiagram() {
  return (
    <div className="w-full overflow-x-auto py-8">
      <svg viewBox="0 0 900 700" className="mx-auto w-full max-w-6xl" style={{ minHeight: "600px" }}>
        {/* Background */}
        <defs>
          <linearGradient id="stageBg" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFF00" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#FF00FF" stopOpacity="0.05" />
          </linearGradient>
          <marker
            id="arrowCyan"
            markerWidth="10"
            markerHeight="10"
            refX="9"
            refY="3"
            orient="auto"
            markerUnits="strokeWidth"
          >
            <path d="M0,0 L0,6 L9,3 z" fill="#00FFFF" />
          </marker>
          <marker
            id="arrowMagenta"
            markerWidth="10"
            markerHeight="10"
            refX="9"
            refY="3"
            orient="auto"
            markerUnits="strokeWidth"
          >
            <path d="M0,0 L0,6 L9,3 z" fill="#FF00FF" />
          </marker>
        </defs>

        {/* CHANGE REQUEST section */}
        <rect x="50" y="20" width="800" height="60" fill="none" stroke="#00FFFF" strokeWidth="2" rx="4" />
        <text x="70" y="55" fill="#FFFFFF" fontSize="16" fontWeight="bold">
          CHANGE REQUEST (Human or AI)
        </text>

        {/* Arrow down */}
        <line x1="450" y1="80" x2="450" y2="120" stroke="#00FFFF" strokeWidth="2" markerEnd="url(#arrowCyan)" />

        {/* CLI STAGE GATES Container */}
        <rect x="40" y="120" width="820" height="380" fill="url(#stageBg)" stroke="#FFFF00" strokeWidth="2" rx="4" />
        <text x="70" y="150" fill="#FFFF00" fontSize="18" fontWeight="bold">
          CLI STAGE GATES
        </text>

        {/* Baseline */}
        <g>
          <rect x="80" y="180" width="140" height="120" fill="none" stroke="#00FFFF" strokeWidth="2" rx="4" />
          <text x="100" y="210" fill="#00FFFF" fontSize="14" fontWeight="bold">
            Baseline
          </text>
          <text x="100" y="235" fill="#CCCCCC" fontSize="12">
            Verify
          </text>
          <text x="100" y="255" fill="#CCCCCC" fontSize="12">
            state
          </text>
        </g>

        {/* Arrow to Analysis */}
        <path d="M 220 240 L 260 240" stroke="#00FFFF" strokeWidth="2" fill="none" markerEnd="url(#arrowCyan)" />

        {/* Analysis */}
        <g>
          <rect x="260" y="180" width="140" height="120" fill="none" stroke="#00FFFF" strokeWidth="2" rx="4" />
          <text x="280" y="210" fill="#00FFFF" fontSize="14" fontWeight="bold">
            Analysis
          </text>
          <text x="280" y="235" fill="#CCCCCC" fontSize="12">
            Research
          </text>
          <text x="280" y="255" fill="#CCCCCC" fontSize="12">
            only
          </text>
        </g>

        {/* Arrow to Design */}
        <path d="M 400 240 L 440 240" stroke="#00FFFF" strokeWidth="2" fill="none" markerEnd="url(#arrowCyan)" />

        {/* Design */}
        <g>
          <rect x="440" y="180" width="140" height="120" fill="none" stroke="#FF00FF" strokeWidth="2" rx="4" />
          <text x="460" y="210" fill="#FF00FF" fontSize="14" fontWeight="bold">
            Design
          </text>
          <text x="460" y="235" fill="#CCCCCC" fontSize="12">
            Plan
          </text>
          <text x="460" y="255" fill="#CCCCCC" fontSize="12">
            approval
          </text>
        </g>

        {/* Arrow to Implement */}
        <path d="M 580 240 L 620 240" stroke="#FF00FF" strokeWidth="2" fill="none" markerEnd="url(#arrowMagenta)" />

        {/* Implement */}
        <g>
          <rect x="620" y="180" width="140" height="120" fill="none" stroke="#FF00FF" strokeWidth="2" rx="4" />
          <text x="635" y="210" fill="#FF00FF" fontSize="14" fontWeight="bold">
            Implement
          </text>
          <text x="635" y="235" fill="#CCCCCC" fontSize="12">
            Execute
          </text>
          <text x="635" y="255" fill="#CCCCCC" fontSize="12">
            changes
          </text>
        </g>

        {/* Arrows down from stages */}
        <line x1="150" y1="300" x2="150" y2="330" stroke="#00FFFF" strokeWidth="1.5" />
        <line x1="330" y1="300" x2="330" y2="330" stroke="#00FFFF" strokeWidth="1.5" />
        <line x1="510" y1="300" x2="510" y2="330" stroke="#FF00FF" strokeWidth="1.5" />
        <line x1="690" y1="300" x2="690" y2="330" stroke="#FF00FF" strokeWidth="1.5" />

        {/* Connecting line for approvals */}
        <line x1="80" y1="340" x2="760" y2="340" stroke="#FFFFFF" strokeWidth="1.5" />

        {/* Human Approval Box */}
        <rect x="100" y="355" width="700" height="110" fill="none" stroke="#FFFFFF" strokeWidth="2" rx="4" />
        <text x="130" y="385" fill="#FFFFFF" fontSize="16" fontWeight="bold">
          HUMAN APPROVAL REQUIRED
        </text>
        <text x="130" y="410" fill="#CCCCCC" fontSize="13">
          AI cannot skip stages. Humans decide when to proceed.
        </text>

        {/* Arrow down to governance */}
        <line x1="450" y1="500" x2="450" y2="540" stroke="#00FFFF" strokeWidth="2" markerEnd="url(#arrowCyan)" />

        {/* EaC GOVERNANCE LAYER */}
        <rect x="40" y="540" width="820" height="140" fill="url(#stageBg)" stroke="#FF00FF" strokeWidth="2" rx="4" />
        <text x="70" y="570" fill="#FF00FF" fontSize="18" fontWeight="bold">
          EaC GOVERNANCE LAYER
        </text>

        {/* RBAC */}
        <g>
          <rect x="80" y="590" width="160" height="70" fill="none" stroke="#00FFFF" strokeWidth="1.5" rx="3" />
          <text x="100" y="615" fill="#00FFFF" fontSize="13" fontWeight="bold">
            RBAC
          </text>
          <text x="100" y="635" fill="#CCCCCC" fontSize="11">
            Who can access what
          </text>
        </g>

        {/* Quotas */}
        <g>
          <rect x="280" y="590" width="160" height="70" fill="none" stroke="#00FFFF" strokeWidth="1.5" rx="3" />
          <text x="300" y="615" fill="#00FFFF" fontSize="13" fontWeight="bold">
            Quotas
          </text>
          <text x="300" y="635" fill="#CCCCCC" fontSize="11">
            How much resource
          </text>
        </g>

        {/* Rate Limits */}
        <g>
          <rect x="480" y="590" width="160" height="70" fill="none" stroke="#00FFFF" strokeWidth="1.5" rx="3" />
          <text x="495" y="615" fill="#00FFFF" fontSize="13" fontWeight="bold">
            Rate Limits
          </text>
          <text x="495" y="635" fill="#CCCCCC" fontSize="11">
            How fast per tenant
          </text>
        </g>

        {/* Audit Logging */}
        <g>
          <rect x="680" y="590" width="160" height="70" fill="none" stroke="#FF00FF" strokeWidth="1.5" rx="3" />
          <text x="700" y="615" fill="#FF00FF" fontSize="13" fontWeight="bold">
            Audit Log
          </text>
          <text x="700" y="635" fill="#CCCCCC" fontSize="11">
            Who • What • When • Why
          </text>
        </g>
      </svg>
    </div>
  )
}
