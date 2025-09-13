import { getDashboardData } from "@/actions/admin";
import { Dashboard } from "./_components/dashboard";

export const metadata = {
  title: "Dashboard | Vehiql Admin",
  description: "Admin dashboard for Vehiql car marketplace",
};

export default async function AdminDashboardPage() {
  // Fetch dashboard data
  const dashboardData = await getDashboardData();

  return (
    <div className=" pb-20 pt-6 px-6 md:py-6">
      <h1 className="text-4xl font-bold my-6 ">Dashboard</h1>
      <Dashboard initialData={dashboardData} />
    </div>
  );
}
