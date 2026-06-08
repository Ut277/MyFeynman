interface MetacognitionIllustrationProps {
  className?: string;
}

export function MetacognitionIllustration({
  className = "",
}: MetacognitionIllustrationProps) {
  return (
    <svg
      viewBox="0 0 300 300"
      role="img"
      aria-label="Metacognition: Zone of Proximal Development, scaffolding, and growth mindset"
      className={`mx-auto w-full max-w-[280px] ${className}`}
    >
      <title>Metacognition and self-regulation</title>

      {/* ZPD zones */}
      <rect x={24} y={24} width={180} height={52} rx={10} fill="#1a1f3c" opacity={0.1} />
      <text x={114} y={46} textAnchor="middle" fill="#1a1f3c" fontSize="10" fontWeight="600">
        Too hard (yet)
      </text>
      <text x={114} y={62} textAnchor="middle" fill="#6b7280" fontSize="8">
        Frustration zone
      </text>

      <rect x={24} y={84} width={180} height={72} rx={10} fill="#e85c1a" />
      <text x={114} y={110} textAnchor="middle" fill="#fff" fontSize="11" fontWeight="700">
        Zone of Proximal Development
      </text>
      <text x={114} y={128} textAnchor="middle" fill="#fff" fontSize="8.5" opacity={0.95}>
        Just above what they can do alone
      </text>
      <text x={114} y={142} textAnchor="middle" fill="#fff" fontSize="8.5" opacity={0.95}>
        with tutor scaffolding
      </text>

      <rect x={24} y={168} width={180} height={52} rx={10} fill="#fbd0b8" />
      <text x={114} y={192} textAnchor="middle" fill="#1a1f3c" fontSize="10" fontWeight="600">
        Can do independently
      </text>
      <text x={114} y={208} textAnchor="middle" fill="#6b7280" fontSize="8">
        Mastered skills
      </text>

      {/* Child climbing scaffolding ladder */}
      <line x1={228} y1={248} x2={228} y2={48} stroke="#1a1f3c" strokeWidth={3} opacity={0.2} />
      <line x1={258} y1={248} x2={258} y2={48} stroke="#1a1f3c" strokeWidth={3} opacity={0.2} />

      {[210, 178, 146, 114, 82].map((y, i) => {
        const faded = i < 2;
        return (
          <g key={y}>
            <line
              x1={228}
              y1={y}
              x2={258}
              y2={y}
              stroke={faded ? "#d1d5db" : "#e85c1a"}
              strokeWidth={faded ? 2 : 3}
              strokeDasharray={faded ? "4 3" : undefined}
              opacity={faded ? 0.5 : 1}
            />
            {i === 3 && (
              <>
                <circle cx={243} cy={y - 14} r={10} fill="#e85c1a" />
                <text
                  x={243}
                  y={y - 10}
                  textAnchor="middle"
                  fill="#fff"
                  fontSize="9"
                  fontWeight="700"
                >
                  C
                </text>
              </>
            )}
            {i === 2 && (
              <>
                <circle cx={268} cy={y - 10} r={9} fill="#1a1f3c" opacity={0.7} />
                <text
                  x={268}
                  y={y - 6}
                  textAnchor="middle"
                  fill="#fff"
                  fontSize="8"
                  fontWeight="700"
                >
                  T
                </text>
                <line
                  x1={253}
                  y1={y - 14}
                  x2={260}
                  y2={y - 10}
                  stroke="#e85c1a"
                  strokeWidth={2}
                />
              </>
            )}
          </g>
        );
      })}

      <text x={243} y={268} textAnchor="middle" fill="#6b7280" fontSize="8">
        Scaffolding
      </text>
      <text x={243} y={280} textAnchor="middle" fill="#6b7280" fontSize="7">
        removed over time
      </text>

      {/* Growth mindset bubble */}
      <rect x={24} y={232} width={88} height={36} rx={10} fill="#fff" stroke="#e85c1a" strokeWidth={1.5} />
      <polygon points="70,232 78,224 86,232" fill="#fff" stroke="#e85c1a" strokeWidth={1.5} />
      <line x1={70} y1={232} x2={70} y2={228} stroke="#fff" strokeWidth={2} />
      <text x={68} y={248} textAnchor="middle" fill="#e85c1a" fontSize="9" fontWeight="700">
        Not right
      </text>
      <text x={68} y={260} textAnchor="middle" fill="#1a1f3c" fontSize="10" fontWeight="800">
        yet.
      </text>

      {/* Upward progress arrow in ZPD */}
      <path
        d="M 200 148 L 200 108"
        stroke="#fff"
        strokeWidth={2}
        strokeDasharray="3 2"
        opacity={0.8}
      />
      <polygon points="200,102 196,112 204,112" fill="#fff" opacity={0.9} />
    </svg>
  );
}
