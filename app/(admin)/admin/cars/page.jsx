import { CarsList } from "./_components/car-list";

export const metadata = {
  title: "Cars | Vehiql Admin",
  description: "Manage cars in your marketplace",
};

export default function CarsPage() {
  return (
    <div className=" px-2 pt-6 pb-20 md:p-6">
      <h1 className="text-4xl font-bold my-6 ">Cars Management</h1>
      <CarsList />
    </div>
  );
}
