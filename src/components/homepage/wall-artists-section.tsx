import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import { WallArtistCard } from "../artists/wall-artists-card";
import { Artist } from "@/types/artist";

export const filters = [
  "All",
  "Graffiti",
  "3D Art",
  "Illustration",
  "Stencil",
  "Mural",
];

export function WallArtistsSection({ artists }: { artists: Artist[] }) {
  return (
    <div className="w-full p-8 md:p-16">
      <div className="flex items-center justify-between pb-4 md:pb-8">
        <h2 className="font-bold text-primary md:text-4xl">
          Wall Artists In Any Direction
        </h2>
        <Button variant="link" className="p-0 text-sm text-primary">
          See All Artists
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-[200px_1fr] md:gap-8">
        <ScrollArea className="w-full md:w-auto">
          <div className="flex gap-2 pb-4 md:flex-col md:pb-0">
            {filters.map((filter) => (
              <div key={filter} className="relative">
                <Checkbox
                  id={filter}
                  className="peer absolute left-2.5 top-1/2 mr-2.5 size-4 -translate-y-1/2 bg-secondary [&_svg]:size-2.5"
                />
                <Label
                  htmlFor={filter}
                  key={filter}
                  className="flex w-28 min-w-fit shrink-0 cursor-pointer items-center justify-start rounded-lg bg-secondary p-2.5 pl-9 text-left text-base font-normal transition-colors peer-data-[state=checked]:bg-primary peer-data-[state=checked]:text-primary-foreground md:w-full"
                >
                  {filter}
                </Label>
              </div>
            ))}
          </div>
          <ScrollBar orientation="horizontal" className="md:hidden" />
        </ScrollArea>

        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-5xl md:ml-10 xl:max-w-6xl"
        >
          <CarouselContent className="-ml-4">
            {artists.map((artist, index) => (
              <CarouselItem
                key={artist.handle + index}
                className="basis-1/2 pl-4 md:basis-1/3 lg:basis-[calc(30%-1rem)]"
              >
                <WallArtistCard artist={artist} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
