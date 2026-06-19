import { lazy } from "@/lib/lazy";

const ManageUsers=lazy(()=>import("@/DashboardComponents/Admin/ManageUsers/AdminManageUsers")) ;

const ManageUsersPage = () => {
  return <div>
    <ManageUsers/>
    </div>
};

export default ManageUsersPage;
