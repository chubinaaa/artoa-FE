import { Input } from "@/components/ui/input";

export default function PriceRange({
  setPriceRange,
  errors,
}: {
  setPriceRange: React.Dispatch<
    React.SetStateAction<{ min: number; max: number }>
  >;
  errors: { [key: string]: string };
}) {
  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const minValue = e.target.value ? Number(e.target.value) : 0;
    setPriceRange((prevState) => ({
      ...prevState,
      min: minValue,
    }));
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const maxValue = e.target.value ? Number(e.target.value) : 0;
    setPriceRange((prevState) => ({
      ...prevState,
      max: maxValue,
    }));
  };

  return (
    <div className="flex flex-col gap-4">
      <label className="mb-2 block text-base text-current">Price Range:</label>
      <div className="flex w-full justify-between gap-3">
        <div className="relative w-1/2">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary-foreground">
            ₾
          </span>
          <Input
            type="number"
            placeholder="Min"
            onChange={handleMinChange}
            className="pl-7"
          />
        </div>
        <div className="relative w-1/2">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary-foreground">
            ₾
          </span>
          <Input
            type="number"
            placeholder="Max"
            onChange={handleMaxChange}
            className="pl-7"
          />
        </div>
      </div>
      {errors.priceMin && (
        <p className="text-base text-destructive">{errors.priceMin}</p>
      )}
      {errors.priceMax && (
        <p className="text-base text-destructive">{errors.priceMax}</p>
      )}
    </div>
  );
}
