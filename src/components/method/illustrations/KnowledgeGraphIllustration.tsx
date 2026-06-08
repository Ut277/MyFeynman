export interface KnowledgeGraphNode {
  label: string;
  status: "mastered" | "gap" | "building" | string;
}

interface KnowledgeGraphIllustrationProps {
  centerLabel: string;
  nodes: KnowledgeGraphNode[];
  legend: {
    mastered: string;
    gap: string;
    building: string;
  };
  className?: string;
}

const positions = [
  { x: 160, y: 52 },
  { x: 68, y: 118 },
  { x: 252, y: 118 },
  { x: 52, y: 220 },
  { x: 160, y: 248 },
  { x: 268, y: 220 },
];

const statusStyles: Record<
  string,
  { fill: string; stroke: string; text: string }
> = {
  mastered: { fill: "#2eb872", stroke: "#249a5e", text: "#fff" },
  gap: { fill: "#e85c1a", stroke: "#c44d14", text: "#fff" },
  building: { fill: "#fff4ee", stroke: "#f7a882", text: "#1a1f3c" },
};

export function KnowledgeGraphIllustration({
  centerLabel,
  nodes,
  legend,
  className = "",
}: KnowledgeGraphIllustrationProps) {
  const center = { x: 160, y: 158 };

  return (
    <svg
      viewBox="0 0 320 320"
      role="img"
      aria-label="Your child's knowledge graph"
      className={`mx-auto w-full max-w-[320px] ${className}`}
    >
      <title>Your child&apos;s knowledge graph</title>

      {nodes.slice(0, positions.length).map((node, i) => {
        const pos = positions[i];
        return (
          <line
            key={`line-${node.label}`}
            x1={center.x}
            y1={center.y}
            x2={pos.x}
            y2={pos.y}
            stroke={node.status === "gap" ? "#e85c1a" : "#d1d5db"}
            strokeWidth={node.status === "gap" ? 2.5 : 1.5}
            strokeDasharray={node.status === "building" ? "4 3" : undefined}
            opacity={node.status === "gap" ? 0.9 : 0.6}
          />
        );
      })}

      <circle cx={center.x} cy={center.y} r={36} fill="#1a1f3c" />
      <text
        x={center.x}
        y={center.y - 4}
        textAnchor="middle"
        fill="#fff"
        fontSize="9"
        fontWeight="700"
        fontFamily="system-ui, sans-serif"
      >
        {centerLabel.split(" · ")[0]}
      </text>
      <text
        x={center.x}
        y={center.y + 10}
        textAnchor="middle"
        fill="#fff"
        fontSize="8"
        opacity={0.85}
        fontFamily="system-ui, sans-serif"
      >
        {centerLabel.split(" · ")[1] ?? ""}
      </text>

      {nodes.slice(0, positions.length).map((node, i) => {
        const pos = positions[i];
        const style = statusStyles[node.status] ?? statusStyles.building;
        const words = node.label.split(" ");
        const line1 = words.length > 2 ? words.slice(0, 2).join(" ") : node.label;
        const line2 = words.length > 2 ? words.slice(2).join(" ") : "";

        return (
          <g key={node.label}>
            <circle
              cx={pos.x}
              cy={pos.y}
              r={28}
              fill={style.fill}
              stroke={style.stroke}
              strokeWidth={2}
            />
            <text
              x={pos.x}
              y={line2 ? pos.y - 3 : pos.y + 4}
              textAnchor="middle"
              fill={style.text}
              fontSize="7.5"
              fontWeight="600"
              fontFamily="system-ui, sans-serif"
            >
              {line1}
            </text>
            {line2 && (
              <text
                x={pos.x}
                y={pos.y + 9}
                textAnchor="middle"
                fill={style.text}
                fontSize="7"
                fontFamily="system-ui, sans-serif"
              >
                {line2}
              </text>
            )}
          </g>
        );
      })}

      <g transform="translate(12, 288)">
        {(
          [
            { key: "mastered" as const, color: "#2eb872" },
            { key: "gap" as const, color: "#e85c1a" },
            { key: "building" as const, color: "#f7a882" },
          ] as const
        ).map((item, i) => (
          <g key={item.key} transform={`translate(${i * 104}, 0)`}>
            <circle cx={6} cy={6} r={5} fill={item.color} />
            <text
              x={16}
              y={10}
              fill="#6b7280"
              fontSize="8"
              fontFamily="system-ui, sans-serif"
            >
              {legend[item.key]}
            </text>
          </g>
        ))}
      </g>
    </svg>
  );
}
