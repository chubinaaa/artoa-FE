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
        <div className="mt-1 flex justify-between">
          <div className="flex items-center">
            <Checkbox className="me-2 size-5" /> Remember Me
          </div>
          <Link
            className="flex items-center text-xs text-muted-foreground"
            href="/forget-pass"
          >
            Forget Password
          </Link>
        </div>
      </div>
      <Button className="mt-5" size="lg">
        Log In
      </Button>
    </form>
  );
}
