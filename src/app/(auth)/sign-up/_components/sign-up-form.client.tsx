"use client";

import { useActionState, useRef } from "react";
import Link from "next/link";
import { signUpFormSchema } from "@/validation/sign-up-form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { LoadingSpinner } from "@/components/loading-spinner";

import { signUpAction } from "./sign-up.action";

export function SignUpForm() {
  // NOTE: we use useActionState to return errors sent from the server
  // and to show a loading state also supports progressive enhancement
  const [formState, formAction, pending] = useActionState(signUpAction, {
    message: "",
  });

  const form = useForm<z.infer<typeof signUpFormSchema>>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: {
      email: "",
      password: "",
      repeatPassword: "",
      isTerm: false,
      // NOTE: override the default values with values returned from the server
      // this way when user submits incorrect values, we will not clear the whole form
      ...(formState?.fields ?? {}),
    },
  });

  const formRef = useRef<HTMLFormElement>(null);

  return (
    <Form {...form}>
      <form
        ref={formRef}
        action={formAction}
        // NOTE: we already provide formAction prop on the form, so we can just request submit
        // eslint-disable-next-line react-compiler/react-compiler
        onSubmit={form.handleSubmit(() => formRef.current?.requestSubmit())}
        className="flex flex-col gap-6"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input type="email" placeholder="Email Address" {...field} />
              </FormControl>
              <FormFieldServerErrors errors={formState?.errors?.email} />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Enter Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="***************"
                  {...field}
                />
              </FormControl>
              <FormDescription className="text-end">
                Use 8 or more characters with mix of letters, numbers & symbols
              </FormDescription>
              <FormFieldServerErrors errors={formState?.errors?.password} />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="repeatPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Repeat Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="***************"
                  {...field}
                />
              </FormControl>
              <FormDescription className="text-end">
                Use 8 or more characters with mix of letters, numbers & symbols
              </FormDescription>
              <FormFieldServerErrors
                errors={formState?.errors?.repeatPassword}
              />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="isTerm"
          render={({ field: { onChange, value, ...field } }) => (
            <FormItem className="my-6">
              <div className="inline-flex">
                <FormControl>
                  <Checkbox
                    onCheckedChange={onChange}
                    checked={value}
                    {...field}
                  />
                </FormControl>
                <FormLabel className="ml-2 text-xs md:text-base">
                  By creating an account, I agree to the{" "}
                  <Link
                    href="/terms"
                    className={cn(
                      buttonVariants({ variant: "link" }),
                      "h-fit p-0",
                    )}
                  >
                    Terms and Conditions
                  </Link>
                </FormLabel>
              </div>
              <FormFieldServerErrors errors={formState?.errors?.isTerm} />
              <FormMessage />
            </FormItem>
          )}
        />
        <noscript>
          <p className="text-center font-medium text-destructive">
            Please enable JavaScript to continue.
          </p>
        </noscript>
        <Button type="submit" size="lg" disabled={pending}>
          <span className="relative">
            Create Account
            <LoadingSpinner pending={pending} />
          </span>
        </Button>
      </form>
    </Form>
  );
}

function FormFieldServerErrors({
  errors,
}: {
  errors: Array<string> | undefined;
}) {
  return errors?.length ? (
    <ul className="flex flex-col gap-1">
      {errors.map((e) => {
        return (
          <li key={e} className="text-2xs font-medium text-destructive">
            {e}
          </li>
        );
      })}
    </ul>
  ) : null;
}
