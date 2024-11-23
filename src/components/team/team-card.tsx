import { Employee } from "@/types/employee";
import {
  TeamContent,
  TeamItem,
  TeamContainer,
  TeamItemImage,
} from "../ui/team";
import Image from "next/image";

export function TeamItemCard({ employee }: { employee: Employee }) {
  return (
    <TeamContainer>
      <TeamItem>
        <TeamItemImage>
          <Image
            src={employee.image}
            alt={`${employee.name} ${employee.surname}`}
            className="size-full object-cover"
          />
          <TeamContent className="p-0">
            <div className="flex flex-col">
              <div>{`${employee.name} ${employee.surname}`}</div>
              <div>{employee.role}</div>
            </div>
          </TeamContent>
        </TeamItemImage>
      </TeamItem>
    </TeamContainer>
  );
}
