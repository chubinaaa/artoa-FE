import Link from "next/link";

const menuItems = [
  { label: "Home", url: "/" },
  { label: "Artists", url: "/artists" },
  { label: "Services", url: "/services" },
  { label: "About", url: "/about" },
  { label: "Contact Us", url: "/contact-us" },
];

export function Navigation() {
  return (
    <nav className="hidden lg:flex">
      <ul className="flex items-center justify-between gap-12">
        {menuItems.map((item) => (
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
