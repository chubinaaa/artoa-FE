import { Icons } from "../icons";

export function FooterCopy() {
  return (
    <div className="flex w-full max-w-lg shrink-0 flex-col gap-1 2xl:max-w-[270px]">
      <Icons.logo className="size-16" aria-label="Artoa Logo" />
      <p className="hidden text-justify 2xl:block">
        Instantly transform any space with our-powered art generator. Connect
        with artists globally for unique creations. Legal, creative, and
        community-centric. ArtOa.io — Where Walls Speak.
      </p>
    </div>
  );
}
