import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import { CamelCase, SnakeCase } from "@/types/helpers";
import { BackendValidationErrorResponse } from "@/types/sign-up/backend";
import { FormStateErrors } from "@/types/sign-up/frontend";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function toCamelCase<T extends SnakeCase<string>>(str: T): CamelCase<T> {
  return str
    .toLowerCase()
    .replace(/_[a-z]/g, (match) =>
      match.toUpperCase().replace("_", ""),
    ) as CamelCase<T>;
}

export function reduceToZodFieldErrors(
  errors: BackendValidationErrorResponse["errors"],
) {
  return errors.reduce((acc, { field, message }) => {
    const camelCaseField = toCamelCase(field);
    acc[camelCaseField] = acc[camelCaseField] || [];
    acc[camelCaseField].push(message);
    return acc;
  }, {} as FormStateErrors);
}
