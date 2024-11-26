import Link from "next/link";

import { Button } from "../ui/button";

const buttons = [
  { label: "Log In", href: "/sign-in" },
  { label: "Sign Up", href: "/sign-up" },
];

export function HeaderButtons() {
  return (
    <div className="hidden gap-3.5 lg:flex">
      {buttons.map(({ label, href }) => (
        <Button asChild key={href}>
          <Link href={href}>{label}</Link>
        </Button>
      ))}
    </div>
  );
}
