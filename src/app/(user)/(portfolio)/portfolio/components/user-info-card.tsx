import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import Link from "next/link";

function UserInfoCard() {
  return (
    <div className="w-80">
      <div className="grid justify-items-center">
        <Image
          src="/user-profile-photo.jpg"
          alt="profile picture"
          width={72}
          height={72}
          className="size-[72px] rounded-full object-cover object-center"
        />
        <p className="mt-4">Name Surname</p>
      </div>
      <div className="mt-4 grid gap-4">
        <div className="flex w-full flex-col gap-2.5">
          <Label>Category</Label>
          <Input
            className="border-muted-foreground"
            type="email"
            placeholder="3D Artist"
          />
        </div>
        <div className="flex w-full flex-col gap-2.5">
          <Label>About</Label>
          <Input
            className="border-muted-foreground"
            placeholder="A 3D artist with 2 years of experience creating detailed and visually stunning designs."
          />
        </div>
        <div className="relative flex w-full flex-col gap-2.5">
          <Label>Rating</Label>
          <Input disabled className="!cursor-auto border-muted-foreground" />
          <div className="absolute bottom-4 left-6 flex items-center gap-1">
            <p className="me-2 text-muted-foreground">4.0</p>
            <Icons.star className="text-primary" />
            <Icons.star className="text-primary" />
            <Icons.star className="text-primary" />
            <Icons.star className="text-primary" />
            <Icons.star />
          </div>
        </div>
        <div className="relative flex w-full flex-col gap-2.5">
          <Label>Hire Name</Label>
          <Textarea
            name="descriptasdion"
            className="border-muted-foreground bg-input-background"
            placeholder={`Looking For Opportunities?\n\nAdd our new “Hire” section to your profile to let visitors know that you’re looking for new opportunities.`}
            rows={7}
          />
          <Button
            asChild
            variant="link"
            className="absolute bottom-0 h-fit w-full justify-center p-4 text-sm"
          >
            <Link href="#">
              Hire <Icons.arrowRight2 />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
export default UserInfoCard;
