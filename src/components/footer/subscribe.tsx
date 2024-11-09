import { Icons } from "../icons";

export function Subscribe() {
  return (
    <div className="max-w-80 gap-8">
      <p className="text-foreground">
        Be the first to hear about new arrivals, promotions, style inspiration,
        and exclusive sneak peeks.
      </p>
      <div className="flex items-center justify-between rounded-lg border border-solid px-6 py-4">
        <input
          type="email"
          placeholder="Your email"
          className="bg-inherit focus:outline-none"
        />
        <button className="flex items-center gap-3 rounded-xl bg-secondary-foreground p-1">
          <Icons.arrowRight />
        </button>
      </div>
    </div>
  );
}
