import { CarFilters } from "./_components/car-filters";
import { getCarFilters } from "@/actions/car-listing";
import { CarListings } from "./_components/cars-listing";

export const metadata = {
  title: "Cars | Vehiql",
  description: "Browse and search for your dream car",
};

export default async function CarsPage() {
  const filtersData = await getCarFilters();

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sticky Sidebar */}
        <div className="w-full lg:w-80 flex-shrink-0 ">
          <div className="sticky top-20 bg-white px-2 z-10 md:h-screen overflow-y-scroll pt-3 md:pb-20 [&::-webkit-scrollbar]:w-1
  [&::-webkit-scrollbar-track]:bg-white
  [&::-webkit-scrollbar-thumb]:bg-black/20
  [&::-webkit-scrollbar-thumb]:h-10
  [&::-webkit-scrollbar-track]:rounded-full
    [&::-webkit-scrollbar-thumb]:rounded-full

 ">
            <CarFilters filters={filtersData.data} />
          </div>
        </div>

        {/* Car Listings */}
        <div className="flex-1">
          <CarListings />
        </div>
      </div>
    </div>
  );
}
