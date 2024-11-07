import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Icons } from "../../../components/icons";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

export default function SignUp() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black px-4 md:px-8">
      <Icons.bgStars className="absolute left-32 top-32 max-[1280px]:left-0 max-lg:top-6 max-lg:size-28 max-md:top-14 max-md:size-14 max-[375px]:size-10" />
      <Icons.bgStars className="max-md:-bottom-90 absolute -bottom-40 right-36 max-[1280px]:right-0 max-lg:size-28 max-md:size-16 max-[375px]:size-14" />

      <div className="md:p-18 my-8 w-full max-w-md rounded-3xl bg-background p-6 md:my-16 md:h-[1026px] md:max-w-xl">
        <h2 className="text-2xl">Hello!</h2>
        <p className="text-2xl">
          Create an ArtOa account
          <br />
        </p>
        <p className="mt-0 flex text-sm md:mt-0 md:text-base">
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
          <label className="md:text-m my-2 block text-sm">Email Address</label>
          <Input
            type="email"
            placeholder="Email Address"
            className="md:placeholder:text-m placeholder:text-sm"
          />
          <label className="md:text-m my-2 block text-sm">Enter Password</label>
          <Input type="password" placeholder="Password" />
          <label className="md:text-m my-2 block text-sm">
            Repeat Password
          </label>
          <Input type="password" placeholder="Repeat Password" />

          <div className="my-8 flex items-center">
            <div className="mt-6 flex justify-between md:my-8">
              <div className="flex">
                <Checkbox className="me-2 size-4 md:size-5" />
                <span className="text-xs md:text-sm">
                  By creating an account, I agree to the{" "}
                </span>
                <Link
                  href="/terms"
                  className="ml-2 text-xs text-primary hover:underline"
                >
                  Terms and Conditions
                </Link>
              </div>
            </div>
          </div>
          <Button className="w-full">Create Account</Button>
        </form>
        <div>
          <div className="mt-16 flex items-center justify-around text-xs md:mt-10">
            <Icons.horizontalLine /> Or <Icons.horizontalLine />
          </div>
          <div>
            <Button
              className={cn(
                buttonVariants({ variant: "outline" }),
                "mt-4 h-12 w-full justify-start p-0 text-white md:mt-5 md:h-16",
              )}
            >
              <Icons.google className="ml-4 size-5 md:ml-5 md:size-6" />
              Sign up with Google
            </Button>
            <Button
              className={cn(
                buttonVariants({ variant: "outline" }),
                "mt-4 h-12 w-full justify-start p-0 text-white md:mt-5 md:h-16",
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
                "mt-4 h-12 w-full justify-start p-0 text-white md:mt-5 md:h-16",
              )}
            >
              <Icons.linkedin className="ml-5 size-6 [&_svg]:size-6" />
              Sign up with LinkedIn
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
