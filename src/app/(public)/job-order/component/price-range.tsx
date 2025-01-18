import { useState } from "react";
import { Range } from "react-range";

export default function PriceRange() {
  const [priceRange, setPriceRange] = useState<number[]>([100, 3000]); // Changed tuple to number[]

  const handlePriceChange = (values: number[]) => {
    setPriceRange(values);
  };

  return (
    <div className="flex flex-col gap-4 p-4">
      <label className="mb-2 block text-base text-current">Price Range:</label>
      <div className="flex w-full flex-col gap-2">
        <Range
          step={1}
          min={0}
          max={10000}
          values={priceRange}
          onChange={handlePriceChange}
          renderTrack={({ props, children }) => (
            <div {...props} className="mb-1.5 h-2 rounded-full bg-foreground">
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
          <input
            type="text"
            value={`$${priceRange[0]}`}
            readOnly
            className="w-1/2 cursor-default rounded-lg border border-secondary-foreground bg-input-background px-2 py-1 text-left text-current outline-none"
          />
          <input
            type="text"
            value={`$${priceRange[1]}`}
            readOnly
            className="w-1/2 cursor-default rounded-lg border border-secondary-foreground bg-input-background px-2 py-1 text-left text-current outline-none"
          />
        </div>
      </div>
    </div>
  );
}
