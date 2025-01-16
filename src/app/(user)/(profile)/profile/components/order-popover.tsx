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
      <PopoverContent className="absolute left-11 flex w-fit flex-col gap-4 rounded-lg bg-background p-4">
        <header>{order.tags}</header>
        <p>Do you want to delete this project?</p>
        <Button
          variant="secondary"
          onClick={onClose}
          className="bg-destructive"
        >
          <Link href={`/orders?id=${order.id}&action=delete`}>Delete</Link>
        </Button>
        <Button variant="outline" onClick={onClose}>
          Cancel
        </Button>
      </PopoverContent>
    </Popover>
  );
}
