import { Icons } from "../icons";

const languages = [
  { label: "En", value: "en" },
  { label: "Ge", value: "ge" },
];

export function LanguageSwitcher() {
  return (
    <div className="relative hidden cursor-pointer items-center gap-2 lg:flex">
      <Icons.globe />
      <div className="relative">
        <select
          aria-label="language-switcher"
          className="cursor-pointer appearance-none bg-transparent pl-2 pr-8 text-sm focus:outline-none"
        >
          {languages.map(({ label, value }) => (
            <option className="text-black" key={value} value={value}>
              {label}
            </option>
          ))}{" "}
        </select>
        <Icons.arrowDown className="pointer-events-none absolute right-2 top-1/2 size-3 -translate-y-1/2" />
      </div>
    </div>
  );
}
