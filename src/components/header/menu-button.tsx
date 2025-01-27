import { Icons } from "../icons";

interface MenuButtonProps {
  openMenu: () => void;
}

export function MenuButton({ openMenu }: MenuButtonProps) {
  return (
    <div
      onClick={openMenu}
      className="flex cursor-pointer items-center lg:hidden"
    >
      <Icons.menuButton className="md:size-6" />
    </div>
  );
}
