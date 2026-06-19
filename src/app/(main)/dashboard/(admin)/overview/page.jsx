import { lazy } from "@/lib/lazy";

const AdminDashboard= lazy(()=>import("@/DashboardComponents/Admin/AdminDashboard/AdminDashboard")) ;

const OverviewPage = () => {
  return (
    <div className="text-center ">
      <AdminDashboard/>
    </div>
  );
};

export default OverviewPage;