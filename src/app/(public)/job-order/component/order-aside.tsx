import UploadImage from "./upload-image";
import OrderTag from "./order-tag";
import PriceRange from "./price-range";
export default function Orderaside() {
  return (
    <aside className="flex flex-col gap-11 rounded-2xl border border-muted-foreground bg-secondary px-6 py-4">
      <UploadImage />
      <OrderTag />
      <PriceRange />
    </aside>
  );
}
