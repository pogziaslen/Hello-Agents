import { motion } from "framer-motion";
import { useLang } from "../i18n";
import { HERO, STATS, LINKS } from "../data";
import { useRouter } from "../router";
import LogoReveal from "./LogoReveal";

export default function Hero() {
  const { pick } = useLang();
  const { navigate } = useRouter();

  return (
    <section id="top" className="relative z-10 flex min-h-screen flex-col justify-center px-5 pt-28 pb-16 sm:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left: copy */}
          <div className="order-2 lg:order-1">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-5 inline-flex items-center gap-2 rounded-full border-2 border-ink bg-cream/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-ink"
            >
              <span className="h-2 w-2 rounded-full bg-ink" />
              {pick(HERO.eyebrow)}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="font-display text-6xl font-bold leading-[0.9] tracking-tight text-ink sm:text-8xl lg:text-9xl"
            >
              {pick(HERO.titleTop)}
              <br />
              <span className="text-outline">{pick(HERO.titleBottom)}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-6 max-w-xl font-display text-2xl font-medium leading-snug text-ink sm:text-3xl"
            >
              {pick(HERO.tagline)}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-4 max-w-lg text-base leading-relaxed text-ink/70"
            >
              {pick(HERO.subtitle)}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href={LINKS.readOnline}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-acid transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_0_rgba(10,10,10,0.25)]"
              >
                {pick(HERO.ctaPrimary)}
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <button
                onClick={() => navigate("/roadmap")}
                className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-transparent px-7 py-3.5 text-sm font-semibold text-ink transition-all hover:-translate-y-0.5 hover:bg-cream"
              >
                {pick(HERO.ctaSecondary)}
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-12 grid max-w-lg grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-4"
            >
              {STATS.map((s) => (
                <div key={s.label.en} className="border-l-2 border-ink/30 pl-3">
                  <div className="font-display text-3xl font-bold text-ink sm:text-4xl">{s.value}</div>
                  <div className="text-xs text-ink/60">{pick(s.label)}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: logo reveal (shown above copy on mobile) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <LogoReveal />
          </motion.div>
        </div>
      </div>

      {/* scroll hint */}
      <motion.button
        onClick={() => document.getElementById("intro")?.scrollIntoView({ behavior: "smooth" })}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-ink/60 transition-colors hover:text-ink md:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        aria-label="Scroll down"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em]">{pick(HERO.scroll)}</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="block h-8 w-[2px] rounded bg-ink"
        />
      </motion.button>
    </section>
  );
}
