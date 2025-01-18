import { Icons } from "@/components/icons";
import React, { useState } from "react";
import Image from "next/image";
export default function UploadImage() {
  const [image, setImages] = useState<File[]>([]);
  const [isUploading, setIsUploading] = useState(false);

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
                <Image
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
                  <Icons.closeSquare className="size-4" />
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
