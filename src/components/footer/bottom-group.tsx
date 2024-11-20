import Link from "next/link";

import { FooterConfig } from "@/config/footer";

export function BottomLinkGroup({
  items,
}: {
  items: FooterConfig["bottomItems"];
}) {
  return (
    <ul className="flex items-center gap-5 text-xs leading-4 2xl:gap-6">
      {items.map((item) => (
        <li key={item.label}>
          <Link
            href={item.href}
            className="transition-colors hover:text-primary"
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
