import {
  getAllUsers,
  getOpportunitiesAllData,
  getStartups,
  getSubcriptions,
} from "@/api/serverMutation";
import { lazy } from "@/lib/lazy";

const AdminDashboard = lazy(
  () => import("@/DashboardComponents/Admin/AdminDashboard/AdminDashboard"),
);

const OverviewPage = async () => {
  const allUsers = await getAllUsers();
  const allStaups = await getStartups();
  const allSubcriptions = await getSubcriptions();
  const allOpportunities = await getOpportunitiesAllData();

  return (
    <div className="text-center ">
      <AdminDashboard
        allUsers={allUsers}
        allStaups={allStaups}
        allSubcriptions={allSubcriptions}
        allOpportunities={allOpportunities}
      />
    </div>
  );
};

export default OverviewPage;
