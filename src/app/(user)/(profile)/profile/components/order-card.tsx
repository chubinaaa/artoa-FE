import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { Order } from "@/types/order";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

export function OrderCard({ order }: { order: Order }) {
  return (
    <Card className="bg-background">
      <CardHeader className="relative overflow-hidden rounded-t-lg bg-foreground p-0">
        <Image
          width={300}
          height={300}
          src={order.image}
          alt={order.name}
          className="size-full h-[300px] object-cover"
        />
        <Icons.buttonMore className="absolute right-4 top-4 cursor-pointer" />
      </CardHeader>
      <CardContent className="gap-4 p-4">
        <div className="flex flex-col gap-4">
          <ul className="flex flex-col items-start gap-4">
            <li className="text-lg font-semibold">{order.name}</li>
            <li className="inline rounded-md border border-muted-foreground p-2 text-sm font-semibold text-foreground">
              {order.tags}
            </li>
            <li className="flex gap-1 text-base">
              <Icons.calendar />
              {order.startDate} {order.endDate && ` - ${order.endDate}`}
            </li>
          </ul>
          <Button
            asChild
            variant="link"
            className="h-fit w-full justify-center p-4 text-sm"
          >
            <Link href={`/orders?id=${order.id}`}>
              View Details <Icons.arrowRight2 />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
