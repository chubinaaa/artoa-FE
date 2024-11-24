import { TeamConfig } from "@/config/team";

import {
  TeamContent,
  TeamItem,
  TeamContainer,
  TeamItemImage,
} from "./team-layout";
import Image from "next/image";

export function TeamItemCard({ employee }: { employee: TeamConfig[0] }) {
  return (
    <TeamContainer>
      <TeamItem>
        <TeamItemImage>
          <Image
            src={employee.href}
            alt={`${employee.name} ${employee.surname}`}
            width={310}
            height={310}
            className="size-full object-cover"
          />
        </TeamItemImage>
        <TeamContent className="p-0">
          <div className="flex flex-col">
            <h5 className="text-2xl font-semibold">
              {`${employee.name} ${employee.surname}`}
            </h5>
            <h6 className="text-center text-sm font-semibold text-primary">
              {employee.role}
            </h6>
          </div>
        </TeamContent>
      </TeamItem>
    </TeamContainer>
  );
}
