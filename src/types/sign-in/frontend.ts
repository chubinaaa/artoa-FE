import { SignInFormData } from "./shared";

export type FormStateErrors = Partial<Record<keyof SignInFormData, string[]>>;

export type FormStateFields = Partial<SignInFormData>;

export type FormState = {
  message: string;
  fields?: FormStateFields;
  errors?: FormStateErrors;
};
