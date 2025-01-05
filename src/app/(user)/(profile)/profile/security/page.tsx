import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import Link from "next/link";

export default function ProfileSecurityPage() {
  return (
    <main>
      <div className="flex flex-col space-y-6 rounded-2xl border border-muted-foreground bg-secondary p-6">
        <div>
          <h1 className="text-3xl font-bold">Security</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Manage your account security and devices.
          </p>
        </div>
        <div className="grid grid-cols-4 rounded-md border border-input bg-input-background px-6 py-5">
          <h2 className="col-span-2">Password</h2>
          <p className="inline-flex items-center justify-end gap-3">
            ********
            <span className="inline-flex items-center gap-2 text-success">
              <Icons.check className="rounded-full border border-success p-0.5" />
              Very Secure
            </span>
          </p>
          <Link
            href={{
              query: {
                editPassword: true,
              },
            }}
            className="inline-flex justify-end gap-3"
          >
            <Icons.editSquare className="size-6" /> Edit
          </Link>
        </div>
        <div className="flex justify-between rounded-md border border-input bg-input-background px-6 py-5">
          <div>
            <h2>Two-step verification</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              We recommend requiring a verification code in addition to your
              password.
            </p>
          </div>
          <div className="inline-flex items-center gap-2">
            <Switch />
            <Label className="sr-only">Two-step verification toggle</Label>
          </div>
        </div>
      </div>
      <div className="mt-28 grid grid-cols-4 justify-end gap-12">
        <Button className="col-start-3" size="lg" variant="secondary">
          Cancel
        </Button>
        <Button className="col-start-4" size="lg">
          Save
        </Button>
      </div>
    </main>
  );
}
