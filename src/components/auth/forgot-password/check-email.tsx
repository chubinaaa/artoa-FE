import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";

export default function CheckEmail() {
  return (
    <div className="flex flex-col gap-6 text-center">
      <div className="mb-6 flex flex-col items-center gap-4">
        <Icons.emailOutline className="mb-6" />
        <h2 className="mb-6 text-xl font-semibold md:text-3xl">
          Check your email
        </h2>
        <p className="text-sm md:text-base">
          We’ve sent a link to reset your password to your email address:
        </p>
        <p className="text-sm font-semibold md:text-base">
          Name.surname12@gmail.com
        </p>
        <p className="text-sm md:text-base">
          Please check your inbox and follow the instructions to create a new
          password.
        </p>
      </div>
      <Button size="lg">Resend Link</Button>
    </div>
  );
}
