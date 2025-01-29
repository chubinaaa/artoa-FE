import { PublicFooter } from "@/components/footer/public-footer";
import { ProfileHeader } from "@/components/header/profile-header";

interface PortfolioLayoutProps {
  children: React.ReactNode;
}

export default async function PortfolioLayout({
  children,
}: PortfolioLayoutProps) {
  return (
    <div className="grid min-h-dvh grid-rows-[auto_1fr_auto]">
      <ProfileHeader />
      {children}
      <PublicFooter />
    </div>
  );
}
