"use client";

import OrderForm from "./component/order-form";

export default function JobOrderPage() {
  return (
    <main>
      <div className="container mx-auto flex flex-col gap-y-5 py-16">
        <h2 className="mb-4 text-2xl font-bold">Create New Job Post</h2>
        <OrderForm />
      </div>
    </main>
  );
}
