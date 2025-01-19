"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

export default function AdditionalDetails() {
  const [orderType, setOrderType] = useState("Individual");
  const [environment, setEnvironment] = useState("Interior");

  const setType = (): void => {
    if (orderType === "Individual") {
      setOrderType("Corporate");
    } else {
      setOrderType("Individual");
    }
  };

  const chooseEnvironment = (): void => {
    if (environment === "Interior") {
      setEnvironment("Exterior");
    } else {
      setEnvironment("Interior");
    }
  };
  const buttonStyle = "bg-input-background text-foreground";
  const buttonStyleActive = "bg-accent/10 text-primary  border border-primary";

  return (
    <div className="flex flex-col space-y-6 rounded-2xl border border-muted-foreground bg-secondary p-6">
      <header className="flex items-center justify-between">
        <div className="flex gap-4">
          <label className="flex items-center">Order Type:</label>
          <div className="flex">
            <Button
              variant="jobOrder"
              onClick={setType}
              className={`rounded-r-none px-4 py-2.5 text-sm ${orderType === "Individual" ? buttonStyleActive : buttonStyle}`}
            >
              Individual
            </Button>
            <Button
              variant="jobOrder"
              onClick={setType}
              className={`rounded-l-none px-4 py-2.5 text-sm ${orderType === "Corporate" ? buttonStyleActive : buttonStyle}`}
            >
              Corporate
            </Button>
          </div>
        </div>

        <div className="flex gap-4">
          <label className="flex items-center">Choose Type:</label>
          <div className="flex">
            <Button
              variant="jobOrder"
              onClick={chooseEnvironment}
              className={`rounded-r-none px-4 py-2.5 text-sm ${environment === "Interior" ? buttonStyleActive : buttonStyle}`}
            >
              Interior
            </Button>
            <Button
              variant="jobOrder"
              onClick={chooseEnvironment}
              className={`rounded-l-none px-4 py-2.5 text-sm ${environment === "Exterior" ? buttonStyleActive : buttonStyle}`}
            >
              Exterior
            </Button>
          </div>
        </div>
      </header>

      <section className="flex flex-col gap-4">
        <div className="w-full">
          <label className="mb-2 block">Size</label>
          <Input placeholder="Size" />
        </div>

        <div className="col-span-1 mt-2 md:col-span-2">
          <label className="mb-2 block">Description</label>
          <Textarea
            className="bg-input-background"
            placeholder="Add order  Brief (Description)"
            rows={4}
          />
        </div>

        <div>
          <label className="mb-2 block">Location</label>
          <Select>
            <SelectTrigger id="">
              <SelectValue placeholder="Location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Tbilisi">Tbilisi</SelectItem>
              <SelectItem value="Rustavi">Rustavi</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="mb-2 block">Title</label>
          <Input type="text" placeholder="Enter title" />
        </div>
      </section>
    </div>
  );
}
