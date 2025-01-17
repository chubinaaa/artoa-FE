import { Icons } from "../icons";
import { MenuButton } from "./menu-button";
import { Navigation } from "./navigation";
import { HeaderButtons } from "./buttons";
import { LanguageSwitcher } from "./language-switcher";
import Link from "next/link";

export function PublicHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-22 w-full items-center justify-between">
        <div className="flex items-center md:gap-8 lg:gap-28">
          <Link href={"/"} aria-label="Logo ArtOa">
            <Icons.logo className="size-8 cursor-pointer lg:size-16" />
          </Link>
          <Navigation />
        </div>
        <div className="max-ms: flex items-center gap-3 sm:gap-4 md:gap-6">
          <HeaderButtons />
          <LanguageSwitcher />
        </div>
        <MenuButton />
      </div>
    </header>
  );
}
