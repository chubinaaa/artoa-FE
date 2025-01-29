import CreateProjectCard from "./components/create-project-card";
import UserInfoCard from "./components/user-info-card";

export default function PortfolioPage() {
  return (
    <div>
      <UserInfoCard />
      <div>
        <CreateProjectCard />
      </div>
    </div>
  );
}
