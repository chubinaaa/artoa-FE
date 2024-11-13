import { CamelCase, ConvertToSnakeCase, Prettify } from "@/types/helpers";

import { SignUpFormData } from "./shared";

type BackendSignUpResponse = Prettify<{
  status: "error" | "success";
  data: ConvertToSnakeCase<SignUpFormData>;
  error_message?: string;
}>;

type BackendValidationErrorKeys = keyof BackendSignUpResponse["data"];

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
