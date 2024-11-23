import teamImage1 from "@/../public/team1.svg";
import teamImage2 from "@/../public/team2.svg";
import teamImage3 from "@/../public/team3.svg";

export const TeamConfig = [
  {
    name: "Name",
    surname: "Surname",
    role: "Founder & CEO",
    image: teamImage1,
  },
  {
    name: "Name",
    surname: "Surname",
    role: "Co-Founder & CEO",
    image: teamImage2,
  },
  {
    name: "Name",
    surname: "Surname",
    role: "Co-Founder & CEO",
    image: teamImage3,
  },
];
export type TeamConfig = typeof TeamConfig;
