import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

export function HeroSection() {
  return (
    <section className="bg-hero-pattern bg-cover bg-bottom md:bg-center">
      <div className="container mx-auto pb-28 pt-16 md:pb-16">
        <div className="flex flex-col md:gap-12">
          <h1 className="text-4xl font-bold md:text-6xl">
            Discover The Imaginary World
          </h1>
          <Separator className="mt-4 h-2 w-1/2 md:w-10/12" />
          <div className="my-6 flex flex-col items-start text-2xl leading-7 sm:leading-10 md:text-4xl">
            <span>
              Instantly transform any space with our-powered art generator.
            </span>
            <span> Connect with artists globally for unique creations.</span>
            <span className="hidden sm:block">
              Legal, creative, and community-centric. ArtOa.io — Where Walls
              Speak.
            </span>
          </div>
          <Button className="mt-4 w-fit">Join As</Button>
        </div>
      </div>
      <div className="bg-secondary py-6 md:py-10">
        <div className="container mx-auto grid grid-cols-2 place-items-center gap-5 sm:grid-cols-4 sm:gap-0">
          {highligts.map((highlight) => (
            <div key={highlight.title} className="text-center">
              <p className="mb-4 text-3xl font-bold md:text-6xl">
                {highlight.title}
              </p>
              <p className="text-lg md:text-4xl">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const highligts = [
  {
    title: "70+",
    description: "Wall Artists",
  },
  {
    title: "50+",
    description: "Customers",
  },
  {
    title: "20+",
    description: "Completed Projects",
  },
  {
    title: "300+",
    description: "Art pieces",
  },
];
