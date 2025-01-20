import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import FormField from "../field";
export default function OrderTag({
  errors,
  setTag,
}: {
  errors: { [key: string]: string };
  setTag: React.Dispatch<React.SetStateAction<string>>;
}) {
  const tagsOPtion = ["Graffiti", "3D Art", "Illustration", "Stencil", "Mural"];

  return (
    <div className="mb-4">
      <FormField label="Order Type Tags" className="flex flex-col gap-3">
        <Select onValueChange={(value) => setTag(value)}>
          <SelectTrigger id="">
            <SelectValue placeholder="Tags" />
          </SelectTrigger>
          <SelectContent>
            {tagsOPtion.map((option) => (
              <SelectItem key={option} value={option}>
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.tag && (
          <p className="text-base text-destructive">{errors.tag}</p>
        )}
      </FormField>
    </div>
  );
}
