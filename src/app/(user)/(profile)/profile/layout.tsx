import { ProfileSidebar } from "./components/sidebar.client";

type ProfileLayoutProps = {
  children: React.ReactNode;
};
export default function ProfileLayout({ children }: ProfileLayoutProps) {
  return (
    <div className="container mx-auto grid grid-cols-[312px_1fr] gap-x-5 py-16">
      <ProfileSidebar />
      {children}
    </div>
  );
}
