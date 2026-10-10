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
      <section className="portfolio-container home-hero">
        <div className="hero-portrait">
          <div className="hero-photo">
            <Image
              src="/yoann1.jpeg"
              alt="Yoann Lasm au travail sur un produit logiciel"
              fill
              sizes="(max-width: 768px) 90vw, 40vw"
              className="hero-image"
              preload
            />
          </div>
          <span className="portrait-caption">Architecture / Backend / IA</span>
          <Link href="/contact" className="hero-contact" aria-label="Discutons de votre projet">
            <span>Un projet ?</span>
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <div className="hero-copy">
          <p className="hero-eyebrow">Bonjour, je suis</p>
          <h1>{profile.name}<span className="text-primary">.</span></h1>
          <h2 className="hero-statement">Je construis des produits web fiables et intuitifs.</h2>
          <p className="hero-role">{profile.role}</p>
          <p className="hero-intro">{profile.intro}</p>
          <div className="hero-actions">
            <Link href="/projects" className="btn-primary">Voir mes projets <span aria-hidden="true">↗</span></Link>
            <Link href="/about" className="btn-secondary">À propos de moi</Link>
          </div>
        </div>
      </section>
      <div className="portfolio-container home-stats">
        {stats.slice(0, 4).map((stat) => (
          <MetricCard key={stat.label} label={stat.label} value={stat.value} />
        ))}
      </div>

      <section className="portfolio-container portfolio-section">
        <SectionHeading
          eyebrow="Ma boîte à outils"
          title="De l’idée à la mise en production."
          description="Les technologies que j’utilise pour concevoir, développer et livrer des applications solides."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
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
          eyebrow="Projets sélectionnés"
          title="Une sélection de mon travail."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="portfolio-container portfolio-section grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <SectionHeading eyebrow="Compétences" title="Du produit à l’architecture." />
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
        <SectionHeading eyebrow="Témoignages" title="Leurs mots, notre collaboration." />
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

      <section className="portfolio-container home-contact-section">
        <p className="hero-eyebrow">Et si on travaillait ensemble ?</p>
        <h2>Une idée en tête<span className="text-primary"> ?</span></h2>
        <Link href="/contact" className="btn-primary">Parlons de votre projet <span aria-hidden="true">↗</span></Link>
      </section>
    </>
  );
}
