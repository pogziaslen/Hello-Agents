const WORDS = [
  "Hello Agents",
  "Build",
  "Learn",
  "Ship",
  "ReAct",
  "Memory",
  "RAG",
  "MCP",
  "Agentic RL",
  "GRPO",
  "Multi-Agent",
  "From Scratch",
];

export default function Marquee() {
  const row = [...WORDS, ...WORDS];
  return (
    <div className="relative z-10 overflow-hidden border-y-2 border-ink bg-acid py-4">
      <div className="animate-marquee flex w-max items-center gap-8 whitespace-nowrap">
        {row.map((w, i) => (
          <span key={i} className="flex items-center gap-8">
            <span className="font-display text-xl font-bold uppercase tracking-tight text-ink sm:text-2xl">
              {w}
            </span>
            <span className="text-ink/40">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
