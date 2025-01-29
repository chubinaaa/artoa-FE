import { Button } from "@/components/ui/button";
export default function ButtonCheck({ viewOrder }: { viewOrder: () => void }) {
  return (
    <div className="m-10 mr-5 flex justify-end gap-x-2 md:col-span-2">
      <Button type="submit" variant="secondary">
        Save and Upload
      </Button>
      <Button onClick={viewOrder} type="button" variant="default">
        View Order
      </Button>
    </div>
  );
}
