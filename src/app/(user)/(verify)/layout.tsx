import { ProfileHeader } from "@/components/header/profile-header";

interface VerifyLayoutProps {
  children: React.ReactNode;
}

export default async function VerifyLayout({ children }: VerifyLayoutProps) {
  return (
    <div className="grid min-h-dvh grid-rows-[auto_1fr]">
      <ProfileHeader />
      {children}
    </div>
  );
}
