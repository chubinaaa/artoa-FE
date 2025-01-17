import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import { Order } from "@/types/order";
import { OrdersHistory } from "@/config/orders-history";
import { OrderCard } from "./order-card";

const statusGroups = {
  Current: OrdersHistory.filter((order: Order) => order.status === "Current"),
  Finished: OrdersHistory.filter((order: Order) => order.status === "Finished"),
  Proposed: OrdersHistory.filter((order: Order) => order.status === "Proposed"),
};

export default function GroupedOrders() {
  return (
    <div className="flex w-full flex-wrap gap-6 md:flex-row">
      {Object.entries(statusGroups).map(([status, orders]) => (
        <div key={status} className="flex w-full flex-col gap-6">
          <div className="flex items-center justify-between md:px-0">
            <h1 className="text-sm font-semibold text-primary sm:text-2xl md:text-3xl lg:text-foreground">
              {status} Projects
            </h1>
            <Button asChild variant="link" className="h-fit p-0 text-sm">
              <Link href={`/orders?status=${status.toLowerCase()}`}>
                See All
              </Link>
            </Button>
          </div>
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4 md:-ml-5">
              {orders.map((order: Order) => (
                <CarouselItem
                  className="basis-[83%] pl-4 sm:basis-1/2 md:basis-2/5 md:pl-5 lg:basis-1/3"
                  key={order.id + order.name}
                >
                  <OrderCard order={order} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      ))}
    </div>
  );
}
