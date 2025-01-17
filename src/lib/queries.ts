import { env } from "@/env.mjs";
import { NewUser } from "@/types/user";

export async function createUser(data: NewUser) {
  const res = await fetch(`${env.API_BASE_URL}/api/user/create`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const json = await res.json();
  return json;
}
