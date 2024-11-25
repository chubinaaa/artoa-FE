import Image from "next/image";
import { teamMembers } from "@/config/team";

export function ArtoaTeamSection() {
  return (
    <section>
      <div className="container mx-auto py-28">
        <h1 className="mt-6 text-center font-sans text-6xl font-bold">
          Find Your Team Of The Digital Future
        </h1>
        <div className="grid grid-cols-3 overflow-x-scroll pt-40 md:gap-5">
          {teamMembers.map((member, index) => (
            <div className="relative" key={index}>
              <div className="aspect-square rounded-t-full bg-primary"></div>
              <Image
                className="absolute -bottom-px self-center"
                src={member.imageUrl}
                width={360}
                height={560}
                alt={member.name}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
