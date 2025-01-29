"use client";

import AdditionalDetails from "./component/additional/additional-details";
import OrderAside from "./component/aside/aside";
import { useState } from "react";
import ButtotCheck from "./component/button/button-check";

export default function JobOrderPage() {
  const [priceRange, setPriceRange] = useState<{ min: number; max: number }>({
    min: 0,
    max: 0,
  });
  const [orderType, setOrderType] = useState("Individual");
  const [environment, setEnvironment] = useState("Interior");
  const [image, setImages] = useState<File[]>([]);
  const [tag, setTag] = useState("Tags");
  const [orderData, setOrderData] = useState({
    title: "",
    description: "",
    size: "",
    location: "Location",
  });

  const [errors, setErrors] = useState({
    title: "",
    description: "",
    size: "",
    location: "",
    priceMin: "",
    priceMax: "",
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors: {
      title: string;
      description: string;
      size: string;
      location: string;
      tag?: string;
      priceMin: string;
      priceMax: string;
    } = {
      title: "",
      description: "",
      size: "",
      location: "",
      priceMin: "",
      priceMax: "",
    };

    if (!orderData.title) {
      newErrors.title = "Title is required.";
      isValid = false;
    }

    if (!orderData.description) {
      newErrors.description = "Description is required.";
      isValid = false;
    }

    if (!orderData.size) {
      newErrors.size = "Size is required.";
      isValid = false;
    }

    if (orderData.location === "Location") {
      newErrors.location = "Location is required.";
      isValid = false;
    }

    if (tag === "Tags") {
      newErrors.tag = "Tag is required.";
      isValid = false;
    }

    if (priceRange.min <= 0) {
      newErrors.priceMin = "Please enter a valid price min > 0.";
      isValid = false;
    }

    if (priceRange.min > priceRange.max && priceRange.max != 0) {
      newErrors.priceMax = `Please enter a valid price 'max > min'`;
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const viewOrder = () => {
    if (!validateForm()) return;

    const orderDetails = {
      priceRange,
      orderType,
      environment,
      orderData,
      image,
      tag,
    };
    console.log("Order successfully created:", orderDetails);
    return orderDetails;
  };

  return (
    <main>
      <div className="container mx-auto flex flex-col gap-y-5 py-16">
        <h2 className="mb-4 text-2xl font-bold">Create New Job Post</h2>
        <div className="grid w-full grid-cols-[69%_29%] gap-5">
          <AdditionalDetails
            orderType={orderType}
            setOrderType={setOrderType}
            environment={environment}
            setEnvironment={setEnvironment}
            setOrderData={setOrderData}
            errors={errors}
          />
          <OrderAside
            setPriceRange={setPriceRange}
            errors={errors}
            setTag={setTag}
            image={image}
            setImages={setImages}
          />
        </div>
        <ButtotCheck viewOrder={viewOrder} />
      </div>
    </main>
  );
}
