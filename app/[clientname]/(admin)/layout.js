import { notFound } from "next/navigation";
import { Sidebar } from "./admin/_components/sidebar";
import { getAdmin } from "@/actions/admin";
// import Navbarauthwraper from "@/components/navbar/Navbarauthwraper";

export default async function AdminLayout({ children }) {
  const admin = await getAdmin();

  // If user not found in our db or not an admin, redirect to 404
  if (!admin.authorized) {
    return notFound();
  }

  return (
    <div className="h-full bg-neutral-50 min-h-screen">
      <div className="flex h-full w-60 flex-col top-0 fixed inset-y-0 z-50">
        <Sidebar />
      </div>
      <main className="md:pl-60  h-full">{children}</main>
    </div>
  );
}
