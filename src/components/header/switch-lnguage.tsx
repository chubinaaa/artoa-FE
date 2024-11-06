import { Icons } from "../icons";

export function SwitchLanguage() {
  return (
    <div className="flex cursor-pointer items-center gap-2">
      <Icons.globe />
      <samp>En</samp>
      <Icons.arrowDown />
    </div>
  );
}
