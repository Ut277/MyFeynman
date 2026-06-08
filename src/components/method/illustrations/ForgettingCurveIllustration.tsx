interface ForgettingCurveIllustrationProps {
  className?: string;
}

export function ForgettingCurveIllustration({
  className = "",
}: ForgettingCurveIllustrationProps) {
  return (
    <svg
      viewBox="0 0 300 220"
      role="img"
      aria-label="Ebbinghaus forgetting curve with spaced repetition"
      className={`mx-auto w-full max-w-[300px] ${className}`}
    >
      <title>Forgetting curve and spaced repetition</title>
      <line x1={40} y1={180} x2={280} y2={180} stroke="#d1d5db" strokeWidth={1} />
      <line x1={40} y1={30} x2={40} y2={180} stroke="#d1d5db" strokeWidth={1} />
      <text x={20} y={110} fill="#6b7280" fontSize="10" transform="rotate(-90 20 110)">
        Retention
      </text>
      <text x={160} y={200} textAnchor="middle" fill="#6b7280" fontSize="10">
        Time
      </text>

      <path
        d="M 40 40 C 80 160, 120 170, 160 175 C 200 178, 230 178, 260 179"
        fill="none"
        stroke="#d1d5db"
        strokeWidth={2}
        strokeDasharray="6 4"
      />
      <text x={200} y={165} fill="#9ca3af" fontSize="9">
        Without review
      </text>

      <path
        d="M 40 40 C 70 100, 90 55, 120 50 C 150 48, 170 90, 200 55 C 225 40, 250 70, 270 45"
        fill="none"
        stroke="#e85c1a"
        strokeWidth={3}
      />

      {[
        { x: 90, y: 55 },
        { x: 170, y: 90 },
        { x: 250, y: 70 },
      ].map((dot, i) => (
        <g key={i}>
          <circle cx={dot.x} cy={dot.y} r={7} fill="#e85c1a" />
          <circle cx={dot.x} cy={dot.y} r={3} fill="#fff" />
        </g>
      ))}

      <text x={160} y={24} textAnchor="middle" fill="#e85c1a" fontSize="10" fontWeight="600">
        Spaced practice on WhatsApp
      </text>
    </svg>
  );
}
