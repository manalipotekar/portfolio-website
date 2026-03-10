import { BriefcaseBusiness, GraduationCap } from "lucide-react";
import Image from "next/image";
import { SectionWrapper } from "@/components/section-wrapper";
import { AnimatedReveal } from "@/components/animated-reveal";
import { technologies } from "@/lib/data";

export function AboutSection() {
  return (
    <SectionWrapper
      id="about"
      title="About"
      subtitle="I combine engineering rigor with clean design to ship products that scale."
    >
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <AnimatedReveal>
          <article className="rounded-[1.6rem] border border-brand-100 bg-white p-7 shadow-sm dark:border-slate-800 dark:bg-slate-900/80">
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">Bio</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
              I am a software engineer focused on building scalable web platforms, internal tools, and polished
              customer-facing products. I care about architecture, observability, and great UX.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-brand-100 bg-brand-50/60 p-4 dark:border-slate-800 dark:bg-slate-900">
                <div className="flex items-center gap-2">
                  <GraduationCap className="h-4 w-4 text-brand-700" />
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Education
                  </p>
                </div>
                <p className="mt-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
                  B.Tech in Computer Science, 2020
                </p>
              </div>
              <div className="rounded-xl border border-brand-100 bg-brand-50/60 p-4 dark:border-slate-800 dark:bg-slate-900">
                <div className="flex items-center gap-2">
                  <BriefcaseBusiness className="h-4 w-4 text-brand-700" />
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Experience
                  </p>
                </div>
                <p className="mt-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
                  3+ years building full-stack products
                </p>
              </div>
            </div>
            <h4 className="mt-7 text-sm font-bold uppercase tracking-[0.12em] text-slate-500 dark:text-slate-400">
              Technologies
            </h4>
            <ul className="mt-3 flex flex-wrap gap-2">
              {technologies.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-brand-200 bg-white px-3 py-1 text-xs font-semibold text-brand-700 dark:border-slate-700 dark:bg-slate-900 dark:text-brand-200"
                >
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </AnimatedReveal>

        <AnimatedReveal delay={0.1}>
          <div className="relative h-[380px] overflow-hidden rounded-[1.8rem] border border-brand-100 shadow-soft dark:border-slate-800">
            <Image
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
              alt="Team collaboration"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/45 via-transparent to-transparent" />
          </div>
        </AnimatedReveal>
      </div>
    </SectionWrapper>
  );
}
