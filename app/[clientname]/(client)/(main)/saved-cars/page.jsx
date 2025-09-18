import { getSavedCars } from "@/actions/car-listing";
import { SavedCarsList } from "./_components/saved-cars-list";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { LineShadowText } from "@/components/ui/line-shadow-text";

export const metadata = {
  title: "Saved Cars | Vehiql",
  description: "View your saved cars and favorites",
};

export default async function SavedCarsPage() {
  // Check authentication on server
  const { userId } = await auth();
  if (!userId) {
    redirect("/sign-in?redirect=/saved-cars");
  }

  // Fetch saved cars on the server
  const savedCarsResult = await getSavedCars();

  return (
    <div className="container mx-auto px-3 md:px-10 py-12">
      <LineShadowText shadowColor="black" className="text-balance  tracking-tighter w-full flex flex-initial leading-none text-5xl font-bold text-blue-600 my-5">Your Saved Cars</LineShadowText>
      <SavedCarsList initialData={savedCarsResult} />
    </div>
  );
}
