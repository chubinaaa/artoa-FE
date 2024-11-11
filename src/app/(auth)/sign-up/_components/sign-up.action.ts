"server-only";
"use server";

import { env } from "@/env";
import { signUpFormSchema } from "@/validation/sign-up-form-schema";

import { BackendSendEmailVerifyResponse } from "@/types/sign-up/backend";
import { FormState } from "@/types/sign-up/frontend";
import {
  convertBackendValidationErrorErrorsFieldToCamelCase as convertBackendValidationErrorErrorsFieldArrayToCamelCase,
  convertCamelCaseBackendValidationErrorErrorsFieldArrayToZodFieldErrors,
} from "@/lib/utils";

export async function signUpAction(formState: FormState, formData: FormData) {
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
    console.error(parsed.error);
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
      // TODO: handle validation errors
      const camelCaseBackendValidationErrorErrorsFieldArray =
        convertBackendValidationErrorErrorsFieldArrayToCamelCase(
          responseData.errors,
        );
      console.log(
        "[VALIDATION CAMELCASE ERRORS]",
        camelCaseBackendValidationErrorErrorsFieldArray,
      );

      // NOTE: we convert the backend validation errors to zod fieldErrors format
      const zodFieldErrors =
        convertCamelCaseBackendValidationErrorErrorsFieldArrayToZodFieldErrors(
          camelCaseBackendValidationErrorErrorsFieldArray,
        );
      return {
        message: "error",
        fields: fields,
        errors: {
          email: zodFieldErrors?.email,
          password: zodFieldErrors?.password,
          repeatPassword: zodFieldErrors?.repeatPassword,
          isTerm: zodFieldErrors?.isTerm,
        },
      };
    } else {
      if (responseData.status === "error") {
        // TODO: handle sign up errors
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
        // TODO: handle success
        console.log("[SIGN UP SUCCESS]", parsed.data);
        return {
          message: "success",
        };
      }
    }
  } catch (error) {
    console.error(error);
    return {
      message: "error",
    };
  }
}
