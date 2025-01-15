/* eslint-disable @typescript-eslint/no-explicit-any */
import { z } from "zod";

export type ActionState = {
  success?: boolean;
  errors?: {
    [x: string]: string[] | undefined;
    [x: number]: string[] | undefined;
    [x: symbol]: string[] | undefined;
  };
  [key: string]: any;
};

type ValidatedActionFunction<S extends z.ZodType<any, any>, T> = (
  data: z.infer<S>,
  formData: FormData,
) => Promise<T>;

export function validatedAction<S extends z.ZodType<any, any>, T>(
  schema: S,
  action: ValidatedActionFunction<S, T>,
) {
  return async (prevState: ActionState, formData: FormData): Promise<T> => {
    const entries = Object.fromEntries(formData);
    const result = schema.safeParse(entries);
    if (!result.success) {
      return {
        status: "error",
        errors: result.error.formErrors.fieldErrors,
        ...entries,
      } as T;
    }

    return action(result.data, formData);
  };
}
