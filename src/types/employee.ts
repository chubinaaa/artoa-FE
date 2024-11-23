import { StaticImageData } from "next/image";

export type Employee = {
  name: string;
  surname: string;
  role: string;
  image: string | StaticImageData;
};
