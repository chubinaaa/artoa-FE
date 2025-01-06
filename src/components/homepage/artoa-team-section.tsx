import Image from "next/image";
import Link from "next/link";
import { teamMembers } from "@/config/team";
import { Button } from "../ui/button";
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
        <div className="flex flex-col justify-between gap-5">
          <div className="flex items-center justify-center md:px-0 lg:justify-between">
            <h1 className="text-center text-3xl font-semibold lg:text-primary">
              Find Your Team Of The Digital Future
            </h1>
            <Button
              asChild
              variant="link"
              className="hidden h-fit p-0 text-sm lg:inline-flex"
            >
              <Link href="/members">See All Member</Link>
            </Button>
          </div>
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <div className="mt-1 flex flex-col gap-6 lg:mt-1 lg:gap-4">
              <CarouselContent className="ml-4 justify-evenly pt-36 md:-ml-5">
                {teamMembers.map((member, index) => (
                  <CarouselItem
                    key={index}
                    className="basis-[83%] pl-4 sm:basis-1/2 md:basis-2/5 md:pl-5 lg:basis-1/3 xl:basis-1/4"
                  >
                    <div className="relative grid aspect-square rounded-t-full bg-primary py-32">
                      <Image
                        className="absolute -bottom-0"
                        src={member.imageUrl}
                        width={360}
                        height={560}
                        alt={member.name}
                      />
                    </div>
                    <div className="text-center">
                      <p className="text-lg font-bold sm:text-xl lg:text-2xl">
                        {member.name} {member.surname}
                      </p>
                      <p className="text-sm text-primary sm:text-base">
                        {member.role}
                      </p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              <div className="flex justify-center">
                <Button
                  asChild
                  variant="link"
                  className="w-full gap-2.5 rounded-lg bg-primary px-9 py-3 text-white lg:hidden"
                >
                  <Link href={"/members"}> See All </Link>
                </Button>
              </div>
            </div>
            <CarouselPrevious className="hidden md:flex lg:hidden" />
            <CarouselNext className="hidden md:flex lg:hidden" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
