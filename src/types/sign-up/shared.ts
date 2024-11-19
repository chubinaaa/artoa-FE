import { signUpFormSchema } from "@/validation/sign-up-form-schema";
import { z } from "zod";

export type SignUpFormData = z.infer<typeof signUpFormSchema>;
