"use client";

import { Icons } from "../icons";
import { LanguageSwitcher } from "./language-switcher";
import { MenuButton } from "./menu-button";
import SlideMenu from "./slide-navigation";
import { useState } from "react";

export function ProfileHeader() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openMenu = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  return (
    <header className="border-b bg-secondary">
      <div className="container mx-auto flex h-22 items-center justify-between">
        <Icons.logo aria-label="Logo Artoa.io" />

        <div className="flex gap-3">
          <Icons.avatarIcon className="size-10 rounded-full bg-secondary-foreground p-1.5" />
          <LanguageSwitcher />
          <MenuButton openMenu={openMenu} />
          <SlideMenu isOpen={isOpen} onClose={onClose} />
        </div>
      </div>
    </header>
  );
}
