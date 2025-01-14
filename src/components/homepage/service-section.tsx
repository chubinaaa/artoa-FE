import Image from "next/image";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

export function ServiceSection() {
  return (
    <section className="bg-secondary max-sm:bg-services-pattern max-sm:bg-cover max-sm:bg-center">
      <div className="container mx-auto flex gap-2.5 py-6 max-sm:pb-36 lg:py-12 xl:py-28">
        <div className="flex flex-col gap-12 sm:basis-1/2 xl:gap-16">
          <Separator className="hidden h-1.5 w-10/12 sm:block" />
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-semibold leading-[48px]">Services</h2>
            <Separator className="mb-6 mt-2 h-1.5 w-1/2 sm:hidden" />
            <p className="text-2xl leading-7 lg:text-3xl lg:leading-8 xl:text-4xl xl:leading-10">
              Discover our diverse services, offering innovative wall art
              solutions and seamless connections with artists.
            </p>
          </div>
          <Button className="w-fit">Explore All Services</Button>
        </div>
        <div className="hidden sm:block sm:basis-1/2">
          <Image
            src="/services-bg.jpeg"
            width={400}
            height={400}
            alt="placeholder"
            className="size-full max-h-[440px] rounded-xl object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
