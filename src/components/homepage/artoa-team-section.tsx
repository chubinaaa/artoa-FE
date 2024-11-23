import { TeamConfig } from "@/config/team";
import { TeamItemCard } from "../team/team-card";

export function ArtoaTeamSection() {
  const teamMembers = Object.values(TeamConfig);

  return (
    <section className="container mx-auto">
      <div>
        <h1 className="mt-6 text-center font-sans text-7xl font-bold">
          Find Your Team Of The Digital Future
        </h1>
        <div className="mt-11 flex justify-between">
          {teamMembers.map((employee, index) => (
            <TeamItemCard key={index} employee={employee} />
          ))}
        </div>
      </div>
    </section>
  );
}
