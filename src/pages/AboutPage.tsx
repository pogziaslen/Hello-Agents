import { motion } from "framer-motion";
import { useLang } from "../i18n";
import { ABOUT_PAGE, BUILDER_NOTES } from "../content";
import { LINKS } from "../data";
import Page from "../components/Page";
import BeeLogo from "../components/BeeLogo";
import { useRouter } from "../router";

export default function AboutPage() {
  const { pick } = useLang();
  const { navigate } = useRouter();

  return (
    <Page>
      {/* header */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-ink/50"
      >
        {pick(ABOUT_PAGE.kicker)}
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-6xl"
      >
        {pick(ABOUT_PAGE.title)}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/75"
      >
        {pick(ABOUT_PAGE.lede)}
      </motion.p>

      {/* principles */}
      <div className="mt-16 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl"
        >
          {pick(ABOUT_PAGE.principles.heading)}
        </motion.h2>
        <div className="space-y-4">
          {ABOUT_PAGE.principles.items.map((p, i) => (
            <motion.div
              key={p.title.en}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border-2 border-ink bg-cream/60 p-6"
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-sm font-semibold text-ink/40">0{i + 1}</span>
                <h3 className="font-display text-xl font-bold text-ink">{pick(p.title)}</h3>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-ink/65">{pick(p.body)}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* builder note highlight */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-16 rounded-3xl border-2 border-ink bg-ink p-8 text-cream"
      >
        <div className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-acid">
            <BeeLogo size={22} dark />
          </span>
          <h3 className="font-display text-2xl font-bold text-cream">
            {pick({ en: "A builder's note", zh: "一条构建者笔记" })}
          </h3>
        </div>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-cream/70">
          {pick(BUILDER_NOTES[0].title)}. {pick(BUILDER_NOTES[0].body)}
        </p>
        <button
          onClick={() => navigate("/")}
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-acid px-5 py-2.5 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5"
        >
          {pick({ en: "Read all the notes", zh: "阅读全部笔记" })} →
        </button>
      </motion.div>

      {/* license + contribute */}
      <div className="mt-16 grid gap-6 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border-2 border-ink bg-cream/60 p-7"
        >
          <h3 className="font-display text-xl font-bold text-ink">
            {pick(ABOUT_PAGE.license.heading)}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-ink/65">{pick(ABOUT_PAGE.license.body)}</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-2xl border-2 border-ink bg-cream/60 p-7"
        >
          <h3 className="font-display text-xl font-bold text-ink">
            {pick(ABOUT_PAGE.contribute.heading)}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-ink/65">
            {pick(ABOUT_PAGE.contribute.body)}
          </p>
        </motion.div>
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-16 flex flex-wrap gap-3"
      >
        <a
          href={LINKS.readOnline}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-acid transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_0_rgba(10,10,10,0.25)]"
        >
          {pick({ en: "Start reading", zh: "开始学习" })} →
        </a>
        <button
          onClick={() => navigate("/roadmap")}
          className="inline-flex items-center gap-2 rounded-full border-2 border-ink px-7 py-3.5 text-sm font-semibold text-ink transition-all hover:-translate-y-0.5 hover:bg-cream"
        >
          {pick({ en: "See the roadmap", zh: "查看路线图" })}
        </button>
      </motion.div>
    </Page>
  );
}
