import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Route =
  | "/"
  | "/about"
  | "/roadmap"
  | "/login"
  | "/cookies"
  | "/privacy"
  | "/terms";

const KNOWN: Route[] = ["/", "/about", "/roadmap", "/login", "/cookies", "/privacy", "/terms"];

function parseHash(): Route {
  const raw = window.location.hash.replace(/^#/, "");
  const path = (raw.split("?")[0] || "/") as Route;
  return KNOWN.includes(path) ? path : "/";
}

type RouterCtx = {
  route: Route;
  navigate: (r: Route) => void;
};

const Ctx = createContext<RouterCtx>({ route: "/", navigate: () => {} });

export function RouterProvider({ children }: { children: ReactNode }) {
  const [route, setRoute] = useState<Route>(() => parseHash());

  useEffect(() => {
    const onHash = () => {
      setRoute(parseHash());
      // "instant" avoids a jarring smooth-scroll animation when switching pages
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const navigate = (r: Route) => {
    if (r === route) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    window.location.hash = r;
  };

  return <Ctx.Provider value={{ route, navigate }}>{children}</Ctx.Provider>;
}

export function useRouter() {
  return useContext(Ctx);
}

/* Small helper so nav buttons can jump to a section on the home page
   even when the user is currently on a sub-page. */
let pendingSection: string | null = null;

export function requestSectionScroll(id: string) {
  pendingSection = id;
}

export function consumeSectionScroll(): string | null {
  const id = pendingSection;
  pendingSection = null;
  return id;
}
