import type { ReactNode } from "react";
import { AnimatedReveal } from "@/components/animated-reveal";

type SectionWrapperProps = {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
};

export function SectionWrapper({ id, title, subtitle, children, className = "" }: SectionWrapperProps) {
  return (
    <section id={id} className={`scroll-mt-20 py-20 sm:py-24 ${className}`}>
      <div className="container-base">
        <AnimatedReveal>
          <span className="inline-flex rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-brand-700 dark:border-slate-700 dark:bg-slate-900 dark:text-brand-200">
            {title}
          </span>
          <h2 className="section-title">{title}</h2>
          {subtitle ? <p className="section-subtitle">{subtitle}</p> : null}
        </AnimatedReveal>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
