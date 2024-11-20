import Link from "next/link";

import { FooterConfig } from "@/config/footer";
import { cn } from "@/lib/utils";

export function FooterTopMenuGroup({
  items,
}: {
  items: FooterConfig["topItems"][keyof FooterConfig["topItems"]];
}) {
  return (
    <ul className="flex min-w-fit flex-col gap-2 leading-5 md:gap-4">
      {items.map((item) => (
        <li
          key={item.label}
          className={cn({
            "mb-1.5 font-bold md:mb-4": item.isTitle,
          })}
        >
          {item.href ? (
            <Link
              href={item.href}
              className="transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ) : (
            <span>{item.label}</span>
          )}
        </li>
      ))}
    </ul>
  );
}
