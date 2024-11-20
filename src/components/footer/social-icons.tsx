import Link from "next/link";
import { FooterConfig } from "@/config/footer";

export function SocialIcons({ items }: { items: FooterConfig["socials"] }) {
  return (
    <div className="flex justify-center gap-12 md:justify-start xl:gap-8">
      {items.map((social) => {
        const Icon = social.icon;
        return (
          <Link
            key={social.href}
            href={social.href}
            aria-label={social.ariaLabel}
          >
            <Icon />
          </Link>
        );
      })}
    </div>
  );
}
