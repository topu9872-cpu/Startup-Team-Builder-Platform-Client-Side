import { getData, postData } from "./server";
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
} = {}) => {
  const query = new URLSearchParams();

  query.set("page", String(page));

  if (search) query.set("search", search);

  if (ecosystemSegment) query.set("ecosystemSegment", ecosystemSegment);
  if (workType) query.set("workType", workType);

  return getData(`/opportunities?${query.toString()}`);
};

/**
 * ! get  opportunities details data
 *  */
export const getOpportunitiesDetails = async (id) => {
  return getData(`/opportunities/${id}`);
};

/**
 * ! get opportunities all data
 */
export const getOpportunitiesAllData = async () => {
  return getData("/Opportunities-all-data");
};

/**
 *  ! get plan data
 */
export const getPlanData = async () => {
  return getData("/plan");
};

/**
 * ! Collaborator can apply post
 */
export const postApply = (query) => {
  return postData("/application", query);
};

/**
 * ! collaborator application data
 */
export const CollaboratorApplyData = (userId) => {
  return getData("/application", userId);
};

/**
 * ! Collaborator can apply post
 */
export const Opportunities = (query) => {
  return postData("/opportunities", query);
};

/**
 * ! founder opportunities data
 */
export const founderOpportunities = (userId) => {
  return getData("/founder-opportunities", userId);
};
