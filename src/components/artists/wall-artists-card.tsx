import Image from "next/image";
import Link from "next/link";

import { Artist } from "@/types/artist";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Icons } from "../icons";
import { Button } from "../ui/button";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";

export function WallArtistCard({ artist }: { artist: Artist }) {
  return (
    <Card className="bg-background">
      <CardHeader className="relative overflow-hidden p-0">
        <Image
          src={artist.image}
          alt={artist.name}
          className="size-full h-[310px] object-cover"
          width={310}
          height={310}
        />
      </CardHeader>
      <CardContent className="p-0 py-2">
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <ScrollArea>
                <ul className="flex items-center gap-2">
                  {artist.tags.map((tag, i) => (
                    <li
                      key={tag + i}
                      className="text-sm font-semibold text-primary"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
                <ScrollBar orientation="horizontal" className="md:hidden" />
              </ScrollArea>
              <div className="flex items-center gap-1 text-sm">
                <Icons.star className="text-primary" /> {artist.rating}
              </div>
            </div>
            <CardTitle className="flex items-center gap-1">
              <p className="font-semibold">{artist.name}</p>
              <Link className="text-sm font-normal" href={artist.href}>
                {artist.handle}
              </Link>
            </CardTitle>
          </div>
          <CardDescription className="leading-5">
            {artist.description}
          </CardDescription>
        </div>
      </CardContent>
      <CardFooter className="p-0">
        <Button asChild>
          <Link href={artist.href} className="w-full">
            See More
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
