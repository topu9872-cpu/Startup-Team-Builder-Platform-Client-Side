import HeroBanner from "@/MainComponents/FontPage/Banner";
import BrowseOpportunities from "@/MainComponents/FontPage/BrowseOpportunities";
import BrowseStartups from "@/MainComponents/FontPage/BrowseStartups";
import StartupDetails from "@/MainComponents/FontPage/StartupDetails";


export default function Home() {
  return <div>
    <HeroBanner/>
    <BrowseStartups/>
    <StartupDetails/>
    <BrowseOpportunities/>
  </div>
}
