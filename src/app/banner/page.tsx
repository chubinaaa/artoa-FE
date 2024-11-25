import { Button } from "@/components/ui/button";

export default function Banner() {
  return (
    <section className="relative bg-cover bg-center">
      <div className="bg-[url('/banner/image/Mask_mobile.png')] bg-no-repeat sm:bg-[url('/banner/image/Mask.png')]">
        <div className="px-8 py-16 sm:px-8 sm:py-16">
          <div className="ml-0 flex flex-col sm:ml-10 sm:w-5/6">
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
      </div>
      <div className="bg-secondary py-10 text-gray-300">
        <div className="ml-4 flex w-5/6 flex-row justify-between gap-6 sm:m-auto">
          <div className="text-center">
            <p className="mb-4 text-3xl font-bold md:text-6xl">70+</p>
            <p className="text-lg md:text-4xl">Wall Artists</p>
          </div>
          <div className="text-center">
            <p className="mb-4 text-3xl font-bold md:text-6xl">50+</p>
            <p className="text-lg md:text-4xl">Customers</p>
          </div>
          <div className="text-center">
            <p className="mb-4 text-3xl font-bold md:text-6xl">20+</p>
            <p className="text-lg md:text-4xl">Completed Projects</p>
          </div>
          <div className="text-center">
            <p className="mb-4 text-3xl font-bold md:text-6xl">300+</p>
            <p className="text-lg md:text-4xl">Art pieces</p>
          </div>
        </div>
      </div>
    </section>
  );
}
