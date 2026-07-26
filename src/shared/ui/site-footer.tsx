import Link from "next/link";

import { siteConfig as fallbackSiteConfig } from "@/shared/config/site";
import type { ProfileData, SiteData } from "@/shared/data/portfolio";

type SiteFooterProps = {
  profile?: ProfileData;
  site?: SiteData;
};

export function SiteFooter({ profile, site = fallbackSiteConfig }: SiteFooterProps) {
  const email = profile?.email || site.email;

  return (
    <footer className="portfolio-container flex flex-col gap-5 border-t border-glass-border py-10 text-sm text-on-surface-variant md:flex-row md:items-center md:justify-between">
      <p>{"Copyright 2026 YOLS TECHNOLOGIES. Tous droits reservés."}</p>
      <div className="flex flex-wrap gap-4">
        <Link href="/projects">Projets</Link>
        <a href={site.socials.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href={site.socials.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href={`mailto:${email}`}>Email</a>
      </div>
    </footer>
  );
}
