import { AuthShell } from "@/components/auth/auth-shell";
import WriteEmail from "@/components/auth/forget-pass/write-email";
// import CheckEmail from "@/components/auth/forget-pass/check-email";

export default function ForgotPassword() {
  return (
    <AuthShell>
      <WriteEmail />
      {/* <CheckEmail /> */}
    </AuthShell>
  );
}
