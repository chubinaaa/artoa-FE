import Link from "next/link";
import { Button } from "../ui/button";

export function HeaderButtons() {
  return (
    <div className="hidden gap-3.5 lg:flex">
      <Button asChild>
        <Link href="/sign-in"> Log In </Link>
      </Button>
      <Button asChild>
        <Link href="/sign-up"> Sign Up </Link>
      </Button>
    </div>
  );
}
