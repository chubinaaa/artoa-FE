import { signUpFormSchema } from "@/validation/sign-up-form-schema";
import { z } from "zod";

import { CamelCase, Prettify, SnakeCase } from "@/types/helpers";

type BackendSignUpSuccessResponse = {
  email: string;
  is_term: boolean;
  is_email_verified: boolean;
  is_user_verified: boolean;
};

type BackendSignUpResponse = Prettify<
  | {
      status: "success";
      data: BackendSignUpSuccessResponse;
    }
  | {
      status: "error";
      data: null;
      error_message: string;
    }
>;

type BackendValidationErrorKeys = SnakeCase<
  keyof z.infer<typeof signUpFormSchema>
>;

export type BackendValidationErrorResponse = Prettify<{
  message: "Validation failed";
  errors: {
    field: BackendValidationErrorKeys;
    message: string;
  }[];
}>;

export type CamelCaseBackendValidationError = {
  field: CamelCase<BackendValidationErrorKeys>;
  message: string;
};

export type BackendSendEmailVerifyResponse = Prettify<
  BackendSignUpResponse | BackendValidationErrorResponse
>;
