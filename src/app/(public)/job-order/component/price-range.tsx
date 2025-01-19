import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Range } from "react-range";

export default function PriceRange() {
  const [priceRange, setPriceRange] = useState<number[]>([1000, 3000]);

  const handlePriceChange = (values: number[]) => {
    setPriceRange(values);
  };

  return (
    <div className="flex flex-col gap-4">
      <label className="mb-2 block text-base text-current">Price Range:</label>
      <div className="flex w-full flex-col gap-2">
        <Range
          step={1}
          min={0}
          max={10000}
          values={priceRange}
          onChange={handlePriceChange}
          renderTrack={({ props, children }) => (
            <div
              {...props}
              className="relative mb-1.5 h-2 rounded-full bg-foreground"
            >
              <div
                className="absolute h-full rounded-full bg-primary"
                style={{
                  left: `${(priceRange[0] / 10000) * 100}%`,
                  right: `${100 - (priceRange[1] / 10000) * 100}%`,
                }}
              />
              {children}
            </div>
          )}
          renderThumb={({ props }) => (
            <div
              {...props}
              className="size-4 rounded-full border border-primary bg-background"
            />
          )}
        />
        <div className="flex w-full justify-between gap-3">
          <Input
            type="text"
            value={`₾ ${priceRange[0]}`}
            readOnly
            className="cursor-default outline-none"
          />
          <Input
            type="text"
            value={`₾ ${priceRange[1]}`}
            readOnly
            className="cursor-default outline-none"
          />
        </div>
      </div>
    </div>
  );
}
