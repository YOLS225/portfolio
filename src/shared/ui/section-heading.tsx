type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="chip mb-4">{eyebrow}</p>
      <h2>{title}</h2>
      {description ? <p className="mt-4 text-lg leading-8">{description}</p> : null}
    </div>
  );
}
