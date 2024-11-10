"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function SignInForm() {
  return (
    <form className="flex flex-col gap-6">
      <div className="flex flex-col gap-2.5">
        <Label>Enter Login</Label>
        <Input placeholder="Email" />
      </div>
      <div className="flex flex-col gap-2.5">
        <Label>Enter Password</Label>
        <Input placeholder="***************" type="password" />
        <Link
          className="-mt-0.5 self-end text-xs text-muted-foreground"
          href="#"
        >
          Forget Password
        </Link>
      </div>
      <div className="flex items-center space-x-2 text-xs md:mt-6 md:text-base">
        <Checkbox /> <Label>Remember Me</Label>
      </div>
      <Button size="lg">Log In</Button>
    </form>
  );
}
