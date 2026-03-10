import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-brand-100 py-8 dark:border-slate-800">
      <div className="container-base flex flex-col items-start justify-between gap-4 text-sm text-slate-600 sm:flex-row sm:items-center dark:text-slate-300">
        <p>© {new Date().getFullYear()} Alex Carter. Built with Next.js + Tailwind.</p>
        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/your-username"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="transition hover:text-brand-600 dark:hover:text-brand-400"
          >
            <Github className="h-4 w-4" />
          </Link>
          <Link
            href="https://linkedin.com/in/your-username"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="transition hover:text-brand-600 dark:hover:text-brand-400"
          >
            <Linkedin className="h-4 w-4" />
          </Link>
          <Link
            href="https://twitter.com/your-username"
            target="_blank"
            rel="noreferrer"
            aria-label="Twitter"
            className="transition hover:text-brand-600 dark:hover:text-brand-400"
          >
            <Twitter className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
