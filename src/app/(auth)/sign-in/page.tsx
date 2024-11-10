import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Icons } from "@/components/icons";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { AuthShell } from "@/components/auth/auth-shell";
import { Label } from "@/components/ui/label";
import { SocialButton } from "@/components/auth/sign-in/social-button";

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
        <form className="flex flex-col gap-6">
          <div className="flex flex-col gap-2.5">
            <Label>Enter Login</Label>
            <Input placeholder="Email" />
          </div>
          <div className="flex flex-col gap-2.5">
            <Label>Enter Password</Label>
            <Input placeholder="***************" type="password" />
            <Link
              className="-mt-0.5 self-end text-xs text-muted-foreground"
              href="#"
            >
              Forget Password
            </Link>
          </div>
          <div className="flex items-center space-x-2 text-xs md:mt-6 md:text-base">
            <Checkbox /> <Label>Remember Me</Label>
          </div>
          <Button size="lg">Log In</Button>
        </form>
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
