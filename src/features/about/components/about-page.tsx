import Image from "next/image";

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
        eyebrow="A propos"
        title="Developpeur fullstack oriente architecture scalable et produits IA."
        description="Je construis des applications web modernes, des systemes backend et des produits data-driven avec un interet fort pour la clean architecture, les tests, le cloud et l'intelligence artificielle."
      />

      <section className="portfolio-container grid gap-10 pb-24 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="glass-card min-h-[460px] overflow-hidden p-0">
          <div className="relative h-full min-h-[460px] rounded-xl border border-glass-border bg-gradient-to-br from-primary-container/40 via-secondary-container/25 to-tertiary-container/30">
            <Image
              src="/yoann.png"
              alt="Portrait de Yoann Lasm"
              fill
              sizes="(max-width: 1024px) 100vw, 38vw"
              className="object-cover object-[50%_28%] grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
            <div className="absolute inset-x-6 bottom-6">
              <p className="font-mono text-xs tracking-[0.1em] text-tertiary uppercase">{profile.role}</p>
              <p className="mt-2 text-2xl font-semibold text-white">{profile.name}</p>
            </div>
          </div>
        </div>

        <div>
          <SectionHeading eyebrow="Profil" title="Solidite backend, sensibilite produit et execution disciplinee." />
          <p className="text-base leading-7 sm:text-lg sm:leading-8">
            Je travaille entre frontend et backend, avec un focus particulier sur le design d&apos;API, la modelisation des
            donnees, les frontieres de systeme et les fondations produit fiables. J&apos;aime les codebases explicites,
            testables et assez structurees pour evoluer sans ralentir l&apos;equipe.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {profile.expertise.map((item) => (
              <div key={item} className="glass-panel px-4 py-3 text-on-surface">
                {item}
              </div>
            ))}
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
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
            "  architecture: 'propre et scalable';",
            "  backend: 'API, data, fiabilite';",
            "  frontend: 'interfaces produit modernes';",
            "  ai: 'integrations produit concretes';",
            "};",
          ]}
        />
      </section>
    </>
  );
}
