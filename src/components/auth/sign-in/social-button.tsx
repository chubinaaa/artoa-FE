import { Icons } from "@/components/icons";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface SocialButtonProps extends React.ComponentProps<typeof Link> {
  icon: keyof typeof Icons;
}

export function SocialButton({
  icon,
  className,
  children,
  ...props
}: SocialButtonProps) {
  const Icon = Icons[icon];
  return (
    <Link
      className={cn(
        buttonVariants({ variant: "outline" }),
        "px-4 md:h-14 md:justify-start",
        className,
      )}
      {...props}
    >
      <Icon className="mr-1 text-muted-foreground" />
      <span className="text-xs text-muted-foreground">{children}</span>
    </Link>
  );
}
