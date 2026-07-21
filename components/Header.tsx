"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Start", href: "/" },
  { label: "Vehicles", href: "/vehicles" },
  { label: "Fit Check", href: "/fit-check" },
];

export default function Header() {
  const pathname = usePathname();

  const activeIndex = navLinks.findIndex((link) => {
    if (link.href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(link.href);
  });

  return (
    <header>
      <h2>Will It Fit?</h2>

      <nav>
        {navLinks.map((link, index) => {
          const isActive = index === activeIndex;
          const isPast = index < activeIndex;

          let className = "nav-link nav-link--future";

          if (isPast) {
            className = "nav-link nav-link--past";
          }

          if (isActive) {
            className = "nav-link nav-link--active";
          }

          return (
            <Link key={link.href} href={link.href} className={className}>
              {link.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}