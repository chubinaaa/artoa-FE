"server-only";
"use server";

import { redirect } from "next/navigation";
import { env } from "@/env";
import { signUpFormSchema } from "@/validation/sign-up-form-schema";

import { FormState, SendEmailVerifyResponse } from "@/types/sign-up";

export async function signUpAction(_: FormState, formData: FormData) {
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();
  const repeatPassword = formData.get("repeatPassword")?.toString();
  const isTerm = formData.get("isTerm")?.toString() === "true";

  console.log("[FORMDATA]", { email, password, repeatPassword, isTerm });

  const data = {
    email,
    password,
    repeatPassword,
    isTerm,
  };

  const parsed = signUpFormSchema.safeParse(data);

  console.log("[PARSED]", parsed);

  if (!parsed.success) {
    console.error(parsed.error);
    return {
      message: "error",
      fields: data,
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  const response = await fetch(`${env.API_URL}/send-verify-email`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    // NOTE: backend accepts and returns snake_case keys 🥲
    body: JSON.stringify({
      email: parsed.data.email,
      password: parsed.data.password,
      repeat_password: parsed.data.repeatPassword,
      is_term: parsed.data.isTerm,
    }),
  });

  const responseData = (await response.json()) as SendEmailVerifyResponse;

  if (responseData.status === "error") {
    if (responseData.message === "Validation failed") {
      // NOTE: frontend expects camelCase keys
      const camelCasedErrors = {
        email: responseData.errors.email,
        password: responseData.errors.password,
        repeatPassword: responseData.errors.repeat_password,
        isTerm: responseData.errors.is_term,
      };
      return {
        message: "error",
        fields: data,
        errors: camelCasedErrors,
      };
    } else if (
      responseData.message === "You must agree to the terms and conditions."
    ) {
      return {
        message: "error",
        data: data,
        errors: {
          isTerm: ["You must agree to the terms and conditions."],
        },
      };
    } else {
      // FIXME: handle rest of the errors better
      redirect("/sign-up");
    }
  }

  console.log("[SIGN UP ACTION SUCCESS]", parsed.data);
  return {
    message: "success",
  };
}
