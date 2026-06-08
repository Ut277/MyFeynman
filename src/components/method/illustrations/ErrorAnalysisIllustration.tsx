interface ErrorAnalysisIllustrationProps {
  className?: string;
}

const types = [
  { label: "Conceptual gap", color: "#e85c1a", desc: "Wrong idea" },
  { label: "Procedural error", color: "#ef804d", desc: "Wrong steps" },
  { label: "Careless slip", color: "#fbd0b8", desc: "Knows it" },
];

export function ErrorAnalysisIllustration({
  className = "",
}: ErrorAnalysisIllustrationProps) {
  return (
    <svg
      viewBox="0 0 280 220"
      role="img"
      aria-label="Error analysis categories"
      className={`mx-auto w-full max-w-[280px] ${className}`}
    >
      <title>Error analysis</title>
      {types.map((type, i) => {
        const y = 30 + i * 62;
        return (
          <g key={type.label}>
            <rect x={24} y={y} width={232} height={50} rx={10} fill={type.color} />
            <text
              x={44}
              y={y + 22}
              fill={i === 2 ? "#1a1f3c" : "#fff"}
              fontSize="11"
              fontWeight="700"
              fontFamily="system-ui, sans-serif"
            >
              {type.label}
            </text>
            <text
              x={44}
              y={y + 38}
              fill={i === 2 ? "#6b7280" : "#fff"}
              fontSize="9"
              opacity={0.9}
              fontFamily="system-ui, sans-serif"
            >
              {type.desc}
            </text>
            <text
              x={230}
              y={y + 30}
              textAnchor="end"
              fill={i === 2 ? "#1a1f3c" : "#fff"}
              fontSize="18"
              fontWeight="700"
            >
              →
            </text>
          </g>
        );
      })}
      <text x={140} y={210} textAnchor="middle" fill="#6b7280" fontSize="10">
        Each error → different fix
      </text>
    </svg>
  );
}
