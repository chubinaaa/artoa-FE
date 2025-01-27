import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import Link from "next/link";

import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Sidebar } from "../_components/sidebar.client";

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
        <Password />
        <TwoStepVerification />
        <DeactivateAccount />
        <DeleteAccount />
      </div>
    </main>
  );
}

function Password() {
  return (
    <div className="flex flex-col justify-between rounded-lg border border-input bg-input-background px-4 py-2 md:flex-row md:items-center">
      <div>
        <h2 className="font-medium">Password</h2>
        <p className="mt-1 text-sm font-medium text-muted-foreground md:mt-2">
          You cannot deactivate your account while you have ongoing orders.
        </p>
      </div>
      <div className="mt-2 flex flex-1 justify-between md:mt-0">
        <p className="inline-flex items-center justify-end gap-3 font-medium md:mx-auto">
          ********
          <span className="inline-flex items-center gap-2 text-sm text-success md:text-base">
            <Icons.check className="size-[14px] rounded-full border border-success p-0.5" />
            Very Secure
          </span>
        </p>
        <Link
          href={{
            query: {
              editPassword: true,
            },
          }}
          className="inline-flex justify-end gap-3 text-xs md:text-base"
        >
          <Icons.editLine className="size-4 md:size-6" /> Edit
        </Link>
      </div>
    </div>
  );
}

function TwoStepVerification() {
  return (
    <div className="flex justify-between rounded-lg border border-input bg-input-background px-4 py-2">
      <div>
        <h2 className="font-medium">Two-step verification</h2>
        <p className="mt-1 text-sm text-muted-foreground md:mt-2">
          We recommend requiring a verification code in addition to your
          password.
        </p>
      </div>
      <div className="inline-flex items-center gap-2">
        <Switch />
        <Label className="sr-only">Two-step verification toggle</Label>
      </div>
    </div>
  );
}

function DeactivateAccount() {
  return (
    <div className="flex items-center justify-between rounded-lg border border-input bg-input-background px-4 py-2">
      <div className="mr-2">
        <h2 className="font-medium">Deactivate Account</h2>
        <p className="mt-1 text-sm text-muted-foreground md:mt-2">
          Users cannot log in or interact with the platform Ongoing data and
          projects are preserved.
        </p>
      </div>
      <Button variant="destructive" className="hidden md:inline-flex">
        Deactivate Account
      </Button>
      <Button
        variant="destructive"
        size="icon"
        className="h-6 bg-destructive/30 text-destructive md:hidden"
      >
        <Icons.delete />
      </Button>
    </div>
  );
}

function DeleteAccount() {
  return (
    <div className="flex items-center justify-between rounded-lg border border-input bg-input-background px-4 py-2">
      <div>
        <h2 className="font-medium">Delete Account</h2>
        <p className="mt-1 text-sm text-muted-foreground md:mt-2">
          Permanently delete your account and all associated data after
          completing active projects
        </p>
      </div>
      <Button variant="destructive" className="hidden md:inline-flex">
        Delete Account
      </Button>
      <Button
        variant="destructive"
        size="icon"
        className="h-6 bg-destructive/30 text-destructive md:hidden"
      >
        <Icons.delete />
      </Button>
    </div>
  );
}

function MobileSidebar() {
  return (
    <Sheet>
      <SheetTrigger>
        <Icons.arrowLeft className="text-foreground md:hidden" />
      </SheetTrigger>
      <SheetContent
        overlayHidden
        closeHidden
        side="left"
        className="mt-22 w-full"
      >
        <SheetTitle className="sr-only">Sidebar</SheetTitle>
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
}
