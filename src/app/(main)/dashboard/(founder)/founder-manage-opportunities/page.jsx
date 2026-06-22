import { founderOpportunitiesAllData } from "@/api/serverMutation";
import { lazy } from "@/lib/lazy";
import { handleUser } from "@/lib/user";

const ManageOpportunitie = lazy(
  () =>
    import("@/DashboardComponents/Founder/ManageOpportunitie/ManageOpportunitie"),
);

const FounderManageOpportunitiesPage = async () => {
  const user = await handleUser();

 
  const ManageOpportunities = await founderOpportunitiesAllData(user?.id);
  
  return (
    <div className="h-screen">
      <ManageOpportunitie ManageOpportunities={ManageOpportunities}/>
    </div>
  );
};
export default FounderManageOpportunitiesPage;
