interface RetrievalPracticeIllustrationProps {
  className?: string;
}

export function RetrievalPracticeIllustration({
  className = "",
}: RetrievalPracticeIllustrationProps) {
  return (
    <svg
      viewBox="0 0 280 220"
      role="img"
      aria-label="Retrieval practice vs re-reading comparison"
      className={`mx-auto w-full max-w-[280px] ${className}`}
    >
      <title>Retrieval practice effect</title>

      <text x={70} y={28} textAnchor="middle" fill="#6b7280" fontSize="10" fontWeight="600">
        Re-reading
      </text>
      <rect x={30} y={40} width={80} height={120} rx={8} fill="#f3f4f6" />
      <rect x={42} y={55} width={56} height={8} rx={2} fill="#d1d5db" />
      <rect x={42} y={72} width={56} height={8} rx={2} fill="#d1d5db" />
      <rect x={42} y={89} width={56} height={8} rx={2} fill="#d1d5db" />
      <rect x={42} y={106} width={56} height={8} rx={2} fill="#d1d5db" />
      <text x={70} y={178} textAnchor="middle" fill="#9ca3af" fontSize="22" fontWeight="700">
        1×
      </text>

      <text x={210} y={28} textAnchor="middle" fill="#e85c1a" fontSize="10" fontWeight="600">
        Daily quiz
      </text>
      <rect x={170} y={40} width={80} height={120} rx={8} fill="#fff4ee" stroke="#e85c1a" strokeWidth={2} />
      <text x={210} y={78} textAnchor="middle" fill="#e85c1a" fontSize="28" fontWeight="700">
        ?
      </text>
      <text x={210} y={108} textAnchor="middle" fill="#1a1f3c" fontSize="9">
        Active recall
      </text>
      <text x={210} y={178} textAnchor="middle" fill="#e85c1a" fontSize="22" fontWeight="700">
        2×
      </text>

      <text x={140} y={205} textAnchor="middle" fill="#6b7280" fontSize="10">
        Testing beats re-reading
      </text>
    </svg>
  );
}
