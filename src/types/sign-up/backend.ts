import { CamelCase, Prettify, SnakeCase } from "@/types/helpers";

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

export type BackendValidationError<TField extends SnakeCase<string>> = {
  field: TField;
  message: string;
};

export type BackendValidationErrorResponse<TField extends CamelCase<string>> =
  Prettify<{
    message: "Validation failed";
    errors: Array<BackendValidationError<SnakeCase<TField>>>;
  }>;

export type BackendSendEmailVerifyResponse = Prettify<
  BackendSignUpResponse | BackendValidationErrorResponse<keyof SignUpFormData>
>;
