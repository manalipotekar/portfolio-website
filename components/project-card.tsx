import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Github } from "lucide-react";
import type { Project } from "@/lib/data";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group overflow-hidden rounded-[1.7rem] border border-brand-100 bg-white shadow-sm transition hover:-translate-y-1.5 hover:shadow-soft dark:border-slate-800 dark:bg-slate-900/80">
      <div className="relative h-56 overflow-hidden">
        <Image
          src={project.image}
          alt={`${project.name} preview`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-900/55 via-transparent to-transparent" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">{project.name}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{project.description}</p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <li
              key={item}
              className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700 dark:bg-slate-800 dark:text-brand-200"
            >
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex items-center gap-5 text-sm font-bold">
          <Link
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-slate-700 transition hover:text-brand-700 dark:text-slate-200 dark:hover:text-brand-300"
          >
            <Github className="h-4 w-4" />
            GitHub
          </Link>
          <Link
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-slate-700 transition hover:text-brand-700 dark:text-slate-200 dark:hover:text-brand-300"
          >
            <ArrowUpRight className="h-4 w-4" />
            Live Demo
          </Link>
        </div>
      </div>
    </article>
  );
}
