import { AuthShell } from "@/components/auth/auth-shell";
import { env } from "@/env.mjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { VerifyUserForm } from "./_components/verify-user-form.client";

type User = {
  id: string;
  email: string;
  isVerified: boolean;
  userType: "customer" | "artist" | null;
  firstName: string | null;
  lastName: string | null;
  city: "Tbilisi" | "Rustavi" | "Batumi" | "Kutaisi" | null;
  nickname: string | null;
  isSetupComplete: boolean | null;
};

async function getSession() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  if (!token) return null;
  const res = await fetch(`${env.API_BASE_URL}/api/user`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const json = await res.json();
  return json as User;
}

export default async function VerifyPage() {
  const user = await getSession();
  if (user?.isSetupComplete) redirect("/profile");

  return (
    <AuthShell>
      <div className="flex flex-col gap-4 md:gap-12">
        <div className="flex flex-col gap-1 md:gap-2">
          <h1 className="font-medium md:text-3xl md:font-semibold">
            Please fill in your personal details
          </h1>
          <p className="text-xs md:text-base">
            Please provide your Name, Surname, Role and if you are an Artist,
            write a Nickname
          </p>
        </div>
        <VerifyUserForm />
      </div>
    </AuthShell>
  );
}
