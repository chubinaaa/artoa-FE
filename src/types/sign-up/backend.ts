import { CamelCase, Prettify, SnakeCase } from "@/types/helpers";

import { SignUpFormData } from "./shared";

type BackendSignUpResponseData = {
  email: string;
  is_term: boolean;
  is_email_verified: boolean;
  is_user_verified: boolean;
} | null;

type BackendSignUpResponse = Prettify<{
  status: "error" | "success";
  data: BackendSignUpResponseData;
  error_message?: string;
}>;

type BackendValidationErrorErrorsObjectField = Partial<
  SnakeCase<keyof SignUpFormData>
>;

export type BackendValidationError = Prettify<{
  message: "Validation failed";
  errors: {
    field: BackendValidationErrorErrorsObjectField;
    message: string;
  }[];
}>;

export type CamelCaseBackendValidationErrorErrorsObject = {
  field: CamelCase<BackendValidationErrorErrorsObjectField>;
  message: string;
};

export type BackendSendEmailVerifyResponse = Prettify<
  BackendSignUpResponse | BackendValidationError
>;
