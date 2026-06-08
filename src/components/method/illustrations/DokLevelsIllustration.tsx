interface DokLevelsIllustrationProps {
  className?: string;
}

const levels = [
  { label: "DoK 4", sub: "Extended", h: 56, fill: "#e85c1a" },
  { label: "DoK 3", sub: "Strategic", h: 72, fill: "#ef804d" },
  { label: "DoK 2", sub: "Skill", h: 88, fill: "#f7a882" },
  { label: "DoK 1", sub: "Recall", h: 104, fill: "#fbd0b8" },
];

export function DokLevelsIllustration({
  className = "",
}: DokLevelsIllustrationProps) {
  let y = 20;
  return (
    <svg
      viewBox="0 0 280 360"
      role="img"
      aria-label="Webb's Depth of Knowledge levels"
      className={`mx-auto w-full max-w-[260px] ${className}`}
    >
      <title>Webb&apos;s Depth of Knowledge</title>
      {levels.map((level) => {
        const barY = y;
        y += level.h + 8;
        return (
          <g key={level.label}>
            <rect
              x={40}
              y={barY}
              width={200}
              height={level.h}
              rx={8}
              fill={level.fill}
            />
            <text
              x={140}
              y={barY + level.h / 2 - 4}
              textAnchor="middle"
              fill="#1a1f3c"
              fontSize="13"
              fontWeight="700"
              fontFamily="system-ui, sans-serif"
            >
              {level.label}
            </text>
            <text
              x={140}
              y={barY + level.h / 2 + 14}
              textAnchor="middle"
              fill="#1a1f3c"
              fontSize="10"
              fontFamily="system-ui, sans-serif"
              opacity={0.85}
            >
              {level.sub}
            </text>
          </g>
        );
      })}
      <text
        x={140}
        y={352}
        textAnchor="middle"
        fill="#6b7280"
        fontSize="11"
        fontFamily="system-ui, sans-serif"
      >
        Deeper thinking ↑
      </text>
    </svg>
  );
}
