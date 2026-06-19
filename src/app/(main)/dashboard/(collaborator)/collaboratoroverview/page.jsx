import { lazy } from "@/lib/lazy";

const CollaboratorDashboard =lazy(()=>import("@/DashboardComponents/Collaborator/CollaboratorDashboard/CollaboratorDashboard")) ;

const OverviewPage = () => {
  return (
    <div>
       <CollaboratorDashboard/>
    </div>
  );
};

export default OverviewPage;