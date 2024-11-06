import Link from "next/link";
import { Icons } from "../icons";

import { Button } from "../ui/button";
import { Menu } from "./menu";
import { SwitchLanguage } from "./switch-language";

export function PublicHeader() {
  return (
    <header className="flex justify-between border-b border-border px-16 py-5">
      <div className="flex w-full justify-between">
        <div className="flex items-center gap-28">
          <Icons.logo />
          <Menu />
        </div>

        <div className="flex items-center gap-8">
          <div className="flex gap-3.5">
            <Button asChild>
              <Link href="/sign-in"> Log In </Link>
            </Button>

            <Button asChild>
              <Link href="/sign-up"> Sign Up </Link>
            </Button>
          </div>
          <SwitchLanguage />
        </div>
      </div>
    </header>
  );
}
