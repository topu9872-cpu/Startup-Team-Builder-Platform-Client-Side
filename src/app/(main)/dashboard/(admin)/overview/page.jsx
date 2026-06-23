import {
  getAllUsers,
  getOpportunitiesAllData,
  getStartups,
  getSubcriptions,
} from "@/api/serverMutation";
import { lazy } from "@/lib/lazy";
import { handleUser } from "@/lib/user";

const AdminDashboard = lazy(
  () => import("@/DashboardComponents/Admin/AdminDashboard/AdminDashboard"),
);

const OverviewPage = async () => {
  const allUsers = await getAllUsers();
  const allStaups = await getStartups();
  const allSubcriptions = await getSubcriptions();
  const allOpportunities = await getOpportunitiesAllData();
  const user=await handleUser()

  return (
    <div className="text-center ">
      <AdminDashboard
      user={user}
        allUsers={allUsers}
        allStaups={allStaups}
        allSubcriptions={allSubcriptions}
        allOpportunities={allOpportunities}
      />
    </div>
  );
};

export default OverviewPage;
