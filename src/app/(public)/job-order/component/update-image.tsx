import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import React, { useState } from "react";

const FormDesign = () => {
  const [image, setImages] = useState<File[]>([]);
  // const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  // const [tags, setTags] = useState<string[]>(["3D Art"]);
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(1000);

  const tagsOPtion = ["3D Art", "2", "3", "4"];

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    if (files) {
      const newImage = files[0];

      if (
        newImage &&
        ["image/jpeg", "image/png", "image/jpg"].includes(newImage.type)
      ) {
        if (image.length < 3) {
          setIsUploading(true);
          setTimeout(() => {
            setImages((prevImages) => [...prevImages, newImage]);
            setIsUploading(false);
          }, 2000);
        } else {
          alert("You can upload a maximum of 3 images.");
        }
      } else {
        alert(
          "Invalid file format. Please upload a .jpg, .png, or .jpeg file.",
        );
      }
    }
  };

  return (
    <div className="">
      <div className="mb-4">
        <h3 className="mb-2">Upload Image</h3>
        <div className="grid grid-cols-2 gap-4">
          <label
            className={`flex h-24 cursor-pointer items-center justify-center rounded-lg border ${
              image.length === 3 ? "pointer-events-none opacity-50" : ""
            }`}
            htmlFor="image-upload"
          >
            {image.length === 3 ? "Max Images Uploaded" : "+ Upload"}
          </label>
          <input
            type="file"
            id="image-upload"
            className="hidden"
            onChange={handleImageUpload}
            disabled={image.length === 3}
          />

          {isUploading ? (
            <div className="col-span-2 flex h-24 items-center justify-center rounded-lg border">
              <p>Uploading...</p>
            </div>
          ) : (
            image.map((image, index) => (
              <div
                key={index}
                className="relative flex h-24 items-center justify-center rounded-lg border"
              >
                <img
                  src={URL.createObjectURL(image)}
                  alt={`Uploaded Preview ${index + 1}`}
                  className="h-24 w-full object-cover"
                />
                <button
                  className="absolute right-1 top-1 rounded-full bg-white p-1 text-red-500"
                  onClick={() =>
                    setImages((prevImages) =>
                      prevImages.filter((_, imgIndex) => imgIndex !== index),
                    )
                  }
                >
                  ×
                </button>
              </div>
            ))
          )}
        </div>
      </div>

      <div className="mb-4">
        <h3 className="mb-2">Order Type Tags</h3>
        <div className="flex flex-wrap gap-2">
          <Select>
            <SelectTrigger id="">
              <SelectValue placeholder="Tags" />
            </SelectTrigger>
            <SelectContent>
              {tagsOPtion.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="p-4">
        <h3 className="mb-2">Price Range</h3>
        <div className="flex flex-col gap-4">
          <div>
            <label htmlFor="min-price" className="mb-1 block"></label>
            <Slider
              id="min-price"
              defaultValue={[minPrice]}
              min={0}
              max={maxPrice}
              step={1}
              value={[minPrice]}
              onValueChange={(value) => setMinPrice(value[0])}
            />
            <span className="mt-1 block">Min: {minPrice}</span>
          </div>
          <div>
            <label htmlFor="max-price" className="mb-1 block"></label>
            <Slider
              id="max-price"
              defaultValue={[maxPrice]}
              min={minPrice}
              max={1000}
              step={1}
              value={[maxPrice]}
              onValueChange={(value) => setMaxPrice(value[0])}
            />
            <span className="mt-1 block">Max: {maxPrice}</span>
          </div>
        </div>

        {/* <div className="flex justify-between mt-2">
            <span>Min: {priceRange[0]}</span>
            <span>Max: {priceRange[1]}</span>
            </div> */}
      </div>
    </div>
  );
};

export default FormDesign;
