import { motion } from "framer-motion";
import { useLang } from "../i18n";
import { COMMUNITY } from "../data";
import SectionHeader from "./SectionHeader";
import Icon from "./Icon";

export default function Community() {
  const { pick } = useLang();

  return (
    <section id="community" className="relative z-10 px-5 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <SectionHeader
            kicker={{ en: "Community picks", zh: "社区精选" }}
            title={{ en: "Insights from the field.", zh: "来自一线的洞见。" }}
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-xs text-sm leading-relaxed text-ink/60"
          >
            {pick({
              en: "Extra chapters and notes contributed by learners across the community.",
              zh: "来自社区学习者贡献的补充章节与笔记。",
            })}
          </motion.p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {COMMUNITY.map((c, i) => (
            <motion.a
              key={c.title.en}
              href="https://datawhalechina.github.io/hello-agents/"
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              whileHover={{ y: -5 }}
              className="group flex items-start gap-4 rounded-2xl border-2 border-ink bg-cream/60 p-6 backdrop-blur-sm transition-colors hover:bg-cream"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-acid text-ink transition-transform duration-300 group-hover:rotate-6">
                <Icon name={c.icon} size={22} />
              </span>
              <div>
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-display text-base font-bold text-ink">{pick(c.title)}</h3>
                  <span className="text-ink/40 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-ink">→</span>
                </div>
                <p className="mt-1 text-sm leading-relaxed text-ink/60">{pick(c.desc)}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
