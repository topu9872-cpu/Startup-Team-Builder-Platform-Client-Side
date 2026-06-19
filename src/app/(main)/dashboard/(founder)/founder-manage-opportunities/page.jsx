import { lazy } from "@/lib/lazy";

const ManageOpportunities =lazy(()=>import("@/DashboardComponents/Founder/ManageOpportunities/ManageOpportunities"));

const FounderManageOpportunitiesPage = () => {
  return (
    <div>
      < ManageOpportunities/>
    </div>
  );
};

export default FounderManageOpportunitiesPage;