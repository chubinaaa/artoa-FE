"use client";

import { startTransition, useActionState, useEffect, useRef } from "react";
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
import { Icons } from "@/components/icons";

import { signUpAction } from "./sign-up.action";

export function SignUpForm() {
  const formRef = useRef<HTMLFormElement>(null);
  // NOTE: we use useActionState to return errors sent from the server
  // and to show a loading state also supports progressive enhancement
  const [formState, formAction, isPending] = useActionState(signUpAction, {
    message: "",
  });

  useEffect(() => {
    console.log("[ISPENDING]", isPending);
  }, [isPending]);

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

  // NOTE: this works, but it would be better to manually trigger form submission
  // since we already provide formAction on the form
  function onSubmit(data: z.infer<typeof signUpFormSchema>) {
    startTransition(async () => {
      console.log("[ON SUBMIT]", data);

      const formData = new FormData();
      formData.append("email", data.email);
      formData.append("password", data.password);
      formData.append("repeatPassword", data.repeatPassword);
      formData.append("isTerm", data.isTerm.toString());

      await signUpAction({ message: "" }, formData);

      form.reset();
    });
  }

  return (
    <Form {...form}>
      <form
        ref={formRef}
        action={formAction}
        onSubmit={form.handleSubmit(onSubmit)}
        // NOTE: this is not working for some reason
        // onSubmit={form.handleSubmit(() => formRef.current?.requestSubmit())}
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
              <p className="text-2xs font-medium text-destructive">
                {formState?.errors?.email}
              </p>
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
              <p className="text-2xs font-medium text-destructive">
                {formState?.errors?.password}
              </p>
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
              <p className="text-2xs font-medium text-destructive">
                {formState?.errors?.repeatPassword}
              </p>
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
              <p className="text-2xs font-medium text-destructive">
                {formState?.errors?.isTerm}
              </p>
              <FormMessage />
            </FormItem>
          )}
        />
        <noscript>
          <p className="text-center font-medium text-destructive">
            Please enable JavaScript to continue.
          </p>
        </noscript>
        <Button type="submit" size="lg">
          {/* FIXME: add a loading spinner*/}
          <Icons.logo className={isPending ? "animate-spin" : ""} /> Create
          Account
        </Button>
      </form>
    </Form>
  );
}
