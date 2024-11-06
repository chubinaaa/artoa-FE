import Link from "next/link";

export function Menu() {
  return (
    <nav className="flex">
      <ul className="flex items-end justify-between gap-12">
        <li>
          <Link href={"/"} className="hover:text-primary">
            Home
          </Link>
        </li>
        <li>
          <Link href={"/artists"} className="hover:text-primary">
            Artists
          </Link>
        </li>
        <li>
          <Link href={"/services"} className="hover:text-primary">
            Services
          </Link>
        </li>
        <li>
          <Link href={"/about"} className="hover:text-primary">
            About
          </Link>
        </li>
        <li>
          <Link href={"/contact"} className="hover:text-primary">
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
}
