"use client";

import { Button } from "@/components/ui/button";
import AdditionalDetails from "./component/additional-details";
import Orderaside from "./component/order-aside";

const CreateJobPost = () => {
  return (
    <main>
      <div className="container mx-auto flex flex-col gap-y-5 py-16">
        <h2 className="mb-4 text-2xl font-bold">Create New Job Post</h2>
        <div className="grid w-full grid-cols-[69%_29%] gap-5">
          <AdditionalDetails />
          <Orderaside />
        </div>
        <div className="m-10 mr-5 flex justify-end gap-x-2 md:col-span-2">
          <Button type="submit" variant="secondary">
            Saved and upload
          </Button>
          <Button type="submit" variant="default">
            View Order
          </Button>
        </div>
      </div>
    </main>
  );
};

export default CreateJobPost;
