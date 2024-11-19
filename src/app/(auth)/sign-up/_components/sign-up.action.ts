"use server";

import { isRedirectError } from "next/dist/client/components/redirect";
import { redirect } from "next/navigation";
import { env } from "@/env";
import { signUpFormSchema } from "@/validation/sign-up-form-schema";

import { BackendSendEmailVerifyResponse } from "@/types/sign-up/backend";
import { FormState } from "@/types/sign-up/frontend";
import { reduceToZodFieldErrors } from "@/lib/utils";

export async function signUpAction(prevState: FormState, formData: FormData) {
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();
  const repeatPassword = formData.get("repeatPassword")?.toString();
  const isTerm = formData.get("isTerm")?.toString() === "true";

  const fields = {
    email,
    password,
    repeatPassword,
    isTerm,
  };

  const parsed = signUpFormSchema.safeParse(fields);

  if (!parsed.success) {
    return {
      message: "error",
      fields: fields,
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  // NOTE: backend accepts and returns snake_case keys 🥲
  const snakeCaseParsedData = {
    email: parsed.data.email,
    password: parsed.data.password,
    repeat_password: parsed.data.repeatPassword,
    is_term: parsed.data.isTerm,
  };

  try {
    const response = await fetch(`${env.API_URL}/send-verify-email`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(snakeCaseParsedData),
    });

    const responseData =
      (await response.json()) as BackendSendEmailVerifyResponse;

    if ("message" in responseData) {
      // NOTE: handle validation errors
      // we convert the backend snake_case validation errors to camelCase zod field error format
      const zodFieldErrors = reduceToZodFieldErrors(responseData.errors);
      return {
        message: "error",
        fields,
        errors: zodFieldErrors,
      };
    }
    if (responseData.status === "error") {
      // NOTE: handle sign up errors
      return {
        message: "error",
        fields,
        errors: {
          email: undefined,
          password: undefined,
          repeatPassword: undefined,
          isTerm: [
            responseData.error_message ??
              "Something went wrong. Please try again.",
          ],
        },
      };
    }
    // NOTE: handle success
    redirect(`/verify-email?email=${responseData.data.email}`);
  } catch (error) {
    // NOTE: nextjs redirect function throws a 307 temp redirect error, so we catch and rethrow it
    if (isRedirectError(error)) {
      throw error;
    }
    console.error("[FETCH ERROR]", error);
    return {
      message: "error",
    };
  }
}
