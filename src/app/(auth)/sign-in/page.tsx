import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Icons } from "../../../components/icons";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

export default function SignIn() {
  return (
    <div className="bg-black">
      <Icons.bg_stars className="absolute left-80 top-32" />
      <Icons.bg_stars className="absolute -bottom-40 right-96" />
      <div className="flex items-center justify-center">
        <div className="my-16 h-[1026px] w-[868px] rounded-3xl bg-background p-[128px]">
          <div className="">
            <p>Hello!</p>
            <p>Log in</p>
            <p>
              {"Don't have an account? "}
              <Link
                className={cn(buttonVariants({ variant: "link" }), "p-0")}
                href="/sign-up"
              >
                Sign Up.
              </Link>
            </p>
          </div>
          <form>
            <div className="">
              <div className="">
                <label>Enter Login</label>
                <Input placeholder="Email" />
              </div>
              <div>
                <label>Enter Password</label>
                <Input placeholder="***************" type="password" />
                <Link
                  className="right-0 mt-2 flex justify-end p-0 text-sm text-[#AFAFAF]"
                  href="#"
                >
                  Forget Password
                </Link>
              </div>
            </div>
            <div className="mt-10 flex">
              <Checkbox className="me-3" /> By creating an account, I agree to
              our
              <Link
                className={cn(buttonVariants({ variant: "link" }), "p-0")}
                href="#"
              >
                Terms and Conditions
                {/* gasasworebelia */}
              </Link>
            </div>
            <div>
              <Button
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "w-96 p-0",
                )}
              >
                asd
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
