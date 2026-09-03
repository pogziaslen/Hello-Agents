import { motion } from "framer-motion";
import { useLang } from "../i18n";
import { FEATURES } from "../data";
import SectionHeader from "./SectionHeader";
import Icon from "./Icon";

export default function Features() {
  const { pick } = useLang();

  return (
    <section id="features" className="relative z-10 px-5 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <SectionHeader
            kicker={{ en: "What you'll gain", zh: "你将收获" }}
            title={{ en: "Everything you'll master.", zh: "你将掌握的一切。" }}
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-xs font-mono text-xs leading-relaxed text-ink/50"
          >
            {pick({
              en: "Theory and practice, side by side. Every chapter ships with runnable code.",
              zh: "理论与实践并重。每一章都附有可运行的代码。",
            })}
          </motion.p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f, i) => (
            <motion.article
              key={f.title.en}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: (i % 4) * 0.08 }}
              whileHover={{ y: -6 }}
              className="group rounded-3xl border-2 border-ink bg-cream/70 p-6 backdrop-blur-sm transition-colors hover:bg-cream"
            >
              <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-ink text-acid transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105">
                <Icon name={f.icon} size={26} />
              </div>
              <h3 className="font-display text-lg font-bold text-ink">{pick(f.title)}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/65">{pick(f.desc)}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
