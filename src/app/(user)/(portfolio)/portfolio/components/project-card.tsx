import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Image from "next/image";
import Link from "next/link";
import { Icons } from "@/components/icons";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
function ProjectCard({ className }: { className?: string }) {
  return (
    <Card className={`bg-background ${className}`}>
      <CardHeader className="relative overflow-hidden p-0">
        <Image
          src="/user-profile-photo.jpg"
          alt="photo"
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
                  <li className="text-sm font-semibold text-primary">
                    3D Artist
                  </li>
                  <li className="text-sm font-semibold text-primary">
                    3D Artist
                  </li>
                  <li className="text-sm font-semibold text-primary">
                    3D Artist
                  </li>
                </ul>
                <ScrollBar orientation="horizontal" className="md:hidden" />
              </ScrollArea>
              <div className="flex items-center gap-1 text-sm">
                <Icons.star className="text-primary" /> 4.66
              </div>
            </div>
            <CardTitle className="flex items-center gap-1">
              <p className="font-semibold">Name Surname</p>
              <Link className="text-sm font-normal" href="#">
                @Artist3
              </Link>
            </CardTitle>
          </div>
          <CardDescription className="leading-5">
            Get started with our Warehouse Management Suite (WMS) for free on
            your first device.
          </CardDescription>
        </div>
      </CardContent>
    </Card>
  );
}
export default ProjectCard;
