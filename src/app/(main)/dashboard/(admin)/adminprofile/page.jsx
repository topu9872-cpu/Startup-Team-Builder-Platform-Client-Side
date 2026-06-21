
import { lazy } from "@/lib/lazy";
import { handleUser } from "@/lib/user";

const ProfileCard=lazy(()=>import("@/DashboardComponents/ProfileCard/ProfileCard")) ;

const AdminProfilePage = async() => {
  const user=await handleUser()
 
  return (
    <div>
       <ProfileCard user={user}/>
    </div>
  );
};

export default AdminProfilePage;