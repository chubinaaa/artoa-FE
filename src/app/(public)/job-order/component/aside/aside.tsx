import { UseFormRegister, UseFormSetValue } from "react-hook-form";
import { JobOrderSchema } from "@/config/jobOrderSchema";
import { z } from "zod";
import UploadImage from "./image/upload-image";
import PriceRange from "./price";
import TagField from "./tag";

type JobOrderType = z.infer<typeof JobOrderSchema>;

interface OrderAsideProps {
  setTags: React.Dispatch<React.SetStateAction<string[]>>;
  tags: string[];
  register: UseFormRegister<JobOrderType>;
  setValue: UseFormSetValue<JobOrderType>;
}

export default function OrderAside({
  setTags,
  tags,
  register,
  setValue,
}: OrderAsideProps) {
  return (
    <aside className="flex flex-col gap-11 rounded-2xl border border-muted-foreground bg-secondary px-6 py-4">
      <UploadImage setValue={setValue} />
      <TagField tags={tags} setTags={setTags} error={""} />
      <PriceRange register={register} setValue={setValue} />
    </aside>
  );
}
