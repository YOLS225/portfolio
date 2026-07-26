type MetricCardProps = {
  label: string;
  value: string;
};

export function MetricCard({ label, value }: MetricCardProps) {
  return (
    <div className="glass-panel p-5">
      <p className="font-mono text-xs tracking-[0.1em] text-tertiary uppercase">{label}</p>
      <p className="mt-3 text-3xl font-semibold text-on-surface">{value}</p>
    </div>
  );
}
