import { ProfileSidebar } from "./_components/sidebar.client";

type ProfileLayoutProps = {
  children: React.ReactNode;
};
export default function ProfileLayout({ children }: ProfileLayoutProps) {
  return (
    <div className="container mx-auto flex flex-col gap-x-5 py-16 lg:grid lg:grid-cols-[312px_1fr]">
      <ProfileSidebar />
      {children}
    </div>
  );
}
