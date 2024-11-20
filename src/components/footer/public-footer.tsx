import { Subscribe } from "./subscribe";
import { SocialIcons } from "./social-icons";
import { FooterCopy } from "./footer-copy";
import { FooterTopMenuGroup } from "./menu-group";
import { footerConfig } from "@/config/footer";
import { BottomLinkGroup } from "./bottom-group";

export function PublicFooter() {
  return (
    <footer className="container mx-auto flex flex-col gap-5 py-6 2xl:py-16">
      <div className="flex flex-col gap-6 border-b border-foreground pb-6 2xl:flex-row 2xl:gap-24 2xl:pb-20">
        <div className="flex flex-1 flex-col gap-8">
          <div className="flex flex-1 flex-col gap-8 2xl:flex-row 2xl:gap-6">
            <FooterCopy />
            <div className="flex flex-1 justify-start gap-11 sm:gap-24 2xl:justify-center">
              <FooterTopMenuGroup items={footerConfig.topItems.about} />
              <FooterTopMenuGroup items={footerConfig.topItems.other} />
            </div>
          </div>
          <SocialIcons items={footerConfig.socials} />
        </div>
        <Subscribe />
      </div>
      <div className="flex items-center justify-between gap-4">
        <BottomLinkGroup items={footerConfig.bottomItems} />
        <p className="text-xs font-bold italic leading-4">
          CREATED BY <span className="underline">DOER</span>
        </p>
      </div>
    </footer>
  );
}
