import { lazy } from "@/lib/lazy";

const ManageStartups=lazy(()=>import("@/DashboardComponents/Admin/ManageStartups/ManageStartups"));

const ManageStartupsPage = () => {
  return (
    <div>
      <ManageStartups/>
    </div>
  );
};

export default ManageStartupsPage;