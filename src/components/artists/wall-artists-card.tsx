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
              <ul className="flex items-center gap-2">
                {artist.tags.map((tag) => (
                  <li key={tag} className="text-sm font-semibold text-primary">
                    {tag}
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-1 text-sm">
                <Icons.star className="text-primary" /> {artist.rating}
              </div>
            </div>
            <CardTitle>
              {artist.name}{" "}
              <Link href={artist.href}>
                <span className="text-sm font-normal">{artist.handle}</span>
              </Link>
            </CardTitle>
          </div>
          <CardDescription className="text-foreground">
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
