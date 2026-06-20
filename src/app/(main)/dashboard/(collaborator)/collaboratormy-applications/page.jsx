import { CollaboratorApplyData } from "@/api/serverMutation";
import { lazy } from "@/lib/lazy";
import { handleUser } from "@/lib/user";

const MyApplicationsTable = lazy(
  () =>
    import("@/DashboardComponents/Collaborator/MyApplicationsTable/MyApplicationsTable"),
);

const CollaboratormyApplicationsPage = async () => {
  const user = await handleUser();
  console.log(user);
  const CollaboratorData = await CollaboratorApplyData(user?.id);

  return (
    <div>
      <MyApplicationsTable CollaboratorData={CollaboratorData} />
    </div>
  );
};

export default CollaboratormyApplicationsPage;
