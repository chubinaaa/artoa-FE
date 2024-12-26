import { Icons } from "@/components/icons";

export const footerConfig = {
  topItems: {
    other: [
      { label: "Other", isTitle: true },
      { label: "Service | Corrections", href: "/service" },
      { label: "Our Team", href: "/team" },
      { label: "AI/AR Generators", href: "/ai-generators" },
    ],
    about: [
      { label: "About ArtOa", href: "/about", isTitle: true },
      { label: "Portfolios", href: "/portfolios" },
      { label: "Service concept", href: "/service-concept" },
      { label: "Contact", href: "/contact" },
      { label: "FAQ's", href: "/faq" },
    ],
  },
  bottomItems: [
    {
      label: "Site notice",
      href: "/site-notice",
    },
    {
      label: "Data Privacy",
      href: "/data-privacy",
    },
    {
      label: "Imprint",
      href: "/imprint",
    },
  ],
  socials: [
    {
      icon: Icons.facebook,
      href: "https://www.facebook.com/artoa.io/",
      ariaLabel: "Visit our Facebook page",
    },
    {
      icon: Icons.youtube,
      href: "https://www.youtube.com/",
      ariaLabel: "Visit our YouTube channel",
    },
    {
      icon: Icons.instagram,
      href: "https://www.instagram.com/",
      ariaLabel: "Visit our Instagram page",
    },
    {
      icon: Icons.pinterest,
      href: "https://www.pinterest.com/",
      ariaLabel: "Visit our Pinterest page",
    },
  ],
};

export type FooterConfig = typeof footerConfig;
