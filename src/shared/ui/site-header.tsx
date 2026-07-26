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
    <header className="pointer-events-none fixed inset-x-0 top-4 z-50 px-4">
      <nav className="dock pointer-events-auto mx-auto flex w-full max-w-3xl items-center justify-between gap-3 px-4 py-3">
        <Link
          href="/"
          className="group relative rounded-full border border-tertiary/20 bg-white/[0.04] px-3 py-2 font-mono text-xs font-semibold tracking-[0.14em] uppercase no-underline shadow-[0_0_24px_rgb(76_215_246_/_0.08)] transition hover:border-tertiary/50 hover:bg-tertiary/10"
        >
          <span className="bg-gradient-to-r from-tertiary via-primary to-secondary bg-clip-text text-transparent">
            {logo}
          </span>
          <span className="absolute inset-x-3 -bottom-px h-px bg-gradient-to-r from-transparent via-tertiary/80 to-transparent opacity-60 transition group-hover:opacity-100" />
        </Link>
        <div className="flex items-center gap-1 overflow-x-auto">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm text-on-surface-variant no-underline transition hover:bg-white/[0.06] hover:text-tertiary"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
