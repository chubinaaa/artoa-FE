"use client";

import { Button } from "@/components/ui/button";
import AdditionalDetails from "./component/additional-details";
import Orderaside from "./component/order-aside";

const CreateJobPost = () => {
  return (
    <main>
      <div className="container mx-auto grid grid-cols-1 gap-y-5 py-16">
        <h2 className="mb-4 text-2xl font-bold">Create New Job Post</h2>
        <div className="grid grid-cols-[70%_30%] gap-x-5">
          <AdditionalDetails />
          <Orderaside />
        </div>
      </div>
      <div className="col-span-1 m-10 flex justify-end gap-x-2 md:col-span-2">
        <Button type="submit" variant="secondary">
          Saved and upload
        </Button>
        <Button type="submit" variant="default">
          View Order
        </Button>
      </div>
    </main>
  );
};

export default CreateJobPost;
