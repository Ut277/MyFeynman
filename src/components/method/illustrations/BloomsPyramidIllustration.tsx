interface BloomsPyramidIllustrationProps {
  labels?: string[];
  className?: string;
}

const defaultLabels = [
  "Create",
  "Evaluate",
  "Analyse",
  "Apply",
  "Understand",
  "Remember",
];

const tiers = [
  { fill: "#e85c1a", y: 0, x: 118, w: 84 },
  { fill: "#eb6d33", y: 52, x: 102, w: 116 },
  { fill: "#ef804d", y: 104, x: 86, w: 148 },
  { fill: "#f39468", y: 156, x: 70, w: 180 },
  { fill: "#f7a882", y: 208, x: 54, w: 212 },
  { fill: "#fbd0b8", y: 260, x: 38, w: 244 },
];

export function BloomsPyramidIllustration({
  labels = defaultLabels,
  className = "",
}: BloomsPyramidIllustrationProps) {
  return (
    <svg
      viewBox="0 0 320 340"
      role="img"
      aria-label="Bloom's Taxonomy pyramid from Remember to Create"
      className={`mx-auto w-full max-w-[280px] ${className}`}
    >
      <title>Bloom&apos;s Taxonomy pyramid</title>
      {tiers.map((tier, i) => (
        <g key={labels[i]}>
          <rect
            x={tier.x}
            y={tier.y}
            width={tier.w}
            height={48}
            rx={6}
            fill={tier.fill}
          />
          <text
            x={tier.x + tier.w / 2}
            y={tier.y + 30}
            textAnchor="middle"
            fill={i < 3 ? "#1a1f3c" : "#ffffff"}
            fontSize="13"
            fontWeight="600"
            fontFamily="system-ui, sans-serif"
          >
            {labels[i]}
          </text>
        </g>
      ))}
      <text
        x={160}
        y={328}
        textAnchor="middle"
        fill="#6b7280"
        fontSize="11"
        fontFamily="system-ui, sans-serif"
      >
        Higher-order thinking ↑
      </text>
    </svg>
  );
}
