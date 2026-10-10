import Image from "next/image";
import Link from "next/link";

import type { Project } from "@/shared/config/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const liveUrl = project.liveUrl?.trim();

  return (
    <article className="glass-card group flex min-h-full flex-col">
      {project.coverImage ? (
        <Link href={`/projects/${project.slug}`} className="relative mb-6 block aspect-video overflow-hidden rounded-xl border border-glass-border bg-surface-container">
          <Image src={project.coverImage.url} alt={project.coverImage.alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-contain" />
        </Link>
      ) : null}
      <div className="mb-6 flex items-center justify-between border-b border-glass-border pb-5">
        <span className="font-mono text-xs text-primary">{project.category} / {project.year}</span>
        <Link href={`/projects/${project.slug}`} aria-label={`Découvrir ${project.title}`} className="project-arrow">↗</Link>
      </div>
      <div className="flex flex-1 flex-col gap-4">
        <div>
          <p className="font-mono text-xs tracking-[0.1em] text-tertiary uppercase">{project.role}</p>
          <h3 className="mt-3 text-2xl"><Link href={`/projects/${project.slug}`} className="no-underline">{project.title}</Link></h3>
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
