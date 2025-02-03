import { Button } from "@/components/ui/button";
import AddProjectAside from "../components/aside";
import AddProjectContainet from "../components/container";
import Link from "next/link";

export default function AddProjectPage() {
  return (
    <main>
      <div className="container mx-auto flex flex-col gap-y-5 py-16">
        <h2 className="mb-4 text-2xl font-bold">
          Create building your project{" "}
        </h2>
        <div className="grid w-full grid-cols-[69%_29%] gap-5">
          <AddProjectContainet />
          <AddProjectAside />
        </div>
        <div className="float-end flex justify-end gap-12">
          <Button asChild className="px-9 py-6" variant="secondary">
            <Link href="./"> Cancel </Link>
          </Button>
          <Button className="px-9 py-6" variant="default">
            Publish
          </Button>
        </div>
      </div>
    </main>
  );
}
