import { Icons } from "../icons";

import { Menu, MenuButton } from "./menu";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { HeaderButtons } from "./buttons";
export function PublicHeader() {
  return (
    <header className="flex w-full justify-between border-b border-border px-6 py-4 md:px-16 md:py-5">
      <div className="flex w-full justify-between">
        <div className="flex cursor-pointer items-center gap-28 max-md:gap-6 max-sm:gap-3">
          <MenuButton />
          <Icons.logo className="size-12 max-sm:size-8" />
          <Menu />
        </div>
        <div className="max-ms: flex items-center gap-2 md:gap-8">
          <Icons.avatarIcon className="block sm:hidden" />
          <HeaderButtons />
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}
