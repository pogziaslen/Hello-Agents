import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLang } from "../i18n";
import { CURRICULUM } from "../data";
import SectionHeader from "./SectionHeader";
import { cn } from "../utils/cn";

export default function Curriculum() {
  const { pick } = useLang();
  const [open, setOpen] = useState<string | null>("p1");
  const [query, setQuery] = useState("");

  const q = query.trim().toLowerCase();

  const filtered = useMemo(() => {
    if (!q) return CURRICULUM;
    return CURRICULUM.map((part) => ({
      ...part,
      chapters: part.chapters.filter(
        (c) =>
          c.title.en.toLowerCase().includes(q) ||
          c.title.zh.toLowerCase().includes(q) ||
          c.desc.en.toLowerCase().includes(q) ||
          c.desc.zh.toLowerCase().includes(q)
      ),
    })).filter(
      (part) =>
        part.chapters.length > 0 ||
        part.title.en.toLowerCase().includes(q) ||
        part.title.zh.toLowerCase().includes(q)
    );
  }, [q]);

  const totalChapters = CURRICULUM.reduce((n, p) => n + p.chapters.length, 0);

  return (
    <section id="curriculum" className="relative z-10 px-5 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <SectionHeader
            kicker={{ en: "Course roadmap", zh: "课程路线图" }}
            title={{ en: "Five parts. Sixteen chapters.", zh: "五大部分。十六章。" }}
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-mono text-sm text-ink/50"
          >
            {totalChapters} {pick({ en: "chapters · all complete", zh: "章 · 全部完成" })}
          </motion.p>
        </div>

        {/* Search */}
        <div className="mb-8 flex items-center gap-3 rounded-full border-2 border-ink bg-cream/70 px-5 py-3 backdrop-blur-sm sm:max-w-md">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <circle cx="11" cy="11" r="7" />
            <path d="m21 21-4-4" />
          </svg>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={pick({ en: "Search chapters…", zh: "搜索章节…" })}
            className="w-full bg-transparent text-sm text-ink outline-none placeholder:text-ink/40"
          />
          {query && (
            <button onClick={() => setQuery("")} className="text-ink/50 hover:text-ink" aria-label="Clear search">
              ✕
            </button>
          )}
        </div>

        <div className="space-y-3">
          {filtered.map((part) => {
            const isOpen = open === part.id;
            return (
              <motion.div
                key={part.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5 }}
                className={cn(
                  "overflow-hidden rounded-3xl border-2 border-ink transition-colors",
                  isOpen ? "bg-ink text-cream" : "bg-cream/60 text-ink backdrop-blur-sm"
                )}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : part.id)}
                  className="flex w-full items-center gap-4 p-5 text-left sm:p-6"
                  aria-expanded={isOpen}
                >
                  <span
                    className={cn(
                      "font-mono text-sm font-semibold",
                      isOpen ? "text-acid" : "text-ink/50"
                    )}
                  >
                    {part.num}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-bold sm:text-2xl">{pick(part.title)}</h3>
                    <p className={cn("mt-1 text-sm", isOpen ? "text-cream/60" : "text-ink/60")}>
                      {pick(part.blurb)}
                    </p>
                  </div>
                  <span
                    className={cn(
                      "grid h-10 w-10 shrink-0 place-items-center rounded-full border-2 transition-transform duration-300",
                      isOpen ? "border-acid text-acid" : "border-ink text-ink",
                      isOpen && "rotate-45"
                    )}
                  >
                    +
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="grid gap-px border-t-2 border-cream/20 sm:grid-cols-2">
                        {part.chapters.map((c, i) => (
                          <motion.div
                            key={c.num}
                            initial={{ opacity: 0, x: -12 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.05 }}
                            className="group flex items-start gap-4 p-5 transition-colors hover:bg-cream/5"
                          >
                            <span className="mt-1 font-mono text-xs text-acid/70">{c.num}</span>
                            <div>
                              <h4 className="font-display text-base font-semibold text-cream">
                                {pick(c.title)}
                              </h4>
                              <p className="mt-1 text-sm text-cream/55">{pick(c.desc)}</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}

          {filtered.length === 0 && (
            <div className="rounded-3xl border-2 border-ink bg-cream/60 p-10 text-center">
              <p className="font-display text-xl font-semibold text-ink">
                {pick({ en: "No chapters match your search.", zh: "没有与你的搜索匹配的章节。" })}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
