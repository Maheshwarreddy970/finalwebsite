import { getCarById } from "@/actions/car-listing";
import { notFound } from "next/navigation";
import { TestDriveForm } from "./_components/test-drive-form";
import { LineShadowText } from "@/components/ui/line-shadow-text";

export async function generateMetadata() {
  return {
    title: `Book Test Drive | Vehiql`,
    description: `Schedule a test drive in few seconds`,
  };
}

export default async function TestDrivePage({ params }) {
  // Fetch car details
  const { id } = params;
  const result = await getCarById(id);
  // If car not found, show 404
  if (!result.success) {
    notFound();
  }

  return (
    <div className="container mx-auto px-3 md:px-10 py-12">
      <LineShadowText shadowColor="black" className="text-balance  tracking-tighter w-full flex flex-initial leading-none text-5xl font-bold text-blue-600 my-5">Book a Test Drive</LineShadowText>
      <TestDriveForm
        car={result.data}
        testDriveInfo={result.data.testDriveInfo}
      />
    </div>
  );
}
