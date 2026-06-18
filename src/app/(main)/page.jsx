import HeroBanner from "@/MainComponents/FontPage/Banner";
import FeaturedOpportunitiesPage from "@/MainComponents/FontPage/FeaturedOpportunitiesPage";
import FeaturedStartups from "@/MainComponents/FontPage/FeaturedStartups";
import { SuccessStoriesComponent } from "@/MainComponents/FontPage/SuccessStories";
import { WhyJoinComponent } from "@/MainComponents/FontPage/WhyJoinComponent";


export default function Home() {
  return <div>
    <HeroBanner/>
    <FeaturedStartups/>
    <FeaturedOpportunitiesPage/>
    <WhyJoinComponent/>
    <SuccessStoriesComponent/>
  </div>
}
