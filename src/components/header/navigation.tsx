"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { label: "Home", url: "/" },
  { label: "Artists", url: "/artists" },
  { label: "Services", url: "/services" },
  { label: "About", url: "/about" },
  { label: "Contact Us", url: "/contact-us" },
];

function isActiveMenuItem(cuurentPath: string, itemUrl: string): boolean {
  return cuurentPath === itemUrl;
}

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
              href={item.url}
              className={`hover:text-primary ${
                isActiveMenuItem(pathname, item.url)
                  ? "font-bold text-primary"
                  : ""
              }`}
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
