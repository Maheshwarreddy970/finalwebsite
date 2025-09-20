import Herosection from "@/components/landingpage/Herosection";
import EmiCalculator from "./(main)/cars/[id]/_components/emi-calculator";
import Featured from "@/components/landingpage/Featured";
import Customerstories from "@/components/landingpage/customers";
import BodyType from "@/components/landingpage/BodyType";
import Searchsection from "@/components/landingpage/Searchsection";
import Bento from "@/components/landingpage/Bento";
import TeamSection from "@/components/landingpage/TeamSection";
import MediaSection from "@/components/ui/MediaSection";
import { getFeaturedCars } from "@/actions/car-listing";


export default async function Home() {
  const featuredCars = await getFeaturedCars();
  return (
    <>
      <Herosection></Herosection>
      <Featured Cars={featuredCars}></Featured>
      <Bento />
      <div className="px-3 mt-12 md:mt-20 md:px-10">
        <EmiCalculator className={' max-h-[150vh] overflow-y-visible'} />
      </div>
      <Customerstories></Customerstories>
      <Searchsection></Searchsection>
      <BodyType></BodyType>
      <TeamSection></TeamSection> 
      <MediaSection></MediaSection>
    </>
  );
}
