import { UseFormRegister, UseFormSetValue } from "react-hook-form";
import { JobOrderSchema } from "@/config/jobOrderSchema";
import { Input } from "@/components/ui/input";
import { ButtonGroup } from "../button/button-group";
import { useState } from "react";
import { z } from "zod";

type JobOrderType = z.infer<typeof JobOrderSchema>;

interface Props {
  register: UseFormRegister<JobOrderType>;
  setValue: UseFormSetValue<JobOrderType>;
}

export default function PriceRange({ register }: Props) {
  const [priceType, setPriceType] = useState<"Offer" | "Trade">("Trade");

  const handlePriceTypeChange = (value: "Offer" | "Trade") => {
    setPriceType(value);
  };

  return (
    <div className="flex flex-col gap-4">
      <div>
        <ButtonGroup
          label="Price"
          options={["Offer", "Trade"]}
          selectedOption={priceType}
          onSelect={handlePriceTypeChange}
        />
      </div>

      <div className="flex w-full justify-between gap-3">
        <div className="relative w-1/2">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary-foreground">
            ₾
          </span>
          <Input
            {...register("priceRange.min")}
            disabled={priceType === "Trade"}
            type="number"
            placeholder="Min"
            className="pl-7"
          />
        </div>
        <div className="relative w-1/2">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary-foreground">
            ₾
          </span>
          <Input
            {...register("priceRange.max")}
            disabled={priceType === "Trade"}
            type="number"
            placeholder="Max"
            className="pl-7"
          />
        </div>
      </div>
    </div>
  );
}
