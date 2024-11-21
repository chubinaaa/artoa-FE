import { Artist } from "@/types/artist";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Image from "next/image";
import { Icons } from "../icons";
import { Button } from "../ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";

export function WallArtistCard({ artist }: { artist: Artist }) {
  return (
    <Card className="bg-background">
      <CardHeader className="relative aspect-square overflow-hidden p-0">
        <Image
          src={artist.image}
          alt={artist.name}
          className="size-full object-cover"
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
                      key={tag}
                      className={cn(
                        "hidden text-sm font-semibold text-primary lg:block",
                        {
                          block: i === 0,
                        },
                      )}
                    >
                      {tag}ist
                    </li>
                  ))}
                </ul>
                <ScrollBar orientation="horizontal" className="md:hidden" />
              </ScrollArea>
              <div className="flex items-center gap-1 text-sm">
                <Icons.star className="text-primary" /> {artist.rating}
              </div>
            </div>
            <CardTitle className="flex flex-col gap-1">
              <p>{artist.name}</p>
              <Link className="text-sm font-normal" href={artist.href}>
                {artist.handle}
              </Link>
            </CardTitle>
          </div>
          <CardDescription className="hidden md:block md:text-foreground">
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
