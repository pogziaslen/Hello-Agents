import { motion } from "framer-motion";
import { useLang } from "../i18n";
import { ROADMAP } from "../content";
import { LINKS } from "../data";
import Page from "../components/Page";

export default function RoadmapPage() {
  const { pick } = useLang();

  return (
    <Page className="max-w-4xl">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-ink/50"
      >
        {pick({ en: "The learning path", zh: "学习路径" })}
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="max-w-2xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-6xl"
      >
        {pick({ en: "Six phases to your first shipped agent.", zh: "发布你的第一个智能体，只需六个阶段。" })}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="mt-6 max-w-xl text-lg leading-relaxed text-ink/70"
      >
        {pick({
          en: "A realistic pace, not a sprint. Each phase builds on the last, and every one ends with something you can run.",
          zh: "这是一个现实的节奏，而不是冲刺。每个阶段都建立在前一个阶段之上，而每一阶段结束时，你都会有一个能跑起来的东西。",
        })}
      </motion.p>

      {/* timeline */}
      <div className="relative mt-16">
        <div className="absolute left-[22px] top-2 bottom-2 w-[2px] bg-ink/15" aria-hidden="true" />
        <div className="space-y-8">
          {ROADMAP.map((p) => (
            <motion.div
              key={p.phase}
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="relative pl-16"
            >
              <div className="absolute left-0 top-1 grid h-11 w-11 place-items-center rounded-full border-2 border-ink bg-acid font-mono text-sm font-bold text-ink">
                {p.phase}
              </div>
              <div className="rounded-2xl border-2 border-ink bg-cream/70 p-6 backdrop-blur-sm">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="font-display text-2xl font-bold text-ink">{pick(p.title)}</h3>
                  <span className="rounded-full bg-ink px-3 py-1 font-mono text-[11px] uppercase tracking-wide text-acid">
                    {pick(p.weeks)}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">{pick(p.desc)}</p>
                <ul className="mt-4 space-y-2">
                  {p.points.map((pt, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-ink/75">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-ink" />
                      {pick(pt)}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-16 flex flex-wrap items-center gap-3 rounded-3xl border-2 border-ink bg-acid p-7"
      >
        <p className="flex-1 font-display text-xl font-bold text-ink">
          {pick({ en: "Ready to start phase one?", zh: "准备好开始第一阶段了吗？" })}
        </p>
        <a
          href={LINKS.readOnline}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-acid transition-all hover:-translate-y-0.5"
        >
          {pick({ en: "Open the book", zh: "打开书本" })} →
        </a>
      </motion.div>
    </Page>
  );
}
