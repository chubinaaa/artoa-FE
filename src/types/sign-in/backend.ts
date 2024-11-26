import { CamelCase, Prettify, SnakeCase } from "@/types/helpers";

import { SignInFormData } from "./shared";

type BackendSignUpResponse =
  | {
      status: "success";
      data: {
        email: string;
        password: string;
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
  BackendSignUpResponse | BackendValidationErrorResponse<keyof SignInFormData>
>;
