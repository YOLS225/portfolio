import Link from "next/link";

import type { Project } from "@/shared/config/projects";
import type {
  ProfileData,
  SiteData,
  SkillLevel,
  TechStackGroup,
  TestimonialItem,
} from "@/shared/data/portfolio";
import { CodeWindow } from "@/shared/ui/code-window";
import { MetricCard } from "@/shared/ui/metric-card";
import { ProjectCard } from "@/shared/ui/project-card";
import { SectionHeading } from "@/shared/ui/section-heading";

type HomePageProps = {
  featuredProjects: Project[];
  profile: ProfileData;
  site: SiteData;
  skillLevels: SkillLevel[];
  stats: { label: string; value: string }[];
  techStack: TechStackGroup[];
  testimonials: TestimonialItem[];
};

export function HomePage({
  featuredProjects,
  profile,
  site,
  skillLevels,
  stats,
  techStack,
  testimonials,
}: HomePageProps) {
  return (
    <>
      <section className="portfolio-container relative grid min-h-[96vh] items-center gap-10 overflow-hidden pt-32 pb-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="hero-orbit left-[8%] top-[18%]" />
        <div className="hero-orbit right-[12%] bottom-[18%]" />
        <div className="relative z-10">
          <p className="chip mb-6">{profile.role}</p>
          <h1 className="max-w-4xl text-balance">{profile.name}</h1>
          <div className="mt-5 flex flex-wrap gap-3 font-mono text-sm tracking-[0.1em] text-tertiary uppercase">
            {profile.roles.map((role) => (
              <span key={role}>{role}</span>
            ))}
          </div>
          <p className="mt-6 max-w-2xl text-lg leading-8">{profile.intro}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/projects" className="btn-primary">
              View Projects
            </Link>
            <a href="/resume" className="btn-secondary" download>
              Download Resume
            </a>
            <Link href="/contact" className="btn-secondary">
              Contact Me
            </Link>
          </div>
        </div>
        <div className="relative z-10 space-y-4">
          <div className="float-snippet">
            <CodeWindow
              lines={[
                "const developer = {",
                `  name: '${profile.name}',`,
                "  focus: ['backend', 'fullstack', 'ai'],",
                "  builds: 'scalable products',",
                "};",
              ]}
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            {stats.slice(0, 4).map((stat) => (
              <MetricCard key={stat.label} label={stat.label} value={stat.value} />
            ))}
          </div>
        </div>
      </section>

      <section className="portfolio-container portfolio-section">
        <SectionHeading
          eyebrow="Tech stack"
          title="Tools for scalable web, backend, cloud, data, and AI systems."
          description="A practical stack focused on modern delivery, maintainable architecture, and production-ready applications."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {techStack.map((group) => (
            <article key={group.category} className="glass-card">
              <div className="mb-5 grid h-12 w-12 place-items-center rounded-lg border border-tertiary/20 bg-tertiary/10 font-mono text-sm text-tertiary">
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
          eyebrow="Featured projects"
          title="Applications and APIs built with clean technical foundations."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="portfolio-container portfolio-section grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <SectionHeading eyebrow="Skills" title="Balanced execution across product and engineering layers." />
        <div className="glass-card space-y-5">
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

      <section className="portfolio-container portfolio-section">
        <SectionHeading eyebrow="Testimonials" title="A practical, senior engineering collaboration style." />
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="glass-card">
              <div className="mb-5 h-12 w-12 rounded-full border border-glass-border bg-gradient-to-br from-primary-container to-tertiary-container" />
              <p className="text-lg leading-8">{testimonial.feedback}</p>
              <p className="mt-6 font-semibold text-on-surface">{testimonial.name}</p>
              <p className="font-mono text-xs tracking-[0.1em] text-tertiary uppercase">{testimonial.role}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="portfolio-container portfolio-section">
        <div className="glass-card grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="chip mb-5">GitHub</p>
            <h2>Latest repositories and contribution activity.</h2>
            <p className="mt-4">
              A visual placeholder for contribution history, recent repositories, and ongoing technical exploration.
            </p>
            <a className="btn-secondary mt-6" href={site.socials.github} target="_blank" rel="noreferrer">
              View GitHub
            </a>
          </div>
          <div className="grid grid-cols-12 gap-2">
            {Array.from({ length: 84 }).map((_, index) => (
              <span
                key={index}
                className="aspect-square rounded-sm bg-tertiary/10"
                style={{ opacity: 0.25 + (index % 7) * 0.1 }}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
