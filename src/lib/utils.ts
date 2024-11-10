import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type SnakeCase<S extends string> = S extends `${infer T}${infer U}`
  ? `${T extends Capitalize<T> ? "_" : ""}${Lowercase<T>}${SnakeCase<U>}`
  : S;

export type ConvertToSnakeCase<T> = {
  [K in keyof T as SnakeCase<Extract<K, string>>]: T[K];
};

type CamelCase<S extends string> = S extends `${infer T}_${infer U}`
  ? `${T}${Capitalize<CamelCase<U>>}`
  : S;

export type ConvertToCamelCase<T> = {
  [K in keyof T as CamelCase<Extract<K, string>>]: T[K];
};
