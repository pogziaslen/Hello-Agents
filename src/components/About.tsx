import { motion } from "framer-motion";
import { useLang } from "../i18n";
import { ABOUT } from "../data";
import { useRouter } from "../router";
import SectionHeader from "./SectionHeader";
import BeeLogo from "./BeeLogo";

export default function About() {
  const { pick } = useLang();
  const { navigate } = useRouter();

  return (
    <section id="intro" className="relative z-10 px-5 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeader kicker={ABOUT.kicker} title={ABOUT.title} />
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 flex flex-wrap gap-2"
            >
              {ABOUT.chips.map((c) => (
                <span
                  key={c.en}
                  className="rounded-full border-2 border-ink px-4 py-1.5 text-xs font-semibold text-ink"
                >
                  {pick(c)}
                </span>
              ))}
            </motion.div>
          </div>

          <div className="space-y-5">
            {[ABOUT.p1, ABOUT.p2, ABOUT.p3].map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="text-lg leading-relaxed text-ink/80"
              >
                {pick(p)}
              </motion.p>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center gap-4 rounded-2xl border-2 border-ink bg-cream/70 p-5"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-ink">
                <BeeLogo size={26} dark={false} />
              </span>
              <p className="text-sm leading-relaxed text-ink/70">
                {pick({
                  en: "We believe the best way to learn is to build. This course turns you from a user of large models into a builder of agent systems.",
                  zh: "我们相信，最好的学习方式就是亲手去构建。这门课程会把从大模型的用户，变成智能体系统的构建者。",
                })}
              </p>
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
              onClick={() => navigate("/about")}
              className="group inline-flex items-center gap-2 text-sm font-semibold text-ink underline-offset-4 hover:underline"
            >
              {pick({ en: "Read the full story", zh: "阅读完整的故事" })}
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
