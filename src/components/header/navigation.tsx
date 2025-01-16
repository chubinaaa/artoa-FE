"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "Artists", href: "/artists" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact Us", href: "/contact-us" },
  { label: "test", href: "/job-order" },
];

export function Navigation() {
  // need add logic when user is authoriser  isStaf = true;
  const isStaf = false;

  const pathname = usePathname();

  return (
    <nav className="hidden lg:flex">
      <ul className="flex items-center justify-between gap-4 text-sm lg:gap-8">
        {menuItems.map((item) => (
          <li key={item.label}>
            <Link
              aria-label={`Navigate to ${item.label}`}
              tabIndex={0}
              href={item.href}
              className={cn("hover:text-primary", {
                "font-bold text-primary": pathname === item.href,
              })}
            >
              {item.label}
            </Link>
          </li>
        ))}
        {isStaf && (
          <li>
            <Link href="/monitoring" className="hover:text-primary">
              Monitoring (CTA)
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
