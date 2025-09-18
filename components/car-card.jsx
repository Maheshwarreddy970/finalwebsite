"use client";

import { useState, useEffect } from "react";
import { Heart, Car as CarIcon, Loader2, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import { toggleSavedCar } from "@/actions/car-listing";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import useFetch from "@/hooks/use-fetch";
import MinimalCard, { MinimalCardImage } from "./ui/minimal-car";
import NeumorphButton from "./ui/neumorph-butto";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { LineShadowText } from "./ui/line-shadow-text";
import { useClientStore } from "@/store/useClientStore";
import { cn } from "@/lib/utils";
import Button04 from "./Mainbutton";

export const CarCard = ({ car, showwishlist = true, className }) => {
  console.log(car)
  const { isSignedIn } = useAuth();
  const router = useRouter();
  const [isSaved, setIsSaved] = useState(car.wishlisted);

  // Use the useFetch hook
  const {
    loading: isToggling,
    fn: toggleSavedCarFn,
    data: toggleResult,
    error: toggleError,
  } = useFetch(toggleSavedCar);

  // Handle toggle result with useEffect
  useEffect(() => {
    if (toggleResult?.success && toggleResult.saved !== isSaved) {
      setIsSaved(toggleResult.saved);
      toast.success(toggleResult.message);
    }
  }, [toggleResult, isSaved]);

  // Handle errors with useEffect
  useEffect(() => {
    if (toggleError) {
      toast.error("Failed to update favorites");
    }
  }, [toggleError]);

  // Handle save/unsave car
  const handleToggleSave = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!isSignedIn) {
      toast.error("Please sign in to save cars");
      router.push("/sign-in");
      return;
    }

    if (isToggling) return;

    // Call the toggleSavedCar function using our useFetch hook
    await toggleSavedCarFn(car.id);
  };
  const clientInfo = useClientStore((state) => state.clientInfo);
  return (
    <MinimalCard className={cn("  border border-gray-300   flex-col bg-white gap-2 hover:shadow-xl hover:ring-1 ring-black/20 transition-all ease-in-out duration-300 group", className)}>
      <div className="relative ">
        {car.images && car.images.length > 0 ? (
          <MinimalCardImage
            src={car.images[0]}
            alt={`${car.make} ${car.model}`}
            fill
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <CarIcon className="h-12 w-12 text-gray-400" />
          </div>
        )}

        {showwishlist && <Button
          variant="ghost"
          size="icon"
          className={`absolute top-2 right-2 bg-white/90 rounded-full p-1.5 ${isSaved
            ? "text-red-500 hover:text-red-600"
            : "text-gray-600 hover:text-gray-900"
            }`}
          onClick={handleToggleSave}
          disabled={isToggling}
        >
          {isToggling ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Heart className={isSaved ? "fill-current" : ""} size={20} />
          )}
        </Button>}
      </div>

      <CardContent className="p-4">
        <div className="flex flex-col mb-2">
          <h3 className=" font-semibold line-clamp-1">
            {car.make} {car.model}
          </h3>
          <LineShadowText className="text-3xl font-bold text-blue-600">
            {`$${car.price.toLocaleString()}`}
          </LineShadowText>
        </div>

        <div className="text-gray-600 mb-4 flex flex-wrap justify-center gap-1.5 items-center">
          <Tooltip>
            <TooltipTrigger asChild>
              <span className="border bg-white py-0.5 px-3 text-sm rounded-2xl shadow">{car.year}</span>
            </TooltipTrigger>
            <TooltipContent>
              <p>Year</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <span className="border bg-white py-0.5 px-3 text-sm rounded-2xl shadow">{car.make}</span>
            </TooltipTrigger>
            <TooltipContent>
              <p>Make</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <span className="border bg-white py-0.5 px-3 text-sm rounded-2xl shadow">{car.transmission}</span>
            </TooltipTrigger>
            <TooltipContent>
              <p>Transmission</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <span className="border bg-white py-0.5 px-3 text-sm rounded-2xl shadow">{car.fuelType}</span>
            </TooltipTrigger>
            <TooltipContent>
              <p>Fuel Type</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <span className="border bg-white py-0.5 px-3 text-sm rounded-2xl shadow">{car.bodyType}</span>
            </TooltipTrigger>
            <TooltipContent>
              <p>Body Type</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <span className="border bg-white py-0.5 px-3 text-sm rounded-2xl shadow">{car.mileage.toLocaleString()} miles</span>
            </TooltipTrigger>
            <TooltipContent>
              <p>Mileage</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <span className="border bg-white py-0.5 px-3 text-sm rounded-2xl shadow">{car.color}</span>
            </TooltipTrigger>
            <TooltipContent>
              <p>Color</p>
            </TooltipContent>
          </Tooltip>
        </div>

        <div className="flex justify-between">
          <NeumorphButton
            className="flex-1 group/viewcar relative overflow-hidden"
            onClick={() => {
              router.push(`/${clientInfo?.name}/cars/${car.id}`);
            }}
          >
            <span className="mr-8 transition-opacity duration-500 ease-in-out group-hover/viewcar:opacity-0 group-hover/viewcar:translate-x-[-10px]">
              View Car
            </span>
            <i
              className="absolute right-1 top-1 bottom-1 rounded-sm z-10 grid w-1/4 place-items-center transition-all duration-500 ease-out bg-primary-foreground/15 group-hover/viewcar:w-[calc(100%-0.5rem)] group-hover/viewcar:bg-primary-foreground/25 group-active/viewcar:scale-90 text-black-500"
            >
              <ChevronRight
                size={16}
                strokeWidth={2}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover/viewcar:scale-110 group-active/viewcar:rotate-[-10deg]"
              />
            </i>
          </NeumorphButton>
        </div>
        <div className=" flex mt-5 w-full ">
          <Button04></Button04>
        </div>
      </CardContent>
    </MinimalCard>
  );
};
