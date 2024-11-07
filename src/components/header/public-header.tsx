import { Icons } from "../icons";

import { Menu, MenuButton } from "./menu";
import { SwitchLanguage } from "./switch-language";
import { HeaderButtons } from "./buttons";
export function PublicHeader() {
  return (
    <header className="flex w-full justify-between border-b border-border px-6 py-4 md:px-16 md:py-5">
      <div className="flex w-full justify-between">
        <div className="flex cursor-pointer items-center gap-28 max-sm:gap-3">
          <MenuButton />
          <Icons.logo />
          <Menu />
        </div>

        <div className="flex items-center gap-8">
          <HeaderButtons />
          <SwitchLanguage />
        </div>
      </div>
    </header>
  );
}
