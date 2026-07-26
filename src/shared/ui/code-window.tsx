type CodeWindowProps = {
  lines: string[];
};

export function CodeWindow({ lines }: CodeWindowProps) {
  return (
    <div className="glass-panel overflow-hidden">
      <div className="flex gap-2 border-b border-glass-border px-5 py-4">
        <span className="h-3 w-3 rounded-full bg-error" />
        <span className="h-3 w-3 rounded-full bg-secondary" />
        <span className="h-3 w-3 rounded-full bg-tertiary" />
      </div>
      <pre className="overflow-x-auto p-5 text-sm leading-7 text-on-surface-variant">
        <code>
          {lines.map((line, index) => (
            <span key={`${line}-${index}`} className="block">
              <span className="mr-5 text-outline">{String(index + 1).padStart(2, "0")}</span>
              {line}
            </span>
          ))}
        </code>
      </pre>
    </div>
  );
}
