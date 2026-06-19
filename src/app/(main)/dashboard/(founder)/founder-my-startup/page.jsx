import { lazy } from "@/lib/lazy";

const StartupForm = lazy(() => 
  import("@/DashboardComponents/Founder/StartupForm/StartupForm")
);

const FounderMyStartupPage = () => {
  return (
    <div>
      <StartupForm />
    </div>
  );
};

export default FounderMyStartupPage;
