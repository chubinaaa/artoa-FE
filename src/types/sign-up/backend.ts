import { Prettify, SnakeCase } from "@/types/helpers";

import { SignUpFormData } from "./shared";

type BackendSignUpResponse =
  | {
      status: "success";
      data: {
        email: string;
        is_term: boolean;
        is_email_verified: boolean;
        is_user_verified: boolean;
      };
    }
  | {
      status: "error";
      data: null;
      error_message: string;
    };

export type BackendValidationErrorResponse = Prettify<{
  message: "Validation failed";
  errors: Array<{
    field: SnakeCase<keyof SignUpFormData>;
    message: string;
  }>;
}>;

export type BackendSendEmailVerifyResponse = Prettify<
  BackendSignUpResponse | BackendValidationErrorResponse
>;
