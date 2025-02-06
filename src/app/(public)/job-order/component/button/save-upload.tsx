import { Button } from "@/components/ui/button";

export default function SaveUpload({ onSubmit }: { onSubmit: () => void }) {
  return (
    <div className="m-10 mr-5 flex justify-end gap-x-2 md:col-span-2">
      <Button onClick={onSubmit} variant="default">
        Save and Upload
      </Button>
    </div>
  );
}
