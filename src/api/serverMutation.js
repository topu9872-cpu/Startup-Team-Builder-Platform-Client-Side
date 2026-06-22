import { deleteData, getAllData, getData, postData, UpdateData } from "./server";
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
}) => {
  const params = new URLSearchParams();

  if (search) params.append("search", search);
  if (page) params.append("page", page);
  if (ecosystemSegment) params.append("ecosystemSegment", ecosystemSegment);
  if (workType) params.append("workType", workType);

  return await getAllData(`/all-opportunities?${params.toString()}`);
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
/**
 * ! post founder Subcriptions data
 */
export const founderSubcriptions = (userId) => {
  return postData("/subcriptions", userId);
};
/**
 * ! get Subcriptions data
 */
export const getSubcriptions = () => {
  return getData("/subcriptions");
};

/**
 * !post founder Startups data
 */
export const founderStartups = (updated) => {
  return postData("/startups", updated);
};

/**
 * !get founder`s all startups data
 */
export const founderStartupsAllData = (userId) => {
  return getData(`/startups/${userId}`);
};
/**
 * ! founder startups data update
 */
export const founderStartupsDataUpdate = (userId, data) => {
  console.log(userId, data);
  return UpdateData(`/startups/${userId}`, data);
};
/**
 * ! founder startups delete
 */
export const founderStartupsDataDelete = (id) => {
  return deleteData(`/startups/${id}`);
};

/**
 * !get founder all opportunities data
 */
export const founderOpportunitiesAllData = (userId) => {
  return getData("/founder-opportunities", userId);
};
/**
 * !get founder application data
 */
export const CompaniseApplications = (userId) => {
  return getData("/companies-application", userId);
};
/**
 * ! founder opportunities delete
 */
export const founderOpportunitiesDelete = (userId) => {
  return deleteData(`/founder-opportunities/${userId}`);
};
/**
 * ! founder startups data
 */
export const founderOpportunitiesUpdate = (userId, data) => {
  return UpdateData(`/founder-opportunities/${userId}`, data);
};

/**
 * ! founder startups data
 */
export const UpdateApplicationsStatus = (userId, data) => {
  return UpdateData(`/application/${userId}`, data);
};

/**
 * ! get all users
 */

export const getAllUsers = async () => {
  return getData("/users");
};
/**
 * ! get all users
 */

export const updateAllUsers = async (id, data) => {
  return getData(`/users/${id}`,data);
};
