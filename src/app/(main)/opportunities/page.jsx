import { getOpportunities } from "@/api/serverMutation";
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

const OpportunitiesPage = async ({ searchParams }) => {
  const param = await searchParams;
  const page = Number(param.page) || 1;
  const search = param.search || "";
  const ecosystemSegment = param.ecosystemSegment || "";
  const workType = param.workType || "";
  const opportunitiesData = await getOpportunities({
    search,
    ecosystemSegment,
    workType,
    page
  });


  const totalPages = opportunitiesData.totalPages || 1;
  return (
    <div>
      <StartupSearchBar />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-11/12 mx-auto my-6">
        {opportunitiesData.data.map((opportunities) => (
          <OpportunitiesCards
            key={opportunities._id}
            opportunities={opportunities}
          />
        ))}
      </div>

      <PaginationWithEllipsis totalPages={totalPages} />
    </div>
  );
};

export default OpportunitiesPage;
