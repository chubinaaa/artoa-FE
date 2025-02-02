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
  images: z.array(z.instanceof(File)),
  tag: z.array(z.string()),
  message: z.string().optional(),

  priceRange: z.object({
    min: z.number().min(0, { message: "Min price must be at least 0." }),
    max: z.number().min(0, { message: "Max price must be at least 0." }),
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
    images: [] as File[],
    priceRange: { min: 0, max: 0 },
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

  const validateOrderData = () => {
    try {
      JobOrderSchema.parse(orderData);
      return { isValid: true, errors: null };
    } catch (error) {
      if (error instanceof z.ZodError) {
        return { isValid: false, errors: error.errors };
      }
      return {
        isValid: false,
        errors: [{ message: "form field is not valide" }],
      };
    }
  };

  return {
    orderData,
    setOrderType,
    setEnvironment,
    updateOrderData,
    validateOrderData,
  };
}
