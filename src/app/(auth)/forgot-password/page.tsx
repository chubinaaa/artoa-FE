import { AuthShell } from "@/components/auth/auth-shell";
// import CheckEmail from "@/components/auth/forgot-password/check-email";
import NewPassword from "@/components/auth/forgot-password/new-password";

// import WriteEmail from "@/components/auth/forgot-password/write-email";

export default function ForgotPassword() {
  return (
    <AuthShell>
      {/* <WriteEmail /> */}
      {/* <CheckEmail /> */}
      <NewPassword />
    </AuthShell>
  );
}
