import React, { useState } from "react";
import { Progress } from "@/components/ui/progress";
import { Icons } from "@/components/icons";

interface VideoUploadProps {
  uploadedVideos: File[];
  setUploadedVideos: React.Dispatch<React.SetStateAction<File[]>>;
  removeVideo: (index: number) => void;
}

export default function VideoUpload({
  uploadedVideos,
  setUploadedVideos,
}: VideoUploadProps) {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const allowedFormats = ["video/mp4", "video/webm", "video/quicktime"];
  const maxVideos = 2;

  const handleVideoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = event.target.files?.[0];
    if (!uploadedFile) return;

    if (!allowedFormats.includes(uploadedFile.type)) {
      alert("Invalid file format. Please upload an MP4, WebM, or MOV video.");
      return;
    }

    if (uploadedVideos.length >= maxVideos) {
      alert(`You can upload a maximum of ${maxVideos} videos.`);
      return;
    }

    startUploadProcess(uploadedFile);
  };

  const startUploadProcess = (newVideo: File) => {
    setIsUploading(true);
    setUploadProgress(0);

    const progressDuration = 3000;
    const increment = 100 / (progressDuration / 20);

    const increaseProgress = (currentProgress: number) => {
      if (currentProgress < 100) {
        setUploadProgress(currentProgress);
        setTimeout(() => increaseProgress(currentProgress + increment), 20);
      } else {
        setUploadedVideos((prevVideos) => {
          const updatedVideos = [...prevVideos, newVideo];
          return updatedVideos;
        });
        setIsUploading(false);
      }
    };
    increaseProgress(0);
  };

  return (
    <div className="flex flex-col gap-4">
      {isUploading && (
        <div className="col-span-2 flex h-24 flex-col items-center justify-center gap-1 rounded-lg border border-secondary-foreground p-4">
          <samp>Uploading</samp>
          <Progress value={uploadProgress} className="w-22" />
        </div>
      )}

      <label
        htmlFor="video-upload"
        className={`flex h-24 cursor-pointer flex-col items-center justify-center gap-1 rounded-lg bg-background p-4 ${
          isUploading ? "hidden" : "flex"
        } ${uploadedVideos.length >= maxVideos && "pointer-events-none opacity-50"}`}
      >
        {uploadedVideos.length >= maxVideos ? (
          <samp className="text-center text-sm text-destructive">
            You can upload only {maxVideos} videos
          </samp>
        ) : (
          <>
            <Icons.video className="size-6" />
            <samp>Video</samp>
          </>
        )}
      </label>
      <input
        type="file"
        id="video-upload"
        className="hidden"
        onChange={handleVideoUpload}
        disabled={uploadedVideos.length >= maxVideos}
        accept="video/*"
      />
    </div>
  );
}
