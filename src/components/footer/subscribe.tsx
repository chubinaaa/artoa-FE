import { Icons } from "../icons";

export function Subscribe() {
  return (
    <div className="mx-auto flex flex-col items-start gap-8 bg-inherit lg:w-1/3">
      <p className="text-left text-foreground">
        Be the first to hear about new arrivals, promotions, style inspiration,
        and exclusive sneak peeks.
      </p>
      <form className="flex w-full max-w-md items-center gap-4 rounded-lg border border-solid px-6 py-4">
        <input
          type="email"
          placeholder="E-mail"
          className="grow bg-inherit outline-none"
          aria-label="Email Address"
        />
        <button
          type="submit"
          className="flex size-6 items-center gap-2.5 rounded-xl bg-foreground p-2"
          aria-label="Subscribe"
        >
          <Icons.arrowRight className="text-secondary-foreground" />
        </button>
      </form>
    </div>
  );
}
