import { Artist } from "@/types/artist";
import { AiGeneratedArtsSection } from "@/components/homepage/ai-generated-arts-section";
import { ArtoaTeamSection } from "@/components/homepage/artoa-team-section";
import { FeaturedArtistsSection } from "@/components/homepage/featured-artists-section";
import { HeroSection } from "@/components/homepage/hero-section";
import { ServiceSection } from "@/components/homepage/service-section";
import { WallArtistsSection } from "@/components/homepage/wall-artists-section";

const mockArtists: Array<Artist> = Array.from({ length: 10 }).map(
  (_, index) => ({
    id: index,
    name: `Mock Artist ${index}`,
    handle: `@artst-${index}`,
    description:
      "I complete drawings of any complexity, you can check my portfolio",
    image: "/placeholder.svg",
    tags: ["3D Art", "Illustration", "Graffiti"],
    rating: Number.parseFloat((Math.random() * 5 + 1).toFixed(2)),
    href: `/artists/${index}`,
  }),
);

export default function IndexPage() {
  return (
    <main>
      <HeroSection />
      <WallArtistsSection artists={mockArtists} />
      <ServiceSection />
      <AiGeneratedArtsSection />
      <FeaturedArtistsSection artists={mockArtists} />
      <ArtoaTeamSection />
    </main>
  );
}
