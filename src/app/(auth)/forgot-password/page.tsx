import { AuthShell } from "@/components/auth/auth-shell";
import NewPassword from "@/components/auth/forgot-password/new-password";

// import WriteEmail from "@/components/auth/forgot-password/write-email";
// import CheckEmail from "@/components/auth/forgot-password/check-email";

export default function ForgotPassword() {
  return (
    <AuthShell>
      {/* <WriteEmail /> */}
      {/* <CheckEmail /> */}
      <NewPassword />
    </AuthShell>
  );
}
