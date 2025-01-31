import { Button } from "@/components/ui/button";
import { Order } from "@/types/order";
import Link from "next/link";
import { Popover, PopoverContent } from "@radix-ui/react-popover";

interface OrderPopover {
  order: Order;
  open: boolean;
  onClose: () => void;
}

export default function OrderPopover({ order, open, onClose }: OrderPopover) {
  return (
    <Popover open={open} onOpenChange={onClose}>
      <PopoverContent className="absolute top-60 flex w-full flex-col items-center gap-4 rounded-t-xl bg-background p-4">
        <div className="h-1 w-12 rounded-full bg-foreground"></div>
        <div className="flex flex-col items-center gap-4">
          <div className="flex w-full justify-center gap-4 border-b border-secondary-foreground pb-4">
            <samp className="inline rounded-md border border-secondary-foreground p-2 text-sm font-semibold text-foreground">
              {order.tags}
            </samp>
          </div>

          <p className="text-base">Do you want to delete this project?</p>
          <Button
            variant="default"
            onClick={onClose}
            className="w-full bg-destructive"
          >
            <Link href={`/orders?id=${order.id}&action=delete`}>Delete</Link>
          </Button>
          <Button
            variant="secondary"
            onClick={onClose}
            className="w-full bg-secondary-foreground text-card-foreground"
          >
            Cancel
          </Button>

          <div className="h-1 w-full rounded-full bg-foreground"></div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
