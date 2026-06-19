import { getStartups } from "@/api/serverMutation";
import { lazy } from "@/lib/lazy";

const StartupsCards = lazy(
  () => import("@/MainComponents/StartupsCards/StartupsCards"),
);

const StatupsPage = async () => {
  const startupsData = await getStartups();

  return (
    <div className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-11/12 mx-auto">
      {startupsData.map((startups) => (
        <StartupsCards key={startups._id} startups={startups} />
      ))}
    </div>
    </div>
  );
};

export default StatupsPage;
