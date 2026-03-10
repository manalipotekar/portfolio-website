import Link from "next/link";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { SectionWrapper } from "@/components/section-wrapper";
import { AnimatedReveal } from "@/components/animated-reveal";

export function ContactSection() {
  return (
    <SectionWrapper
      id="contact"
      title="Contact"
      subtitle="Open to full-time roles, freelance projects, and product collaborations."
      className="pb-14"
    >
      <div className="grid gap-8 lg:grid-cols-2">
        <AnimatedReveal>
          <form className="space-y-4 rounded-[1.7rem] border border-brand-100 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/80">
            <label className="block">
              <span className="mb-1 block text-sm font-semibold text-slate-700 dark:text-slate-200">Name</span>
              <input
                type="text"
                name="name"
                required
                className="w-full rounded-xl border border-brand-200 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-500"
                placeholder="Your name"
              />
            </label>
            <label className="block">
              <span className="mb-1 block text-sm font-semibold text-slate-700 dark:text-slate-200">Email</span>
              <input
                type="email"
                name="email"
                required
                className="w-full rounded-xl border border-brand-200 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-500"
                placeholder="you@example.com"
              />
            </label>
            <label className="block">
              <span className="mb-1 block text-sm font-semibold text-slate-700 dark:text-slate-200">Message</span>
              <textarea
                name="message"
                rows={5}
                required
                className="w-full rounded-xl border border-brand-200 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-500"
                placeholder="Tell me about your project..."
              />
            </label>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:-translate-y-0.5 hover:bg-brand-700"
            >
              <Mail className="h-4 w-4" />
              Send Message
            </button>
          </form>
        </AnimatedReveal>

        <AnimatedReveal delay={0.1}>
          <div className="rounded-[1.7rem] border border-brand-100 bg-brand-50/45 p-6 dark:border-slate-800 dark:bg-slate-900/60">
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">Connect with me</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
              Prefer social platforms? Reach out through these channels.
            </p>
            <div className="mt-6 space-y-3">
              <Link
                href="https://github.com/your-username"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-xl border border-brand-200 bg-white px-4 py-3 text-sm font-semibold transition hover:-translate-y-0.5 hover:border-brand-400 hover:text-brand-700 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200 dark:hover:border-slate-500 dark:hover:text-brand-300"
              >
                <Github className="h-4 w-4" />
                GitHub
              </Link>
              <Link
                href="https://linkedin.com/in/your-username"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-xl border border-brand-200 bg-white px-4 py-3 text-sm font-semibold transition hover:-translate-y-0.5 hover:border-brand-400 hover:text-brand-700 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200 dark:hover:border-slate-500 dark:hover:text-brand-300"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </Link>
              <Link
                href="https://twitter.com/your-username"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-xl border border-brand-200 bg-white px-4 py-3 text-sm font-semibold transition hover:-translate-y-0.5 hover:border-brand-400 hover:text-brand-700 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200 dark:hover:border-slate-500 dark:hover:text-brand-300"
              >
                <Twitter className="h-4 w-4" />
                Twitter / X
              </Link>
            </div>
          </div>
        </AnimatedReveal>
      </div>
    </SectionWrapper>
  );
}
