import * as React from "react";
import { cn } from "@/lib/utils";

export const TeamContainer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex justify-between", className)} {...props} />
));
TeamContainer.displayName = "TeamContainer";

export const TeamItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex flex-row gap-6", className)} {...props} />
));
TeamItem.displayName = "TeamItem";

export const TeamItemImage = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex h-[414px] w-[424px] flex-col gap-2.5 rounded-tl-full rounded-tr-full bg-primary px-[131px] text-foreground",
      className,
    )}
    {...props}
  />
));
TeamItemImage.displayName = "TeamItemImage";

export const TeamContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-4 pt-0", className)} {...props} />
));
TeamContent.displayName = "TeamContent";
