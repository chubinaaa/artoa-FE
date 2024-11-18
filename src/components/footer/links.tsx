import Link from "next/link";

interface FooterLink {
  label: string;
  url: string;
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
      { label: "Projects", url: "projects", ariaLabel: "View our projects" },
      {
        label: "Portfolios",
        url: "portfolios",
        ariaLabel: "Explore our portfolios",
      },
      {
        label: "Service Concept",
        url: "service-concept",
        ariaLabel: "Learn about our service concept",
      },
      { label: "Contact", url: "contact", ariaLabel: "Get in touch with us" },
      {
        label: "Career",
        url: "career",
        ariaLabel: "Discover career opportunities",
      },
      {
        label: "FAQs",
        url: "faqs",
        ariaLabel: "Read frequently asked questions",
      },
    ],
  },
  {
    label: "other",
    links: [
      {
        label: "Service | Corrections",
        url: "service-corrections",
        ariaLabel: "Learn more about our correction services",
      },
      {
        label: "Our Team",
        url: "our-team",
        className: "text-primary",
        ariaLabel: "Meet our team",
      },
      {
        label: "AI/AR Order Generators",
        url: "ai-ar-order-generators",
        ariaLabel: "Explore AI and AR order generators",
      },
    ],
  },
  {
    label: "bottom",
    links: [
      {
        label: "Site Notice",
        url: "site-notice",
        ariaLabel: "View our site notice",
      },
      {
        label: "Data Privacy",
        url: "data-privacy",
        ariaLabel: "Read our data privacy policy",
      },
      {
        label: "Imprint",
        url: "imprint",
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
    <div>
      {section.label != "bottom" && (
        <h4 className="font-bold capitalize">{section.label}</h4>
      )}
      <ul
        className={`${section.label === "bottom" ? "flex flex-row gap-6" : ""}`}
      >
        {section.links.map((link) => (
          <li key={link.label} className="gap-8 hover:underline">
            <Link
              href={link.url}
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
