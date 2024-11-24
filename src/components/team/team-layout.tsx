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
  <div
    ref={ref}
    className={cn("flex flex-col items-center gap-6", className)}
    {...props}
  />
));
TeamItem.displayName = "TeamItem";

export const TeamItemImage = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex h-96 w-96 flex-col gap-2.5 rounded-tl-full rounded-tr-full bg-primary px-32 text-foreground",
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
  <div ref={ref} className={cn(className)} {...props} />
));
TeamContent.displayName = "TeamContent";
