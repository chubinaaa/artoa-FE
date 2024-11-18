import { Icons } from "../icons";

export function LanguageSwitcher() {
  return (
    <div className="relative flex cursor-pointer items-center gap-2">
      <Icons.globe />
      <div className="relative">
        <select
          aria-label="language-switcher"
          name="switch-language"
          id="language-select"
          className="cursor-pointer appearance-none bg-transparent pl-2 pr-8 text-sm focus:outline-none"
        >
          <option aria-label="English" className="text-black" value="en">
            En
          </option>
          <option aria-label="Georgian" className="text-black" value="ge">
            Ge
          </option>
        </select>
        <Icons.arrowDown className="pointer-events-none absolute right-2 top-1/2 size-3 -translate-y-1/2" />
      </div>
    </div>
  );
}
