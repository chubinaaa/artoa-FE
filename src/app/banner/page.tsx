import { Button } from "@/components/ui/button";

export default function Banner() {
  return (
    <section className="relative bg-cover bg-center text-white">
      <div
        className="w-full"
        style={{ backgroundImage: "url('/banner/image/Mask.png')" }}
      >
        <div className="bg-black/70 px-8 py-16">
          <div className="mx-10 flex max-w-2xl flex-col">
            <h1 className="text-4xl font-bold md:text-5xl">
              Discover The Imaginary World
            </h1>
            <div className="mx-auto mt-4 h-1 w-full bg-yellow-500"></div>
            <div className="my-6 flex flex-col items-start gap-y-1 text-lg leading-relaxed md:text-xl">
              <span>
                Instantly transform any space with our AI-powered art generator.
              </span>
              <span> Connect with artists globally for unique creations. </span>
              <span>
                Legal, creative, and community-centric. ArtOa.io — Where Walls
                Speak.
              </span>
            </div>
            <div>
              <Button> Join As </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-secondary py-8 text-gray-300">
        <div className="mx-10 flex max-w-5xl justify-around">
          <div className="text-center">
            <p className="text-2xl font-bold md:text-3xl">70+</p>
            <p className="text-sm md:text-base">Wall Artists</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold md:text-3xl">50+</p>
            <p className="text-sm md:text-base">Customers</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold md:text-3xl">20+</p>
            <p className="text-sm md:text-base">Completed Projects</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold md:text-3xl">300+</p>
            <p className="text-sm md:text-base">Art pieces sold</p>
          </div>
        </div>
      </div>
    </section>
  );
}
