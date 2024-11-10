"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function SignUpForm() {
  return (
    <form className="flex flex-col gap-6">
      <div className="flex flex-col gap-2.5">
        <Label>Email Address</Label>
        <Input type="email" placeholder="Email Address" />
      </div>
      <div className="flex flex-col gap-2.5">
        <Label>Enter Password</Label>
        <Input type="password" placeholder="***************" />
        <span className="-mt-0.5 self-end text-2xs text-muted-foreground md:text-xs">
          Use 8 or more characters with mix of letters, numbers & symbols
        </span>
      </div>
      <div className="flex flex-col gap-2.5">
        <Label>Repeat Password</Label>
        <Input type="password" placeholder="***************" />
        <span className="-mt-0.5 self-end text-2xs text-muted-foreground md:text-xs">
          Use 8 or more characters with mix of letters, numbers & symbols
        </span>
      </div>
      <div className="mt-6 flex items-center space-x-2 text-xs md:text-base">
        <Checkbox />{" "}
        <Label>
          By creating an account, I agree to the{" "}
          <Link
            href="/terms"
            className={cn(buttonVariants({ variant: "link" }), "h-fit p-0")}
          >
            Terms and Conditions
          </Link>
        </Label>
      </div>
      <Button size="lg">Create Account</Button>
    </form>
  );
}
