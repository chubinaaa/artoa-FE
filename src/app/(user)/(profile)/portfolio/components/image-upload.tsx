import React, { useState } from "react";
import { Progress } from "@/components/ui/progress";
import { Icons } from "@/components/icons";

interface ImageUploadProps {
  uploadedImages: File[];
  setUploadedImages: React.Dispatch<React.SetStateAction<File[]>>;
  removeImage: (index: number) => void;
}

export default function ImageUpload({
  uploadedImages,
  setUploadedImages,
}: ImageUploadProps) {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const allowedFormats = ["image/jpeg", "image/png", "image/jpg"];
  const maxImages = 3;

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;

    const newImage = files[0];

    if (!allowedFormats.includes(newImage.type)) {
      alert("Invalid file format. Please upload a .jpg, .png, or .jpeg file.");
      return;
    }

    if (uploadedImages.length >= maxImages) {
      alert(`You can upload a maximum of ${maxImages} images.`);
      return;
    }

    startUploadProcess(newImage);
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
        setUploadedImages((prevImages) => {
          const updatedImages = [...prevImages, newImage];
          return updatedImages;
        });
        setIsUploading(false);
      }
    };
    increaseProgress(0);
  };

  return (
    <div className="flex flex-col gap-4">
      {isUploading && (
        <div className="col-span-1 flex h-24 flex-col items-center justify-center gap-1 rounded-lg border border-secondary-foreground">
          <samp>Uploading</samp>
          <Progress value={uploadProgress} className="w-22" />
        </div>
      )}

      <label
        htmlFor="image-upload"
        className={`flex h-24 cursor-pointer flex-col items-center justify-center gap-1 rounded-lg bg-background p-4 ${
          isUploading ? "hidden" : "flex"
        } ${uploadedImages.length >= maxImages && "pointer-events-none opacity-50"}`}
      >
        {uploadedImages.length >= maxImages ? (
          <samp className="text-center text-sm text-destructive">
            You can upload only {maxImages} images
          </samp>
        ) : (
          <>
            <Icons.image className="size-6" />
            <samp>Image</samp>
          </>
        )}
      </label>
      <input
        type="file"
        id="image-upload"
        className="hidden"
        onChange={handleImageUpload}
        disabled={uploadedImages.length >= maxImages}
      />
    </div>
  );
}
