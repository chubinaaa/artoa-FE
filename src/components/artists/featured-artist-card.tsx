import { Artist } from "@/types/artist";

import { Icons } from "../icons";
import { buttonVariants } from "../ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";

export function FeaturedArtistCard({ artist }: { artist: Artist }) {
  return (
    <Card>
      <CardHeader className="relative aspect-square overflow-hidden rounded-t-lg p-0">
        <Image
          src={artist.image}
          alt={artist.name}
          className="size-full object-cover"
          width={310}
          height={310}
        />
      </CardHeader>
      <CardContent className="p-0 sm:pt-2">
        <div className="p-2 sm:p-4">
          <div className="flex flex-col gap-2 sm:gap-4">
            <div className="flex flex-col gap-1">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-accent">
                  {artist.tags[0]}ist
                </span>
                <div className="ml-auto flex items-center gap-1">
                  <Icons.star className="text-accent" />
                  <p className="text-sm sm:text-base">
                    {artist.rating}
                    <span className="hidden sm:inline-block">(69)</span>
                  </p>
                  <Icons.arrowRight className="hidden size-6 sm:inline-block" />
                </div>
              </div>
              <div className="leading-none">
                <p className="text-sm font-semibold sm:text-xl">
                  {artist.name}
                </p>
                <p className="text-xs sm:text-xl">{artist.handle}</p>
              </div>
            </div>
            <p className="mt-1 hidden leading-5 md:block">
              {artist.description}
            </p>
            <ScrollArea>
              <div className="flex gap-1 sm:gap-3">
                {artist.tags.map((tag) => (
                  <span
                    key={tag}
                    className="whitespace-nowrap rounded-lg border px-2 py-1 text-xs font-medium leading-4 sm:p-2 sm:text-base"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <ScrollBar orientation="horizontal" className="md:hidden" />
            </ScrollArea>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-2 sm:p-4 sm:pt-0">
        <Link
          href={artist.href}
          className={cn(buttonVariants(), "h-10 w-full leading-5 md:h-12")}
        >
          See More
        </Link>
      </CardFooter>
    </Card>
  );
}
