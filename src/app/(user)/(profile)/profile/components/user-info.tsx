import { Icons } from "@/components/icons";

export default function UserInfo() {
  return (
    <div className="h-fit rounded-2xl border border-muted-foreground bg-secondary px-6 py-4">
      <div className="flex items-center">
        <div className="relative">
          <img
            src="/user-profile-photo.jpg"
            alt="user profile photo"
            className="me-16 size-44 rounded-full object-cover object-center"
          />
          <div className="absolute bottom-0 right-0 flex size-8 -translate-x-[215%] -translate-y-2/4 items-center justify-center rounded-full bg-secondary">
            <Icons.cameraPlus className="size-4" />
          </div>
        </div>
        <div className="grid gap-5">
          <p className="text-4xl font-medium">Name Surname</p>
          <p className="text-2xl font-medium">3D Artist</p>
          <p className="text-lg">Georgia, Tbilisi</p>
        </div>
      </div>
    </div>
  );
}
