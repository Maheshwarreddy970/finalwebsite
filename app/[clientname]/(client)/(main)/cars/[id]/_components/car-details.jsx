"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useAuth } from "@clerk/nextjs";
import { Calculator, Calendar, CalendarDays, Palette } from "lucide-react";
import {
  Car,
  Fuel,
  Gauge,
  LocateFixed,
  Share2,
  Heart,
  MessageSquare,
} from "lucide-react";
import { toggleSavedCar } from "@/actions/car-listing";
import useFetch from "@/hooks/use-fetch";
import { formatCurrency } from "@/lib/helpers";
import { format } from "date-fns";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import EmiCalculator from "./emi-calculator";
import { Carousel, CarouselContent, CarouselItem, CarouselNavigation } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { Lens } from "@/components/ui/lens";
import { GlowingEffect } from "@/components/ui/background-gradient";
import { useAnimate } from "framer-motion";
import NeumorphButton from "@/components/ui/neumorph-butto";
import { LineShadowText } from "@/components/ui/line-shadow-text";
import { useClientStore } from "@/store/useClientStore";
import Workinghours from "@/components/landingpage/Workinghours";

export function CarDetails({ car, testDriveInfo }) {
  const router = useRouter();
  const { isSignedIn } = useAuth();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(car.wishlisted);

  const {
    loading: savingCar,
    fn: toggleSavedCarFn,
    data: toggleResult,
    error: toggleError,
  } = useFetch(toggleSavedCar);

  // Handle toggle result with useEffect
  useEffect(() => {
    if (toggleResult?.success) {
      setIsWishlisted(toggleResult.saved);
      toast.success(toggleResult.message);
    }
  }, [toggleResult]);

  // Handle errors with useEffect
  useEffect(() => {
    if (toggleError) {
      toast.error("Failed to update favorites");
    }
  }, [toggleError]);

  // Handle save car
  const handleSaveCar = async () => {
    if (!isSignedIn) {
      toast.error("Please sign in to save cars");
      router.push("/sign-in");
      return;
    }

    if (savingCar) return;

    // Use the toggleSavedCarFn from useFetch hook
    await toggleSavedCarFn(car.id);
  };

  // Handle share
  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: `${car.year} ${car.make} ${car.model}`,
          text: `Check out this ${car.year} ${car.make} ${car.model} on Vehiql!`,
          url: window.location.href,
        })
        .catch((error) => {
          console.log("Error sharing", error);
          copyToClipboard();
        });
    } else {
      copyToClipboard();
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("Link copied to clipboard");
  };
  const clientInfo = useClientStore((state) => state.clientInfo);
  // Handle book test drive
  const handleBookTestDrive = () => {
    if (!isSignedIn) {
      toast.error("Please sign in to book a test drive");
      router.push("/sign-in");
      return;
    }
    router.push(`/${clientInfo?.name}/test-drive/${car.id}`);
  };

  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Image Gallery */}
        <div className="w-full lg:w-[60%]">
          <div className={cn("grid grid-cols-1 bg-black/5 relative rounded-2xl", "shadow-[inset_0_0_1px_1px_#ffffff4d] sm:shadow-[inset_0_0_2px_1px_#ffffff4d]", "ring-1 ring-black/5", "mx-auto w-full", "transition-all duration-300 ease-in-out")}>
            <GlowingEffect
              spread={40}
              glow={true}
              disabled={false}
              proximity={64}
              inactiveZone={0.01}
              borderWidth={3}
            />
            <div className="grid grid-cols-1 rounded-2xl  p-0.5 sm:p-1.5 md:p-2 shadow-md shadow-black/5">
              <div className="rounded-2xl  bg-white md:p-1.5 shadow-xl ring-1 ring-black/5">
                <div className="aspect-video rounded-xl border-2  shadow overflow-hidden relative ">
                  {car.images && car.images.length > 0 ? (
                    <Lens
                      zoomFactor={2}
                      lensSize={150}
                      isStatic={false}
                      ariaLabel="Zoom Area"
                    >
                      <img
                        src={car.images[currentImageIndex]}
                        alt={`${car.year} ${car.make} ${car.model}`}
                        fill
                        className="object-cover aspect-video "
                        priority
                      />
                    </Lens>
                  ) : (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                      <Car className="h-24 w-24 text-gray-400" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          {/* Thumbnails */}
          {car.images && car.images.length > 1 && (
            <Carousel>
              <CarouselContent  >
                {car.images.map((image, index) => (
                  <CarouselItem key={index} className='w-auto pl-3 overflow-visible my-5 '>
                    <div

                      className={cn('relative  transition-all rounded-lg duration-200 ease-in-out cursor-pointer  shadow-md h-20 w-24  border', index === currentImageIndex
                        ? " shadow-xl ring-2  scale-110 ring-black" : ""
                      )}
                      onClick={() => setCurrentImageIndex(index)}
                    >
                      <Image
                        src={image}
                        alt={`${car.year} ${car.make} ${car.model} - view ${index + 1
                          }`}
                        fill
                        className="object-cover rounded-lg "
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselNavigation className={'left-0  w-full'}
                classNameButton='bg-black  *:stroke-zinc-50  border  rounded-full shadow-xl hover:shadow-2xl hover:scale-[1.3]  transition-all duration-300 ease-in-out'
              />
            </Carousel>
          )}
          {/* Secondary Actions */}
          <div className="flex gap-5  md:gap-10 mb-5">
            <NeumorphButton
              intent="secondary"
              className={`flex items-center font-semibold gap-2 w-1/2 ${isWishlisted ? "text-red-500" : ""
                }`}
              onClick={handleSaveCar}
              disabled={savingCar}
            >
              <Heart
                className={`h-5 w-5 mr-2 ${isWishlisted ? "fill-red-500" : ""}`}
              />
              {isWishlisted ? "Saved" : "Save"}
            </NeumorphButton>
            <NeumorphButton
              intent="secondary"
              className="flex items-center gap-2 w-1/2"
              onClick={handleShare}
            >
              <Share2 className="h-5 w-5  mr-2" />
              Share
            </NeumorphButton>

          </div>
          {/* Book Test Drive Button */}
          {car.status !== "SOLD" && car.status !== "UNAVAILABLE" && (
            <NeumorphButton
              intent="primary"
              className="flex-1 w-full group/viewcar  relative overflow-hidden"
              onClick={handleBookTestDrive}
              disabled={testDriveInfo.userTestDrive}
            >
              <Calendar className="mr-2 h-5 w-5" />

              {testDriveInfo.userTestDrive
                ? `Booked for ${format(
                  new Date(testDriveInfo.userTestDrive.bookingDate),
                  "EEEE, MMMM d, yyyy"
                )}`
                : "Book Test Drive"}
            </NeumorphButton>
          )}
        </div>
        {/* Car Details */}
        <div className="w-full lg:w-[40%] py-8">


          <div shadowColor="black" className="text-3xl  font-bold ">
            {car.year} {car.make} {car.model}
          </div>
          <LineShadowText shadowColor="black" className="text-5xl font-bold text-blue-600 my-5">{formatCurrency(car.price)}</LineShadowText>
          <div className="  bg-white my-8 md:my-4">
            <div className="grid grid-cols-2 md:grid-cols-3">
              <LinkBox text={`${car.mileage.toLocaleString()} miles`} Icon={Gauge} />
              <LinkBox text={car.fuelType} Icon={Fuel} />
              <LinkBox
                text={car.transmission}
                Icon={() => (
                  <svg
                    id="Layer_1"
                    className="text-gray-500 h-5 w-5"
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 122.88 122.88"
                  >
                    <title>manual-transmission</title>
                    <path d="M61.44,0A61.46,61.46,0,1,1,18,18,61.23,61.23,0,0,1,61.44,0Zm4.07,82.09a6.67,6.67,0,1,1-8.14,0V68.62H42.31V82.09a6.67,6.67,0,1,1-8.14,0V46.17a6.67,6.67,0,1,1,8.14,0V60.48H57.37V46.17a6.67,6.67,0,1,1,8.14,0V60.48H80.57V46.17a6.67,6.67,0,1,1,8.14,0V64a4.41,4.41,0,0,1,0,.52,4.07,4.07,0,0,1-4.07,4.07H65.51V82.09Zm33-57.76a52.46,52.46,0,1,0,15.38,37.11A52.29,52.29,0,0,0,98.55,24.33Z" />
                  </svg>
                )}
              />

              <LinkBox text={car.bodyType} Icon={Car} />
              <LinkBox text={car.color} Icon={Palette} />
              <LinkBox text={car.year} Icon={CalendarDays} />
            </div>
          </div>

          <Dialog>
            <div className={cn("grid grid-cols-1 bg-black/5 relative rounded-2xl", "shadow-[inset_0_0_1px_1px_#ffffff4d] sm:shadow-[inset_0_0_2px_1px_#ffffff4d]", "ring-1 ring-black/5", "mx-auto w-full", "transition-all duration-300 ease-in-out")}>
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                borderWidth={3}
              />
              <div className="grid grid-cols-1 rounded-2xl  p-1 sm:p-1.5  shadow-md shadow-black/5">
                <div className="rounded-2xl  bg-white px-5 py-4 flex flex-col gap-3 shadow-xl ring-1 ring-black/5">
                  <div className="flex items-center gap-1  font-medium mb-2">
                    <Calculator className="h-4 w-4 text-blue-600" />
                    <h3>EMI Calculator</h3>
                  </div>
                  <div className="text-lg text-gray-600">
                    Estimated Monthly Payment:{" "}
                    <span className="font-bold text-gray-900">
                      {formatCurrency(car.price / 60)}
                    </span>{" "}
                    for 60 months
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    *Based on $0 down payment and 4.5% interest rate
                  </div>
                  <DialogTrigger className="w-full text-start mt-1">
                    <NeumorphButton
                      className="flex-1 w-full group/viewcar relative overflow-hidden"
                    >
                      <span className="mr-8 transition-opacity duration-500 ease-in-out group-hover/viewcar:opacity-0 group-hover/viewcar:translate-x-[-10px]">
                        Calculate EMI
                      </span>
                      <i
                        className="absolute bg-neutral-700  right-1 top-1 bottom-1 rounded-sm z-10 grid w-1/4 place-items-center transition-all duration-500 ease-out bg-primary-foreground/15 group-hover/viewcar:w-[calc(100%-0.5rem)] group-hover/viewcar:bg-primary-foreground/25 group-active/viewcar:scale-90 text-black-500"
                      >
                        <Calculator
                          size={16}
                          strokeWidth={2}
                          aria-hidden="true"
                          className="transition-transform duration-300 group-hover/viewcar:scale-110 group-active/viewcar:rotate-[-10deg]"
                        />
                      </i>
                    </NeumorphButton>
                  </DialogTrigger>
                </div>
              </div>
            </div>
            <DialogContent className=" p-4 w-[90%] overflow-hidden ">
              <DialogHeader>
                <DialogTitle>{`${car.make} ${car.model} Car Loan Calculator `}</DialogTitle>
                <EmiCalculator price={car.price} />
              </DialogHeader>
            </DialogContent>
          </Dialog>
          <div className={cn("grid grid-cols-1 my-5 bg-black/5 relative rounded-2xl", "shadow-[inset_0_0_1px_1px_#ffffff4d] sm:shadow-[inset_0_0_2px_1px_#ffffff4d]", "ring-1 ring-black/5", "mx-auto w-full", "transition-all duration-300 ease-in-out")}>
            <GlowingEffect
              spread={40}
              glow={true}
              disabled={false}
              proximity={64}
              inactiveZone={0.01}
              borderWidth={3}
            />
            <div className="grid grid-cols-1 rounded-2xl  p-1 sm:p-1.5  shadow-md shadow-black/5">
              <div className="rounded-2xl  bg-white px-5 py-4 flex flex-col gap-3 shadow-xl ring-1 ring-black/5">
                <div className="flex items-center gap-1  font-medium mb-2">
                  <MessageSquare className="h-4 w-4 text-blue-600" />
                  <h3>Have Questions?</h3>
                </div>
                <p className="text-lg text-gray-600 mb-3">
                  Our representatives are available to answer all your queries
                  about this vehicle.
                </p>

                <a href="mailto:help@vehiql.in">
                  <NeumorphButton
                    className="flex-1 w-full group/viewcar relative overflow-hidden"
                  >
                    <span className="mr-8 transition-opacity duration-500 ease-in-out group-hover/viewcar:opacity-0 group-hover/viewcar:translate-x-[-10px]">
                      Request Info
                    </span>
                    <i
                      className="absolute right-1 top-1 bottom-1 rounded-sm z-10 grid w-1/4 place-items-center transition-all duration-500 ease-out bg-neutral-700 group-hover/viewcar:w-[calc(100%-0.5rem)] group-hover/viewcar:bg-primary-foreground/25 group-active/viewcar:scale-90 text-black-500"
                    >
                      <MessageSquare
                        size={16}
                        strokeWidth={2}
                        aria-hidden="true"
                        className="transition-transform duration-300 group-hover/viewcar:scale-110 group-active/viewcar:rotate-[-10deg]"
                      />
                    </i>
                  </NeumorphButton>
                </a>
              </div>
            </div>
          </div>

          {(car.status === "SOLD" || car.status === "UNAVAILABLE") && (
            <Alert variant="destructive">
              <AlertTitle className="capitalize">
                This car is {car.status.toLowerCase()}
              </AlertTitle>
              <AlertDescription>Please check again later.</AlertDescription>
            </Alert>
          )}


        </div>
      </div>

      {/* Details & Features Section */}
      <div className=" p-6 bg-white flex flex-col gap-4   w-full justify-center ">
        <LineShadowText className="italic text-3xl font-semibold" shadowColor='black'>Description</LineShadowText>
        <p className="whitespace-pre-line  mx-auto   text-xl font-medium">
          {car.description}
        </p>
      </div>

      {/* Specifications Section */}
      <div className={cn("grid grid-cols-1 my-7 bg-black/5 relative rounded-2xl", "shadow-[inset_0_0_1px_1px_#ffffff4d] sm:shadow-[inset_0_0_2px_1px_#ffffff4d]", "ring-1 ring-black/5", "mx-auto w-full", "transition-all duration-300 ease-in-out")}>
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={3}
        />
        <div className="grid grid-cols-1  rounded-2xl  p-1 sm:p-1.5  shadow-md shadow-black/5">
          <div className="rounded-2xl  bg-white px-5 py-4 flex flex-col gap-3 shadow-xl ring-1 ring-black/5">
            <LineShadowText className="italic text-3xl font-semibold mb-4" shadowColor='black'>Specifications</LineShadowText>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-800">Make</span>
                  <span className="font-medium">{car.make}</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-800">Model</span>
                  <span className="font-medium">{car.model}</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-800">Year</span>
                  <span className="font-medium">{car.year}</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-800">Body Type</span>
                  <span className="font-medium">{car.bodyType}</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-800">Fuel Type</span>
                  <span className="font-medium">{car.fuelType}</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-800">Transmission</span>
                  <span className="font-medium">{car.transmission}</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-800">Mileage</span>
                  <span className="font-medium">
                    {car.mileage.toLocaleString()} miles
                  </span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-800">Color</span>
                  <span className="font-medium">{car.color}</span>
                </div>
                {car.seats && (
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-gray-800">Seats</span>
                    <span className="font-medium">{car.seats}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Dealership Location Section */}
      <div className={cn("grid grid-cols-1 mt-7 bg-black/5 relative rounded-2xl", "shadow-[inset_0_0_1px_1px_#ffffff4d] sm:shadow-[inset_0_0_2px_1px_#ffffff4d]", "ring-1 ring-black/5", "mx-auto w-full", "transition-all duration-300 ease-in-out")}>
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={3}
        />
        <div className="grid grid-cols-1 rounded-2xl p-1 sm:p-1.5 shadow-md shadow-black/5">
          <div className="rounded-2xl bg-white px-5 py-4 flex flex-col gap-3 shadow-xl ring-1 ring-black/5">
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <Workinghours></Workinghours>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}


const NO_CLIP = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
const BOTTOM_RIGHT_CLIP = "polygon(0 0, 100% 0, 0 0, 0% 100%)";
const TOP_RIGHT_CLIP = "polygon(0 0, 0 100%, 100% 100%, 0% 100%)";
const BOTTOM_LEFT_CLIP = "polygon(100% 100%, 100% 0, 100% 100%, 0 100%)";
const TOP_LEFT_CLIP = "polygon(0 0, 100% 0, 100% 100%, 100% 0)";

const ENTRANCE_KEYFRAMES = {
  left: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  bottom: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  top: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  right: [TOP_LEFT_CLIP, NO_CLIP],
};

const EXIT_KEYFRAMES = {
  left: [NO_CLIP, TOP_RIGHT_CLIP],
  bottom: [NO_CLIP, TOP_RIGHT_CLIP],
  top: [NO_CLIP, TOP_RIGHT_CLIP],
  right: [NO_CLIP, BOTTOM_LEFT_CLIP],
};

const LinkBox = ({ Icon, text }) => {
  const [scope, animate] = useAnimate();

  const getNearestSide = (e) => {
    const box = e.target.getBoundingClientRect();

    const proximityToLeft = {
      proximity: Math.abs(box.left - e.clientX),
      side: "left",
    };
    const proximityToRight = {
      proximity: Math.abs(box.right - e.clientX),
      side: "right",
    };
    const proximityToTop = {
      proximity: Math.abs(box.top - e.clientY),
      side: "top",
    };
    const proximityToBottom = {
      proximity: Math.abs(box.bottom - e.clientY),
      side: "bottom",
    };

    const sortedProximity = [
      proximityToLeft,
      proximityToRight,
      proximityToTop,
      proximityToBottom,
    ].sort((a, b) => a.proximity - b.proximity);

    return sortedProximity[0].side;
  };

  const handleMouseEnter = (e) => {
    const side = getNearestSide(e);

    animate(scope.current, {
      clipPath: ENTRANCE_KEYFRAMES[side],
    });
  };

  const handleMouseLeave = (e) => {
    const side = getNearestSide(e);

    animate(scope.current, {
      clipPath: EXIT_KEYFRAMES[side],
    });
  };

  return (
    <div
      onMouseEnter={(e) => {
        handleMouseEnter(e);
      }}
      onMouseLeave={(e) => {
        handleMouseLeave(e);
      }}
      className="relative flex items-center gap-2 py-2  w-full place-content-center "
    >
      <Icon className=" size-5" />
      <p className=" text-xl">{text}</p>
      <div
        ref={scope}
        style={{
          clipPath: BOTTOM_RIGHT_CLIP,
        }}
        className="absolute inset-0 flex items-center py-2 gap-2  place-content-center bg-neutral-900 text-white"
      >
        <Icon className=" size-5" />
        <p className=" text-xl">{text}</p>

      </div>
    </div>
  );
};