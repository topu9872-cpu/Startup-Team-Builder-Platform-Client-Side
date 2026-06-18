import { lazy } from "@/lib/lazy";

const StartupsCards = lazy(
  () => import("@/MainComponents/StartupsCards/StartupsCards"),
);

const StatupsPage = () => {
  return (
    <div>
      <StartupsCards />
    </div>
  );
};

export default StatupsPage;
