import Link from "next/link";

interface FooterLink {
  label: string;
  url: string;
}

interface FooterSection {
  label: string;
  links: FooterLink[];
  className?: string;
}

const footerLinks: FooterSection[] = [
  {
    label: "about",
    links: [
      { label: "Projects", url: "projects" },
      { label: "Portfolios", url: "portfolios" },
      { label: "Service Concept", url: "service-concept" },
      { label: "Contact", url: "contact" },
      { label: "Career", url: "career" },
      { label: "FAQs", url: "faqs" },
    ],
  },
  {
    label: "ather",
    links: [
      { label: "Service | Corrections", url: "service-corrections" },
      { label: "Our Team", url: "our-team" },
      { label: "AI/AR Order Generators", url: "ai-ar-order-generators" },
    ],
  },
  {
    label: "bottom",
    links: [
      { label: "Site Notice", url: "site-notice" },
      { label: "Data Privacy", url: "data-privacy" },
      { label: "Imprint", url: "imprint" },
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
          <li key={link.label} className="gap-8">
            <Link href={link.url}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
