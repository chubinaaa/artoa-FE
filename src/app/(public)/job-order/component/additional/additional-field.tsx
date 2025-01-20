import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import FormField from "../field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface OrderFormProps {
  handleInputChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => void;
  errors: { [key: string]: string };
}

export function AdditionalFields({
  handleInputChange,
  errors,
}: OrderFormProps) {
  return (
    <>
      <FormField label="Size" className="flex flex-col gap-4">
        <Input
          name="size"
          onChange={handleInputChange}
          placeholder="Size"
          className={errors.size ? "border-destructive" : ""}
        />
        {errors.size && (
          <span className="text-base text-destructive">{errors.size}</span>
        )}
      </FormField>

      <FormField label="Description" className="flex flex-col gap-4">
        <Textarea
          name="description"
          onChange={handleInputChange}
          className={`${errors.description ? "border-destructive" : ""} bg-input-background`}
          placeholder="Description"
          rows={4}
        />
        {errors.description && (
          <span className="text-base text-destructive">
            {errors.description}
          </span>
        )}
      </FormField>

      <FormField label="Location" className="flex flex-col gap-4">
        <Select
          onValueChange={(value: string) =>
            handleInputChange({
              target: { name: "location", value },
            } as React.ChangeEvent<HTMLInputElement>)
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="Location" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Tbilisi">Tbilisi</SelectItem>
            <SelectItem value="Rustavi">Rustavi</SelectItem>
          </SelectContent>
        </Select>
        {errors.location && (
          <p className="text-base text-destructive">{errors.location}</p>
        )}
      </FormField>

      <FormField label="Title" className="flex flex-col gap-4">
        <Input
          name="title"
          onChange={handleInputChange}
          placeholder="Title"
          className={errors.title ? "border-destructive" : ""}
        />
        {errors.title && (
          <span className="text-base text-destructive">{errors.title}</span>
        )}
      </FormField>
    </>
  );
}
