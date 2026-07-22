"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

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
    <header className="sticky top-0 z-50">
        <div className="flex items-center justify-between gap-6">
        <div>
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
        </div>

        <div className="cart-badge">
          <FontAwesomeIcon className="pr-2" icon={faCartShopping} />
          0
        </div>

      </div>
    </header>
  );
}