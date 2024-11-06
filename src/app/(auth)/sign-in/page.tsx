import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Icons } from "../../../components/icons";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

export default function SignIn() {
  return (
    <div className="bg-black">
      <Icons.bgStars className="absolute left-32 top-32" />
      <Icons.bgStars className="absolute -bottom-40 right-36" />
      <div className="flex items-center justify-center">
        <div className="my-16 h-[1026px] w-[868px] rounded-3xl bg-background p-[64px]">
          <div className="text-3xl">
            <p className="mb-3">Hello!</p>
            <p>Log in</p>
            <p className="mt-0 flex text-base">
              {"Don't have an account? "}
              <Link
                className={cn(
                  buttonVariants({ variant: "link" }),
                  "flex flex-wrap items-start p-0 ps-1",
                )}
                href="/sign-up"
              >
                Sign Up.
              </Link>
            </p>
          </div>
          <form>
            <div className="">
              <div className="mb-6">
                <label className="mb-2 flex">Enter Login</label>
                <Input className="w-[740px]" placeholder="Email" />
              </div>
              <div>
                <label className="mb-2 flex">Enter Password</label>
                <Input
                  className="w-[740px]"
                  placeholder="***************"
                  type="password"
                />
                <div className="mt-6 flex justify-between">
                  <div className="flex">
                    <Checkbox className="me-2 size-5" /> Remember Me
                  </div>
                  <Link
                    className="flex items-center p-0 text-xs text-[#AFAFAF]"
                    href="#"
                  >
                    Forget Password
                  </Link>
                </div>
              </div>
            </div>
            {/* <div className="my-10 flex items-center text-xs">
              <Checkbox className="me-3" /> By creating an account, I agree to
              our
              <p className="ms-2 flex cursor-pointer underline">
                Terms and Conditions
              </p>
            </div> */}
            <div>
              <Button
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "mt-12 h-16 w-[740px] p-0",
                )}
              >
                Log In
              </Button>
            </div>
          </form>
          <div>
            <div className="mt-16 flex items-center justify-around text-xs">
              <Icons.horizontalLine /> Or <Icons.horizontalLine />
            </div>
            <div>
              <Button
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "mt-5 h-16 w-[740px] p-0",
                )}
              >
                <Icons.google className="size-6" />
                Google
              </Button>
              <Button
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "mt-5 h-16 w-[740px] p-0",
                )}
              >
                <Icons.facebook
                  className="text-xl"
                  color="hsla(217, 5%, 51%, 1)"
                />
                Facebook
              </Button>
              <Button
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "mt-5 h-16 w-[740px] p-0",
                )}
              >
                <Icons.linkedin className="size-6" />
                {/*ar mushaobs size parametri */}
                Linkedin
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
