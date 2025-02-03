import { Icons } from "../icons";
import { Button } from "../ui/button";

interface MenuButtonProps {
  openMenu: () => void;
}

export function MenuButton({ openMenu }: MenuButtonProps) {
  return (
    <Button className="p-2 lg:hidden" variant="link" onClick={openMenu}>
      <Icons.menuButton className="md:size-6" />
    </Button>
  );
}
