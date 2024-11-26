import Image from "next/image";
import Link from "next/link";

import { Artist } from "@/types/artist";
import { cn } from "@/lib/utils";

import { Icons } from "../icons";
import { buttonVariants } from "../ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";

export function FeaturedArtistCard({ artist }: { artist: Artist }) {
  return (
    <Card>
      <CardHeader className="relative overflow-hidden rounded-t-lg p-0">
        <Image
          src={artist.image}
          alt={artist.name}
          className="size-full h-[300px] object-cover"
          width={310}
          height={310}
        />
      </CardHeader>
      <CardContent className="pt-6">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-accent">
                {artist.tags[0]}ist
              </span>
              <div className="ml-auto flex items-center gap-1">
                <Icons.star className="text-accent" />
                <p className="text-sm sm:text-base">
                  {artist.rating} <span>(69)</span>
                </p>
                <Icons.arrowRight className="size-6" />
              </div>
            </div>
            <div className="leading-none">
              <p className="text-xl font-semibold">{artist.name}</p>
              <p>{artist.handle}</p>
            </div>
          </div>
          <p className="mt-1 text-sm leading-5">{artist.description}</p>
          <ScrollArea>
            <div className="flex gap-1.5">
              {artist.tags.map((tag) => (
                <span
                  key={tag}
                  className="whitespace-nowrap rounded-lg border px-2 py-1 font-medium leading-4 sm:p-2"
                >
                  {tag}
                </span>
              ))}
            </div>
            <ScrollBar orientation="horizontal" className="md:hidden" />
          </ScrollArea>
        </div>
      </CardContent>
      <CardFooter className="pb-6">
        <Link
          href={artist.href}
          className={cn(buttonVariants(), "h-10 leading-5 md:h-12")}
        >
          See More
        </Link>
      </CardFooter>
    </Card>
  );
}
