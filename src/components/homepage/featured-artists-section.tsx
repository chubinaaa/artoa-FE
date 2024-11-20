import Link from "next/link";
import { FeaturedArtistCard } from "../artists/featured-artist-card";
import { Button } from "../ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Artist } from "@/types/artist";

export function FeaturedArtistsSection({
  artists,
}: {
  artists: Array<Artist>;
}) {
  return (
    <section className="bg-secondary">
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
                className="basis-1/2 pl-4 sm:basis-[45%] md:basis-1/3 md:pl-5 2xl:basis-1/4"
              >
                <FeaturedArtistCard artist={artist} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
