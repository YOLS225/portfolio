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
        eyebrow="Projets"
        title="Projets selectionnes en backend, fullstack, data et produits orientes IA."
        description="Une selection d'applications et d'API construites autour de systemes scalables, d'architecture propre et d'interfaces soignees."
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
