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
    <section>
      <div className="container mx-auto flex w-full flex-col gap-6 py-6 sm:py-12 md:py-28">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-semibold text-primary md:text-2xl lg:text-4xl">
            Wall Artists In Any Direction
          </h2>
          <Button variant="link" className="h-fit p-0 text-sm text-primary">
            See All Artists
          </Button>
        </div>
        <div className="flex flex-col gap-4 md:flex-row md:gap-8">
          <div className="flex flex-col gap-2 md:gap-6">
            <Label className="leading-6">Filter by style</Label>
            <ScrollArea className="md:min-w-36 2xl:min-w-52">
              <div className="flex gap-2 md:flex-col md:gap-1">
                {filters.map((filter) => (
                  <div
                    key={filter}
                    className="relative rounded-lg border bg-secondary"
                  >
                    <Checkbox
                      id={filter}
                      className="peer absolute left-2.5 top-1/2 mr-2.5 -translate-y-1/2 data-[state=unchecked]:border-muted-foreground md:size-4 [&_svg]:size-2.5"
                    />
                    <Label
                      htmlFor={filter}
                      key={filter}
                      className="flex w-28 min-w-fit shrink-0 cursor-pointer items-center justify-start rounded-lg bg-secondary p-2.5 pl-9 text-left text-base font-normal leading-4 transition-colors peer-data-[state=checked]:bg-primary peer-data-[state=checked]:text-primary-foreground md:w-full md:leading-5"
                    >
                      {filter}
                    </Label>
                  </div>
                ))}
              </div>
              <ScrollBar orientation="horizontal" className="md:hidden" />
            </ScrollArea>
          </div>

          <Carousel
            opts={{
              align: "start",
            }}
            className="md:ml-12 md:max-w-[calc(100%-14rem)] 2xl:max-w-5xl"
          >
            <CarouselContent className="-ml-4">
              {artists.map((artist, index) => (
                <CarouselItem
                  key={artist.handle + index}
                  className="basis-1/2 pl-4 sm:basis-[45%] lg:basis-1/3 2xl:basis-[31.635%]"
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
    </section>
  );
}
