"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" }
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const root = document.documentElement;
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = stored ? stored === "dark" : prefersDark;
    root.classList.toggle("dark", isDark);
    setTheme(isDark ? "dark" : "light");
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
    localStorage.setItem("theme", nextTheme);
    setTheme(nextTheme);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-brand-100/80 bg-white/85 backdrop-blur-xl dark:border-slate-800/70 dark:bg-slate-950/75">
      <nav className="container-base flex h-16 items-center justify-between">
        <Link href="#home" className="text-sm font-extrabold tracking-[0.2em] text-brand-700">
          MANALI POTEKAR
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-semibold text-slate-600 transition hover:text-brand-600 dark:text-slate-200 dark:hover:text-brand-400"
            >
              {item.label}
            </Link>
          ))}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-brand-200 bg-white text-brand-700 transition hover:border-brand-400 dark:border-slate-700 dark:bg-slate-900 dark:text-brand-200 dark:hover:border-slate-500"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <Link
            href="#contact"
            className="rounded-full bg-brand-600 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-brand-700"
          >
            Hire Me
          </Link>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-brand-200 bg-white text-brand-700 transition hover:border-brand-400 dark:border-slate-700 dark:bg-slate-900 dark:text-brand-200 dark:hover:border-slate-500"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((prev) => !prev)}
            className="rounded-full border border-brand-200 bg-white p-2 text-brand-700 dark:border-slate-700 dark:bg-slate-900 dark:text-brand-200"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-brand-100 bg-white px-4 py-3 md:hidden dark:border-slate-800 dark:bg-slate-950">
          <div className="container-base flex flex-col gap-3 px-0">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-1 text-sm font-semibold text-slate-700 transition hover:bg-brand-50 hover:text-brand-700 dark:text-slate-200 dark:hover:bg-slate-900/80 dark:hover:text-brand-300"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
