"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { EMAIL_REGEX } from "@/lib/constants";

const passwordSchema = z.string().regex(EMAIL_REGEX, {
  message:
    "Password must be at least 8 characters long and contain at least one letter, one number, and one special character.",
});

const signUpFormSchema = z
  .object({
    email: z.string().email(),
    password: passwordSchema,
    repeatPassword: passwordSchema,
    isTerm: z.boolean().refine((value) => value === true, {
      message: "You must agree to the terms and conditions.",
    }),
  })
  .refine(
    ({ password, repeatPassword }) => {
      return password === repeatPassword;
    },
    {
      message: "Passwords must match!",
      path: ["repeatPassword"],
    },
  );

export function SignUpForm() {
  const form = useForm<z.infer<typeof signUpFormSchema>>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: {
      email: "",
      password: "",
      repeatPassword: "",
      isTerm: false,
    },
  });

  function onSubmit(values: z.infer<typeof signUpFormSchema>) {
    console.log(values);
    form.reset();
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
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
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" size="lg">
          Create Account
        </Button>
      </form>
    </Form>
  );
}
