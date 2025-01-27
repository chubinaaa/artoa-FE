import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Review } from "../data";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";

export function ReviewsCarousel({ reviews }: { reviews: Review[] }) {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full self-center md:w-11/12"
    >
      <CarouselContent className="-ml-4">
        {reviews.map((review, index) => (
          <CarouselItem
            key={review.user.name}
            className="basis-[83%] pl-4 sm:basis-1/2"
          >
            <ReviewCard review={review} index={index} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="-left-7 size-6 lg:-left-12 lg:size-12" />
      <CarouselNext className="-right-7 size-6 lg:-right-12 lg:size-12" />
    </Carousel>
  );
}

function ReviewCard({ review, index }: { review: Review; index: number }) {
  return (
    <div
      className={cn(
        "rounded-lg bg-gradient-to-b from-muted-foreground to-transparent p-0.5",
        index % 2 === 0 ? "rounded-bl-[90px]" : "rounded-tr-[90px]",
      )}
    >
      <div
        className={cn(
          "flex size-full flex-col gap-2 rounded-lg bg-secondary p-6 md:p-8 lg:gap-8",
          index % 2 === 0
            ? "rounded-bl-[90px] bg-background"
            : "rounded-tr-[90px]",
        )}
      >
        <div className="flex items-center gap-2">
          {Array.from({ length: 5 }, (_, i) => i + 1).map((star) => (
            <Icons.star
              key={star}
              className={cn("size-6", {
                "text-primary": star <= review.rating,
                "stroke-foreground text-transparent": star > review.rating,
              })}
            />
          ))}
        </div>
        <p className="text-sm">{review.review}</p>
        <div className="flex items-center gap-4">
          <Image
            src={review.user.avatar}
            width={48}
            height={48}
            alt={review.user.name}
            className="size-6 rounded-full md:size-12"
          />
          <div>
            <p className="font-bold">{review.user.name}</p>
            <p className="text-muted-foreground">{review.user.title}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
