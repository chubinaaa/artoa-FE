import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";

export function DeactivateAccount() {
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
