import { Button } from "@/components/ui/button";
import { AuthShell } from "@/components/auth/auth-shell";
import { Icons } from "@/components/icons";

export default function VerifyEmailPage() {
  return (
    <AuthShell position="center">
      <div className="flex flex-col gap-6 md:gap-12">
        <div className="flex flex-col items-center gap-8 text-center">
          <Icons.emailOutline className="size-14 text-foreground" />
          <div className="flex flex-col gap-6">
            <h1 className="font-semibold md:text-4xl">Check your email</h1>
            <p className="text-sm md:text-base">
              We’ve sent a link to verify your email address:
            </p>
            <p className="text-sm font-semibold md:text-sm">
              Name.surname12@gmail.com
            </p>
            <p className="text-sm md:text-base">
              Please check your inbox and follow the instructions to verify your
              email address.
            </p>
          </div>
        </div>
        <Button>Resend Link</Button>
      </div>
    </AuthShell>
  );
}
