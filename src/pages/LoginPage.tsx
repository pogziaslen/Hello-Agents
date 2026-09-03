import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLang } from "../i18n";
import { LOGIN } from "../content";
import { useAuth } from "../auth";
import { useRouter } from "../router";
import Page from "../components/Page";
import BeeLogo from "../components/BeeLogo";
import { cn } from "../utils/cn";

type Mode = "signin" | "register";

const GOOGLE_ICON = (
  <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
    <path fill="#4285F4" d="M23.5 12.27c0-.85-.08-1.66-.22-2.45H12v4.64h6.46a5.52 5.52 0 0 1-2.4 3.62v3h3.88c2.27-2.09 3.56-5.17 3.56-8.81Z" />
    <path fill="#34A853" d="M12 24c3.24 0 5.96-1.07 7.94-2.91l-3.88-3.01c-1.08.72-2.45 1.15-4.06 1.15-3.12 0-5.77-2.11-6.72-4.95H1.28v3.11A12 12 0 0 0 12 24Z" />
    <path fill="#FBBC05" d="M5.28 14.28a7.2 7.2 0 0 1 0-4.56V6.61H1.28a12 12 0 0 0 0 10.78l4-3.11Z" />
    <path fill="#EA4335" d="M12 4.77c1.76 0 3.34.61 4.58 1.8l3.44-3.44A11.97 11.97 0 0 0 12 0 12 12 0 0 0 1.28 6.61l4 3.11C6.23 6.88 8.88 4.77 12 4.77Z" />
  </svg>
);

const GITHUB_ICON = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.27-.01-1.17-.02-2.12-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.16-1.18 3.16-1.18.63 1.59.23 2.76.12 3.05.74.8 1.19 1.83 1.19 3.09 0 4.42-2.7 5.39-5.26 5.68.41.36.78 1.06.78 2.14 0 1.54-.01 2.79-.01 3.17 0 .31.21.68.8.56A11.52 11.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
  </svg>
);

export default function LoginPage() {
  const { pick } = useLang();
  const { login } = useAuth();
  const { navigate } = useRouter();

  const [mode, setMode] = useState<Mode>("signin");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [remember, setRemember] = useState(true);
  const [agree, setAgree] = useState(false);
  const [showPw, setShowPw] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState<string | null>(null);
  const [forgot, setForgot] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    if (!emailOk) e.email = pick(LOGIN.errors.email);
    if (mode === "register" && !name.trim()) e.name = pick(LOGIN.errors.name);
    if (password.length < 8) e.password = pick(LOGIN.errors.password);
    if (mode === "register" && confirm !== password) e.confirm = pick(LOGIN.errors.confirm);
    if (mode === "register" && !agree) e.agree = pick(LOGIN.errors.agree);
    return e;
  };

  const submit = (ev: React.FormEvent) => {
    ev.preventDefault();
    setErrors({});
    const e = validate();
    if (Object.keys(e).length) {
      setErrors(e);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      const displayName = mode === "register" ? name.trim() : email.trim().split("@")[0];
      login({ name: displayName || "Learner", email: email.trim() });
      setLoading(false);
      setDone(displayName || "Learner");
    }, 700);
  };

  const useDemo = () => {
    setMode("signin");
    setEmail("demo@helloagents.dev");
    setPassword("hello-agents");
    setErrors({});
    setLoading(true);
    setTimeout(() => {
      login({ name: "Demo Learner", email: "demo@helloagents.dev" });
      setLoading(false);
      setDone("Demo Learner");
    }, 700);
  };

  const inputCls = (err?: string) =>
    cn(
      "w-full rounded-xl border-2 bg-cream/80 px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink/40",
      err ? "border-red-500" : "border-ink/15 focus:border-ink"
    );

  return (
    <Page>
      <div className="mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-2">
        {/* left: brand */}
        <div className="hidden lg:block">
          <span className="grid h-16 w-16 place-items-center rounded-2xl bg-ink">
            <BeeLogo size={40} dark={false} />
          </span>
          <h1 className="mt-6 font-display text-4xl font-bold leading-tight tracking-tight text-ink">
            {pick({ en: "Your agent lab, one login away.", zh: "你的智能体实验室，只差一次登录。" })}
          </h1>
          <p className="mt-4 max-w-sm text-base leading-relaxed text-ink/65">
            {pick({
              en: "Save your place, keep notes on every chapter, and come back right where you left off.",
              zh: "保存你的进度，为每一章做笔记，随时回到上次停下的地方。",
            })}
          </p>
          <ul className="mt-8 space-y-3">
            {[
              { en: "Free, no card required", zh: "免费，无需绑定银行卡" },
              { en: "Stored locally in your browser", zh: "保存在你的浏览器本地" },
              { en: "No spam, ever", zh: "绝不发送垃圾邮件" },
            ].map((t) => (
              <li key={t.en} className="flex items-center gap-3 text-sm text-ink/70">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-acid text-[10px] text-ink">✓</span>
                {pick(t)}
              </li>
            ))}
          </ul>
        </div>

        {/* right: form card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl border-2 border-ink bg-cream p-6 shadow-[8px_8px_0_#0a0a0a] sm:p-8"
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-ink/50">{pick(LOGIN.kicker)}</p>
          <h2 className="mt-2 font-display text-2xl font-bold text-ink">{pick(LOGIN.title)}</h2>
          <p className="mt-2 text-sm text-ink/60">{pick(LOGIN.subtitle)}</p>

          {/* tabs */}
          <div className="mt-6 grid grid-cols-2 gap-1 rounded-full border-2 border-ink p-1">
            {(["signin", "register"] as Mode[]).map((m) => (
              <button
                key={m}
                onClick={() => {
                  setMode(m);
                  setErrors({});
                }}
                className={cn(
                  "relative rounded-full py-2 text-sm font-semibold transition-colors",
                  mode === m ? "text-acid" : "text-ink/60 hover:text-ink"
                )}
              >
                {mode === m && (
                  <motion.span
                    layoutId="login-tab"
                    className="absolute inset-0 rounded-full bg-ink"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="relative">{m === "signin" ? pick(LOGIN.tabSignin) : pick(LOGIN.tabRegister)}</span>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {done ? (
              <motion.div
                key="done"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-8 rounded-2xl border-2 border-ink bg-acid p-6 text-center"
              >
                <div className="mx-auto mb-3 grid h-12 w-12 place-items-center rounded-full bg-ink text-xl text-acid">✓</div>
                <p className="font-display text-lg font-bold text-ink">
                  {pick(LOGIN.welcome)} {done}
                </p>
                <p className="mt-1 text-sm text-ink/70">{pick(LOGIN.success)}</p>
                <button
                  onClick={() => navigate("/")}
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-acid transition-transform hover:-translate-y-0.5"
                >
                  {pick({ en: "Back to home", zh: "返回首页" })} →
                </button>
              </motion.div>
            ) : (
              <motion.form
                key={mode}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -12 }}
                transition={{ duration: 0.25 }}
                onSubmit={submit}
                noValidate
                className="mt-6 space-y-4"
              >
                {mode === "register" && (
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold text-ink/70">{pick(LOGIN.name)}</label>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={pick(LOGIN.namePh)}
                      className={inputCls(errors.name)}
                    />
                    {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                  </div>
                )}

                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-ink/70">{pick(LOGIN.email)}</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={pick(LOGIN.emailPh)}
                    className={inputCls(errors.email)}
                  />
                  {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-ink/70">{pick(LOGIN.password)}</label>
                  <div className="relative">
                    <input
                      type={showPw ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder={pick(LOGIN.passwordPh)}
                      className={cn(inputCls(errors.password), "pr-12")}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPw((s) => !s)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-ink/50 hover:text-ink"
                      aria-label={showPw ? "Hide password" : "Show password"}
                    >
                      {showPw ? (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg>
                      ) : (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" /><path d="M10.73 5.08A10.4 10.4 0 0 1 12 5c6.5 0 10 7 10 7a18 18 0 0 1-2.16 3.19" /><path d="M6.61 6.61A13.5 13.5 0 0 0 2 12s3.5 7 10 7a9.7 9.7 0 0 0 5.39-1.61" /><path d="m2 2 20 20" /></svg>
                      )}
                    </button>
                  </div>
                  {errors.password && <p className="mt-1 text-xs text-red-500">{errors.password}</p>}
                </div>

                {mode === "register" && (
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold text-ink/70">{pick(LOGIN.confirm)}</label>
                    <input
                      type={showPw ? "text" : "password"}
                      value={confirm}
                      onChange={(e) => setConfirm(e.target.value)}
                      className={inputCls(errors.confirm)}
                    />
                    {errors.confirm && <p className="mt-1 text-xs text-red-500">{errors.confirm}</p>}
                  </div>
                )}

                {mode === "signin" ? (
                  <div className="flex items-center justify-between">
                    <label className="flex cursor-pointer items-center gap-2 text-xs text-ink/70">
                      <input
                        type="checkbox"
                        checked={remember}
                        onChange={(e) => setRemember(e.target.checked)}
                        className="h-4 w-4 accent-ink"
                      />
                      {pick(LOGIN.remember)}
                    </label>
                    <button
                      type="button"
                      onClick={() => setForgot((f) => !f)}
                      className="text-xs font-semibold text-ink underline-offset-2 hover:underline"
                    >
                      {pick(LOGIN.forgot)}
                    </button>
                  </div>
                ) : (
                  <label className="flex cursor-pointer items-start gap-2 text-xs text-ink/70">
                    <input
                      type="checkbox"
                      checked={agree}
                      onChange={(e) => setAgree(e.target.checked)}
                      className="mt-0.5 h-4 w-4 accent-ink"
                    />
                    <span>{pick(LOGIN.agree)}</span>
                  </label>
                )}
                {errors.agree && <p className="text-xs text-red-500">{errors.agree}</p>}

                {forgot && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="rounded-xl border-2 border-ink/15 bg-acid/40 px-4 py-3 text-xs leading-relaxed text-ink/80"
                  >
                    {pick({
                      en: "For this demo, use the demo account below. A real reset link would be emailed to you.",
                      zh: "在本演示中，请使用下方的演示账号。正式服务中会向你的邮箱发送重置链接。",
                    })}
                  </motion.p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-ink py-3.5 text-sm font-semibold text-acid transition-all hover:-translate-y-0.5 disabled:opacity-60"
                >
                  {loading && (
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-acid/40 border-t-acid" />
                  )}
                  {mode === "signin" ? pick(LOGIN.submitSignin) : pick(LOGIN.submitRegister)}
                </button>

                <div className="flex items-center gap-3">
                  <span className="h-px flex-1 bg-ink/15" />
                  <span className="text-xs text-ink/50">{pick(LOGIN.or)}</span>
                  <span className="h-px flex-1 bg-ink/15" />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={useDemo}
                    className="flex items-center justify-center gap-2 rounded-xl border-2 border-ink/15 py-3 text-sm font-semibold text-ink transition-colors hover:border-ink"
                  >
                    {GOOGLE_ICON} {pick(LOGIN.google)}
                  </button>
                  <button
                    type="button"
                    onClick={useDemo}
                    className="flex items-center justify-center gap-2 rounded-xl border-2 border-ink/15 py-3 text-sm font-semibold text-ink transition-colors hover:border-ink"
                  >
                    {GITHUB_ICON} {pick(LOGIN.github)}
                  </button>
                </div>

                <button
                  type="button"
                  onClick={useDemo}
                  className="w-full text-center text-xs font-semibold text-ink/60 underline-offset-2 hover:text-ink hover:underline"
                >
                  {pick(LOGIN.demo)}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </Page>
  );
}
