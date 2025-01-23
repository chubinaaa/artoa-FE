import { Icons } from "../icons";
import { LanguageSwitcher } from "./language-switcher";
import { Navigation } from "./navigation";
import { Button } from "../ui/button";
import Link from "next/link";

export function ProfileHeader() {
  return (
    <header className="border-b bg-secondary">
      <div className="container mx-auto flex h-22 items-center justify-between">
        <div className="flex items-center md:gap-8 lg:gap-28">
          <Link href={"/"} aria-label="Logo ArtOa">
            <Icons.logo className="size-8 cursor-pointer lg:size-16" />
          </Link>
          <Navigation />
        </div>
        <div className="flex items-center gap-5">
          <Button asChild variant="default">
            <Link href={"./add-order"}>Share Your Work</Link>
          </Button>
          <div className="flex gap-3">
            <Icons.avatarIcon className="size-10 rounded-full bg-secondary-foreground p-1.5" />
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
}
