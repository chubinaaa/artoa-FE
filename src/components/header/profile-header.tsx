import Image from "next/image";

import { Icons } from "../icons";
import { LanguageSwitcher } from "./language-switcher";

export function ProfileHeader() {
  return (
    <header className="border-b bg-secondary">
      <div className="container mx-auto flex h-22 items-center justify-between">
        <Icons.logo aria-label="Logo Artoa.io" />
        <div className="flex items-center gap-3">
          <Image
            src="/placeholder.svg"
            alt="placeholder"
            width={40}
            height={40}
            className="size-5 rounded-full"
          />
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}
