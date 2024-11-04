import { SignUpDialog } from "@/components/auth/sign-up/sign-up-dialog";
import { WallArtistInAnyDirectionDemo } from "./wall-artists-in-any-direction.demo";

export default function IndexPage() {
  return (
    <div className="size-full">
      <h1>Hello ArtOa!</h1>
      <SignUpDialog />
      <WallArtistInAnyDirectionDemo />
    </div>
  );
}
