import { getUserTestDrives } from "@/actions/test-drive";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { ReservationsList } from "./_components/reservations-list";
import { LineShadowText } from "@/components/ui/line-shadow-text";

export const metadata = {
  title: "My Reservations | Vehiql",
  description: "Manage your test drive reservations",
};

export default async function ReservationsPage() {
  // Check authentication on server
  const { userId } = await auth();
  if (!userId) {
    redirect("/sign-in?redirect=/reservations");
  }

  // Fetch reservations on the server
  const reservationsResult = await getUserTestDrives();

  return (
    <div className="container mx-auto px-3 md:px-10 py-12">
      <LineShadowText shadowColor="black" className="text-balance  tracking-tighter w-full flex flex-initial leading-none text-5xl font-bold text-blue-600 my-5">Your Reservations</LineShadowText>
      <ReservationsList initialData={reservationsResult} />
    </div>
  );
}
