import Image from "next/image";

import type { ProfileData, SiteData } from "@/shared/data/portfolio";
import { PageHero } from "@/shared/ui/page-hero";

type ContactPageProps = {
  profile: ProfileData;
  site: SiteData;
};

export function ContactPage({ profile, site }: ContactPageProps) {
  const contactItems = [
    { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { label: "LinkedIn", value: "LinkedIn", href: site.socials.linkedin },
    { label: "GitHub", value: "GitHub", href: site.socials.github },
    { label: "Localisation", value: profile.location, href: "#" },
  ];

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Construisons un produit ou un backend scalable."
        description="Envoie un court brief sur ton application, ton API, ton produit data ou ton idee IA. Je repondrai avec la prochaine etape la plus concrete."
      />
      <section className="portfolio-container grid gap-8 pb-24 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-4">
          <div className="glass-card min-h-[460px] overflow-hidden p-0">
            <div className="relative h-full min-h-[460px] rounded-xl border border-glass-border bg-surface-container">
              <Image
                src="/yoann.png"
                alt="Portrait professionnel de Yoann Lasm"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-[50%_26%] grayscale"
              />
              <div className="absolute inset-x-5 bottom-5 rounded-xl border border-glass-border bg-background/88 p-5 backdrop-blur-md">
                <p className="font-mono text-xs tracking-[0.1em] text-primary uppercase">Disponibilite</p>
                <p className="mt-2 text-lg font-semibold text-on-surface">Discussion projet, API, data ou IA.</p>
              </div>
            </div>
          </div>
          {contactItems.map((item) => (
            <a key={item.label} className="glass-card block min-w-0 no-underline" href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
              <p className="font-mono text-xs tracking-[0.1em] text-tertiary uppercase">{item.label}</p>
              <p className="mt-2 break-words text-lg font-semibold text-on-surface sm:text-xl">{item.value}</p>
            </a>
          ))}
        </div>
        <div className="glass-card grid content-start gap-8">
          <div>
            <p className="chip mb-5">Collaboration</p>
            <h2>Un premier echange clair, sans friction.</h2>
            <p className="mt-4 text-base leading-7 sm:text-lg sm:leading-8">
              Partage le contexte, les objectifs, les contraintes techniques et ce que tu veux livrer. Je peux intervenir
              sur la conception backend, l&apos;architecture fullstack, l&apos;integration IA ou la structuration d&apos;un MVP.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {[
              { label: "Reponse", value: "Sous 24-48h" },
              { label: "Format", value: "Remote / hybride" },
              { label: "Focus", value: "API, web, data, IA" },
              { label: "Langues", value: "Francais / anglais" },
            ].map((item) => (
              <div key={item.label} className="glass-panel p-4">
                <p className="font-mono text-xs tracking-[0.1em] text-primary uppercase">{item.label}</p>
                <p className="mt-2 font-semibold text-on-surface">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="grid gap-3 sm:flex">
            <a className="btn-primary" href={`mailto:${profile.email}`}>
              Envoyer un email
            </a>
            <a className="btn-secondary" href={site.socials.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
