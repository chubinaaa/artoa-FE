import Link from "next/link";
import { cn } from "@/lib/utils";

const topItems = [
  { label: "Home", href: "/" },
  { label: "Artists", href: "/artists" },
  { label: "Services", href: "/services" },
  { label: "AI-generated abstract wall art", href: "/AI-generated" },
];
const buttonItems = [
  { label: "About", href: "/about" },
  { label: "Data Privacy", href: "/Privacy" },
  { label: "FAQ", href: "/FAQ" },
  { label: "Sign Out", href: "/sign-ut" },
];

export { topItems, buttonItems };

export function MenuItems({
  items,
  pathname,
  onClose,
}: {
  items: { label: string; href: string }[];
  pathname: string;
  onClose: () => void;
}) {
  return (
    <ul className="gap-2 pt-4">
      {items.map((item) => (
        <li
          key={item.label}
          className="border-b border-foreground px-6 py-4 text-sm"
        >
          <Link
            href={item.href}
            aria-label={`Navigate to ${item.label}`}
            tabIndex={0}
            onClick={onClose}
            className={cn("hover:text-primary", {
              "font-bold text-primary": pathname === item.href,
            })}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
