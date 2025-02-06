import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PortfolioPage() {
  return (
    <main>
      <div className="container">
        <h1 className="hidden text-3xl font-bold lg:flex lg:flex-row">
          Portfolio
        </h1>
        <div className="flex-row">
          <Button asChild variant="outline" className="hidden w-fit lg:flex">
            <Link href="./portfolio/add-project">Create a Project</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
