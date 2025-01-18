import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
export default function OrderTag() {
  const tagsOPtion = ["Graffiti", "3D Art", "Illustration", "Stencil", "Mural"];

  return (
    <div className="mb-4">
      <h3 className="mb-2">Order Type Tags</h3>
      <div className="flex flex-wrap gap-2">
        <Select>
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
      </div>
    </div>
  );
}
