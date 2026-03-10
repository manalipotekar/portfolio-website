import { SectionWrapper } from "@/components/section-wrapper";
import { AnimatedReveal } from "@/components/animated-reveal";
import { skills } from "@/lib/data";

export function SkillsSection() {
  return (
    <SectionWrapper
      id="skills"
      title="Skills"
      subtitle="Backend-first stack spanning distributed systems, APIs, and cloud deployment."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <AnimatedReveal key={skill.name} delay={index * 0.03}>
              <article className="rounded-2xl border border-brand-100 bg-white p-5 transition hover:-translate-y-1 hover:shadow-soft dark:border-slate-800 dark:bg-slate-900/80">
                <div className="flex items-center gap-4">
                  <span className="rounded-xl bg-brand-50 p-2.5 text-brand-700 dark:bg-slate-800 dark:text-brand-200">
                    <Icon className="h-4 w-4" />
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">{skill.name}</h3>
                    <p className="text-xs font-semibold uppercase tracking-wide text-brand-600 dark:text-brand-300">
                      {skill.category}
                    </p>
                  </div>
                </div>
              </article>
            </AnimatedReveal>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
