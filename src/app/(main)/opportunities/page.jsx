import { lazy } from "@/lib/lazy";
import { PaginationWithEllipsis } from "@/MainComponents/OpportunitiesCards/Pagination";

// const PaginationWithEllipsis = lazy(
//   () => import("@/MainComponents/OpportunitiesCards/Pagination"),
// );

const StartupSearchBar = lazy(
  () => import("@/MainComponents/OpportunitiesCards/SearchOpportunities"),
);

const OpportunitiesCards = lazy(
  () => import("@/MainComponents/OpportunitiesCards/OpportunitiesCards"),
);

const OpportunitiesPage = () => {
  return (
    <div>
      <StartupSearchBar />
      <OpportunitiesCards />
      <PaginationWithEllipsis/>
    </div>
  );
};

export default OpportunitiesPage;
