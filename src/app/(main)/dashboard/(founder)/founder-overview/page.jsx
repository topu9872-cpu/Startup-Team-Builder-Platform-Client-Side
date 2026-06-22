import { CompaniseApplications, founderOpportunitiesAllData } from "@/api/serverMutation";
import { lazy } from "@/lib/lazy";
import { handleUser } from "@/lib/user";

const FounderOverview = lazy(
  () => import("@/DashboardComponents/Founder/FounderOverview/FounderOverview"),
);

const FounderOverviewPage = async() => {
  const user=await handleUser()
   const applications = await CompaniseApplications(user?.id);
     const ManageOpportunities = await founderOpportunitiesAllData(user?.id);
  return (
    <div>
      <FounderOverview applications={applications}  ManageOpportunities={ ManageOpportunities}/>
    </div>
  );
};

export default FounderOverviewPage;
