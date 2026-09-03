import type { ReactNode } from "react";
import { cn } from "../utils/cn";

export default function Page({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("relative z-10 min-h-screen pt-28 pb-24", className)}>
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">{children}</div>
    </div>
  );
}
