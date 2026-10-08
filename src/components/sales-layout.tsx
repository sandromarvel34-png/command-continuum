import type { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  tone: "dark" | "light" | "muted";
  id?: string;
  className?: string;
};
export function SalesSection({ children, tone, id, className = "" }: SectionProps) {
  return (
    <section id={id} className={`sales-section sales-${tone} ${className}`}>
      <div className="sales-container">{children}</div>
    </section>
  );
}
export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="sales-eyebrow">{children}</p>;
}
export function SectionHeading({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="sales-section-heading">
      <Eyebrow>{label}</Eyebrow>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}
