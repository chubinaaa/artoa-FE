import { Icons } from "../icons";

export function MenuButton() {
  return (
    <div className="flex cursor-pointer items-center lg:hidden">
      <Icons.menuButton className="md:size-6" />
    </div>
  );
}
