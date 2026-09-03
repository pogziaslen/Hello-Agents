import { motion } from "framer-motion";
import { useLang } from "../i18n";
import { BUILDER_NOTES } from "../content";
import SectionHeader from "./SectionHeader";
import Icon from "./Icon";

export default function BuilderNotes() {
  const { pick } = useLang();

  return (
    <section id="builder-notes" className="relative z-10 px-5 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          kicker={{ en: "From the builder's bench", zh: "来自构建者的工作台" }}
          title={{ en: "Notes for fellow builders.", zh: "写给同行构建者的笔记。" }}
        />
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 mt-4 max-w-2xl text-base leading-relaxed text-ink/65"
        >
          {pick({
            en: "A few things the maintainers wish someone had told them on day one. Taped to the wall, scribbled in the margins, learned the hard way.",
            zh: "维护者们希望第一天就有人告诉他们的几件事。贴在墙上、写在页边、用血泪换来的经验。",
          })}
        </motion.p>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {BUILDER_NOTES.map((n, i) => (
            <motion.article
              key={n.title.en}
              initial={{ opacity: 0, y: 24, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: i % 2 === 0 ? -1.2 : 1.2 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              whileHover={{ y: -6, rotate: 0, scale: 1.02 }}
              className="relative rounded-2xl border-2 border-ink bg-cream p-6 shadow-[6px_6px_0_#0a0a0a]"
            >
              <div className="absolute -top-3 left-6 h-6 w-16 rounded-sm bg-acid/70" aria-hidden="true" />
              <div className="mb-4 flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-ink text-acid">
                  <Icon name={n.icon} size={20} />
                </span>
                <span className="font-mono text-xs uppercase tracking-widest text-ink/40">
                  Note 0{i + 1}
                </span>
              </div>
              <h3 className="font-display text-lg font-bold text-ink">{pick(n.title)}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">{pick(n.body)}</p>
            </motion.article>
          ))}

          {/* a blank card to keep the grid feeling unfinished, like a real bench */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="hidden items-center justify-center rounded-2xl border-2 border-dashed border-ink/30 p-6 text-center lg:flex"
          >
            <p className="font-mono text-xs uppercase tracking-widest text-ink/40">
              {pick({ en: "More notes on the way…", zh: "更多笔记筹备中…" })}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
