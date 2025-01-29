"use client";

import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Icons } from "@/components/icons";

export default function PersonalInfo() {
  const [edit, setEdit] = useState(false);
  //   const [name, setName] = useState("");
  //   const [surName, setSurName] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [city, setCity] = useState("");
  //   const [nickname, setNickname] = useState("");
  //   const [bio, setBio] = useState("");
  //   const [iban, setIban] = useState("");

  return (
    <div>
      <div className="mt-6 h-fit rounded-2xl border border-muted-foreground bg-secondary px-6 py-4">
        <div className="flex items-center justify-between">
          <p className="text-4xl font-medium max-sm:text-xl">
            Personal Information
          </p>
          <button className="flex items-center" onClick={() => setEdit(!edit)}>
            <Icons.editLine className="me-2" aria-label="edit" />
            <span>Edit</span>
          </button>
        </div>
        <div className="mt-6 flex gap-7 max-sm:grid">
          <div className="flex w-full flex-col gap-2.5">
            <Label>Name</Label>
            <Input
              //   onChange={(e) => setName(e.target.value)}
              disabled={!edit}
              placeholder="Name"
            />
          </div>
          <div className="flex w-full flex-col gap-2.5">
            <Label>Surname</Label>
            <Input
              //   onChange={(e) => setSurName(e.target.value)}
              disabled={!edit}
              placeholder="Surname"
            />
          </div>
        </div>
        <div className="mt-4 grid gap-4">
          <div className="flex w-full flex-col gap-2.5">
            <Label>Email address</Label>
            <Input
              //   onChange={(e) => setEmail(e.target.value)}
              disabled={!edit}
              type="email"
              placeholder="Email address"
            />
          </div>
          <div className="flex w-full flex-col gap-2.5">
            <Label>City</Label>
            <Input
              //   onChange={(e) => setCity(e.target.value)}
              disabled={!edit}
              placeholder="Tbilisi"
            />
          </div>
          <div className="flex w-full flex-col gap-2.5">
            <Label>Nickname</Label>
            <Input
              //   onChange={(e) => setNickname(e.target.value)}
              disabled={!edit}
              placeholder="Write your Nickname"
            />
          </div>
          <div className="flex w-full flex-col gap-2.5">
            <Label>Bio</Label>
            <Input
              //   onChange={(e) => setBio(e.target.value)}
              disabled={!edit}
              placeholder="3D Artist"
            />
          </div>
          <div className="flex w-full flex-col gap-2.5">
            <Label>Iban</Label>
            <Input
              //   onChange={(e) => setIban(e.target.value)}
              disabled={!edit}
              placeholder="GE00XX0000000123456789"
            />
          </div>
        </div>
      </div>
      {edit && (
        <div className="flex justify-end gap-12">
          <Button
            onClick={() => setEdit(false)}
            className="mt-28 h-16 w-48 bg-cancel text-white hover:bg-border"
            size="default"
          >
            Cancel
          </Button>
          <Button
            onClick={() => setEdit(false)}
            className="mt-28 h-16 w-48"
            size="default"
          >
            Save
          </Button>
        </div>
      )}
    </div>
  );
}
