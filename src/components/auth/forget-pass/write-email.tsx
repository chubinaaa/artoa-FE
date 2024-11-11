import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export default function WriteEmail() {
  return (
    <div className="my-16 w-[868px] rounded-3xl bg-background p-[64px] max-lg:max-w-[720px] max-lg:p-6 max-md:w-[400px] max-[375px]:w-72">
      <div>icon</div>
      <p>asd</p>
      <p>asd</p>
      <Input
        className="w-[610px] max-lg:w-[670px] max-md:w-[340px] max-[375px]:w-60"
        placeholder="Email Address"
        type="email"
      />
      <Button
        className={cn(
          buttonVariants({ variant: "default" }),
          "mt-16 h-16 w-[740px] p-0 max-lg:w-[670px] max-md:w-[340px] max-[375px]:w-60",
        )}
      >
        Log In
      </Button>
    </div>
  );
}
