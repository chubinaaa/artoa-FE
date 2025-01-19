import React, { useState } from "react";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";
import { Icons } from "@/components/icons";

export default function UploadImage() {
  const [image, setImages] = useState<File[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

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
          setUploadProgress(0);
          const progressDuration = 2000;
          const increment = 1;
          const steps = progressDuration / 20;
          const increaseProgress = (currentStep: number) => {
            if (currentStep <= steps) {
              const newProgress = Math.min(currentStep * increment, 100);
              setUploadProgress(newProgress);

              setTimeout(() => increaseProgress(currentStep + 1), 20);
            } else {
              setImages((prevImages) => [...prevImages, newImage]);
              setIsUploading(false);
            }
          };
          increaseProgress(1);
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
    <div className="flex flex-col gap-4">
      <h3 className="mb-2">Upload Image</h3>
      <div className="grid grid-cols-2 gap-4">
        {[...image].reverse().map((image, index) => (
          <div
            key={index}
            className="relative flex items-center justify-center rounded-lg border border-secondary-foreground p-3"
          >
            <div className="relative inset-0 size-fit h-22 overflow-hidden rounded-lg">
              <Image
                src={URL.createObjectURL(image)}
                alt={`Uploaded Preview ${index + 1}`}
                className="h-24 w-full object-cover"
                unoptimized
                width={96}
                height={90}
              />
            </div>
            <button
              className="absolute -right-3 -top-3 rounded-full bg-secondary p-1 text-destructive"
              onClick={() =>
                setImages((prevImages) =>
                  prevImages.filter((_, imgIndex) => imgIndex !== index),
                )
              }
            >
              <Icons.closeSquare />
            </button>
          </div>
        ))}
        {isUploading && (
          <div className="col-span-1 flex h-24 flex-col items-center justify-center gap-1 rounded-lg border border-secondary-foreground">
            <samp>Uploading</samp>
            <Progress value={uploadProgress} className="w-22" />
          </div>
        )}
        <label
          className={`flex h-24 cursor-pointer flex-col items-center justify-center gap-1 rounded-lg border border-secondary-foreground p-4 ${isUploading ? "hidden" : "flex"} ${image.length === 3 && "pointer-events-none opacity-50"}`}
          htmlFor="image-upload"
        >
          {image.length === 3 ? (
            <samp className="text-center text-sm text-destructive">
              You can upload only three images
            </samp>
          ) : (
            <>
              <Icons.plus />
              <samp className="text-sm">Upload</samp>
            </>
          )}
        </label>
        <input
          type="file"
          id="image-upload"
          className="hidden"
          onChange={handleImageUpload}
          disabled={image.length === 3}
        />
      </div>
    </div>
  );
}
