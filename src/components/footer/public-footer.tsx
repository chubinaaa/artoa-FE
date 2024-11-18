import { Icons } from "../icons";
import { FooterDescription } from "./description";
import { Subscribe } from "./subscribe";
import { SocialIcons } from "./social-icons";
import { FooterLinks } from "./links";
import Link from "next/link";

export function PublicFooter() {
  return (
    <footer className="flex flex-col gap-12 border-b border-border bg-background p-16 text-foreground">
      {/* Top Section */}
      <div className="flex flex-col gap-8 sm:flex-row sm:justify-center md:justify-between lg:gap-12">
        <div className="ms:w-max flex max-w-xs flex-col gap-1">
          <Icons.logo className="size-16" />
          <FooterDescription />
        </div>
        <div className="flex flex-col justify-between gap-8 md:flex-row md:gap-24">
          <FooterLinks label="about" />
          <FooterLinks label="other" />
          <Subscribe />
        </div>
      </div>
      <div className="mt-4 flex w-full justify-start md:mt-0 md:w-auto">
        <SocialIcons />
      </div>
      {/* Bottom Section */}
      <div className="flex flex-row items-center justify-between gap-5 border-t border-border">
        <div className="flex justify-between gap-4 text-sm text-secondary-foreground">
          <FooterLinks label="bottom" />
        </div>
        <div className="text-sm font-semibold">
          CREATED BY
          <Link
            href="https://www.linkedin.com/company/iamdoer"
            className="m-1 cursor-pointer font-bold underline"
          >
            DOER
          </Link>
        </div>
      </div>
    </footer>
  );
}
