import { cn } from "@/lib/utils";
import { Icons } from "./icons";
import { Button, ButtonProps } from "./ui/button";

interface LoadingButtonProps extends ButtonProps {
  loading: boolean;
  label: string;
}

export function LoadingButton({
  loading,
  label,
  className,
  ...props
}: LoadingButtonProps) {
  return (
    <Button
      disabled={loading}
      data-loading={loading}
      className={cn("group grid place-items-center", className)}
      {...props}
    >
      <span className="[grid-area:1/1] group-data-[loading=true]:invisible">
        {label}
      </span>
      <span className="invisible animate-spin [grid-area:1/1] group-data-[loading=true]:visible">
        <Icons.loader />
      </span>
    </Button>
  );
}
