import { Icons } from "../icons";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import Image from "next/image";

export interface Artist {
  id: number;
  name: string;
  handle: string;
  image: string;
  tags: string[];
  rating: number;
  href: string;
}

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
      <CardContent className="p-0">
        <div className="p-4">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <div className="flex items-center justify-between text-sm">
                <span className="text-primary">{artist.tags[0]}ist</span>
                <div className="ml-auto flex items-center gap-1">
                  <Icons.star className="text-accent" />
                  <span>{artist.rating}(69)</span>
                  <Icons.arrowRight className="size-6" />
                </div>
              </div>
              <p className="text-xl">
                <span className="font-semibold">{artist.name}</span> <br />
                {artist.handle}
              </p>
            </div>
            <p className="mt-1 hidden md:block">
              lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem, voluptate.
            </p>
            <div className="flex gap-3">
              {artist.tags.map((tag, i) => (
                <span key={i} className="rounded-lg border p-2 font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="h-10 md:h-12">See More</Button>
      </CardFooter>
    </Card>
  );
}
