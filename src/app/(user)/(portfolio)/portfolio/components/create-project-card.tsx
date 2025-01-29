import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function CreateProjectCard() {
  return (
    <div className="grid h-[438px] w-80 justify-items-center rounded-2xl border border-dashed border-muted-foreground py-5">
      <Icons.plusInCircle />
      <Button
        asChild
        variant="outline"
        size="lg"
        className="-mt-16 border-white"
      >
        <Link href="#">Create a project</Link>
      </Button>
      <p className="text-sm text-muted-foreground">
        Unpublished projects will appear here.
      </p>
    </div>
  );
}
export default CreateProjectCard;
