export type SnakeCase<S extends string> = S extends `${infer T}${infer U}`
  ? `${T extends Capitalize<T> ? "_" : ""}${Lowercase<T>}${SnakeCase<U>}`
  : S;

export type ConvertToSnakeCase<T> = {
  [K in keyof T as SnakeCase<Extract<K, string>>]: T[K];
};

export type CamelCase<S extends string> = S extends `${infer T}_${infer U}`
  ? `${T}${Capitalize<CamelCase<U>>}`
  : S;

export type ConvertToCamelCase<T> = {
  [K in keyof T as CamelCase<Extract<K, string>>]: T[K];
};

export type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};
