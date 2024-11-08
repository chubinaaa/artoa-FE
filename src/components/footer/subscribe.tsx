import { Icons } from "../icons";

export function Subscribe() {
  return (
    <div className="max-w-80">
      <p className="text-foreground">
        Be the first to hear about new arrivals, promotions, style inspiration,
        and exclusive sneak peeks.
      </p>
      <div className="mt-4 flex">
        <input
          type="email"
          placeholder="Your email"
          className="text-clip rounded-l-md px-4 py-2 focus:outline-none"
        />
        <button className="rounded-r-md bg-primary p-2">
          <Icons.arrowDown />
        </button>
      </div>
    </div>
  );
}
