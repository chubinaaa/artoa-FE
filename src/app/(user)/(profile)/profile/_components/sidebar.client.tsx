"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";

import { profileConfig } from "@/config/profile";
import { cn } from "@/lib/utils";
import { SheetClose } from "@/components/ui/sheet";

export function Sidebar({ withSheetClose }: { withSheetClose?: boolean }) {
  const [SheetCloseWrapper, sheetCloseWrapperProps] = withSheetClose
    ? [SheetClose, { asChild: true }]
    : [React.Fragment, {}];

  const pathname = usePathname();

  return (
    <div className="flex flex-col">
      {profileConfig.sidebarItems.map((item) => {
        const Icon = item.icon;
        return (
          <SheetCloseWrapper {...sheetCloseWrapperProps} key={item.href}>
            <Link
              className={cn(
                "inline-flex items-center gap-4 rounded-md p-4 font-semibold text-muted-foreground transition-colors hover:bg-foreground/10 hover:text-primary",
                {
                  "bg-foreground/10 text-primary": item.href === pathname,
                },
              )}
              href={item.href}
            >
              <Icon className="size-6" /> {item.label}
            </Link>
          </SheetCloseWrapper>
        );
      })}
    </div>
  );
}
