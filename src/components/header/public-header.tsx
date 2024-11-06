import Link from "next/link";
import { Icons } from "../icons";

import { Button } from "../ui/button";

export function PublicHeader() {
  return (
    <header className="flex justify-between border-b border-border px-16 py-5">
      <div className="flex w-full justify-between">
        <div className="flex gap-28">
          <Icons.logo />

          <nav className="flex">
            <ul className="flex items-end justify-between gap-12">
              <li>
                <Link href={"./home"} className="hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href={"./artists"} className="hover:text-primary">
                  Artists
                </Link>
              </li>
              <li>
                <Link href={"./services"} className="hover:text-primary">
                  Services
                </Link>
              </li>
              <li>
                <Link href={"about"} className="hover:text-primary">
                  About
                </Link>
              </li>
              <li>
                <Link href={"./contact"} className="hover:text-primary">
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex items-center gap-8">
          <div className="flex gap-3.5">
            <Button>
              <Link href="/sign-in"> Log In </Link>
            </Button>

            <Button>
              <Link href="/sign-up"> Sign Up </Link>
            </Button>
          </div>

          <div className="flex cursor-pointer items-center gap-2">
            <Icons.globe />
            <samp>En</samp>
            <Icons.arrowDown />
          </div>
        </div>
      </div>
    </header>
  );
}
