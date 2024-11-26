import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function NewPassword() {
  return (
    <div className="flex flex-col gap-16">
      <h2 className="text-xl font-semibold md:text-3xl">Forgot Password</h2>
      <div className="flex flex-col gap-4">
        <Label>Enter New Password</Label>
        <Input placeholder="***************" type="password" />
        <p className="-mt-1 self-end text-xs text-muted-foreground">
          Use 8 or more characters with mix of letters, numbers & symbols
        </p>
        <Label>Repeat New Password</Label>
        <Input placeholder="***************" type="password" />
      </div>
      <Button size="lg">Save New Password</Button>
    </div>
  );
}
