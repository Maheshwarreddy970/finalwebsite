import { getFeaturedCars } from "@/actions/home";
import Herosection from "@/components/landingpage/Herosection";
import EmiCalculator from "./(main)/cars/[id]/_components/emi-calculator";
import Featured from "@/components/landingpage/Featured";
import Customerstories from "@/components/landingpage/customers";


export default async function Home() {
  const featuredCars = await getFeaturedCars();
  return (
    <>
      <Herosection></Herosection>
      <Featured Cars={featuredCars}></Featured>
      <div className="px-3 md:px-10">
        <EmiCalculator  className={' max-h-[150vh] overflow-y-visible'} />
      </div>
      <Customerstories></Customerstories>
    </>
  );
}
