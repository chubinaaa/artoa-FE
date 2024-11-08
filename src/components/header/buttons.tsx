import Link from "next/link";
import { Button } from "../ui/button";

export function HeaderButtons() {
  return (
    <div className="md: flex gap-3.5 max-sm:hidden">
      <Button asChild>
        <Link href="/sign-in"> Log In </Link>
      </Button>
      <Button asChild>
        <Link href="/sign-up"> Sign Up </Link>
      </Button>
    </div>
  );
}
