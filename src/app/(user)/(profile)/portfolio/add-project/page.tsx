import { Button } from "@/components/ui/button";
import AddProjectAside from "../components/aside";
import AddProjectContainet from "../components/container";
import Link from "next/link";
import { Icons } from "@/components/icons";

export default function AddProjectPage() {
  return (
    <main>
      <div className="container mx-auto flex flex-col gap-y-5 pb-8 lg:py-16">
        <h2 className="mb-4 hidden text-2xl font-bold lg:block">
          Create building your project
        </h2>
        <Button
          asChild
          variant="link"
          className="flex justify-start gap-3 p-0 text-lg lg:hidden"
        >
          <Link href="./">
            <Icons.arrowLeft className="size-6 text-secondary-foreground" />
            <samp>Add Portfolio</samp>
          </Link>
        </Button>
        <div className="grid w-full gap-5 lg:grid-cols-[69%_29%]">
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
