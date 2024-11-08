import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";

export default function VerifyEmailPage() {
  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-col items-center gap-8 text-center">
        <Icons.emailOutline className="size-14 text-foreground" />
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl font-semibold">Check your email</h1>
          <p>We’ve sent a link to verify your email address:</p>
          <p className="font-semibold">Name.surname12@gmail.com</p>
          <p>
            Please check your inbox and follow the instructions to verify your
            email address.
          </p>
        </div>
      </div>
      <Button size="lg">Resend Link</Button>
    </div>
  );
}
