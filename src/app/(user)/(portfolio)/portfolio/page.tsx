import CreateProjectCard from "./components/create-project-card";
import ProjectCard from "./components/project-card";
import UserInfoCard from "./components/user-info-card";

export default function PortfolioPage() {
  return (
    <div className="contents">
      <UserInfoCard className="w-80" />
      <div className="inline-flex">
        <CreateProjectCard className="w-80" />
        <ProjectCard className="w-80" />
      </div>
    </div>
  );
}
