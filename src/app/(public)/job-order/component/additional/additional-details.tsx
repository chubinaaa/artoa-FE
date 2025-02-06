import { UseFormRegister, UseFormSetValue } from "react-hook-form";
import { JobOrderSchema } from "@/config/jobOrderSchema";
import { ButtonGroup } from "../button/button-group";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectValue,
  SelectItem,
} from "@/components/ui/select";
import FormField from "../field";
import { z } from "zod";
import { useOrderForm } from "@/config/jobOrderSchema";

type JobOrderType = z.infer<typeof JobOrderSchema>;

interface AdditionalDetailsProps {
  register: UseFormRegister<JobOrderType>;
  setValue: UseFormSetValue<JobOrderType>;
}

export default function AdditionalDetails({
  register,
  setValue,
}: AdditionalDetailsProps) {
  const { orderData, setOrderType, setEnvironment } = useOrderForm();

  const handleOrderTypeChange = (value: "Individual" | "Corporate") => {
    setOrderType(value);
    setValue("orderType", value);
  };

  const handleEnvironmentChange = (value: "Interior" | "Exterior") => {
    setEnvironment(value);
    setValue("environment", value);
  };

  return (
    <div className="flex flex-col space-y-6 rounded-2xl lg:border lg:border-muted-foreground lg:bg-secondary lg:p-6">
      <div className="flex items-center justify-between">
        <ButtonGroup
          label="Order Type"
          options={["Individual", "Corporate"]}
          selectedOption={orderData.orderType as "Individual" | "Corporate"}
          onSelect={handleOrderTypeChange}
        />
        <ButtonGroup
          label="Choose Type"
          options={["Interior", "Exterior"]}
          selectedOption={orderData.environment as "Interior" | "Exterior"}
          onSelect={handleEnvironmentChange}
        />
      </div>

      <section className="flex flex-col gap-4">
        <FormField label="Size" className="relative flex flex-col gap-4">
          <div>
            <Input
              {...register("size")}
              type="number"
              placeholder="Size"
              required
              className="pl-9"
            />
            <span className="absolute left-3 top-1/2 p-0 text-foreground">
              m&sup2;
            </span>
          </div>
        </FormField>

        <FormField label="Description" className="flex flex-col gap-4">
          <Textarea
            {...register("description")}
            required
            className="bg-input-background"
            placeholder="Add order Brief (Description)"
            rows={4}
          />
        </FormField>

        <FormField
          label="Location"
          className="relative flex w-full flex-col gap-4"
        >
          <Select
            onValueChange={(value) =>
              setValue("location", value as "Tbilisi" | "Rustavi")
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Location" />
            </SelectTrigger>
            <SelectContent className="max-w-fit">
              <SelectItem value="Tbilisi">Tbilisi</SelectItem>
              <SelectItem value="Rustavi">Rustavi</SelectItem>
            </SelectContent>
          </Select>
        </FormField>

        <FormField label="Add order Title" className="flex flex-col gap-4">
          <Input
            {...register("title")}
            placeholder="Add order Title"
            required
          />
        </FormField>
      </section>
    </div>
  );
}
