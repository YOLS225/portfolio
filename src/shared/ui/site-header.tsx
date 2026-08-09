import Link from "next/link";

import { siteConfig as fallbackSiteConfig } from "@/shared/config/site";
import type { ProfileData, SiteData } from "@/shared/data/portfolio";

type SiteHeaderProps = {
  profile?: ProfileData;
  site?: SiteData;
};

export function SiteHeader({ profile, site = fallbackSiteConfig }: SiteHeaderProps) {
  const logo = profile?.logo || site.logo;

  return (
    <header className="pointer-events-none fixed inset-x-0 top-3 z-50 px-3 sm:top-4 sm:px-4">
      <nav className="dock pointer-events-auto mx-auto flex w-full max-w-5xl flex-col items-stretch gap-2 px-3 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-3 sm:px-4">
        <Link
          href="/"
          className="group relative inline-flex min-w-0 max-w-full justify-center rounded-full border border-primary/20 bg-primary/10 px-3 py-2 font-mono text-xs font-semibold tracking-[0.14em] text-primary uppercase no-underline transition hover:border-primary/40 hover:bg-primary/15 sm:shrink-0"
        >
          <span className="truncate">{logo}</span>
          <span className="absolute inset-x-3 -bottom-px h-px bg-primary/60 opacity-60 transition group-hover:opacity-100" />
        </Link>
        <div className="-mx-1 flex min-w-0 items-center gap-1 overflow-x-auto px-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="shrink-0 rounded-full px-3 py-2 text-sm text-on-surface-variant no-underline transition hover:bg-primary/10 hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
