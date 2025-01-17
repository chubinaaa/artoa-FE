"use client";

import { LoadingButton } from "@/components/loading-button";
import { PassowordInput } from "@/components/password-input";
import { buttonVariants } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ActionState } from "@/lib/auth/middleware";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useActionState } from "react";
import { signUp } from "./sign-up.action";

export function SignUpForm() {
  const [state, formAction, pending] = useActionState<ActionState, FormData>(
    signUp,
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
          autoComplete="new-password"
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
        <span className="-mt-0.5 self-end text-2xs text-muted-foreground md:text-xs">
          Use 8 or more characters with mix of letters, numbers & symbols
        </span>
        <ErrorMessages messages={state.errors?.password} />
      </div>
      <div className="flex flex-col gap-2.5">
        <Label
          htmlFor="repeatPassword"
          className={cn({
            "text-destructive": state.errors?.repeatPassword?.length,
          })}
        >
          Repeat Password
        </Label>
        <PassowordInput
          id="repeatPassword"
          name="repeatPassword"
          autoComplete="new-password"
          defaultValue={state.repeatPassword}
          required
          minLength={8}
          maxLength={100}
          placeholder="***************"
          className={cn({
            "border-destructive text-destructive":
              state.errors?.repeatPassword?.length,
          })}
        />
        <span className="-mt-0.5 self-end text-2xs text-muted-foreground md:text-xs">
          Use 8 or more characters with mix of letters, numbers & symbols
        </span>
        <ErrorMessages messages={state.errors?.repeatPassword} />
      </div>
      <div className="mt-6 flex items-center space-x-2 text-xs md:text-base">
        <Checkbox
          name="termsAccepted"
          id="termsAccepted"
          defaultChecked={state.termsAccepted === "on"}
          required
          className={cn({
            "border-destructive text-destructive":
              state.errors?.termsAccepted?.length,
          })}
        />{" "}
        <Label
          htmlFor="termsAccepted"
          className={cn({
            "text-destructive": state.errors?.termsAccepted?.length,
          })}
        >
          By creating an account, I agree to the{" "}
          <Link
            href="/terms"
            className={cn(buttonVariants({ variant: "link" }), "h-fit p-0")}
          >
            Terms and Conditions
          </Link>
        </Label>
        <ErrorMessages messages={state.errors?.termsAccepted} />
      </div>
      <LoadingButton
        type="submit"
        size="lg"
        loading={pending}
        label="Create Account"
      />
    </form>
  );
}

function ErrorMessages({ messages }: { messages: string[] | undefined }) {
  if (!messages) return null;
  return (
    <ul className="text-xs text-destructive">
      {messages.map((message) => (
        <li key={message}>{message}</li>
      ))}
    </ul>
  );
}
