import { MobileSidebar } from "../_components/mobile-sidebar";
import { Ratings } from "./_components/ratings";
import { ReviewsCarousel } from "./_components/reviews";
import { ratings, reviews } from "./data";

export default function ReviewsPage() {
  return (
    <main>
      <div className="flex flex-col space-y-2 md:space-y-6 md:rounded-2xl md:border md:border-muted-foreground md:bg-secondary md:p-6">
        <div>
          <h1 className="inline-flex gap-3 text-xl font-bold text-primary md:text-3xl">
            <MobileSidebar />
            Reviews & Rating
          </h1>
          <p className="mt-1 hidden text-sm text-muted-foreground md:block">
            Manage your account security and devices.
          </p>
        </div>
        <Ratings ratings={ratings} />
        <ReviewsCarousel reviews={reviews} />
      </div>
    </main>
  );
}
