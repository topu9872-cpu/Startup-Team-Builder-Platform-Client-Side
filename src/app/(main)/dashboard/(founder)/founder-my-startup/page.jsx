import { founderStartupsAllData } from "@/api/serverMutation";
import { lazy } from "@/lib/lazy";
import { handleUser } from "@/lib/user";

const StartupForm = lazy(() => 
  import("@/DashboardComponents/Founder/StartupForm/StartupForm")
);

const FounderMyStartupPage = async() => {
const user=await handleUser()
const founserData=await founderStartupsAllData(user?.id)

  return (
    <div>
      <StartupForm user={user} companies={founserData}/>
    </div>
  );
};

export default FounderMyStartupPage;
