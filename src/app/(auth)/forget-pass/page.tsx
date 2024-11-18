import { AuthShell } from "@/components/auth/auth-shell";
import NewPassword from "@/components/auth/forget-pass/new-password";
// import WriteEmail from "@/components/auth/forget-pass/write-email";
// import CheckEmail from "@/components/auth/forget-pass/check-email";

export default function ForgotPassword() {
  return (
    <AuthShell>
      {/* <WriteEmail /> */}
      {/* <CheckEmail /> */}
      <NewPassword />
    </AuthShell>
  );
}
