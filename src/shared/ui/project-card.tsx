import Link from "next/link";

import type { Project } from "@/shared/config/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const liveUrl = project.liveUrl?.trim();

  return (
    <article className="glass-card group flex min-h-full flex-col">
      <Link href={`/projects/${project.slug}`} className="no-underline">
        <div className="mb-8 h-48 rounded-xl border border-glass-border bg-surface-container transition group-hover:scale-[1.01]">
          <div className="grid h-full place-items-end p-6">
            <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-2 font-mono text-xs tracking-[0.1em] text-primary uppercase">
              {project.category} / {project.year}
            </span>
          </div>
        </div>
      </Link>
      <div className="flex flex-1 flex-col gap-4">
        <div>
          <p className="font-mono text-xs tracking-[0.1em] text-tertiary uppercase">{project.role}</p>
          <h3 className="mt-3 text-2xl">{project.title}</h3>
        </div>
        <p>{project.summary}</p>
        <div className="flex flex-wrap gap-2">
          {project.stack.slice(0, 4).map((item) => (
            <span key={item} className="chip">
              {item}
            </span>
          ))}
        </div>
        <div className="mt-auto flex flex-wrap gap-3 pt-4">
          <Link href={`/projects/${project.slug}`} className="btn-secondary min-h-10 px-4 text-sm">
            Etude de cas
          </Link>
          <a className="btn-secondary min-h-10 px-4 text-sm" href={project.githubUrl} target="_blank" rel="noreferrer">
            GitHub
          </a>
          {liveUrl ? (
            <a className="btn-primary min-h-10 px-4 text-sm" href={liveUrl}>
              Demo live
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
