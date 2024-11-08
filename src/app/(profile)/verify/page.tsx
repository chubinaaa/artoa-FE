import { AuthShell } from "@/components/auth/auth-shell";
import { VerifyUserForm } from "./_components/verify-user-form.client";

export default function VerifyPage() {
  return (
    <AuthShell>
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-semibold">
            Please fill in your personal details
          </h1>
          <p>
            Please provide your Name, Surname, Role and if you are an Artist,
            write a Nickname
          </p>
        </div>
        <VerifyUserForm />
      </div>
    </AuthShell>
  );
}
