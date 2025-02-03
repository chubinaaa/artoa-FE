import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function AddProjectContainet() {
  return (
    <div className="flex flex-col space-y-6 rounded-2xl lg:border lg:border-muted-foreground lg:bg-secondary lg:p-6">
      <form className="flex w-full flex-col gap-6">
        <div className="flex flex-col gap-2.5">
          <Label>Title</Label>
          <Input placeholder="title" />
        </div>
        <div className="flex flex-col gap-2.5">
          <Label>Description</Label>
          <Textarea
            name="description"
            className="bg-input-background"
            placeholder="Add order  Brief (Description)"
            rows={4}
          />
        </div>
        <div className="flex flex-col gap-2.5">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Location" />
            </SelectTrigger>
            <SelectContent className="max-w-fit">
              <SelectItem value="Tbilisi">Tbilisi</SelectItem>
              <SelectItem value="Rustavi">Rustavi</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </form>
    </div>
  );
}
