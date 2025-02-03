"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Label } from "@/components/ui/label";
import ImageUpload from "./image-upload";
import VideoUpload from "./video-upload";
import { Icons } from "@/components/icons";

export default function AddProjectAside() {
  const [uploadedImages, setUploadedImages] = useState<File[]>([]);
  const [uploadedVideos, setUploadedVideos] = useState<File[]>([]);

  const removeImage = (index: number) => {
    setUploadedImages((prevImages) =>
      prevImages.filter((_, imgIndex) => imgIndex !== index),
    );
  };

  const removeVideo = (index: number) => {
    setUploadedVideos((prevVideos) =>
      prevVideos.filter((_, vidIndex) => vidIndex !== index),
    );
  };

  return (
    <aside className="flex flex-col gap-7 rounded-2xl border border-muted-foreground bg-secondary px-6 py-4">
      <div className="grid grid-cols-2 gap-4">
        <ImageUpload
          uploadedImages={uploadedImages}
          setUploadedImages={setUploadedImages}
          removeImage={removeImage}
        />
        <VideoUpload
          uploadedVideos={uploadedVideos}
          setUploadedVideos={setUploadedVideos}
          removeVideo={removeVideo}
        />
      </div>
      <div className="mt-4 flex flex-col gap-4">
        <Label className="col-span-full text-lg font-semibold">
          Uploaded Files:
        </Label>
        <div className="grid grid-cols-2 items-center gap-4 md:grid-cols-3 lg:grid-cols-2">
          {uploadedImages
            .slice()
            .reverse()
            .map((img, index) => (
              <div
                key={index}
                className="relative flex max-w-64 items-center justify-center rounded-lg border border-secondary-foreground bg-background p-2 shadow-md"
              >
                <div className="relative h-24 w-full overflow-hidden rounded-lg">
                  <Image
                    src={URL.createObjectURL(img)}
                    alt={`Uploaded Preview ${index + 1}`}
                    className="h-24 w-full object-cover"
                    width={64}
                    height={96}
                  />
                </div>
                <button
                  className="absolute -right-2 -top-2 flex items-center justify-center rounded-full bg-secondary text-destructive shadow-md transition hover:bg-destructive hover:text-secondary"
                  onClick={() => removeImage(index)}
                >
                  <Icons.closeSquare className="size-4" />
                </button>
              </div>
            ))}
        </div>
        <div className="grid grid-flow-row gap-4">
          {uploadedVideos.map((video, index) => (
            <div
              key={index}
              className="relative flex max-w-80 items-center justify-center rounded-lg border border-secondary-foreground p-3"
            >
              <div className="relative h-32 w-full overflow-hidden rounded-lg">
                <video
                  src={URL.createObjectURL(video)}
                  controls
                  className="size-full object-cover"
                />
              </div>
              <button
                className="absolute -right-3 -top-3 rounded-full bg-secondary p-1 text-destructive"
                onClick={() => removeVideo(index)}
              >
                <Icons.closeSquare className="size-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
