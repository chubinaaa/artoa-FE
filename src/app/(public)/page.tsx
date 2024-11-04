import { SignUpDialog } from "@/components/auth/sign-up/sign-up-dialog";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function IndexPage() {
  return (
    <div className="size-full">
      <h1>Hello ArtOa!</h1>
      <SignUpDialog />

      <div className="p-20">
        <Select>
          <SelectTrigger className="max-w-lg">
            <SelectValue placeholder="Choose one" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="artist">Artist</SelectItem>
            <SelectItem value="customer">Customer</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
