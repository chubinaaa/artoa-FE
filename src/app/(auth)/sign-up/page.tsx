import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Icons } from "../../../components/icons";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

export default function SignUp() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black">
      <Icons.bgStars className="absolute left-32 top-32" />
      <Icons.bgStars className="absolute -bottom-40 right-36" />

      <div
        className="my-16 h-[1026px] w-[868px] rounded-3xl bg-background p-[64px]"
        style={{ backgroundColor: " #121212" }}
      >
        <h2 className="text-2xl">Hello!</h2>
        <p className="text-2xl">
          Create an ArtOa account
          <br />
        </p>
        <p className="mt-0 flex text-base">
          {"Already have an account? "}
          <Link
            className={cn(
              buttonVariants({ variant: "link" }),
              "flex flex-wrap items-start p-0 ps-1",
            )}
            href="/sign-up"
          >
            Log in.
          </Link>
        </p>

        <form className="mt-6">
          <label className="text-m my-2 block">Email Address</label>
          <Input
            type="email"
            placeholder="Email Address"
            className="placeholder:text-m"
          />
          <label className="text-m my-2 block">Enter Password</label>
          <Input type="password" placeholder="Password" />
          <label className="text-m my-2 block">Repeat Password</label>
          <Input type="password" placeholder="Repeat Password" />

          <div className="my-8 flex items-center">
            <div className="mt-6 flex justify-between">
              <div className="flex">
                <Checkbox className="me-2 size-5" /> By creating an account, I
                agree to the{" "}
                <Link
                  href="/terms"
                  className="ml-2 text-primary hover:underline"
                >
                  Terms and Conditions
                </Link>
              </div>
            </div>
          </div>
          <Button className="w-full">Create Account</Button>
        </form>
        <div>
          <div className="mt-16 flex items-center justify-around text-xs">
            <Icons.horizontalLine /> Or <Icons.horizontalLine />
          </div>
          <div>
            <Button
              className={cn(
                buttonVariants({ variant: "outline" }),
                "mt-5 h-16 w-[740px] justify-start p-0 text-white",
              )}
            >
              <Icons.google className="ml-5 size-6" />
              Sign up with Google
            </Button>
            <Button
              className={cn(
                buttonVariants({ variant: "outline" }),
                "mt-5 h-16 w-[740px] justify-start p-0 text-white",
              )}
            >
              <Icons.facebook
                className="ml-5 text-xl"
                color="hsla(217, 5%, 51%, 1)"
              />
              Sign up with Facebook
            </Button>
            <Button
              className={cn(
                buttonVariants({ variant: "outline" }),
                "mt-5 h-16 w-[740px] justify-start p-0 text-white",
              )}
            >
              <Icons.linkedin className="\\[\\&_svg\\]\\:size-6 svg ml-5 size-6" />
              Sign up with LinkedIn
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
