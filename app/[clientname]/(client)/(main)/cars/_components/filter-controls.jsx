"use client";

import { X } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { DestructiveButton } from "@/components/ui/destructive-button";
import { motion, AnimatePresence } from "framer-motion";

export const CarFilterControls = ({
  filters,
  currentFilters,
  onFilterChange,
  onClearFilter,
}) => {
  const { make, bodyType, fuelType, transmission, priceRange } = currentFilters;

  const filterSections = [
    {
      id: "make",
      title: "Make",
      options: filters.makes.map((make) => ({ value: make, label: make })),
      currentValue: make,
      onChange: (value) => onFilterChange("make", value),
    },
    {
      id: "bodyType",
      title: "Body Type",
      options: filters.bodyTypes.map((type) => ({ value: type, label: type })),
      currentValue: bodyType,
      onChange: (value) => onFilterChange("bodyType", value),
    },
    {
      id: "fuelType",
      title: "Fuel Type",
      options: filters.fuelTypes.map((type) => ({ value: type, label: type })),
      currentValue: fuelType,
      onChange: (value) => onFilterChange("fuelType", value),
    },
    {
      id: "transmission",
      title: "Transmission",
      options: filters.transmissions.map((type) => ({
        value: type,
        label: type,
      })),
      currentValue: transmission,
      onChange: (value) => onFilterChange("transmission", value),
    },
  ];


  return (
    <div className="space-y-4">
      {/* Price Range */}
      <div >
        <div className="px-2 mb-2 mt-6">
          <Slider
            min={filters.priceRange.min}
            max={filters.priceRange.max}
            step={100}
            value={priceRange}
            onValueChange={(value) => onFilterChange("priceRange", value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <h3 className=" text-sm font-semibold ">Price Range</h3>
          <div className="font-medium text-sm">${priceRange[1]}</div>
        </div>
      </div>

      {/* Filter Categories */}
      {filterSections.map((section,index) => (

        <div key={index} className="space-y-3">
          <h4 className=" font-semibold text-lg   flex justify-between">
            <span>{section.title}</span>
            {section.currentValue && (
              <DestructiveButton
                className=" text-gray-600 flex items-center "
                onClick={() => onClearFilter(section.id)}
              >
                <X className="mr-1  h-3 w-3" />
                Clear
              </DestructiveButton>
            )}
          </h4>
          <div className="flex flex-wrap gap-2  pr-1 custom-scrollbar">
            {section.options.map((option,index) => (
              <motion.button
                key={index}
                onClick={() => {
                  section.onChange(
                    section.currentValue === option.value ? "" : option.value
                  );
                }}
                initial={false}
                animate={{
                  backgroundColor: section.currentValue === option.value ? "#FC5212" : "#fff",
                  borderColor: section.currentValue === option.value ? "#f54900" : "#d1d5db",
                  color: section.currentValue === option.value ? "#fff" : "#1f2937",
                  width: section.currentValue === option.value ? 100 : 80,
                  transition: {
                    backgroundColor: { duration: 0.15 },
                    color: { duration: 0.15 },
                    borderColor: { duration: 0.15 },
                    width: { type: "spring", stiffness: 400, damping: 20 },
                  },
                }}
                className="flex items-center justify-center px-2 py-2 rounded-full  font-medium border transition overflow-hidden grow cursor-pointer"
                style={{ minWidth: 50 }}
              >
                <div className="flex items-center w-full justify-center relative">
                  <span className="mx-auto text-xs">{option.label}</span>
                  <motion.span
                    animate={{
                      width: section.currentValue === option.value ? 18 : 0,
                      marginLeft: section.currentValue === option.value ? 8 : 0,
                    }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      overflow: "hidden",
                    }}
                  >
                    <AnimatePresence>
                      {section.currentValue === option.value && (
                        <motion.span
                          key="tick"
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1.2, opacity: 1 }}
                          exit={{ scale: 0, opacity: 0 }}
                          transition={{
                            type: "spring",
                            stiffness: 500,
                            damping: 20,
                          }}
                          style={{ pointerEvents: "none" }}
                        >
                          {/* Tickmark SVG */}
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 20 20"
                            fill="none"
                          >
                            <motion.path
                              d="M5 10.5L9 14.5L15 7.5"
                              stroke="#fff"
                              strokeWidth="2.2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              initial={{ pathLength: 0 }}
                              animate={{ pathLength: 1 }}
                              transition={{ duration: 0.25 }}
                            />
                          </svg>
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.span>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
