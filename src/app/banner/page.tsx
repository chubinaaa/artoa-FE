import { Button } from "@/components/ui/button";

export default function Banner() {
  return (
    <section className="relative bg-cover bg-center">
      <div className="w-full bg-[url('/banner/image/Mask.png')]">
        <div className="px-8 py-16">
          <div className="ml-10 flex w-5/6 flex-col">
            <h1 className="text-4xl font-bold md:text-5xl">
              Discover The Imaginary World
            </h1>
            <div className="mt-4 h-1 w-11/12 bg-primary"></div>
            <div className="my-6 flex flex-col items-start gap-y-1 text-4xl leading-tight">
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
      </div>
      <div className="bg-secondary py-10 text-gray-300">
        <div className="m-auto flex w-5/6 justify-between">
          <div className="text-center">
            <p className="mb-4 text-6xl font-bold">70+</p>
            <p className="text-4xl">Wall Artists</p>
          </div>
          <div className="text-center">
            <p className="mb-4 text-6xl font-bold">50+</p>
            <p className="text-4xl">Customers</p>
          </div>
          <div className="text-center">
            <p className="mb-4 text-6xl font-bold">20+</p>
            <p className="text-4xl">Completed Projects</p>
          </div>
          <div className="text-center">
            <p className="mb-4 text-6xl font-bold">300+</p>
            <p className="text-4xl">Art pieces sold</p>
          </div>
        </div>
      </div>
    </section>
  );
}
