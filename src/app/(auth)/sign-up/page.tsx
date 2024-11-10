import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Icons } from "@/components/icons";
import { AuthShell } from "@/components/auth/auth-shell";
import { SocialButton } from "@/components/auth/sign-in/social-button";
import { SignUpForm } from "./_components/sign-up-form.client";

export default function SignUp() {
  return (
    <AuthShell>
      <div className="flex flex-col gap-6 md:gap-12">
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-semibold md:text-3xl">Hello!</h2>
          <div className="flex flex-col gap-1">
            <p className="font-semibold md:text-3xl">Create an ArtOa account</p>
            <p className="text-sm md:text-base">
              Already have an account?{" "}
              <Link
                className={cn(buttonVariants({ variant: "link" }), "h-fit p-0")}
                href="/sign-in"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
        <SignUpForm />
        <div className="flex items-center gap-3 text-xs">
          <Icons.horizontalLine /> Or <Icons.horizontalLine />
        </div>
        <div className="flex flex-col gap-6">
          <SocialButton icon="google" href="#">
            Sign up with Google
          </SocialButton>
          <SocialButton icon="facebook" href="#">
            Sign up with Facebook
          </SocialButton>
          <SocialButton icon="linkedin" href="#">
            Sign up with LinkedIn
          </SocialButton>
        </div>
      </div>
    </AuthShell>
  );
}
