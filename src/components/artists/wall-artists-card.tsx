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
import Link from "next/link";
import { Button } from "../ui/button";

type WallArtistCardProps = {
  id: number;
  name: string;
  handle: string;
  imageUrl: string;
  artStyles: string[];
  description: string;
  rating: number;
  href: string;
};

export function WallArtistCard({
  name,
  handle,
  imageUrl,
  artStyles,
  description,
  href,
  rating,
}: WallArtistCardProps) {
  return (
    <Card className="flex w-80 flex-col gap-2 bg-background">
      <CardHeader className="p-0">
        <Image src={imageUrl} alt={name} width={320} height={320} />
      </CardHeader>
      <CardContent className="p-0">
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <ul className="flex items-center gap-2">
                {artStyles.map((style) => (
                  <li
                    key={style}
                    className="text-sm font-semibold text-primary"
                  >
                    {style}
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-1 text-sm">
                <Icons.star className="text-primary" /> {rating}
              </div>
            </div>
            <CardTitle>
              {name}{" "}
              <Link href={href}>
                <span className="text-sm font-normal">{handle}</span>
              </Link>
            </CardTitle>
          </div>
          <CardDescription className="text-foreground">
            {description}
          </CardDescription>
        </div>
      </CardContent>
      <CardFooter className="p-0">
        <Button asChild>
          <Link href={href} className="w-full">
            See More
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
