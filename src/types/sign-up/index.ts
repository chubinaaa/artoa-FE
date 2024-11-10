import { signUpFormSchema } from "@/validation/sign-up-form-schema";
import { z } from "zod";

import { ConvertToSnakeCase } from "@/lib/utils";

export type SendEmailVerifyResponse =
  | {
      status: "success";
      data: {
        email: string;
        password: string;
        repeat_password: string;
        is_term: boolean;
      };
    }
  | {
      status: "error";
      message: string;
      errors: SnakeCaseFormStateErrors;
    };

type FormStateErrors = Partial<
  Record<keyof z.infer<typeof signUpFormSchema>, string[]>
>;

type SnakeCaseFormStateErrors = ConvertToSnakeCase<FormStateErrors>;

type FormStateFields = Partial<z.infer<typeof signUpFormSchema>>;

export type FormState = {
  message: string;
  fields?: FormStateFields;
  errors?: FormStateErrors;
};
