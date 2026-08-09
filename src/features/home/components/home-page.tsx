import Image from "next/image";
import Link from "next/link";

import type { Project } from "@/shared/config/projects";
import type {
  ProfileData,
  SkillLevel,
  TechStackGroup,
  TestimonialItem,
} from "@/shared/data/portfolio";
import { MetricCard } from "@/shared/ui/metric-card";
import { ProjectCard } from "@/shared/ui/project-card";
import { SectionHeading } from "@/shared/ui/section-heading";

type HomePageProps = {
  featuredProjects: Project[];
  profile: ProfileData;
  skillLevels: SkillLevel[];
  stats: { label: string; value: string }[];
  techStack: TechStackGroup[];
  testimonials: TestimonialItem[];
};

export function HomePage({
  featuredProjects,
  profile,
  skillLevels,
  stats,
  techStack,
  testimonials,
}: HomePageProps) {
  return (
    <>
      <section className="portfolio-container relative grid min-h-[92vh] items-center gap-8 overflow-hidden pt-44 pb-14 sm:pt-36 sm:pb-16 lg:min-h-[96vh] lg:grid-cols-[1.1fr_0.9fr]">
        <div className="hero-orbit left-[8%] top-[18%]" />
        <div className="hero-orbit right-[12%] bottom-[18%]" />
        <div className="relative z-10">
          <p className="chip mb-6">{profile.role}</p>
          <h1 className="max-w-4xl text-balance">{profile.name}</h1>
          <div className="mt-5 flex flex-wrap gap-2 font-mono text-xs tracking-[0.1em] text-tertiary uppercase sm:gap-3 sm:text-sm">
            {profile.roles.map((role) => (
              <span key={role}>{role}</span>
            ))}
          </div>
          <p className="mt-6 max-w-2xl text-base leading-7 sm:text-lg sm:leading-8">{profile.intro}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/projects" className="btn-primary">
              Voir les projets
            </Link>
            <a href="/resume" className="btn-secondary" download>
              Télécharger le CV
            </a>
            <Link href="/contact" className="btn-secondary">
              Me contacter
            </Link>
          </div>
        </div>
        <div className="relative z-10 space-y-4">
          <div className="glass-card min-h-[460px] overflow-hidden p-0">
            <div className="relative h-full min-h-[460px] rounded-xl border border-glass-border bg-surface-container">
              <Image
                src="/yoann1.jpeg"
                alt="Yoann Lasm au travail sur un produit logiciel"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-[52%_34%] grayscale"
                preload
              />
              <div className="absolute inset-x-5 bottom-5 rounded-xl border border-glass-border bg-background/88 p-5 backdrop-blur-md">
                <p className="font-mono text-xs tracking-[0.1em] text-primary uppercase">Architecture / Backend / IA</p>
                <p className="mt-2 text-lg font-semibold text-on-surface">Produits web fiables, clairs et scalables.</p>
              </div>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {stats.slice(0, 4).map((stat) => (
              <MetricCard key={stat.label} label={stat.label} value={stat.value} />
            ))}
          </div>
        </div>
      </section>

      <section className="portfolio-container portfolio-section">
        <SectionHeading
          eyebrow="Stack technique"
          title="Des outils pour le web, le backend, le cloud, la data et l'IA."
          description="Une stack pragmatique orientee livraison moderne, architecture maintenable et applications pretes pour la production."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {techStack.map((group) => (
            <article key={group.category} className="glass-card">
              <div className="mb-5 grid h-12 w-12 place-items-center rounded-lg border border-primary/20 bg-primary/10 font-mono text-sm text-primary">
                {group.icon}
              </div>
              <h3 className="text-xl">{group.category}</h3>
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

      <section className="portfolio-container portfolio-section">
        <SectionHeading
          eyebrow="Projets selectionnes"
          title="Applications et API construites sur des bases techniques solides."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="portfolio-container portfolio-section grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <SectionHeading eyebrow="Competences" title="Une execution equilibree entre produit et engineering." />
        <div className="glass-card space-y-5">
          {skillLevels.map((skill) => (
            <div key={skill.label}>
              <div className="mb-2 flex justify-between font-mono text-xs tracking-[0.1em] text-on-surface uppercase">
                <span>{skill.label}</span>
                <span>{skill.value}%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-surface-container-highest">
                <div className="skill-bar h-full rounded-full" style={{ width: `${skill.value}%` }} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="portfolio-container portfolio-section">
        <SectionHeading eyebrow="Temoignages" title="Une collaboration senior, claire et pragmatique." />
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="glass-card">
              <div className="mb-5 grid h-12 w-12 place-items-center rounded-full border border-primary/20 bg-primary/10 font-mono text-xs text-primary">
                {testimonial.name.slice(0, 2)}
              </div>
              <p className="text-lg leading-8">{testimonial.feedback}</p>
              <p className="mt-6 font-semibold text-on-surface">{testimonial.name}</p>
              <p className="font-mono text-xs tracking-[0.1em] text-tertiary uppercase">{testimonial.role}</p>
            </article>
          ))}
        </div>
      </section>

    </>
  );
}
