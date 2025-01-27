import { MobileSidebar } from "../_components/mobile-sidebar";
import { ChangePassword } from "./_components/change-password";
import { TwoStepVerification } from "./_components/two-step-verification";
import { DeactivateAccount } from "./_components/deactivate-account";
import { DeleteAccount } from "./_components/delete-account";

export default function ProfileSettingsPage() {
  return (
    <main>
      <div className="flex flex-col space-y-2 md:space-y-6 md:rounded-2xl md:border md:border-muted-foreground md:bg-secondary md:p-6">
        <div>
          <h1 className="inline-flex gap-3 text-xl font-bold text-primary md:text-3xl">
            <MobileSidebar />
            Settings
          </h1>
          <p className="mt-1 hidden text-sm text-muted-foreground md:block">
            Manage your account security and devices.
          </p>
        </div>
        <ChangePassword />
        <TwoStepVerification />
        <DeactivateAccount />
        <DeleteAccount />
      </div>
    </main>
  );
}
