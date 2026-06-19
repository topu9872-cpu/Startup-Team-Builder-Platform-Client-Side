import { lazy } from "@/lib/lazy";

const ProfileCardFounder = lazy(
  () =>
    import("@/DashboardComponents/Founder/ProfileCardFounder/ProfileCardFounder"),
);

const FounderProfilePage = () => {
  return (
    <div>
      <ProfileCardFounder />
    </div>
  );
};

export default FounderProfilePage;
