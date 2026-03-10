import Image from "next/image";
import Link from "next/link";
import { AnimatedReveal } from "@/components/animated-reveal";

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden pt-14 sm:pt-20">
      <div className="pointer-events-none absolute left-0 top-0 h-64 w-64 animate-float-slow rounded-full bg-brand-200/35 blur-3xl motion-reduce:animate-none" />
      <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 animate-float rounded-full bg-brand-300/30 blur-3xl motion-reduce:animate-none" />
      <div className="container-base grid items-center gap-12 py-10 sm:py-20 lg:grid-cols-[1.1fr_0.9fr]">
        <AnimatedReveal>
          <p className="inline-flex rounded-full border border-brand-200 bg-brand-50 px-4 py-1 text-xs font-bold uppercase tracking-[0.14em] text-brand-700 dark:border-slate-700 dark:bg-slate-900 dark:text-brand-200">
            Backend Engineer Portfolio
          </p>
          <h1 className="mt-5 max-w-2xl text-5xl font-black leading-[1.02] text-slate-900 sm:text-6xl lg:text-7xl dark:text-slate-100">
            Reliable Systems
            <span className="block text-brand-600 dark:text-brand-400">At Scale</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg dark:text-slate-300">
            I am Manali Potekar, a backend engineer building resilient microservices, API platforms, and cloud-native
            systems with Java, Spring Boot, Kafka, and AWS.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="#projects"
              className="rounded-full bg-brand-600 px-7 py-3 text-sm font-bold uppercase tracking-wide text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-brand-700"
            >
              View Projects
            </Link>
            <Link
              href="#contact"
              className="rounded-full border-2 border-brand-300 bg-white px-7 py-3 text-sm font-bold uppercase tracking-wide text-brand-700 transition hover:-translate-y-0.5 hover:border-brand-500 dark:border-slate-700 dark:bg-slate-900 dark:text-brand-200 dark:hover:border-slate-500"
            >
              Contact Me
            </Link>
          </div>
        </AnimatedReveal>

        <AnimatedReveal delay={0.1}>
          <div className="relative mx-auto flex w-full max-w-[460px] gap-3">
            <div className="relative h-[360px] w-2/3 animate-float rounded-[2rem] border border-brand-100 shadow-soft dark:border-slate-800 motion-reduce:animate-none">
              <Image
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80"
                alt="Developer at work"
                fill
                priority
                className="object-cover"
              />
            </div>
            <div className="flex w-1/3 flex-col gap-3">
              <div className="relative h-[220px] animate-float-fast overflow-hidden rounded-[1.5rem] border border-brand-100 dark:border-slate-800 motion-reduce:animate-none">
                <Image
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80"
                  alt="Code editor closeup"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="rounded-[1.2rem] border border-brand-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900">
                <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-slate-500 dark:text-slate-400">
                  Experience
                </p>
                <p className="mt-1 text-2xl font-black text-brand-700 dark:text-brand-300">3+ Years</p>
              </div>
            </div>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}
