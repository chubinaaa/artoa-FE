import { AuthShell } from "@/components/auth/auth-shell";
import WriteEmail from "@/components/auth/forget-pass/write-email";

export default function ForgotPassword() {
  return (
    <AuthShell>
      <WriteEmail />
    </AuthShell>
  );
}
