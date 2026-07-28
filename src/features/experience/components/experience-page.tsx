import type { ExperienceItem } from "@/shared/data/portfolio";
import { PageHero } from "@/shared/ui/page-hero";
import { SectionHeading } from "@/shared/ui/section-heading";

type ExperiencePageProps = {
  roles: ExperienceItem[];
};

export function ExperiencePage({ roles }: ExperiencePageProps) {
  return (
    <>
      <PageHero
        eyebrow="Experience"
        title="Un parcours construit autour du fullstack, du backend et des systemes produit."
        description="Mon experience combine produits concrets, systemes backend, workflows data et execution frontend moderne."
      />
      <section className="portfolio-container pb-24">
        <SectionHeading eyebrow="Parcours" title="Experience professionnelle et projets." />
        <div className="relative space-y-6 before:absolute before:left-4 before:top-2 before:h-full before:w-px before:bg-gradient-to-b before:from-tertiary before:to-transparent md:before:left-[11.25rem]">
          {roles.map((role) => (
            <article key={`${role.company}-${role.period}`} className="grid min-w-0 gap-5 pl-9 md:grid-cols-[180px_minmax(0,1fr)] md:pl-0">
              <p className="font-mono text-xs tracking-[0.1em] text-tertiary uppercase">{role.period}</p>
              <div className="glass-card">
                <h2 className="text-2xl">{role.title}</h2>
                <p className="mt-1 font-medium text-on-surface">{role.company}</p>
                <ul className="mt-5 space-y-3 text-on-surface-variant">
                  {role.achievements.map((achievement) => (
                    <li key={achievement} className="border-l border-tertiary/50 pl-4">
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
