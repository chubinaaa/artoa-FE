import { useState } from "react";
import { z } from "zod";

export const JobOrderSchema = z.object({
  orderType: z.enum(["Individual", "Corporate"]),
  environment: z.enum(["Interior", "Exterior"]),
  title: z.string().min(3, {
    message: "Title must be at least 3 characters.",
  }),
  description: z.string().min(10, {
    message: "Description must be at least 10 characters.",
  }),
  size: z
    .string()
    .regex(/^\d+$/, { message: "Size must be a valid number." })
    .transform(Number),
  location: z.enum(["Tbilisi", "Rustavi"], {
    message: "Invalid location selected.",
  }),
});

export function useOrderForm() {
  const [orderData, setOrderData] = useState({
    orderType: "Individual",
    environment: "Interior",
    title: "",
    description: "",
    size: 0,
    location: "Tbilisi",
    tags: [] as string[],
    image: [] as File[],
  });

  const setOrderType = (value: "Individual" | "Corporate") => {
    setOrderData((prev) => ({ ...prev, orderType: value }));
  };

  const setEnvironment = (value: "Interior" | "Exterior") => {
    setOrderData((prev) => ({ ...prev, environment: value }));
  };

  const updateOrderData = (newData: Partial<typeof orderData>) => {
    setOrderData((prev) => ({ ...prev, ...newData }));
  };

  return { orderData, setOrderType, setEnvironment, updateOrderData };
}
