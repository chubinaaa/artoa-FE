import React, { useState, useRef, useEffect } from "react";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";
import { Icons } from "@/components/icons";
import { Input } from "@/components/ui/input";
import { UseFormSetValue } from "react-hook-form";
import { JobOrderSchema } from "@/config/jobOrderSchema";
import { z } from "zod";

type JobOrderType = z.infer<typeof JobOrderSchema>;

interface UploadImageProps {
  setValue: UseFormSetValue<JobOrderType>;
}

export default function UploadImage({ setValue }: UploadImageProps) {
  const [image, setImage] = useState<File[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const allowedFormats = ["image/jpeg", "image/png", "image/jpg"];
  const maxImages = 3;

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    return () => {
      image.forEach((img) => {
        URL.revokeObjectURL(img.name);
      });
    };
  }, [image]);

  useEffect(() => {
    if (image.length > 0) {
      setValue("images", image);
      console.log("Updated form data with images:", image);
    }
  }, [image, setValue]);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;

    const newImage = files[0];

    if (!allowedFormats.includes(newImage.type)) {
      alert("Invalid file format. Please upload a .jpg, .png, or .jpeg file.");
      return;
    }

    if (image.length >= maxImages) {
      alert(`You can upload a maximum of ${maxImages} images.`);
      return;
    }

    startUploadProcess(newImage);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const startUploadProcess = (newImage: File) => {
    setIsUploading(true);
    setUploadProgress(0);

    const progressDuration = 2000;
    const increment = 100 / (progressDuration / 20);

    const increaseProgress = (currentProgress: number) => {
      if (currentProgress < 100) {
        setUploadProgress(currentProgress);
        setTimeout(() => increaseProgress(currentProgress + increment), 20);
      } else {
        setImage((prevImages) => [...prevImages, newImage]);
        setIsUploading(false);
      }
    };

    increaseProgress(0);
  };

  const removeImage = (index: number) => {
    setImage((prevImages) =>
      prevImages.filter((_, imgIndex) => imgIndex !== index),
    );
  };

  return (
    <div className="flex flex-col gap-4">
      <h3 className="mb-2">Upload Image</h3>
      <div className="grid grid-cols-2 gap-4">
        {image
          .slice()
          .reverse()
          .map((img, index) => (
            <div
              key={index}
              className="relative flex items-center justify-center rounded-lg border border-secondary-foreground p-3"
            >
              <div className="relative h-22 w-full overflow-hidden rounded-lg">
                <Image
                  src={URL.createObjectURL(img)}
                  alt={`Uploaded Preview ${index + 1}`}
                  className="h-24 w-full object-cover"
                  unoptimized
                  width={96}
                  height={90}
                />
              </div>
              <button
                className="absolute -right-3 -top-3 rounded-full bg-secondary p-1 text-destructive"
                onClick={() => removeImage(index)}
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
          htmlFor="image-upload"
          className={`flex h-24 cursor-pointer flex-col items-center justify-center gap-1 rounded-lg border border-secondary-foreground bg-background p-4 ${isUploading ? "hidden" : "flex"} ${image.length >= maxImages && "pointer-events-none opacity-50"}`}
        >
          {image.length >= maxImages ? (
            <samp className="text-center text-sm text-destructive">
              You can upload only {maxImages} images
            </samp>
          ) : (
            <>
              <Icons.plus />
              <samp className="text-sm">Upload</samp>
            </>
          )}
        </label>
        <Input
          type="file"
          id="image-upload"
          className="hidden"
          onChange={handleImageUpload}
          disabled={image.length >= maxImages}
          ref={fileInputRef}
        />
      </div>
    </div>
  );
}
