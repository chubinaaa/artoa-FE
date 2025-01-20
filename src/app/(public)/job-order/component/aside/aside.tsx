import UploadImage from "./image/upload-image";
import OrderTag from "./tag";
import PriceRange from "./price";

export default function Orderaside({
  setPriceRange,
  errors,
  setTag,
  image,
  setImages,
}: {
  setPriceRange: React.Dispatch<
    React.SetStateAction<{ min: number; max: number }>
  >;
  errors: { [key: string]: string };
  setTag: React.Dispatch<React.SetStateAction<string>>;
  image: File[];
  setImages: React.Dispatch<React.SetStateAction<File[]>>;
}) {
  return (
    <aside className="flex flex-col gap-11 rounded-2xl border border-muted-foreground bg-secondary px-6 py-4">
      <UploadImage image={image} setImages={setImages} />
      <OrderTag errors={errors} setTag={setTag} />
      <PriceRange setPriceRange={setPriceRange} errors={errors} />
    </aside>
  );
}
