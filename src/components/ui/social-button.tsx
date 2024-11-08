import * as React from "react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./button";
import Link from "next/link";

interface SocialButtonProps extends React.ComponentProps<typeof Link> {
  children: React.ReactNode;
  href: string;
  className?: string;
  icon: React.ReactNode;
}

function SocialButton({ children, href, className, icon }: SocialButtonProps) {
  return (
    <Link
      href={href}
      passHref
      className={cn(
        buttonVariants({ variant: "outline" }),
        "mt-5 h-14 w-[740px] p-0 max-lg:w-[670px] max-md:w-[340px] max-[375px]:w-60",
        className,
      )}
    >
      <span className="ms-5 flex items-center max-md:ms-0">
        {icon}
        <span className="ps-3">{children}</span>
      </span>
    </Link>
  );
}
export default SocialButton;
