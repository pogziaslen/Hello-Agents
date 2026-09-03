import { motion } from "framer-motion";
import { useLang } from "../i18n";
import type { LegalDoc } from "../content";
import Page from "../components/Page";
import { useRouter } from "../router";

export default function LegalPage({ doc }: { doc: LegalDoc }) {
  const { pick } = useLang();
  const { navigate } = useRouter();

  return (
    <Page className="max-w-3xl">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-ink/50"
      >
        Hello Agents
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl"
      >
        {pick(doc.title)}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="mt-3 font-mono text-xs text-ink/50"
      >
        {pick(doc.updated)}
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-8 text-lg leading-relaxed text-ink/75"
      >
        {pick(doc.intro)}
      </motion.p>

      <div className="mt-10 space-y-6">
        {doc.sections.map((s, i) => (
          <motion.section
            key={s.heading.en}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border-2 border-ink bg-cream/60 p-6"
          >
            <h2 className="flex items-center gap-3 font-display text-xl font-bold text-ink">
              <span className="font-mono text-sm text-ink/40">0{i + 1}</span>
              {pick(s.heading)}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink/70">{pick(s.body)}</p>
          </motion.section>
        ))}
      </div>

      <div className="mt-12 flex flex-wrap gap-3">
        <button
          onClick={() => navigate("/")}
          className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-acid transition-all hover:-translate-y-0.5"
        >
          ← {pick({ en: "Back to home", zh: "返回首页" })}
        </button>
        <a
          href="https://datawhalechina.github.io/hello-agents/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border-2 border-ink px-6 py-3 text-sm font-semibold text-ink transition-all hover:bg-cream"
        >
          {pick({ en: "Read the course", zh: "阅读课程" })}
        </a>
      </div>
    </Page>
  );
}
