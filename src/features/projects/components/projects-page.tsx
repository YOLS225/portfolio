import type { Project } from "@/shared/config/projects";
import { PageHero } from "@/shared/ui/page-hero";
import { ProjectCard } from "@/shared/ui/project-card";

type ProjectsPageProps = {
  projects: Project[];
};

export function ProjectsPage({ projects }: ProjectsPageProps) {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Featured projects across backend, fullstack, data, and AI-ready products."
        description="A curated set of applications and APIs built around scalable systems, clean architecture, and polished user interfaces."
      />
      <section className="portfolio-container pb-24">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </>
  );
}
