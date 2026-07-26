import Link from "next/link";
import { notFound } from "next/navigation";

import type { Project } from "@/shared/config/projects";
import { MetricCard } from "@/shared/ui/metric-card";

type ProjectDetailPageProps = {
  project?: Project;
};

export function ProjectDetailPage({ project }: ProjectDetailPageProps) {
  if (!project) {
    notFound();
  }

  const liveUrl = project.liveUrl?.trim();

  return (
    <>
      <section className="portfolio-container pt-32 pb-16 md:pt-40">
        <Link href="/projects" className="font-mono text-xs tracking-[0.1em] text-tertiary uppercase no-underline">
          Retour aux projets
        </Link>
        <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_0.7fr]">
          <div>
            <p className="chip mb-6">
              {project.category} / {project.year}
            </p>
            <h1 className="max-w-4xl text-balance">{project.title}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8">{project.summary}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a className="btn-secondary" href={project.githubUrl} target="_blank" rel="noreferrer">
                GitHub
              </a>
              {liveUrl ? (
                <a className="btn-primary" href={liveUrl}>
                  Demo live
                </a>
              ) : null}
            </div>
          </div>
          <div className={`min-h-80 rounded-xl bg-gradient-to-br ${project.gradient} p-px`}>
            <div className="grid h-full rounded-xl bg-black/30 p-8 backdrop-blur-sm">
              <div className="self-end">
                <p className="font-mono text-xs tracking-[0.1em] text-white/70 uppercase">Rôle</p>
                <p className="mt-3 text-2xl font-semibold text-white">{project.role}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="portfolio-container grid gap-6 pb-20 md:grid-cols-3">
        {project.metrics.map((metric) => (
          <MetricCard key={metric.label} label={metric.label} value={metric.value} />
        ))}
      </section>

      <section className="portfolio-container grid gap-8 pb-24 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="glass-card">
          <p className="chip mb-5">Resultat</p>
          <p className="text-lg leading-8">{project.outcome}</p>
        </div>
        <div className="glass-card">
          <p className="chip mb-5">Points forts du systeme</p>
          <ul className="space-y-4 text-on-surface-variant">
            {project.highlights.map((highlight) => (
              <li key={highlight} className="border-l border-tertiary/50 pl-4">
                {highlight}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <span key={item} className="chip">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
