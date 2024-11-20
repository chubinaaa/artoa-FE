import { Icons } from "../icons";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export function Subscribe() {
  return (
    <div className="flex max-w-[432px] shrink-[2] grow-0 flex-col justify-center gap-4 bg-inherit xl:gap-8">
      <p className="text-xs leading-5 text-foreground md:text-base">
        Be the first to hear about new arrivals, promotions, style inspiration,
        and exclusive sneak peeks.
      </p>
      <form className="relative">
        <Input
          type="email"
          placeholder="E-mail"
          aria-label="Email Address"
          className="bg-background text-sm"
        />
        <Button
          size="icon"
          type="submit"
          aria-label="Subscribe"
          className="absolute right-6 top-1/2 size-6 -translate-y-1/2 rounded-full bg-foreground text-muted-foreground md:[&_svg]:size-4"
        >
          <Icons.arrowRight />
        </Button>
      </form>
    </div>
  );
}
