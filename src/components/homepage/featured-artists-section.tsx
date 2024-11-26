import Link from "next/link";

import { Artist } from "@/types/artist";

import { FeaturedArtistCard } from "../artists/featured-artist-card";
import { Button } from "../ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

export function FeaturedArtistsSection({
  artists,
}: {
  artists: Array<Artist>;
}) {
  return (
    <section className="md:bg-secondary">
      <div className="container mx-auto flex w-full flex-col gap-6 py-6 sm:py-12 md:py-28">
        <div className="flex items-center justify-between md:px-0">
          <h1 className="text-sm font-semibold text-primary sm:text-2xl md:text-3xl">
            Featured Artists
          </h1>
          <Button asChild variant="link" className="h-fit p-0 text-sm">
            <Link href="/featured-artists">See All Artists</Link>
          </Button>
        </div>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4 md:-ml-5">
            {artists.map((artist, index) => (
              <CarouselItem
                key={artist.handle + index}
                className="basis-[83%] pl-4 sm:basis-1/2 md:basis-2/5 md:pl-5 lg:basis-1/3 xl:basis-1/4"
              >
                <FeaturedArtistCard artist={artist} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
}
