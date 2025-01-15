"use client";

import { Input } from "@/components/ui/input";
import { InputHTMLAttributes, useState } from "react";
import { Icons } from "./icons";

export function PassowordInput(
  props: Omit<InputHTMLAttributes<HTMLInputElement>, "type">,
) {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleVisibility = () => setIsVisible((prevState) => !prevState);

  return (
    <div className="relative">
      <Input
        className="pe-9"
        type={isVisible ? "text" : "password"}
        {...props}
      />
      <button
        className="absolute inset-y-0 end-0 flex h-full w-12 items-center justify-center rounded-e-lg text-muted-foreground/80 outline-offset-2 transition-colors hover:text-foreground focus:z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
        type="button"
        onClick={toggleVisibility}
        aria-label={isVisible ? "Hide password" : "Show password"}
        aria-pressed={isVisible}
        aria-controls="password"
      >
        {isVisible ? (
          <Icons.hide strokeWidth={2} aria-hidden="true" />
        ) : (
          <Icons.show strokeWidth={2} aria-hidden="true" />
        )}
      </button>
    </div>
  );
}
