import type { SiteData } from "@/shared/data/portfolio";
import { PageHero } from "@/shared/ui/page-hero";

type ContactPageProps = {
  site: SiteData;
};

export function ContactPage({ site }: ContactPageProps) {
  const contactItems = [
    { label: "Email", value: site.email, href: `mailto:${site.email}` },
    { label: "LinkedIn", value: "LinkedIn", href: site.socials.linkedin },
    { label: "GitHub", value: "GitHub", href: site.socials.github },
    { label: "Location", value: site.location, href: "#" },
  ];

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let us build a scalable product or backend system."
        description="Send a short brief about your application, API, data product, or AI idea. I will respond with the most practical next step."
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
            <span className="font-mono text-xs tracking-[0.1em] text-tertiary uppercase">Name</span>
            <input className="min-h-12 px-4" name="name" placeholder="Your name" />
          </label>
          <label className="grid gap-2">
            <span className="font-mono text-xs tracking-[0.1em] text-tertiary uppercase">Email</span>
            <input className="min-h-12 px-4" name="email" placeholder="you@company.com" type="email" />
          </label>
          <label className="grid gap-2">
            <span className="font-mono text-xs tracking-[0.1em] text-tertiary uppercase">Message</span>
            <textarea className="min-h-40 resize-y p-4" name="message" placeholder="Tell me about the product, backend, data, or AI system" />
          </label>
          <button className="btn-primary w-fit" type="button">
            Send message
          </button>
        </form>
      </section>
    </>
  );
}
