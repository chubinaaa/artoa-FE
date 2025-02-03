import AddProjectAside from "../components/aside";
import AddProjectContainet from "../components/container";

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
      </div>
    </main>
  );
}
