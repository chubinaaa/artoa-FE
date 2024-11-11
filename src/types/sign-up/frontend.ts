import { SignUpFormData } from "./shared";

type FormStateErrors = Partial<Record<keyof SignUpFormData, string[]>>;

type FormStateFields = Partial<SignUpFormData>;

export type FormState = {
  message: string;
  fields?: FormStateFields;
  errors?: FormStateErrors;
};
