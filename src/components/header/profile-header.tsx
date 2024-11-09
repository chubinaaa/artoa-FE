import { Icons } from "../icons";
import Image from "next/image";
import { LanguageSwitcher } from "./language-switcher";

export function ProfileHeader() {
  return (
    <header className="container mx-auto flex h-22 items-center justify-between">
      <Icons.logo />
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
    </header>
  );
}
