import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type User = { name: string; email: string };

type AuthCtx = {
  user: User | null;
  login: (u: User) => void;
  logout: () => void;
};

const STORAGE_KEY = "helloagents.user";
const Ctx = createContext<AuthCtx>({ user: null, login: () => {}, logout: () => {} });

function readUser(): User | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as User) : null;
  } catch {
    return null;
  }
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(() => readUser());

  useEffect(() => {
    try {
      if (user) localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
      else localStorage.removeItem(STORAGE_KEY);
    } catch {
      /* storage unavailable, ignore */
    }
  }, [user]);

  const login = (u: User) => setUser(u);
  const logout = () => setUser(null);

  return <Ctx.Provider value={{ user, login, logout }}>{children}</Ctx.Provider>;
}

export function useAuth() {
  return useContext(Ctx);
}
