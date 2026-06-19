import { lazy } from "@/lib/lazy";

const MyApplicationsTable = lazy(
  () =>
    import("@/DashboardComponents/Collaborator/MyApplicationsTable/MyApplicationsTable"),
);

const CollaboratormyApplicationsPage = () => {
  return (
    <div>
      <MyApplicationsTable />
    </div>
  );
};

export default CollaboratormyApplicationsPage;
