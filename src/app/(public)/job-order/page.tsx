"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import React, { useState } from "react";
import FormDesign from "./component/update-image";
import { SubmitHandler, useForm } from "react-hook-form";

type FormValues = {
  orderType: string;
  environment: string;
  size: string;
  description: string;
  location: string;
  title: string;
  wallPicture: File | null;
  tags: string[];
};

const CreateJobPost = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const jobPost = {
      ...data,
      wallPicture: imagePreview,
      tags: selectedTags,
    };
    console.log("Job Post:", jobPost);
    alert("Your job post has been successfully uploaded!");
    reset();
    setSelectedTags([]);
    setImagePreview(null);
  };

  return (
    <div className="mx-auto w-4/5 p-4">
      <h2 className="mb-4 text-2xl font-bold">Create New Job Post</h2>
      <div className="mx-auto max-w-screen-lg text-white">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-row gap-x-3 space-x-2">
            <div className="flex flex-col rounded-lg border bg-secondary p-4">
              <div className="flex flex-row">
                <div>
                  <label className="mb-2 block">Order Type:</label>
                  <div className="flex flex-row">
                    <div>
                      <Button />
                      {/* <Button
                variant={watch('orderType') === 'Individual' ? 'primary' : 'outline'}
                onClick={() => (watch('orderType') === 'Individual' ? null : register('orderType').onChange('Individual'))}>
                Individual
                   </Button> */}
                    </div>

                    <div>
                      <Button />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="mb-2 block">Choose Type:</label>
                  <div className="flex flex-row">
                    <div>
                      <Button />
                    </div>
                    <div>
                      {/* <Button
                variant={watch('orderType') === 'Exteriori' ? 'primary' : 'outline'}
                onClick={() => (watch('orderType') === 'Exteriori' ? null : register('orderType').onChange(""))}>
                Exteriori:
              </Button> */}
                      <Button />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <label className="mb-2 block">Size</label>
                <Select>
                  <SelectTrigger id="">
                    <SelectValue placeholder="Size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sm">sm</SelectItem>
                    <SelectItem value="md">md</SelectItem>
                  </SelectContent>
                </Select>

                {errors.size && (
                  <p className="mt-1 text-sm text-red-500">Size is required.</p>
                )}
              </div>
              <div className="col-span-1 mt-2 md:col-span-2">
                <Textarea
                  placeholder="Add order  Brief (Description)"
                  {...register("description", { required: true })}
                  rows={4}
                />
                {errors.description && (
                  <p className="mt-1 text-sm text-red-500">
                    Description is required.
                  </p>
                )}
              </div>
              <div>
                <label className="mb-2 block">Location</label>
                <Select>
                  <SelectTrigger id="">
                    <SelectValue placeholder="Location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Tbilisi">Tbilisi</SelectItem>
                    <SelectItem value="Rustavi">Rustavi</SelectItem>
                  </SelectContent>
                </Select>
                {errors.location && (
                  <p className="mt-1 text-sm text-red-500">
                    Location is required.
                  </p>
                )}
              </div>
              <div>
                <label className="mb-2 block">Title</label>
                <Input
                  type="text"
                  placeholder="Enter title"
                  {...register("title", { required: true })}
                />
                {errors.title && (
                  <p className="mt-1 text-sm text-red-500">
                    Title is required.
                  </p>
                )}
              </div>
            </div>

            <div className="rounded-lg border bg-secondary p-4 text-white">
              <FormDesign />
            </div>
          </div>
          <div className="col-span-1 flex justify-end gap-x-2 md:col-span-2">
            <Button type="submit" variant="secondary">
              Saved and upload
            </Button>
            <Button type="submit" variant="default">
              View Order
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateJobPost;
