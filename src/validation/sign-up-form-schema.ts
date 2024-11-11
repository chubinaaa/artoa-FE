import { z } from "zod";

import { EMAIL_REGEX } from "@/lib/constants";

const passwordSchema = z.string().regex(EMAIL_REGEX, {
  message:
    "Password must be at least 8 characters long and contain at least one letter, one number, and one special character.",
});

export const signUpFormSchema = z
  .object({
    email: z.string().email(),
    password: passwordSchema,
    repeatPassword: passwordSchema,
    isTerm: z.boolean().refine((value) => value === true, {
      message: "You must accept the terms and conditions.",
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
