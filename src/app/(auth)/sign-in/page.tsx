import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Icons } from "../../../components/icons";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import SocialButton from "@/components/ui/social-button";

export default function SignIn() {
  return (
    <div className="bg-black">
      <Icons.bgStars className="absolute left-32 top-32 max-[1280px]:left-0 max-lg:top-6 max-lg:size-28 max-md:top-14 max-md:size-14 max-[375px]:size-10" />
      <Icons.bgStars className="absolute -bottom-40 right-36 max-[1280px]:right-0 max-lg:size-28 max-md:size-16 max-[375px]:size-14" />
      <div className="flex items-center justify-center">
        <div className="my-16 w-[868px] rounded-3xl bg-background p-[64px] max-lg:max-w-[720px] max-lg:p-6 max-md:w-[400px] max-[375px]:w-72">
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
                <Input
                  className="w-[740px] max-lg:w-[670px] max-md:w-[340px] max-[375px]:w-60"
                  placeholder="Email"
                />
              </div>
              <div>
                <label className="mb-2 flex">Enter Password</label>
                <Input
                  className="w-[740px] max-lg:w-[670px] max-md:w-[340px] max-[375px]:w-60"
                  placeholder="***************"
                  type="password"
                />
                <div className="mt-6 flex justify-between">
                  <div className="flex items-center">
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
            <div>
              <Button
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "mt-16 h-16 w-[740px] p-0 max-lg:w-[670px] max-md:w-[340px] max-[375px]:w-60",
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
            <div className="mt-10">
              <SocialButton icon={<Icons.google />} href="#">
                Google
              </SocialButton>
              <SocialButton
                icon={<Icons.facebook color="hsla(217, 5%, 51%, 1)" />}
                href="#"
              >
                Facebook
              </SocialButton>
              <SocialButton icon={<Icons.linkedin />} href="#">
                Linkedin
              </SocialButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
