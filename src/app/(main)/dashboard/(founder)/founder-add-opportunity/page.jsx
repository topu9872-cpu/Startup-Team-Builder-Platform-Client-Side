import { founderOpportunities, getPlanData } from "@/api/serverMutation";
import { lazy } from "@/lib/lazy";
import { handleUser } from "@/lib/user";

const AddOpportunityForm = lazy(
  () =>
    import("@/DashboardComponents/Founder/AddOpportunityForm/AddOpportunityForm"),
);

const FounderAddOpportunityPage = async () => {
  const user = await handleUser();
  const plan = await getPlanData();
  const founderOpportunitiesData=await founderOpportunities(user?.id)
  return (
    <div>
      <AddOpportunityForm user={user} plan={plan} founderOpportunitiesData={founderOpportunitiesData}/>
    </div>
  );
};

export default FounderAddOpportunityPage;
