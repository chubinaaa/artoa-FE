import { Icons } from "../icons";
import { FooterDescription } from "./description";
import { FooterLinks } from "./links";
import { SocialIcons } from "./social-icons";
import { Subscribe } from "./subscribe";

export function PublicFooter() {
  return (
    <footer className="flex flex-col gap-12 border-b border-border bg-background p-16 text-foreground">
      {/* Top Section */}
      <div className="flex flex-col gap-8 md:flex-row md:justify-between">
        <div className="flex max-w-xs flex-col gap-1">
          <Icons.logo className="size-16" />
          <FooterDescription />
        </div>
        <div className="flex flex-col gap-8 md:flex-row md:gap-24">
          <FooterLinks label="about" />
          <FooterLinks label="ather" />
          <Subscribe />
        </div>
      </div>
      <div className="mt-4 flex w-full justify-start md:mt-0 md:w-auto">
        <SocialIcons />
      </div>
      {/* Bottom Section */}
      <div className="flex flex-col items-center gap-5 border-t border-border md:flex-row md:justify-between">
        <div className="flex gap-4">
          <FooterLinks label="bottom" />
        </div>
        <div className="text-sm font-semibold">
          CREATED BY <span className="font-bold">Doer</span>
        </div>
      </div>
    </footer>
  );
}
