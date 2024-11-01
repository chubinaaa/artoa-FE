import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import { Icons } from "./icons";
import { cn } from "@/lib/utils";

export function SignUpDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Join us</Button>
      </DialogTrigger>
      <DialogContent className="flex flex-col gap-12">
        <DialogHeader>
          <DialogTitle className="text-center text-3xl">Sign Up</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-center gap-8 sm:flex-row">
          <UserTypeCard type="artist" />
          <span>OR</span>
          <UserTypeCard type="customer" />
        </div>
        <p className="self-center text-center">
          {"Already have an account? "}
          <Link
            className={cn(buttonVariants({ variant: "link" }), "p-0")}
            href="/sign-in"
          >
            Sign In
          </Link>
        </p>
      </DialogContent>
    </Dialog>
  );
}

function UserTypeCard({ type }: { type: "artist" | "customer" }) {
  const Icon = type === "artist" ? Icons.acrilicArtBrush : Icons.customer;
  return (
    <Link
      // NOTE: this is just an idea of how we can pass the user choice to the sign up page
      href={`/sign-up?ut=${type}`}
      className="flex w-full max-w-52 flex-col items-center justify-center gap-2 rounded-3xl bg-secondary p-4 text-secondary-foreground"
    >
      <Icon className="size-16" />{" "}
      <p className="whitespace-nowrap">
        Join as a{type === "artist" ? "n artist" : " customer"}
      </p>
    </Link>
  );
}
