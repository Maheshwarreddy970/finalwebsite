import { getFeaturedCars } from "@/actions/home";
import Herosection from "@/components/landingpage/Herosection";
import EmiCalculator from "./(main)/cars/[id]/_components/emi-calculator";


export default async function Home() {
  const featuredCars = await getFeaturedCars();
  return (
    <>
      <Herosection></Herosection>
      <div className="px-3 md:px-10 mt-96 ">
        <EmiCalculator  className={' max-h-[150vh] overflow-y-visible'} />
      </div>
    </>
  );
}
