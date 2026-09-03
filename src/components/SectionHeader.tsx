import { motion } from "framer-motion";
import type { L } from "../data";
import { useLang } from "../i18n";

export default function SectionHeader({
  kicker,
  title,
  align = "left",
}: {
  kicker: L;
  title: L;
  align?: "left" | "center";
}) {
  const { pick } = useLang();
  return (
    <div className={align === "center" ? "text-center" : ""}>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-ink/50"
      >
        {pick(kicker)}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl"
      >
        {pick(title)}
      </motion.h2>
    </div>
  );
}
