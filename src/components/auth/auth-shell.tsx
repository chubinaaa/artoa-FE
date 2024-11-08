import { Icons } from "../icons";

export function AuthShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="container mx-auto mt-14 h-fit max-w-3xl rounded-3xl bg-secondary p-16">
      <Icons.bgStars className="absolute left-0 top-6 size-10 md:top-14 md:size-14 lg:left-32 lg:top-32 lg:size-28" />
      <Icons.bgStars className="absolute right-0 size-14 md:size-16 lg:bottom-40 lg:right-36 lg:size-28" />
      {children}
    </div>
  );
}
