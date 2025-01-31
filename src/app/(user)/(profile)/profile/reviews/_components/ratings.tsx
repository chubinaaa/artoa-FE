import { Icons } from "@/components/icons";
import { Rating } from "../data";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

export function Ratings({ ratings }: { ratings: Rating[] }) {
  const mostRatedCount = ratings.reduce((acc, curr) =>
    acc.star > curr.star ? acc : curr,
  ).count;

  const totalCount = ratings.reduce((acc, curr) => acc + curr.count, 0);
  const totalStars = ratings.reduce(
    (acc, curr) => acc + curr.star * curr.count,
    0,
  );
  const average = (totalStars / totalCount).toFixed(1);

  return (
    <div className="grid grid-cols-5 gap-6 rounded-lg bg-background px-2 py-3 md:grid-cols-2 md:gap-20">
      <div className="col-span-3 flex flex-col gap-2 md:col-span-1">
        {ratings.map((rating) => (
          <div key={rating.id} className="flex items-center gap-1">
            <span className="font-semibold">{rating.star}</span>
            <Icons.star className="size-4 text-primary" />
            <Progress value={(100 / mostRatedCount) * rating.count} />
          </div>
        ))}
      </div>
      <div className="flex w-fit flex-col gap-2 md:text-right">
        <p className="text-5xl font-bold">{average}</p>
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }, (_, i) => i + 1).map((star) => (
            <Icons.star
              key={star}
              className={cn("size-4", {
                "text-primary": star <= Number(average),
              })}
            />
          ))}
        </div>
        <p>{totalCount} Reviews</p>
      </div>
    </div>
  );
}
