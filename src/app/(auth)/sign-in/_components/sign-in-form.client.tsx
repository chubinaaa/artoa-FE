"use client";

import { LoadingButton } from "@/components/loading-button";
import { PassowordInput } from "@/components/password-input";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ActionState } from "@/lib/auth/middleware";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useActionState } from "react";
import { ErrorMessages } from "../../_components/error-messages";
import { signIn } from "./sign-in.action";

export function SignInForm() {
  const [state, formAction, pending] = useActionState<ActionState, FormData>(
    signIn,
    {},
  );

  return (
    <form className="flex flex-col gap-6" action={formAction}>
      <div className="flex flex-col gap-2.5">
        <Label
          htmlFor="email"
          className={cn({
            "text-destructive": state.errors?.email?.length,
          })}
        >
          Email Address
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          defaultValue={state.email}
          required
          maxLength={50}
          placeholder="Email Address"
          className={cn({
            "border-destructive text-destructive": state.errors?.email?.length,
          })}
        />
        <ErrorMessages messages={state.errors?.email} />
      </div>
      <div className="flex flex-col gap-2.5">
        <Label
          htmlFor="password"
          className={cn({
            "text-destructive": state.errors?.password?.length,
          })}
        >
          Password
        </Label>
        <PassowordInput
          id="password"
          name="password"
          autoComplete="current-password"
          defaultValue={state.password}
          required
          minLength={8}
          maxLength={100}
          placeholder="***************"
          className={cn({
            "border-destructive text-destructive":
              state.errors?.password?.length,
          })}
        />
        <div className="mt-1 flex justify-between">
          <div className="flex items-center">
            <Checkbox className="me-2 size-5" /> Remember Me
          </div>
          <Link
            className="flex items-center text-xs text-muted-foreground"
            href="/forgot-password"
          >
            Forgot Password
          </Link>
        </div>
      </div>
      <LoadingButton type="submit" size="lg" loading={pending} label="Log In" />
    </form>
  );
}
