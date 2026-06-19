import { lazy } from "@/lib/lazy";

const AddOpportunityForm = lazy(
  () => import("@/DashboardComponents/Founder/AddOpportunityForm/AddOpportunityForm"),
);

const FounderAddOpportunityPage = () => {
  return (
    <div>
      <AddOpportunityForm />
    </div>
  );
};

export default FounderAddOpportunityPage;
