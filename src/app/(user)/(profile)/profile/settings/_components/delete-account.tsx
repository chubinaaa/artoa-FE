import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";

export function DeleteAccount() {
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
