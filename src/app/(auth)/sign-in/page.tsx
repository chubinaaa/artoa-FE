import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { AuthShell } from "@/components/auth/auth-shell";
import { SocialButton } from "@/components/auth/sign-in/social-button";
import { Icons } from "@/components/icons";

import { SignInForm } from "./_components/sign-in-form.client";

export default function SignIn() {
  return (
    <AuthShell>
      <div className="flex flex-col gap-6 md:gap-12">
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-semibold md:text-3xl">Hello!</h2>
          <div className="flex flex-col gap-1">
            <p className="font-semibold md:text-3xl">Log in</p>
            <p className="text-sm md:text-base">
              Don&apos;t have an account?{" "}
              <Link
                className={cn(buttonVariants({ variant: "link" }), "h-fit p-0")}
                href="/sign-up"
              >
                Sign Up.
              </Link>
            </p>
          </div>
        </div>
        <SignInForm />
        <div className="flex items-center gap-3 text-xs">
          <Icons.horizontalLine /> Or <Icons.horizontalLine />
        </div>
        <div className="flex flex-col gap-6">
          <SocialButton icon="google" href="#">
            Sign in with Google
          </SocialButton>
          <SocialButton icon="facebook" href="#">
            Sign in with Facebook
          </SocialButton>
          <SocialButton icon="linkedin" href="#">
            Sign in with LinkedIn
          </SocialButton>
        </div>
      </div>
    </AuthShell>
  );
}
