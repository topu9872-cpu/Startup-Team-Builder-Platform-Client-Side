import { CollaboratorApplyData } from "@/api/serverMutation";
import { lazy } from "@/lib/lazy";
import { handleUser } from "@/lib/user";

const CollaboratorDashboard =lazy(()=>import("@/DashboardComponents/Collaborator/CollaboratorDashboard/CollaboratorDashboard")) ;

const OverviewPage =async () => {
   const user = await handleUser();
   
    const CollaboratorData = await CollaboratorApplyData(user?.id);
  return (
    <div>
       <CollaboratorDashboard CollaboratorData={CollaboratorData} user={user}/>
    </div>
  );
};

export default OverviewPage;