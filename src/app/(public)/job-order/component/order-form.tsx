import { z } from "zod";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { JobOrderSchema } from "@/config/jobOrderSchema";
import AdditionalDetails from "./additional/additional-details";
import OrderAside from "./aside/aside";
import SaveUpload from "./button/save-upload";

type JobOrderType = z.infer<typeof JobOrderSchema>;

export default function OrderForm() {
  const [tags, setTags] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<JobOrderType>({
    resolver: zodResolver(JobOrderSchema),
  });

  const { register, getValues, setValue } = form;

  const onSubmit = () => {
    setSubmitted(true);
    console.log("Submitted Data:", { form, tags });
    return form;
  };

  if (submitted) {
    return (
      <div className="space-y-4">
        <h2 className="text-xl">Form Submitted Successfully!</h2>
        <p>Your order details:</p>
        <pre>{JSON.stringify({ ...getValues(), tags }, null, 2)}</pre>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form className="space-y-8">
        <div className="grid w-full gap-5 lg:grid-cols-[69%_29%]">
          <AdditionalDetails register={register} setValue={setValue} />
          <OrderAside
            setTags={setTags}
            tags={tags}
            image={[]}
            setImages={() => {}}
            register={register}
            setValue={setValue}
          />
        </div>
        <SaveUpload onSubmit={onSubmit} />
      </form>
    </Form>
  );
}
