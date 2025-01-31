import { Icons } from "@/components/icons";
import Link from "next/link";

export function ChangePassword() {
  return (
    <div className="flex flex-col justify-between rounded-lg border border-input bg-input-background px-4 py-2 md:flex-row md:items-center">
      <div>
        <h2 className="font-medium">Password</h2>
        <p className="mt-1 text-sm font-medium text-muted-foreground md:mt-2">
          You cannot deactivate your account while you have ongoing orders.
        </p>
      </div>
      <div className="mt-2 flex flex-1 justify-between md:mt-0">
        <p className="inline-flex items-center justify-end gap-3 font-medium md:mx-auto">
          ********
          <span className="inline-flex items-center gap-2 text-sm text-success md:text-base">
            <Icons.check className="size-[14px] rounded-full border border-success p-0.5" />
            Very Secure
          </span>
        </p>
        <Link
          href={{
            query: {
              editPassword: true,
            },
          }}
          className="inline-flex justify-end gap-3 text-xs md:text-base"
        >
          <Icons.editLine className="size-4 md:size-6" /> Edit
        </Link>
      </div>
    </div>
  );
}
