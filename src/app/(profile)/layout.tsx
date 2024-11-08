import { PublicFooter } from "@/components/footer/public-footer";
import { ProfileHeader } from "@/components/header/profile-header";

type ProfileLayoutProps = {
  children: React.ReactNode;
};

export default async function ProfileLayout({ children }: ProfileLayoutProps) {
  return (
    <div className="grid grid-rows-[auto_1fr_auto]">
      <ProfileHeader />
      {children}
      <PublicFooter />
    </div>
  );
}
