import Link from "next/link";

interface FooterLink {
  label: string;
  href: string;
  className?: string;
  ariaLabel?: string;
}

interface FooterSection {
  label: string;
  links: FooterLink[];
}

const footerLinks: FooterSection[] = [
  {
    label: "about",
    links: [
      { label: "Projects", href: "projects", ariaLabel: "View our projects" },
      {
        label: "Portfolios",
        href: "portfolios",
        ariaLabel: "Explore our portfolios",
      },
      {
        label: "Service Concept",
        href: "service-concept",
        ariaLabel: "Learn about our service concept",
      },
      { label: "Contact", href: "contact", ariaLabel: "Get in touch with us" },
      {
        label: "Career",
        href: "career",
        ariaLabel: "Discover career opportunities",
      },
      {
        label: "FAQs",
        href: "faqs",
        ariaLabel: "Read frequently asked questions",
      },
    ],
  },
  {
    label: "other",
    links: [
      {
        label: "Service | Corrections",
        href: "service-corrections",
        ariaLabel: "Learn more about our correction services",
      },
      {
        label: "Our Team",
        href: "our-team",
        className: "text-primary",
        ariaLabel: "Meet our team",
      },
      {
        label: "AI/AR Order Generators",
        href: "ai-ar-order-generators",
        ariaLabel: "Explore AI and AR order generators",
      },
    ],
  },
  {
    label: "bottom",
    links: [
      {
        label: "Site Notice",
        href: "site-notice",
        ariaLabel: "View our site notice",
      },
      {
        label: "Data Privacy",
        href: "data-privacy",
        ariaLabel: "Read our data privacy policy",
      },
      {
        label: "Imprint",
        href: "imprint",
        ariaLabel: "See our imprint information",
      },
    ],
  },
];

interface FooterLinksProps {
  label: string;
}

export function FooterLinks({ label }: FooterLinksProps) {
  const section = footerLinks.find((section) => section.label === label);

  if (!section) return null;

  return (
    <div className="flex flex-col gap-8">
      {section.label != "bottom" && (
        <h4 className="font-bold capitalize">{section.label}</h4>
      )}
      <ul
        className={`flex gap-4 ${section.label === "bottom" ? "flex-row" : "flex-col"}`}
      >
        {section.links.map((link) => (
          <li key={link.label} className="hover:underline">
            <Link
              href={link.href}
              className={link.className}
              aria-label={link.ariaLabel}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
