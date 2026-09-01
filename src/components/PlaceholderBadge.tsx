export function PlaceholderBadge({ label = "Contenido a confirmar" }: { label?: string }) {
  return <span className="placeholder-tag">{label}</span>;
}
