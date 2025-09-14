import { getFeaturedCars } from "@/actions/home";
import Herosection from "@/components/landingpage/Herosection";
import EmiCalculator from "./(main)/cars/[id]/_components/emi-calculator";
import Featured from "@/components/landingpage/Featured";
import Customerstories from "@/components/landingpage/customers";
import BodyType from "@/components/landingpage/BodyType";
import Searchsection from "@/components/landingpage/Searchsection";
import Mainfutures from "@/components/landingpage/Mainfutures";
import Bento from "@/components/landingpage/Bento";


export default async function Home() {
  const featuredCars = await getFeaturedCars();
  return (
    <>
      <Herosection></Herosection>
      <Featured Cars={featuredCars}></Featured>
      <Bento></Bento>
      <Mainfutures></Mainfutures>
      <div className="px-3 md:px-10">
        <EmiCalculator  className={' max-h-[150vh] overflow-y-visible'} />
      </div>
      <Customerstories></Customerstories>
      <Searchsection></Searchsection>
      <BodyType></BodyType>
    </>
  );
}
