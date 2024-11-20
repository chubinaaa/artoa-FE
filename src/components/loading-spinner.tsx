import { cn } from "@/lib/utils";

import { Icons } from "./icons";

export function LoadingSpinner({ pending }: { pending: boolean }) {
  return (
    <span
      className={cn("absolute left-0 top-0 hidden translate-x-[-150%]", {
        block: pending,
      })}
    >
      {/* FIXME: add a loading spinner*/}
      <Icons.logo className={pending ? "animate-spin" : ""} />
    </span>
  );
}
