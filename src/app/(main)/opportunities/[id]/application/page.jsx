import {  getOpportunitiesAllData, getPlanData } from "@/api/serverMutation";
import { lazy } from "@/lib/lazy";
import { handleUser } from "@/lib/user";
const ApplyOpportunityForm = lazy(
  () => import("@/MainComponents/ApplyOpportunityForm/ApplyOpportunityForm"),
);

const ApplyOpportunity = async ({ params }) => {
  const { id } = await params;
  
  const user = await handleUser();
  const opportunitiesData = await  getOpportunitiesAllData();
  const filter=opportunitiesData.filter(item=>item._id===id)


  return (
    <div>
      <ApplyOpportunityForm id={id} user={user} data={filter[0]}/>
    </div>
  );
};

export default ApplyOpportunity;
