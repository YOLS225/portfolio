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
      <section className="portfolio-container grid gap-8 pb-24 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="space-y-4">
          {contactItems.map((item) => (
            <a key={item.label} className="glass-card block no-underline" href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
              <p className="font-mono text-xs tracking-[0.1em] text-tertiary uppercase">{item.label}</p>
              <p className="mt-2 text-xl font-semibold text-on-surface">{item.value}</p>
            </a>
          ))}
        </div>
        <form className="glass-card grid gap-4">
          <label className="grid gap-2">
            <span className="font-mono text-xs tracking-[0.1em] text-tertiary uppercase">Nom</span>
            <input className="min-h-12 px-4" name="name" placeholder="Ton nom" />
          </label>
          <label className="grid gap-2">
            <span className="font-mono text-xs tracking-[0.1em] text-tertiary uppercase">Email</span>
            <input className="min-h-12 px-4" name="email" placeholder="you@company.com" type="email" />
          </label>
          <label className="grid gap-2">
            <span className="font-mono text-xs tracking-[0.1em] text-tertiary uppercase">Message</span>
            <textarea className="min-h-40 resize-y p-4" name="message" placeholder="Parle-moi du produit, du backend, de la data ou du systeme IA" />
          </label>
          <button className="btn-primary w-fit" type="button">
            Envoyer le message
          </button>
        </form>
      </section>
    </>
  );
}
