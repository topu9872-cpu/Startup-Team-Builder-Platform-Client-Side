import { getData } from "./server";
// get startups data
export const getStartups = async () => {
  return getData("/startups");
};

/**
 *! get  opportunities data by search, pangination and sort
 */
export const getOpportunities = async ({
  search = "",
  page = 1,
  ecosystemSegment = "",
  workType = "",
}={}) => {
  const query = new URLSearchParams();

  query.set("page", String(page));

  if (search) query.set("search", search);

  if (ecosystemSegment) query.set("ecosystemSegment", ecosystemSegment);
  if (workType) query.set("workType", workType);

  console.log("FINAL QUERY:", query.toString());

  return getData(`/opportunities?${query.toString()}`);
};

// get  opportunities details data
export const getOpportunitiesDetails = async (id) => {
  return getData(`/opportunities/${id}`);
};
