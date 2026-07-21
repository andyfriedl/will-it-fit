type CardProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "success" | "warning";
  href?: string;
};

export default function Card({
  children,
  className,
  variant = "primary",
  href,
}: CardProps) {
  const cardClassName = `card card--${variant} ${href ? "card--clickable" : ""} ${className || ""}`;

  if (href) {
    return (
      <a href={href} className={cardClassName}>
        {children}
      </a>
    );
  }

  return <section className={cardClassName}>{children}</section>;
}