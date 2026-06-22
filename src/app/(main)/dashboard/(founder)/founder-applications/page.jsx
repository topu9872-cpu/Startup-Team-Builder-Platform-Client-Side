import { CompaniseApplications } from "@/api/serverMutation";
import { lazy } from "@/lib/lazy";
import { handleUser } from "@/lib/user";
const ApplicationsTable = lazy(
  () =>
    import("@/DashboardComponents/Founder/ApplicationsTable/ApplicationsTable"),
);

const FounderApplicationsPage = async () => {
  const user = await handleUser();

  const applications = await CompaniseApplications(user?.id);
console.log(applications)
  return (
    <div>
      <ApplicationsTable applications={applications} />
    </div>
  );
};

export default FounderApplicationsPage;
