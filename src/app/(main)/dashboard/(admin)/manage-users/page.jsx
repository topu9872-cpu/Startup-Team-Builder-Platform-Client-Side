import { getAllUsers } from "@/api/serverMutation";
import { lazy } from "@/lib/lazy";

const ManageUsers=lazy(()=>import("@/DashboardComponents/Admin/ManageUsers/AdminManageUsers")) ;

const ManageUsersPage = async() => {
  const allUsers=await getAllUsers()
 
  return <div>
    <ManageUsers allUsers={allUsers}/>
    </div>
};

export default ManageUsersPage;
