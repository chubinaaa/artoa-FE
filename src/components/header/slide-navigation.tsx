"use client";
import { memo } from "react";
import {
  Sheet,
  SheetHeader,
  SheetContent,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet";
import { Icons } from "../icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuItems, topItems, buttonItems } from "./mobile-menu-items";

interface SlideMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const SlideMenu = ({ isOpen, onClose }: SlideMenuProps) => {
  const pathname = usePathname();

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent
        side="right"
        className="w-full bg-inherit p-0 text-foreground"
        aria-hidden={!isOpen}
      >
        <SheetHeader className="flex h-20 flex-row justify-between bg-secondary px-7 py-4">
          <Link href="/" onClick={onClose} aria-label="Logo ArtOa">
            <Icons.logo />
          </Link>
          <SheetClose>
            <Icons.menuButtonClose className="size-6" />
          </SheetClose>
        </SheetHeader>

        <nav className="gap-12">
          <MenuItems items={topItems} pathname={pathname} onClose={onClose} />
          <div className="flex justify-between border-b border-secondary-foreground px-6 py-4">
            <span>Language</span>
            <span>English</span>
          </div>
          <MenuItems
            items={buttonItems}
            pathname={pathname}
            onClose={onClose}
          />
        </nav>

        <SheetFooter className="mt-6 px-6 text-sm text-secondary-foreground">
          VERSION: 1.028
        </SheetFooter>

        <div className="absolute bottom-0 h-9 w-full border-b-4 bg-inherit"></div>
      </SheetContent>
    </Sheet>
  );
};

export default memo(SlideMenu);
