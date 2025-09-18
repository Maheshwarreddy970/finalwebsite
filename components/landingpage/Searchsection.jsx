"use client";

import React, { useState, useCallback, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { CarFilterControls } from '@/app/[clientname]/(client)/(main)/cars/_components/filter-controls';
import { SparklesText } from '../ui/SparklesText';
import { cn } from '@/lib/utils';
import { Philosopher } from 'next/font/google'
import Button05 from '../ui/rainbow-button';

const philosopher = Philosopher({ subsets: ['latin'], weight: ["400", '700'] })

// Arrays for filter options
const brands = [
  "Ford", "Chevrolet", "Dodge", "Chrysler", "Jeep", "Ram", "GMC", "Cadillac",
  "Buick", "Lincoln", "Tesla", "Rivian", "Fisker", "Lucid", "Hummer",
  "Pontiac", "Saturn", "Oldsmobile", "Plymouth", "Mercury"
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
      <div className={cn(' flex gap-4 items-center justify-center text-6xl font-semibold text-black  ', philosopher.className)}>
        Ways To Start <SparklesText colors={{ first: "#ffc400", second: "#ff9100" }} className="text-6xl  font-semibold" sparklesCount={5}>Searching</SparklesText>
      </div>

      <div className="mt-16  ">
        <CarFilterControls
          filters={filters}
          currentFilters={currentFilters}
          onFilterChange={handleFilterChange}
          onClearFilter={handleClearFilter}
        />
        <div className="mt-6">
          <Button
            onClick={handleApplyFilters}
          >
            Apply Filters
          </Button>
          <Button05></Button05>
        </div>
      </div>
    </section>
  );
}