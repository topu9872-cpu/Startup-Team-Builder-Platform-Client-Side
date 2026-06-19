import { lazy } from "@/lib/lazy";

const ProfileCard = lazy(
  () => import("@/DashboardComponents/ProfileCard/ProfileCard"),
);

const FounderProfilePage = () => {
  return (
    <div>
      <ProfileCard />
    </div>
  );
};

export default FounderProfilePage;
