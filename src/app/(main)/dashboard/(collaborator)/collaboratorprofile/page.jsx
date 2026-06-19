i
import { lazy } from "@/lib/lazy";

const ProfileCard = lazy(
  () =>
    import( "@/DashboardComponents/ProfileCard/ProfileCard"),
);

const CollaboratorProfilePage = () => {
  return (
    <div>
      <ProfileCard />
    </div>
  );
};

export default CollaboratorProfilePage;
