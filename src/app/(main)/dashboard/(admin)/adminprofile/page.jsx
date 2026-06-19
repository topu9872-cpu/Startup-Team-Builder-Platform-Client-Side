
import { lazy } from "@/lib/lazy";

const ProfileCard=lazy(()=>import("@/DashboardComponents/ProfileCard/ProfileCard")) ;

const AdminProfilePage = () => {
  return (
    <div>
       <ProfileCard/>
    </div>
  );
};

export default AdminProfilePage;