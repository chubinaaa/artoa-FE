import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Icons } from "@/components/icons";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { AuthShell } from "@/components/auth/auth-shell";
import { Label } from "@/components/ui/label";
import { SocialButton } from "@/components/auth/sign-in/social-button";

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
                href="/sign-up"
              >
                Log in.
              </Link>
            </p>
          </div>
        </div>
        <form className="flex flex-col gap-6">
          <div className="flex flex-col gap-2.5">
            <Label>Email Address</Label>
            <Input type="email" placeholder="Email Address" />
          </div>
          <div className="flex flex-col gap-2.5">
            <Label>Enter Password</Label>
            <Input type="password" placeholder="***************" />
            <span className="-mt-0.5 self-end text-2xs text-muted-foreground md:text-xs">
              Use 8 or more characters with mix of letters, numbers & symbols
            </span>
          </div>
          <div className="flex flex-col gap-2.5">
            <Label>Repeat Password</Label>
            <Input type="password" placeholder="***************" />
            <span className="-mt-0.5 self-end text-2xs text-muted-foreground md:text-xs">
              Use 8 or more characters with mix of letters, numbers & symbols
            </span>
          </div>
          <div className="mt-6 flex items-center space-x-2 text-xs md:text-base">
            <Checkbox />{" "}
            <Label>
              By creating an account, I agree to the{" "}
              <Link
                href="/terms"
                className={cn(buttonVariants({ variant: "link" }), "h-fit p-0")}
              >
                Terms and Conditions
              </Link>
            </Label>
          </div>
          <Button size="lg">Create Account</Button>
        </form>
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
