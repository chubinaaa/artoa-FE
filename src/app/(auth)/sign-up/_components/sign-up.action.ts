"use server";

import { redirect } from "next/navigation";
import { env } from "@/env";
import { signUpFormSchema } from "@/validation/sign-up-form-schema";

import { BackendSendEmailVerifyResponse } from "@/types/sign-up/backend";
import { FormState } from "@/types/sign-up/frontend";
import {
  convertErrorValuesToCamelCase,
  convertToZodFieldErrors,
} from "@/lib/utils";

export async function signUpAction(prevState: FormState, formData: FormData) {
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();
  const repeatPassword = formData.get("repeatPassword")?.toString();
  const isTerm = formData.get("isTerm")?.toString() === "true";

  console.log("[FORMDATA]", { email, password, repeatPassword, isTerm });

  const fields = {
    email,
    password,
    repeatPassword,
    isTerm,
  };

  const parsed = signUpFormSchema.safeParse(fields);

  console.log("[PARSED]", parsed);

  if (!parsed.success) {
    console.error("[PARSE ERROR]", parsed.error);
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
      // we convert the backend snake_case validation errors to camelCase format
      const camelCaseErrors = convertErrorValuesToCamelCase(
        responseData.errors,
      );
      console.log("[VALIDATION CAMELCASE ERRORS]", camelCaseErrors);

      // NOTE: we convert the backend validation errors to zod fieldErrors format
      const zodFieldErrors = convertToZodFieldErrors(camelCaseErrors);
      return {
        message: "error",
        fields: fields,
        errors: zodFieldErrors,
      };
    } else {
      if (responseData.status === "error") {
        // NOTE: handle sign up errors
        console.log("[SIGN UP ERROR]", responseData.error_message);
        return {
          message: "error",
          field: fields,
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
      } else {
        // NOTE: handle success
        console.log("[SIGN UP SUCCESS]", parsed.data);
        redirect(`/verify-email?email=${responseData.data.email}`);
      }
    }
  } catch (error) {
    console.error("[FETCH ERROR]", error);
    return {
      message: "error",
    };
  }
}
