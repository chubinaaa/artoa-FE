import { AiGeneratedArtsSection } from "@/components/homepage/ai-generated-arts-section";
import { ArtoaTeamSection } from "@/components/homepage/artoa-team-section";
import { FeaturedArtistsSection } from "@/components/homepage/featured-artists-section";
import { HeroSection } from "@/components/homepage/hero-section";
import { ServiceSection } from "@/components/homepage/service-section";
import { WallArtistsSection } from "@/components/homepage/wall-artists-section";
import { Artist } from "@/types/artist";

const mockArtists: Array<Artist> = Array.from({ length: 10 }).map(
  (_, index) => ({
    id: index,
    name: `Mock Artist ${index}`,
    handle: `mock-artist-${index}`,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta neque omnis ea sed, possimus beatae! Dolor quis eligendi doloremque sunt.",
    image: "/placeholder.svg",
    tags: ["3D Art", "Digital Art", "Illustration"],
    rating: Math.floor(Math.random() * 5) + 1,
    href: `/artists/${index}`,
  }),
);

export default function IndexPage() {
  return (
    <div className="size-full">
      <HeroSection />
      <WallArtistsSection />
      <ServiceSection />
      <AiGeneratedArtsSection />
      <FeaturedArtistsSection artists={mockArtists} />
      <ArtoaTeamSection />
    </div>
  );
}
