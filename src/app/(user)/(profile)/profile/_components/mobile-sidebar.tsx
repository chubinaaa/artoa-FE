import { Icons } from "@/components/icons";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Sidebar } from "./sidebar.client";

export function MobileSidebar() {
  return (
    <Sheet>
      <SheetTrigger className="text-foreground md:hidden">
        <Icons.arrowLeft />
        <title className="sr-only">Open Sidebar</title>
      </SheetTrigger>
      <SheetContent
        overlayHidden
        closeHidden
        side="left"
        className="mt-22 w-full"
      >
        <SheetTitle className="sr-only">Sidebar</SheetTitle>
        <Sidebar withSheetClose />
      </SheetContent>
    </Sheet>
  );
}
