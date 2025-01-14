import { z } from "zod";

export const signUpSchema = z
  .object({
    email: z.string().email(),
    password: z
      .string()
      .regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/, {
        message:
          "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character",
      }),

    repeatPassword: z.string(),
    termsAccepted: z.string().transform((v) => v === "on"),
  })
  .refine(
    (values) => {
      return values.repeatPassword === values.password;
    },
    {
      message: "Passwords mush match",
      path: ["repeatPassword"],
    },
  );

export type NewUser = z.infer<typeof signUpSchema>;

export const signInSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export type User = {
  id: string;
  email: string;
  isVerified: boolean;
  userType: "customer" | "artist" | null;
  firstName: string | null;
  lastName: string | null;
  city: "Tbilisi" | "Rustavi" | "Batumi" | "Kutaisi" | null;
  nickname: string | null;
  isSetupComplete: boolean | null;
};
