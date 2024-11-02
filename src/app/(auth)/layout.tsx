import { AuthHeader } from "@/components/auth-header";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // grid rows auto 1fr makes sure that the children take up the remaining space
    <div className="grid min-h-dvh grid-rows-[auto_1fr]">
      <AuthHeader />
      {children}
    </div>
  );
}
