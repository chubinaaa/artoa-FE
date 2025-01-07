import Image from "next/image";
import { teamMembers } from "@/config/team";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

export function ArtoaTeamSection() {
  return (
    <section>
      <div className="container mx-auto py-12 lg:py-28">
        <h1 className="text-center text-3xl font-semibold md:text-5xl xl:text-6xl">
          Find Your Team Of The Digital Future
        </h1>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4 pt-28 md:-ml-5">
            {teamMembers.map((teamMember) => (
              <CarouselItem
                key={teamMember.imageUrl}
                className="basis-full pl-4 sm:basis-1/2 md:pl-5 lg:basis-1/3"
              >
                <div className="relative aspect-square rounded-t-full bg-primary">
                  <Image
                    className="absolute bottom-0 left-1/2 w-5/6 -translate-x-1/2"
                    src={teamMember.imageUrl}
                    alt={teamMember.name}
                    width={360}
                    height={560}
                  />
                </div>
                <p className="mt-6 text-center text-2xl">
                  {teamMember.name} {teamMember.surname}
                </p>
                <p className="text-center text-primary">{teamMember.role}</p>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-1 md:flex lg:hidden" />
          <CarouselNext className="right-1 md:flex lg:hidden" />
        </Carousel>
      </div>
    </section>
  );
}
