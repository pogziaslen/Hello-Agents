import { useState } from "react";
import { motion } from "framer-motion";
import { useLang } from "../i18n";
import { FOOTER, CITATION, LINKS } from "../data";
import { useRouter, requestSectionScroll, type Route } from "../router";
import BeeLogo from "./BeeLogo";

function XLogo({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export default function Footer() {
  const { pick } = useLang();
  const { navigate } = useRouter();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [copied, setCopied] = useState(false);

  const subscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes("@")) return;
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 4000);
  };

  const copyCitation = async () => {
    try {
      await navigator.clipboard.writeText(CITATION.bibtex);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const goSection = (id: string) => {
    requestSectionScroll(id);
    navigate("/");
  };

  const exploreLinks = [
    { label: { en: "Roadmap", zh: "路线图" }, action: () => navigate("/roadmap") },
    { label: { en: "About", zh: "关于" }, action: () => navigate("/about") },
    { label: { en: "Features", zh: "特色" }, action: () => goSection("features") },
    { label: { en: "Community", zh: "社区" }, action: () => goSection("community") },
    { label: { en: "Team", zh: "团队" }, action: () => goSection("team") },
  ];

  const legalLinks: { label: { en: string; zh: string }; to: Route }[] = [
    { label: { en: "Cookies", zh: "Cookie" }, to: "/cookies" },
    { label: { en: "Privacy", zh: "隐私" }, to: "/privacy" },
    { label: { en: "Terms", zh: "条款" }, to: "/terms" },
  ];

  return (
    <footer className="relative z-10 mt-10 rounded-t-[2.5rem] bg-ink text-cream">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* CTA */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-acid/70"
            >
              Hello Agents
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="font-display text-4xl font-bold leading-[1.02] tracking-tight sm:text-6xl"
            >
              {pick(FOOTER.title)}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-5 max-w-md text-lg text-cream/60"
            >
              {pick(FOOTER.subtitle)}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a
                href={LINKS.readOnline}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-acid px-6 py-3 text-sm font-semibold text-ink transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_0_rgba(216,246,0,0.35)]"
              >
                {pick(FOOTER.readOnline)} →
              </a>
              <a
                href={LINKS.downloadPdf}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-2 border-cream/30 px-6 py-3 text-sm font-semibold text-cream transition-colors hover:border-acid hover:text-acid"
              >
                {pick(FOOTER.downloadPdf)}
              </a>
            </motion.div>
          </div>

          {/* Subscribe + citation */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="mb-3 font-display text-sm font-semibold text-cream/80">
                {pick(FOOTER.feedbackLabel)}
              </p>
              <form onSubmit={subscribe} className="flex flex-wrap gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={pick(FOOTER.feedbackPlaceholder)}
                  className="min-w-[200px] flex-1 rounded-full border-2 border-cream/30 bg-transparent px-5 py-3 text-sm text-cream outline-none placeholder:text-cream/40 focus:border-acid"
                />
                <button
                  type="submit"
                  className="rounded-full bg-cream px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-acid"
                >
                  {pick(FOOTER.feedbackBtn)}
                </button>
              </form>
              {subscribed && (
                <motion.p
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-3 text-sm text-acid"
                >
                  ✓ {pick(FOOTER.feedbackSuccess)}
                </motion.p>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-2xl border border-cream/15 bg-cream/5 p-5"
            >
              <div className="mb-3 flex items-center justify-between">
                <p className="font-mono text-xs uppercase tracking-widest text-cream/50">BibTeX</p>
                <button
                  onClick={copyCitation}
                  className="rounded-full bg-acid px-3 py-1 font-mono text-xs font-semibold text-ink transition-transform hover:-translate-y-0.5"
                >
                  {copied ? "Copied ✓" : "Copy"}
                </button>
              </div>
              <pre className="overflow-x-auto font-mono text-xs leading-relaxed text-cream/70">
                {CITATION.bibtex}
              </pre>
            </motion.div>
          </div>
        </div>

        {/* Link columns */}
        <div className="mt-16 grid gap-8 border-t border-cream/15 pt-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex items-start gap-3 lg:col-span-2">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-acid">
              <BeeLogo size={22} dark />
            </span>
            <div>
              <p className="text-sm font-semibold text-cream">Hello Agents</p>
              <p className="mt-1 max-w-xs text-xs leading-relaxed text-cream/50">
                {pick(FOOTER.madeWith)}
              </p>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-wider text-cream/30">
                {pick({
                  en: "Set in Space Grotesk · drawn by hand",
                  zh: "Space Grotesk 排版 · 手绘而成",
                })}
              </p>
            </div>
          </div>

          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-cream/40">
              {pick(FOOTER.navLabel)}
            </p>
            <ul className="space-y-2">
              {exploreLinks.map((l) => (
                <li key={l.label.en}>
                  <button
                    onClick={l.action}
                    className="text-sm text-cream/70 transition-colors hover:text-acid"
                  >
                    {pick(l.label)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-cream/40">
              {pick(FOOTER.legalLabel)}
            </p>
            <ul className="space-y-2">
              {legalLinks.map((l) => (
                <li key={l.to}>
                  <button
                    onClick={() => navigate(l.to)}
                    className="text-sm text-cream/70 transition-colors hover:text-acid"
                  >
                    {pick(l.label)}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* bottom bar */}
        <div className="mt-10 flex flex-col items-center gap-4 border-t border-cream/15 pt-6 sm:flex-row sm:justify-between">
          <p className="text-xs text-cream/40">{pick(FOOTER.rights)}</p>
          <div className="flex items-center gap-2">
            <span className="text-xs text-cream/40">{pick(FOOTER.follow)}</span>
            <a
              href={LINKS.x}
              target="_blank"
              rel="noreferrer"
              aria-label="Hello Agents on X"
              className="group grid h-10 w-10 place-items-center rounded-full border border-cream/25 text-cream transition-all hover:border-acid hover:bg-acid hover:text-ink"
            >
              <XLogo size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
