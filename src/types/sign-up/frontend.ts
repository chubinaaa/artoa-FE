import { SignUpFormData } from "./shared";

export type FormStateErrors = Partial<Record<keyof SignUpFormData, string[]>>;

export type FormStateFields = Partial<SignUpFormData>;

export type FormState = {
  message: string;
  fields?: FormStateFields;
  errors?: FormStateErrors;
};
