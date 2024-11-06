import { Icons } from "../icons";

export function SwitchLanguage() {
  return (
    <div className="flex cursor-pointer items-center gap-2">
      <Icons.globe />
      <select
        name="switch-language"
        id="language-select"
        className="focus: cursor-pointer appearance-none border-0 bg-inherit outline-none"
      >
        <option value="en">En</option>
        <option value="ge">Ge</option>
      </select>
      <Icons.arrowDown className="size-3" />
    </div>
  );
}
