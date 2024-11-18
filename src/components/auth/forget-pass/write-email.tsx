import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function WriteEmail() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col items-center gap-2">
        <Icons.emailEditOutline className="gap-6" />
        <h2 className="text-xl font-semibold md:text-3xl">
          Write us your Email Address
        </h2>
        <p className="text-sm md:text-base">
          To reset your password, please enter your email address below.
        </p>
      </div>
      <Input
        className="mx-auto w-11/12"
        placeholder="Email Address"
        type="email"
      />
      <Button size="lg">Send Link</Button>
    </div>
  );
}
