"use client";
import { useState, useEffect } from "react";
import { Icons } from "../icons";
import { MenuButton } from "./menu-button";
import { Navigation } from "./navigation";
import { HeaderButtons } from "./buttons";
import { LanguageSwitcher } from "./language-switcher";
import Link from "next/link";

export function PublicHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`${
        isScrolled
          ? "fixed left-0 top-0 z-50 bg-black transition-all duration-500 ease-in-out"
          : "relative"
      } flex w-full justify-between border-b border-border px-6 py-4 lg:px-14 lg:py-5`}
    >
      <div className="flex w-full justify-between">
        <div className="flex items-center md:gap-8 lg:gap-28">
          <Link href={"/"} aria-label="Logo ArtOa">
            <Icons.logo className="size-8 cursor-pointer lg:size-16" />
          </Link>
          <Navigation />
        </div>
        <div className="max-ms: flex items-center gap-3 sm:gap-4 md:gap-6">
          <HeaderButtons />
          <LanguageSwitcher />
        </div>
        <MenuButton />
      </div>
    </header>
  );
}
