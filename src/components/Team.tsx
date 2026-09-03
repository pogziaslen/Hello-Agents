import { motion } from "framer-motion";
import { useLang } from "../i18n";
import { TEAM } from "../data";
import SectionHeader from "./SectionHeader";

const initials = (s: string) => {
  const parts = s.trim().split(/\s+/);
  if (parts.length > 1) {
    return parts
      .map((w) => w[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();
  }
  return Array.from(s)[0] ?? "·";
};

export default function Team() {
  const { pick } = useLang();

  return (
    <section id="team" className="relative z-10 px-5 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <SectionHeader
            kicker={{ en: "People behind it", zh: "背后的人们" }}
            title={{ en: "Made by the community.", zh: "由社区共同打造。" }}
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-xs text-sm leading-relaxed text-ink/60"
          >
            {pick({
              en: "Core authors, engineers and mentors of Hello Agents.",
              zh: "Hello Agents 的核心作者、工程师与导师。",
            })}
          </motion.p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {TEAM.map((t, i) => (
            <motion.div
              key={t.name.en}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: (i % 4) * 0.06 }}
              whileHover={{ y: -5, rotate: i % 2 === 0 ? -1 : 1 }}
              className="rounded-2xl border-2 border-ink bg-cream/60 p-5 backdrop-blur-sm transition-colors hover:bg-cream"
            >
              <div className="mb-4 grid h-14 w-14 place-items-center rounded-full bg-ink font-display text-lg font-bold text-acid">
                {initials(pick(t.name))}
              </div>
              <h3 className="font-display text-base font-bold text-ink">{pick(t.name)}</h3>
              <p className="text-sm text-ink/60">{pick(t.role)}</p>
              <p className="mt-2 inline-block rounded-full bg-acid px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-ink">
                {pick(t.tag)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
