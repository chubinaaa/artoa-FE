import Image from "next/image";
import Link from "next/link";
import { teamMembers } from "@/config/team";
import { Button } from "../ui/button";
export function ArtoaTeamSection() {
  return (
    <section>
      <div className="container mx-auto py-12 lg:py-28">
        <div className="flex flex-col justify-between gap-20">
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

          <div className="mt-8 flex flex-col gap-12 lg:mt-28 lg:gap-4">
            <div className="grid grid-cols-1 items-center gap-20 lg:grid-cols-3 lg:gap-12">
              {teamMembers.map((member, index) => (
                <div
                  className="relative flex flex-col items-center"
                  key={index}
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
                </div>
              ))}
            </div>
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
        </div>
      </div>
    </section>
  );
}
