import { cn } from "@/lib/utils";

import { Icons } from "../icons";

interface AuthShellProps {
  children: React.ReactNode;
  position?: "center" | "top";
}

export function AuthShell({ children, position = "top" }: AuthShellProps) {
  return (
    <div
      className={cn("grid", {
        "py-14": position === "top",
        "-mt-22 place-items-center": position === "center",
      })}
    >
      <div className="container relative mx-auto h-fit max-w-xs rounded-3xl bg-secondary px-4 py-6 sm:max-w-xl md:max-w-2xl md:p-16 lg:max-w-3xl">
        {children}
        <Icons.bgStars className="absolute left-0 top-0 size-10 -translate-x-5 -translate-y-5 md:size-16 md:translate-x-[calc(-100%-14px)] md:translate-y-14 lg:size-20 xl:size-40" />
        <Icons.bgStars className="absolute bottom-0 right-0 size-20 translate-x-1 translate-y-9 md:size-24 md:translate-x-[calc(100%-16px)] md:translate-y-1 lg:size-28 xl:size-40" />
      </div>
    </div>
  );
}
