import type { SkillLevel, TechStackGroup } from "@/shared/data/portfolio";
import { PageHero } from "@/shared/ui/page-hero";
import { SectionHeading } from "@/shared/ui/section-heading";

type SkillsPageProps = {
  skillLevels: SkillLevel[];
  techStack: TechStackGroup[];
};

export function SkillsPage({ skillLevels, techStack }: SkillsPageProps) {
  return (
    <>
      <PageHero
        eyebrow="Skills"
        title="A technical stack for fullstack products, backend services, data, cloud, and AI."
        description="The focus is not collecting tools. It is using the right set of technologies to build clear, scalable, testable systems."
      />

      <section className="portfolio-container pb-24">
        <SectionHeading eyebrow="Core skills" title="Animated capability map." />
        <div className="glass-card space-y-6">
          {skillLevels.map((skill) => (
            <div key={skill.label}>
              <div className="mb-2 flex justify-between font-mono text-xs tracking-[0.1em] text-on-surface uppercase">
                <span>{skill.label}</span>
                <span>{skill.value}%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-white/10">
                <div className="skill-bar h-full rounded-full" style={{ width: `${skill.value}%` }} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="portfolio-container pb-24">
        <SectionHeading eyebrow="Stack" title="Technology categories." />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {techStack.map((group) => (
            <article key={group.category} className="glass-card">
              <div className="mb-5 grid h-12 w-12 place-items-center rounded-lg border border-tertiary/20 bg-tertiary/10 font-mono text-sm text-tertiary">
                {group.icon}
              </div>
              <h2 className="text-xl">{group.category}</h2>
              <p className="mt-3 text-sm">{group.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="chip">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
