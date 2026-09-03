import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLang } from "../i18n";
import { NAV } from "../data";
import { useAuth } from "../auth";
import { useRouter, requestSectionScroll, type Route } from "../router";
import BeeLogo from "./BeeLogo";
import Icon from "./Icon";
import { cn } from "../utils/cn";

const initials = (s: string) =>
  s
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

export default function Navbar() {
  const { lang, pick, setLang } = useLang();
  const { route, navigate } = useRouter();
  const { user, logout } = useAuth();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");

  const sectionIds = NAV.filter((n) => n.kind === "section").map((n) => n.id);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (route !== "/") return;
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [route, sectionIds.join(",")]);

  const goSection = (id: string) => {
    setOpen(false);
    if (route !== "/") {
      requestSectionScroll(id);
      navigate("/");
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const goPage = (to: string) => {
    setOpen(false);
    navigate(to as Route);
  };

  // Lock body scroll while the full-screen menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled ? "border-b-2 border-ink/10 bg-acid/80 backdrop-blur-md" : "bg-transparent"
        )}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-4 py-4 sm:px-8">
          {/* Brand */}
          <button
            onClick={() => navigate("/")}
            className="group flex shrink-0 items-center gap-2.5"
            aria-label="Hello Agents home"
          >
            <span className="grid h-9 w-9 place-items-center rounded-full bg-ink transition-transform duration-300 group-hover:rotate-[-10deg]">
              <BeeLogo size={22} dark={false} />
            </span>
            <span className="hidden font-display text-lg font-bold tracking-tight text-ink min-[400px]:block">
              Hello<span className="text-ink/50">Agents</span>
            </span>
          </button>

          {/* Desktop nav */}
          <div className="hidden items-center gap-1 lg:flex">
            {NAV.map((n) => {
              const isActive = n.kind === "page" ? route === n.to : active === n.id;
              return (
                <button
                  key={n.id}
                  onClick={() => (n.kind === "page" ? goPage(n.to!) : goSection(n.id))}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-sm font-medium text-ink/70 transition-colors hover:text-ink",
                    isActive && "text-acid"
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-ink"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span className="relative">{pick(n.label)}</span>
                </button>
              );
            })}
          </div>

          {/* Right cluster */}
          <div className="flex items-center gap-2">
            {/* Language toggle badge */}
            <div className="flex items-center rounded-full border-2 border-ink bg-cream/70 p-1 backdrop-blur">
              {(["en", "zh"] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={cn(
                    "relative rounded-full px-2.5 py-1 text-xs font-semibold uppercase tracking-wide transition-colors",
                    lang === l ? "text-acid" : "text-ink/60 hover:text-ink"
                  )}
                >
                  {lang === l && (
                    <motion.span
                      layoutId="lang-pill"
                      className="absolute inset-0 rounded-full bg-ink"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative">{l === "en" ? "EN" : "中"}</span>
                </button>
              ))}
            </div>

            {/* Auth */}
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setMenuOpen((o) => !o)}
                  className="flex items-center gap-2 rounded-full border-2 border-ink bg-cream/70 py-1 pl-1 pr-3 backdrop-blur transition-colors hover:bg-cream"
                  aria-label="Account menu"
                >
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-ink text-xs font-bold text-acid">
                    {initials(user.name)}
                  </span>
                  <span className="hidden max-w-[7rem] truncate text-sm font-semibold text-ink sm:block">
                    {user.name}
                  </span>
                </button>
                <AnimatePresence>
                  {menuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.96 }}
                      transition={{ duration: 0.15 }}
                      className="absolute right-0 mt-2 w-56 overflow-hidden rounded-2xl border-2 border-ink bg-cream shadow-[6px_6px_0_#0a0a0a]"
                    >
                      <div className="border-b-2 border-ink/10 px-4 py-3">
                        <p className="truncate text-sm font-bold text-ink">{user.name}</p>
                        <p className="truncate text-xs text-ink/50">{user.email}</p>
                      </div>
                      <button
                        onClick={() => {
                          logout();
                          setMenuOpen(false);
                          navigate("/");
                        }}
                        className="flex w-full items-center gap-2 px-4 py-3 text-left text-sm font-semibold text-ink transition-colors hover:bg-acid"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9" /></svg>
                        {pick({ en: "Sign out", zh: "退出登录" })}
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <button
                onClick={() => goPage("/login")}
                className="flex items-center gap-1.5 rounded-full bg-ink py-2.5 pl-3 pr-3 text-sm font-semibold text-acid transition-transform hover:-translate-y-0.5 sm:px-5"
                aria-label={pick({ en: "Sign in", zh: "登录" })}
              >
                <Icon name="user" size={18} />
                <span className="hidden sm:inline">{pick({ en: "Sign in", zh: "登录" })}</span>
              </button>
            )}

            {/* Burger */}
            <button
              onClick={() => setOpen((o) => !o)}
              className="group flex h-11 w-11 items-center justify-center rounded-full border-2 border-ink bg-cream/70 backdrop-blur transition-colors hover:bg-ink"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              <div className="flex w-5 flex-col items-center gap-[5px]">
                <span className={cn("h-[2px] w-5 rounded bg-ink transition-all duration-300 group-hover:bg-acid", open && "translate-y-[7px] rotate-45")} />
                <span className={cn("h-[2px] w-5 rounded bg-ink transition-all duration-300 group-hover:bg-acid", open && "opacity-0")} />
                <span className={cn("h-[2px] w-5 rounded bg-ink transition-all duration-300 group-hover:bg-acid", open && "-translate-y-[7px] -rotate-45")} />
              </div>
            </button>
          </div>
        </nav>
      </header>

      {/* Full-screen menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col overflow-y-auto bg-ink px-6 py-24 sm:px-8"
            initial={{ clipPath: "circle(0% at 100% 0%)" }}
            animate={{ clipPath: "circle(150% at 100% 0%)" }}
            exit={{ clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mx-auto flex w-full max-w-7xl flex-col justify-center gap-2">
              {NAV.map((n, i) => (
                <motion.button
                  key={n.id}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 + i * 0.06 }}
                  onClick={() => (n.kind === "page" ? goPage(n.to!) : goSection(n.id))}
                  className="group flex items-baseline gap-3 text-left sm:gap-4"
                >
                  <span className="font-mono text-sm text-acid/50">0{i + 1}</span>
                  <span className="font-display text-4xl font-bold tracking-tight text-cream transition-colors group-hover:text-acid sm:text-7xl">
                    {pick(n.label)}
                  </span>
                </motion.button>
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-10 flex flex-wrap items-center gap-3"
              >
                {user ? (
                  <button
                    onClick={() => {
                      logout();
                      setOpen(false);
                      navigate("/");
                    }}
                    className="rounded-full border-2 border-acid px-5 py-2.5 text-sm font-semibold text-acid transition-colors hover:bg-acid hover:text-ink"
                  >
                    {pick({ en: "Sign out", zh: "退出登录" })}
                  </button>
                ) : (
                  <button
                    onClick={() => goPage("/login")}
                    className="rounded-full bg-acid px-5 py-2.5 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5"
                  >
                    {pick({ en: "Sign in", zh: "登录" })}
                  </button>
                )}
                <a
                  href="https://datawhalechina.github.io/hello-agents/"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border-2 border-cream/30 px-5 py-2.5 text-sm font-semibold text-cream transition-colors hover:border-acid hover:text-acid"
                >
                  {pick({ en: "Read online", zh: "在线阅读" })}
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
