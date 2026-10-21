import type { ReactNode } from "react";
type SectionLabelProps = { children: ReactNode; className?: string };
export default function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return <div className={`section-number reveal ${className}`.trim()}><span>{children}</span><i aria-hidden="true" /></div>;
}
