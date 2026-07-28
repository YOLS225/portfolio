type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  children?: React.ReactNode;
};

export function PageHero({ eyebrow, title, description, children }: PageHeroProps) {
  return (
    <section className="portfolio-container pt-44 pb-14 sm:pt-36 sm:pb-16 md:pt-40">
      <div className="max-w-4xl">
        <p className="chip mb-6">{eyebrow}</p>
        <h1 className="max-w-4xl text-balance">{title}</h1>
        <p className="mt-6 max-w-2xl text-base leading-7 sm:text-lg sm:leading-8">{description}</p>
        {children ? <div className="mt-8">{children}</div> : null}
      </div>
    </section>
  );
}
