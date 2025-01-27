import { MobileSidebar } from "./_components/mobile-sidebar";
import PersonalInfo from "./_components/personal-info";
import UserInfo from "./_components/user-info";

export default function ProfilePage() {
  return (
    <div>
      <h1 className="inline-flex gap-3 text-xl font-bold text-primary md:hidden md:text-3xl">
        <MobileSidebar />
        My Profile
      </h1>
      <UserInfo />
      <PersonalInfo />
    </div>
  );
}
