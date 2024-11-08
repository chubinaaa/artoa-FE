"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function VerifyUserForm() {
  return (
    <form className="flex flex-col gap-12">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2.5">
          <Label htmlFor="name">Name</Label>
          <Input required id="name" placeholder="Name" />
        </div>
        <div className="flex flex-col gap-2.5">
          <Label htmlFor="surname">Surname</Label>
          <Input id="surname" placeholder="Surnmae" />
        </div>
        <div className="flex flex-col gap-2.5">
          <Label htmlFor="city">City</Label>
          <Input id="city" placeholder="City" />
        </div>
        <div className="flex flex-col gap-2.5">
          <Label htmlFor="i-am">I am</Label>
          <Select>
            <SelectTrigger id="i-am">
              <SelectValue placeholder="Choose One" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="artist">Artist</SelectItem>
              <SelectItem value="customer">Customer</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-2.5">
          <Label htmlFor="nickname">Nickname</Label>
          <Input id="nickname" placeholder="Nickname" />
        </div>
      </div>
      <Button>Save</Button>
    </form>
  );
}
