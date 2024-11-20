import { Icons } from "../icons";

export function Subscribe() {
  return (
    <div className="flex max-w-sm flex-col gap-8 bg-inherit">
      <p className="p-1 text-foreground">
        Be the first to hear about new arrivals, promotions, style inspiration,
        and exclusive sneak peeks.
      </p>
      <form className="flex max-w-sm items-center gap-4 rounded-lg border border-solid px-6 py-4">
        <input
          type="email"
          placeholder="E-mail"
          className="w-full justify-between bg-inherit outline-none max-sm:w-max"
          aria-label="Email Address"
        />
        <button
          type="submit"
          className="flex size-6 items-center gap-2.5 rounded-xl bg-foreground p-2"
          aria-label="Subscribe"
        >
          <Icons.arrowRight className="size-6 text-secondary-foreground" />
        </button>
      </form>
    </div>
  );
}
