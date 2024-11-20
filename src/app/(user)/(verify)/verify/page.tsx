import { AuthShell } from "@/components/auth/auth-shell";

import { VerifyUserForm } from "./_components/verify-user-form.client";

export default function VerifyPage() {
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
