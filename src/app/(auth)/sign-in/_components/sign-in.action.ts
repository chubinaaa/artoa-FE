"use server";

import { env } from "@/env.mjs";
import { ActionState, validatedAction } from "@/lib/auth/middleware";
import { signInSchema } from "@/types/user";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const signIn = validatedAction(
  signInSchema,
  async (data): Promise<ActionState> => {
    const res = await fetch(`${env.API_BASE_URL}/api/user/login`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const json = (await res.json()) as
      | { token: string }
      | { code: string; message: string };

    if ("code" in json) {
      if (json.code === "INVALID_PASSWORD") {
        return {
          status: "error",
          errors: {
            password: ["Invalid password"],
          },
          ...data,
        };
      }

      return {
        status: "error",
        errors: {
          email: ["Invalid email"],
        },
      };
    } else {
      const cookieStore = await cookies();
      cookieStore.set("token", json.token);
      redirect("/verify");
    }
  },
);
