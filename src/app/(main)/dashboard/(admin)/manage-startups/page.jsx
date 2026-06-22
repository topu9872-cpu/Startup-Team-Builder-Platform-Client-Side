import { getStartups } from "@/api/serverMutation";
import { lazy } from "@/lib/lazy";

const ManageStartups=lazy(()=>import("@/DashboardComponents/Admin/ManageStartups/ManageStartups"));

const ManageStartupsPage =async () => {
const startups=await getStartups()
  return (
    <div>
      <ManageStartups startupsManage={startups}/>
    </div>
  );
};

export default ManageStartupsPage;