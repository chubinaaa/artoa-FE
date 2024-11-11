import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import { CamelCase, SnakeCase } from "@/types/helpers";
import {
  BackendValidationError,
  CamelCaseBackendValidationErrorErrorsObject,
} from "@/types/sign-up/backend";
import { FormState } from "@/types/sign-up/frontend";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

function toCamelCase<T extends SnakeCase<string>>(str: T): CamelCase<T> {
  return str
    .toLowerCase()
    .replace(/_[a-z]/g, (group) =>
      group.toUpperCase().replace("_", ""),
    ) as CamelCase<T>;
}

export function convertBackendValidationErrorErrorsFieldArrayToCamelCase(
  errors: BackendValidationError["errors"],
): Array<CamelCaseBackendValidationErrorErrorsObject> {
  return errors.map((error) => ({
    ...error,
    field: toCamelCase(error.field),
  }));
}

export function convertCamelCaseBackendValidationErrorErrorsFieldArrayToZodFieldErrors(
  camelCaseBackendValidationErrorErrorsFieldArray: CamelCaseBackendValidationErrorErrorsObject[],
): FormState["errors"] {
  const errors: FormState["errors"] = {};

  for (const error of camelCaseBackendValidationErrorErrorsFieldArray) {
    if (!errors[error.field]) {
      errors[error.field] = [error.message];
    } else {
      errors[error.field] = [
        // NOTE: have to cast to string[]
        ...(errors[error.field] as string[]),
        error.message,
      ];
    }
  }
  return errors;
}
