import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AuthShell } from "../auth-shell";

export default function WriteEmail() {
  return (
    <AuthShell>
      <div className="flex flex-col">
        <div>icon</div>
        <p>asd</p>
        <p>asd</p>
        <Input
          className="w-[610px] max-lg:w-[670px] max-md:w-[340px] max-[375px]:w-60"
          placeholder="Email Address"
          type="email"
        />
        <Button size="lg">Log In</Button>
      </div>
    </AuthShell>
  );
}
