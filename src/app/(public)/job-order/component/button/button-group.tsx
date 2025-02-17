import { Button } from "@/components/ui/button";

const buttonStyle = "bg-input-background text-foreground";
const buttonStyleActive = "bg-accent/10 text-primary  border border-primary";

type ButtonGroupProps<T extends string> = {
  label: string;
  options: T[];
  selectedOption: T;
  onSelect: (value: T) => void;
};

export function ButtonGroup<T extends string>({
  label,
  options,
  selectedOption,
  onSelect,
}: ButtonGroupProps<T>) {
  return (
    <div className="flex gap-4">
      <label className="flex items-center">{label}:</label>
      <div className="flex">
        {options.map((option, index) => (
          <Button
            key={option}
            variant="jobOrder"
            onClick={() => onSelect(option)}
            className={`px-4 py-2.5 text-sm ${selectedOption === option ? buttonStyleActive : buttonStyle} ${index === 0 ? "rounded-r-none" : "rounded-l-none"}`}
          >
            {option}
          </Button>
        ))}
      </div>
    </div>
  );
}
