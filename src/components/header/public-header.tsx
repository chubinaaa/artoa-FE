import { Icons } from "../icons";
import { MenuButton } from "./menu-button";
import { Navigation } from "./navigation";
import { HeaderButtons } from "./buttons";
import { LanguageSwitcher } from "./language-switcher";
import Link from "next/link";

export function PublicHeader() {
  return (
    <header className="flex w-full justify-between border-b border-border px-6 py-4 md:px-16 md:py-5">
      <div className="flex w-full justify-between">
        <div className="flex items-center gap-6 md:gap-16 lg:gap-28">
          <MenuButton />
          <Link href={"/"}>
            <Icons.logo className="size-12 cursor-pointer max-sm:size-8" />
          </Link>
          <Navigation />
        </div>
        <div className="max-ms: flex items-center gap-3 sm:gap-4 md:gap-6">
          <Icons.avatarIcon className="block md:block lg:hidden" />
          <HeaderButtons />
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}
