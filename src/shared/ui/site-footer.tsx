import Link from "next/link";

import { siteConfig as fallbackSiteConfig } from "@/shared/config/site";
import type { SiteData } from "@/shared/data/portfolio";

type SiteFooterProps = {
  site?: SiteData;
};

export function SiteFooter({ site = fallbackSiteConfig }: SiteFooterProps) {
  return (
    <footer className="portfolio-container flex flex-col gap-5 border-t border-glass-border py-10 text-sm text-on-surface-variant md:flex-row md:items-center md:justify-between">
      <p>Copyright 2026 {site.name}. Built with Next.js and a luminous dark design system.</p>
      <div className="flex flex-wrap gap-4">
        <Link href="/projects">Projects</Link>
        <a href={site.socials.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href={site.socials.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href={site.socials.twitter} target="_blank" rel="noreferrer">
          Twitter/X
        </a>
        <a href={`mailto:${site.email}`}>Email</a>
      </div>
    </footer>
  );
}
