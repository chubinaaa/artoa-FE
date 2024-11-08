import { AuthShell } from "@/components/auth/auth-shell";
import { PublicHeader } from "@/components/header/public-header";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // grid rows auto 1fr makes sure that the children take up the remaining space
    <div className="grid min-h-dvh grid-rows-[auto_1fr]">
      <PublicHeader />
      <AuthShell>{children}</AuthShell>
    </div>
  );
}
