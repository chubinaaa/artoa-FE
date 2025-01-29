"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { profileConfig } from "@/config/profile";
import { cn } from "@/lib/utils";

export function ProfileSidebar() {
  const pathname = usePathname();
  return (
    <aside className="h-fit rounded-2xl border border-muted-foreground bg-secondary px-6 py-4 max-lg:hidden">
      <div className="flex flex-col">
        {profileConfig.sidebarItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              className={cn(
                "inline-flex items-center gap-4 rounded-md p-4 font-semibold text-muted-foreground transition-colors hover:bg-foreground/10 hover:text-primary",
                {
                  "bg-foreground/10 text-primary": item.href === pathname,
                },
              )}
              href={item.href}
              key={item.label}
            >
              <Icon className="size-6" /> {item.label}
            </Link>
          );
        })}
      </div>
    </aside>
  );
}
