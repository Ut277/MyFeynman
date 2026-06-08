interface VarkIllustrationProps {
  className?: string;
}

const segments = [
  { label: "Visual", angle: 0, color: "#fbd0b8" },
  { label: "Auditory", angle: 90, color: "#f7a882" },
  { label: "Read/Write", angle: 180, color: "#ef804d" },
  { label: "Kinesthetic", angle: 270, color: "#e85c1a" },
];

function polarToCartesian(cx: number, cy: number, r: number, angleDeg: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

function describeArc(
  cx: number,
  cy: number,
  r: number,
  startAngle: number,
  endAngle: number,
) {
  const start = polarToCartesian(cx, cy, r, endAngle);
  const end = polarToCartesian(cx, cy, r, startAngle);
  const largeArc = endAngle - startAngle <= 180 ? 0 : 1;
  return `M ${cx} ${cy} L ${start.x} ${start.y} A ${r} ${r} 0 ${largeArc} 0 ${end.x} ${end.y} Z`;
}

export function VarkIllustration({ className = "" }: VarkIllustrationProps) {
  const cx = 140;
  const cy = 130;
  const r = 100;

  return (
    <svg
      viewBox="0 0 280 260"
      role="img"
      aria-label="VARK learning modalities wheel"
      className={`mx-auto w-full max-w-[260px] ${className}`}
    >
      <title>VARK learning modalities</title>
      {segments.map((seg, i) => {
        const start = i * 90;
        const end = start + 90;
        const mid = start + 45;
        const labelPos = polarToCartesian(cx, cy, r * 0.62, mid);
        return (
          <g key={seg.label}>
            <path
              d={describeArc(cx, cy, r, start, end)}
              fill={seg.color}
              stroke="#fff"
              strokeWidth={2}
            />
            <text
              x={labelPos.x}
              y={labelPos.y}
              textAnchor="middle"
              dominantBaseline="middle"
              fill="#1a1f3c"
              fontSize="10"
              fontWeight="600"
              fontFamily="system-ui, sans-serif"
            >
              {seg.label}
            </text>
          </g>
        );
      })}
      <circle cx={cx} cy={cy} r={28} fill="#fff4ee" />
      <text
        x={cx}
        y={cy + 4}
        textAnchor="middle"
        fill="#e85c1a"
        fontSize="11"
        fontWeight="700"
        fontFamily="system-ui, sans-serif"
      >
        VARK
      </text>
    </svg>
  );
}
