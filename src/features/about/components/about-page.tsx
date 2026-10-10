import Link from "next/link";

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
        <aside className="engineering-panel" aria-label="Ma démarche de résolution de problèmes">
          <div className="engineering-panel-top">
            <span className="section-eyebrow">Penser en systèmes</span>
            <span className="font-mono text-xs text-on-surface-variant">01 → 04</span>
          </div>
          <h2 className="mt-8 text-3xl">De la complexité<br />à la clarté<span className="text-primary">.</span></h2>
          <p className="mt-4 text-sm leading-7">Décomposer le problème. Relier les idées. Construire une solution qui tient.</p>
          <ol className="engineering-steps">
            {[
              { title: "Comprendre", detail: "Questionner le besoin, les usages et les contraintes." },
              { title: "Décomposer", detail: "Isoler les causes, les responsabilités et les dépendances." },
              { title: "Concevoir", detail: "Comparer les options et choisir des compromis explicites." },
              { title: "Valider", detail: "Tester, mesurer et améliorer avec le retour du terrain." },
            ].map((step, index) => (
              <li key={step.title}>
                <span className="engineering-step-number" aria-hidden="true">0{index + 1}</span>
                <div><h3 className="text-base">{step.title}</h3><p className="mt-1 text-sm leading-6">{step.detail}</p></div>
              </li>
            ))}
          </ol>
          <div className="engineering-result"><span aria-hidden="true">↗</span> Une solution simple, testable et évolutive.</div>
        </aside>

        <div>
          <SectionHeading eyebrow="Profil" title="Solidite backend, sensibilite produit et execution disciplinee." />
          <p className="text-base leading-7 sm:text-lg sm:leading-8">
            Je travaille entre frontend et backend, avec un focus particulier sur le design d&apos;API, la modelisation des
            donnees, les frontieres de systeme et les fondations produit fiables. J&apos;aime les codebases explicites,
            testables et assez structurees pour evoluer sans ralentir l&apos;equipe.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/projects" className="btn-primary">
              Voir les projets
            </Link>
          </div>
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
