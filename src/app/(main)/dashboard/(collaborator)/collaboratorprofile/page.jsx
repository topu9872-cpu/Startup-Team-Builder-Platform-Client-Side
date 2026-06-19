import { lazy } from "@/lib/lazy";

const ProfileCardCollbarator = lazy(
  () =>
    import("@/DashboardComponents/Collaborator/ProfileCardCollaborator/ProfileCardCollaborator"),
);

const CollaboratorProfilePage = () => {
  return (
    <div>
      <ProfileCardCollbarator />
    </div>
  );
};

export default CollaboratorProfilePage;
