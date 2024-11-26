import { z } from "zod";

import { PASSWORD_REGEX } from "@/lib/constants";

const passwordSchema = z.string().regex(PASSWORD_REGEX, {
  message:
    "Password must be at least 8 characters long and contain at least one letter, one number, and one special character.",
});

export const signInFormSchema = z.object({
  email: z.string().email(),
  password: passwordSchema,
});
