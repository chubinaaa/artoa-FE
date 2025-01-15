"use server";

import { ActionState, validatedAction } from "@/lib/auth/middleware";
import { createUser } from "@/lib/queries";
import { signUpSchema } from "@/types/user";
import { redirect } from "next/navigation";

export const signUp = validatedAction(
  signUpSchema,
  async (data): Promise<ActionState> => {
    const res = (await createUser(data)) as CreateUserResponse;

    if ("email" in res) {
      redirect(`/verify-email?email=${res.email}`);
    }

    return {
      status: "error",
      errors: res.details,
      ...data,
    };
  },
);

type CreateUserResponse =
  | {
      id: string;
      email: string;
    }
  | {
      code: string;
      message: string;
      details: {
        [key: string]: string[] | undefined;
      };
    };
