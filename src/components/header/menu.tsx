import Link from "next/link";
import { Icons } from "../icons";

export function MenuButton() {
  return (
    <div className="md: hidden cursor-pointer max-sm:flex">
      <Icons.menuButton />
    </div>
  );
}

export function Menu() {
  const MenuItems = [
    { label: "Home", url: "/" },
    { label: "Artists", url: "/artists" },
    { label: "Services", url: "/services" },
    { label: "About", url: "/about" },
    { label: "Contact Us", url: "/contact" },
  ];

  return (
    <nav className="md: flex max-sm:hidden">
      <ul className="flex items-center justify-between gap-12">
        {MenuItems.map((item) => (
          <li key={item.label}>
            <Link href={item.url} className="hover:text-primary">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
