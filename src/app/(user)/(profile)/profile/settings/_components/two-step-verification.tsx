import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export function TwoStepVerification() {
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
