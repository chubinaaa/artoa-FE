import { Card, CardContent, CardFooter } from "@/components/ui/card";

import Image from "next/image";
import { Icons } from "../icons";
import { Button } from "../ui/button";

interface Artist {
  name: string;
  handle: string;
  rating: number;
  tags: string[];
  image: string;
}

export function WallArtistCard({ artist }: { artist: Artist }) {
  return (
    <Card className="bg-background">
      <CardContent className="p-0">
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={artist.image}
            alt={artist.name}
            className="size-full object-cover"
            width={310}
            height={310}
          />
        </div>
        <div>
          <div className="mb-2 flex items-center gap-2">
            {artist.tags.map((tag, i) => (
              <span
                key={i}
                className="hidden text-primary first:block md:block"
              >
                {tag}
              </span>
            ))}
            <div className="ml-auto flex items-center gap-1">
              <Icons.star className="text-accent" />
              <span>{artist.rating}</span>
            </div>
          </div>
          <h3 className="font-semibold">
            {artist.name} <span className="font-normal">{artist.handle}</span>
          </h3>
          <p className="mt-1 hidden md:block">
            lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
            voluptate.
          </p>
        </div>
      </CardContent>
      <CardFooter className="mt-2 p-0 md:mt-4">
        <Button className="h-10 w-full md:h-12">See More</Button>
      </CardFooter>
    </Card>
  );
}
