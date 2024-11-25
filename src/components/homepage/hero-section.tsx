import { Button } from "../ui/button";

export function HeroSection() {
  return (
    <section className="bg-[url('/banner/image/Mask_mobile.png')] bg-cover bg-center sm:bg-[url('/banner/image/Mask.png')]">
      <div className="container mx-auto py-16">
        <div className="flex flex-col">
          <h1 className="text-4xl font-bold">Discover The Imaginary World</h1>
          <div className="mt-4 h-1 w-11/12 bg-primary sm:w-11/12"></div>
          <div className="my-6 flex flex-col items-start text-lg leading-relaxed sm:text-xl sm:leading-tight md:text-2xl">
            <span className="">
              Instantly transform any space with our-powered art generator.
            </span>
            <span> Connect with artists globally for unique creations.</span>
            <span>
              Legal, creative, and community-centric. ArtOa.io — Where Walls
              Speak.
            </span>
          </div>
          <div className="mt-7">
            <Button> Join As </Button>
          </div>
        </div>
      </div>
      <div className="bg-secondary py-10">
        <div className="container mx-auto flex flex-row justify-between gap-6">
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
