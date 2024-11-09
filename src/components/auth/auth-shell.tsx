import { Icons } from "../icons";

export function AuthShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="container relative mx-auto mt-14 max-w-xs rounded-3xl bg-secondary p-4 md:max-w-3xl md:p-16">
      <Icons.bgStars className="absolute left-0 top-0 size-10 -translate-x-5 -translate-y-5 md:size-40 md:translate-x-[calc(-100%-14px)] md:translate-y-14" />
      <Icons.bgStars className="absolute bottom-0 right-0 size-20 translate-x-1 translate-y-9 md:size-40 md:translate-x-[calc(100%-16px)] md:translate-y-1" />
      {children}
    </div>
  );
}
