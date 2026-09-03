import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import BeeLogo from "./BeeLogo";
import { cn } from "../utils/cn";

/**
 * LogoReveal: the signature motion-graphics loop:
 *   dot  →  bee icon  →  bold blurred typography  →  (loop)
 * Elastic, blurred crossfades sell the "morph" between states.
 */
type Phase = "dot" | "bee" | "text";

const SEQUENCE: { phase: Phase; ms: number }[] = [
  { phase: "dot", ms: 1300 },
  { phase: "bee", ms: 2400 },
  { phase: "text", ms: 2800 },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function LogoReveal({ className = "" }: { className?: string }) {
  const [idx, setIdx] = useState(0);
  const phase = SEQUENCE[idx].phase;

  useEffect(() => {
    const t = setTimeout(() => {
      setIdx((i) => (i + 1) % SEQUENCE.length);
    }, SEQUENCE[idx].ms);
    return () => clearTimeout(t);
  }, [idx]);

  return (
    <div
      className={cn("relative flex w-full items-center justify-center h-[160px] sm:h-[200px] lg:h-[260px]", className)}
      aria-label="Hello Agents logo"
    >
      <AnimatePresence mode="wait">
        {phase === "dot" && (
          <motion.span
            key="dot"
            className="block h-6 w-6 rounded-full bg-ink"
            initial={{ scale: 0.3, opacity: 0, filter: "blur(8px)" }}
            animate={{
              scale: [0.3, 1.15, 1],
              opacity: 1,
              filter: "blur(0px)",
            }}
            exit={{ scale: 2.8, opacity: 0, filter: "blur(12px)" }}
            transition={{ duration: 0.7, ease }}
          />
        )}

        {phase === "bee" && (
          <motion.div
            key="bee"
            initial={{ scale: 0.4, opacity: 0, rotate: -14, filter: "blur(12px)" }}
            animate={{ scale: 1, opacity: 1, rotate: 0, filter: "blur(0px)" }}
            exit={{ scale: 1.6, opacity: 0, rotate: 8, filter: "blur(14px)" }}
            transition={{ duration: 0.7, ease }}
          >
            <motion.div
              animate={{ y: [0, -6, 0], rotate: [0, 3, -3, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            >
              <BeeLogo size={84} />
            </motion.div>
          </motion.div>
        )}

        {phase === "text" && (
          <motion.div
            key="text"
            initial={{ opacity: 0, filter: "blur(18px)", scale: 0.92, letterSpacing: "0.1em" }}
            animate={{ opacity: 1, filter: "blur(0px)", scale: 1, letterSpacing: "-0.02em" }}
            exit={{ opacity: 0, filter: "blur(14px)", scale: 1.04 }}
            transition={{ duration: 0.75, ease }}
            className="flex flex-col items-center leading-none"
          >
            <span className="font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
              Hello Agents
            </span>
            <span className="mt-2 font-mono text-[10px] uppercase tracking-[0.35em] text-ink/60">
              build · learn · ship
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
