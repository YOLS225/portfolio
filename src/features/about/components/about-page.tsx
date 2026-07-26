import type { ProfileData } from "@/shared/data/portfolio";
import { CodeWindow } from "@/shared/ui/code-window";
import { MetricCard } from "@/shared/ui/metric-card";
import { PageHero } from "@/shared/ui/page-hero";
import { SectionHeading } from "@/shared/ui/section-heading";

type AboutPageProps = {
  profile: ProfileData;
  stats: { label: string; value: string }[];
};

export function AboutPage({ profile, stats }: AboutPageProps) {
  return (
    <>
      <PageHero
        eyebrow="About me"
        title="Fullstack developer focused on scalable architecture and AI-enabled products."
        description="I build modern web applications, backend systems, and data-driven products with a strong interest in clean architecture, testing, cloud deployment, and artificial intelligence."
      />

      <section className="portfolio-container grid gap-10 pb-24 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="glass-card min-h-[460px]">
          <div className="grid h-full place-items-center rounded-xl border border-glass-border bg-gradient-to-br from-primary-container/40 via-secondary-container/25 to-tertiary-container/30 p-8 text-center">
            <div>
              <div className="mx-auto mb-6 grid h-28 w-28 place-items-center rounded-full border border-white/20 bg-black/30 font-mono text-3xl text-tertiary">
                YL
              </div>
              <p className="font-mono text-xs tracking-[0.1em] text-white/75 uppercase">Professional portrait placeholder</p>
            </div>
          </div>
        </div>

        <div>
          <SectionHeading eyebrow="Profile" title="Backend strength, product sensibility, and disciplined delivery." />
          <p className="text-lg leading-8">
            I work across frontend and backend, with a deeper focus on API design, database modeling, system boundaries,
            and reliable product foundations. I like codebases that are explicit, testable, and structured enough to
            evolve without slowing the team down.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {profile.expertise.map((item) => (
              <div key={item} className="glass-panel px-4 py-3 text-on-surface">
                {item}
              </div>
            ))}
          </div>
          <div className="mt-8 grid grid-cols-2 gap-3">
            {stats.slice(0, 4).map((stat) => (
              <MetricCard key={stat.label} label={stat.label} value={stat.value} />
            ))}
          </div>
        </div>
      </section>

      <section className="portfolio-container pb-24">
        <CodeWindow
          lines={[
            "type Focus = {",
            "  architecture: 'clean and scalable';",
            "  backend: 'APIs, data, reliability';",
            "  frontend: 'modern product interfaces';",
            "  ai: 'practical product integrations';",
            "};",
          ]}
        />
      </section>
    </>
  );
}
