import Link from "next/link";

import { Icons } from "../icons";
import { HeaderButtons } from "./buttons";
import { LanguageSwitcher } from "./language-switcher";
import { MenuButton } from "./menu-button";
import { Navigation } from "./navigation";

export function PublicHeader() {
  return (
    <header className="flex w-full justify-between border-b border-border px-6 py-4 lg:px-14 lg:py-5">
      <div className="flex w-full justify-between">
        <div className="flex items-center md:gap-8 lg:gap-28">
          <Link href={"/"} aria-label="Logo ArtOa">
            <Icons.logo className="size-12 cursor-pointer md:size-8" />
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
