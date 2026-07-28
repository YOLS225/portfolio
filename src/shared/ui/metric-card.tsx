type MetricCardProps = {
  label: string;
  value: string;
};

export function MetricCard({ label, value }: MetricCardProps) {
  return (
    <div className="glass-panel min-w-0 p-4 sm:p-5">
      <p className="break-words font-mono text-xs tracking-[0.1em] text-tertiary uppercase">{label}</p>
      <p className="mt-3 text-3xl font-semibold text-on-surface">{value}</p>
    </div>
  );
}
