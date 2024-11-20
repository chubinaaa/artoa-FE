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
      <div className="container mx-auto flex w-full flex-col gap-6 py-28">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl text-primary">Featured Artists</h1>
          <Button asChild variant="link" className="p-0">
            <Link href="/featured-artists">See All Featured Artists</Link>
          </Button>
        </div>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-5">
            {artists.map((artist, index) => (
              <CarouselItem
                key={artist.handle + index}
                className="basis-1/4 pl-5"
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
