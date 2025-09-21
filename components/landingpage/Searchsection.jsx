"use client";

import React, { useState, useCallback, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { CarFilterControls } from '@/app/[clientname]/(client)/(main)/cars/_components/filter-controls';
import { cn } from '@/lib/utils';
import { Philosopher, Great_Vibes } from 'next/font/google'
import NeumorphButton from '../ui/rainbow-button';
import { SlidersHorizontal } from 'lucide-react';
import Search from '../navbar/Search';

const philosopher = Philosopher({ subsets: ['latin'], weight: ["400", '700'] })
const greatVibes = Great_Vibes({ subsets: ['latin'], weight: ["400"] })

// Arrays for filter options
const brands = [
  "Ford", "Chevrolet", "Dodge", "Chrysler", "Jeep", "Ram", "GMC", "Cadillac",
  "Buick", "Lincoln", "Tesla", "Rivian", "Fisker", "Lucid", "Hummer",
  "Pontiac", "Saturn", "Oldsmobile", "Plymouth", "Mercury",
  "Acura", "Alfa Romeo", "Aston Martin", "Audi", "BMW", "Bentley", "Bugatti",
  "BYD", "DeLorean", "Faraday Future", "Ferrari", "Fiat", "Genesis", "Geely",
  "Honda", "Hyundai", "Ineos", "Infiniti", "Jaguar", "Karma", "Kia",
  "Lamborghini", "Land Rover", "Lexus", "Lotus", "Mazda", "Mercedes-Benz",
  "Nissan", "Polestar", "Subaru", "Toyota", "VinFast", "Volkswagen", "Volvo"
];


const bodyTypes = [
  "SUV", "Sedan", "Hatchback", "Convertible", "Coupe", "Wagon", "Pickup"
];

const fuelTypes = ["Petrol", "Diesel", "Electric", "Hybrid", "Plug-in Hybrid"];

const transmissions = ["Automatic", "Manual", "Semi-Automatic"];

export default function Searchsection() {
  const router = useRouter();

  // State for current filter selections
  const [currentFilters, setCurrentFilters] = useState({
    make: "",
    bodyType: "",
    fuelType: "",
    transmission: "",
    priceRange: [0, 200000]
  });

  // Memoized filter options to prevent re-creation
  const filters = useMemo(() => ({
    makes: brands,
    bodyTypes: bodyTypes,
    fuelTypes: fuelTypes,
    transmissions: transmissions,
    priceRange: { min: 0, max: 200000 }
  }), []);

  // Handle filter changes with useCallback to prevent re-creation
  const handleFilterChange = useCallback((key, value) => {
    setCurrentFilters((prev) => ({
      ...prev,
      [key]: value
    }));
  }, []);

  // Clear individual filter
  const handleClearFilter = useCallback((key) => {
    setCurrentFilters((prev) => ({
      ...prev,
      [key]: key === "priceRange" ? [0, 200000] : ""
    }));
  }, []);

  // Handle apply filters and redirect
  const handleApplyFilters = useCallback(() => {
    const { make, bodyType, fuelType, transmission, priceRange } = currentFilters;

    // Construct query parameters
    const queryParams = new URLSearchParams();
    if (make) queryParams.set('make', make);
    if (bodyType) queryParams.set('bodyType', bodyType);
    if (fuelType) queryParams.set('fuelType', fuelType);
    if (transmission) queryParams.set('transmission', transmission);
    if (priceRange[1] !== filters.priceRange.max) {
      queryParams.set('minPrice', priceRange[1]);
    }

    // Immediate redirect
    router.push(`/g/cars?${queryParams.toString()}`, { scroll: false });
  }, [currentFilters, router, filters.priceRange.max]);

  return (
    <section className='px-3 md:px-10 mt-10'>
      <div>
        <div
          className={cn('  text-center  text-4xl md:text-6xl font-semibold text-black  ', philosopher.className)}
        >
          Find Your Perfect Vehicle <br></br>with Easy    <span className={greatVibes.className}>Search</span>   Filters
        </div>
        <p className=' max-w-2xl mt-2 mx-auto text-center '>Customize your search by make, model, price, year, and more to quickly discover the car that fits your needs and budget. Use our powerful filters for a seamless browsing experience.</p>
      </div>

      <div className="mt-10 p-4 lg:p-7 border-gray-300 hover:ring-1 ring-black/10 transition-all ease-in-out duration-300 shadow-md hover:shadow-xl border rounded-2xl  ">
        <div className=' mb-16 w-full '>
          <Search></Search>
        </div>

        <CarFilterControls
          filters={filters}
          currentFilters={currentFilters}
          onFilterChange={handleFilterChange}
          onClearFilter={handleClearFilter}
        />
        <div className="mt-10">
          <div className=' flex '>
            <NeumorphButton
            intent="primary"
              onClick={handleApplyFilters}
              className="flex-1 w-full group/viewcar relative overflow-hidden"
            >
              <span className="mr-8 transition-opacity duration-500 ease-in-out group-hover/viewcar:opacity-0 group-hover/viewcar:translate-x-[-10px]">
                Apply Filters
              </span>
              <i
                className="absolute bg-blue-400  right-1 top-1 bottom-1 rounded-sm z-10 grid w-1/4 place-items-center transition-all duration-500 ease-out bg-primary-foreground/15 group-hover/viewcar:w-[calc(100%-0.5rem)] group-hover/viewcar:bg-primary-foreground/25 group-active/viewcar:scale-90 text-black-500"
              >
                <SlidersHorizontal
                  size={16}
                  strokeWidth={2}
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover/viewcar:scale-110 group-active/viewcar:rotate-[-10deg]"
                />
              </i>
            </NeumorphButton>
          </div>
        </div>
      </div>
    </section >
  );
}