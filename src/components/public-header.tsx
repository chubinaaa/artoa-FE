import { Button } from "./ui/button";

import Link from "next/link";

import { Icons } from "./icons";

export function PublicHeader() {
  // TODO: replace me with an actual header

  return (
    // Main section: Header component spans full width with a dark background and a border at the bottom

    <header className="w-full border-b border-border bg-background px-28 py-5 text-foreground">
      {/* Container with flexible layout, adjusts based on screen size */}
      <div className="mx-auto flex h-[91px] flex-col items-center justify-between px-4 md:flex-row md:px-10">
        {/* Logo and navigation menu */}
        <div className="flex w-full flex-col items-end gap-[110px] md:flex-row">
          {/* Logo image, also clickable */}
          <Icons.logo />

          {/* Navigation menu, aligned to the right */}
          <ul className="flex h-[24px] flex-wrap justify-between gap-4 md:gap-10">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">Artists</li>
            <li className="cursor-pointer">Services</li>
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Contact Us</li>
          </ul>
        </div>

        {/* Section with buttons and language selector */}
        <div className="mt-4 flex w-full items-center justify-between gap-[14px] md:mt-0 md:w-auto">
          {/* Login and Sign Up buttons */}
          <div className="flex space-x-4">
            <Button asChild>
              <Link href="/sign-up">Sign Up</Link>
            </Button>

            <Button asChild>
              <Link href="/sign-up">Sign Up</Link>
            </Button>
          </div>

          {/* Language selector with icons */}
          <div className="flex items-center space-x-2 text-gray-700">
            <Icons.globe />
            <span>en</span>
            <Icons.arrowRigth />
          </div>
        </div>
      </div>
    </header>
  );
}
