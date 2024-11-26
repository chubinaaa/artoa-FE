import { signInFormSchema } from "@/validation/sign-in-form-schema";
import { z } from "zod";

export type SignInFormData = z.infer<typeof signInFormSchema>;
