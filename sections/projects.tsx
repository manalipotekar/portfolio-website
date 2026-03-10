import { SectionWrapper } from "@/components/section-wrapper";
import { AnimatedReveal } from "@/components/animated-reveal";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/data";

export function ProjectsSection() {
  return (
    <SectionWrapper
      id="projects"
      title="Projects"
      subtitle="Selected work with strong UX, architecture, and performance outcomes."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <AnimatedReveal key={project.name} delay={index * 0.08}>
            <ProjectCard project={project} />
          </AnimatedReveal>
        ))}
      </div>
    </SectionWrapper>
  );
}
