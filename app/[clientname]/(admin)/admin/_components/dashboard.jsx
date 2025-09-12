"use client";

import { useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Car,
  Calendar,
  TrendingUp,
  Info,
  CheckCircle,
  Clock,
  XCircle,
  DollarSign,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatedRadialChart } from "@/components/ui/animated-radial-chart";

export function Dashboard({ initialData }) {
  const [activeTab, setActiveTab] = useState("overview");

  // Show error if data fetch failed
  if (!initialData || !initialData.success) {
    return (
      <Alert variant="destructive">
        <Info className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          {initialData?.error || "Failed to load dashboard data"}
        </AlertDescription>
      </Alert>
    );
  }

  const { cars, testDrives } = initialData.data;

  return (
    <div className="space-y-6 ">
      <Tabs
        defaultValue="overview"
        value={activeTab}
        onValueChange={setActiveTab}
      >
        <TabsList className="bg-white">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="test-drives">Test Drives</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6 mt-10">
          {/* KPI Summary Cards */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {/* CARD 1: Total Cars */}
            <div className={cn("grid grid-cols-1 rounded-lg sm:rounded-xl md:rounded-[2rem]", "shadow-[inset_0_0_1px_1px_#ffffff4d] sm:shadow-[inset_0_0_2px_1px_#ffffff4d]", "ring-1 ring-black/5", "mx-auto w-full", "transition-all duration-300 ease-in-out")}>
              <div className="grid grid-cols-1 rounded-lg sm:rounded-xl md:rounded-[2rem] p-1 sm:p-1.5 md:p-2 shadow-md shadow-black/5">
                <div className="rounded-md sm:rounded-lg md:rounded-3xl bg-white p-2 sm:p-3 md:p-4 shadow-xl ring-1 ring-black/5">
                  <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between">
                      <h1 className="font-semibold text-lg">Total Cars</h1>
                      <Car className="h-9 w-9 bg-blue-500 text-white shadow-inner shadow-white border p-1.5 rounded-full" />
                    </div>
                    <h1 className="text-5xl text-center font-bold text-blue-500">{cars.total}</h1>
                    <div className="flex justify-between">
                      <p className="text-xl font-semibold">{cars.available} <span className="text-gray-500 text-sm font-normal">available</span></p>
                      <p className="text-xl font-semibold">{cars.sold} <span className="text-gray-500 text-sm font-normal">sold</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CARD 2: Test Drives */}
            <div className={cn("grid grid-cols-1 rounded-lg sm:rounded-xl md:rounded-[2rem]", "shadow-[inset_0_0_1px_1px_#ffffff4d] sm:shadow-[inset_0_0_2px_1px_#ffffff4d]", "ring-1 ring-black/5", "mx-auto w-full", "transition-all duration-300 ease-in-out")}>
              <div className="grid grid-cols-1 rounded-lg sm:rounded-xl md:rounded-[2rem] p-1 sm:p-1.5 md:p-2 shadow-md shadow-black/5">
                <div className="rounded-md sm:rounded-lg md:rounded-3xl bg-white p-2 sm:p-3 md:p-4 shadow-xl ring-1 ring-black/5">
                  <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between">
                      <h1 className="font-semibold text-lg">Test Drives</h1>
                      <Calendar className="h-9 w-9 bg-green-500 text-white shadow-inner shadow-white border p-1.5 rounded-full" />
                    </div>
                    <h1 className="text-5xl text-center font-bold text-green-500">{testDrives.total}</h1>
                    <div className="flex justify-between">
                      <p className="text-xl font-semibold">{testDrives.pending} <span className="text-gray-500 text-sm font-normal">pending</span></p>
                      <p className="text-xl font-semibold">{testDrives.confirmed} <span className="text-gray-500 text-sm font-normal">confirmed</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CARD 3: Conversion Rate */}
            <div className={cn("grid grid-cols-1 rounded-lg sm:rounded-xl md:rounded-[2rem]", "shadow-[inset_0_0_1px_1px_#ffffff4d] sm:shadow-[inset_0_0_2px_1px_#ffffff4d]", "ring-1 ring-black/5", "mx-auto w-full", "transition-all duration-300 ease-in-out")}>
              <div className="grid grid-cols-1 rounded-lg sm:rounded-xl md:rounded-[2rem] p-1 sm:p-1.5 md:p-2 shadow-md shadow-black/5">
                <div className="rounded-md sm:rounded-lg md:rounded-3xl bg-white p-2 sm:p-3 md:p-4 shadow-xl ring-1 ring-black/5">
                  <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between">
                      <h1 className="font-semibold text-lg">Upcomig Test Drives</h1>
                      <TrendingUp className="h-9 w-9 bg-purple-500 text-white shadow-inner shadow-white border p-1.5 rounded-full" />
                    </div>
                    <h1 className="text-5xl text-center font-bold text-purple-500">{testDrives.pending + testDrives.confirmed}</h1>
                    <p className="text-center mt-2 text-gray-500 text-sm">Scheduled and pending test drives</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CARD 4: Cars Sold */}
            <div className={cn("grid grid-cols-1 rounded-lg sm:rounded-xl md:rounded-[2rem]", "shadow-[inset_0_0_1px_1px_#ffffff4d] sm:shadow-[inset_0_0_2px_1px_#ffffff4d]", "ring-1 ring-black/5", "mx-auto w-full", "transition-all duration-300 ease-in-out")}>
              <div className="grid grid-cols-1 rounded-lg sm:rounded-xl md:rounded-[2rem] p-1 sm:p-1.5 md:p-2 shadow-md shadow-black/5">
                <div className="rounded-md sm:rounded-lg md:rounded-3xl bg-white p-2 sm:p-3 md:p-4 shadow-xl ring-1 ring-black/5">
                  <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between">
                      <h1 className="font-semibold text-lg">Cars Sold</h1>
                      <DollarSign className="h-9 w-9 bg-yellow-500 text-white shadow-inner shadow-white border p-1.5 rounded-full" />
                    </div>
                    <h1 className="text-5xl text-center font-bold text-yellow-500">{Math.round((cars.sold / cars.total) * 100)}%{" "}</h1>
                    <p className="text-center mt-2 text-lg font-semibold">
                      {cars.sold}
                      <span className="text-gray-500 text-sm font-normal"> of inventory sold</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h1 className=" myo-6 text-2xl font-bold">Dealership Summary</h1>
          <div className=" grid grid-cols-1 lg:grid-cols-3 gap-4  justify-between">
            <div className={cn("grid grid-cols-1 rounded-lg sm:rounded-xl md:rounded-[2rem]", "shadow-[inset_0_0_1px_1px_#ffffff4d] sm:shadow-[inset_0_0_2px_1px_#ffffff4d]", "ring-1 ring-black/5", "transition-all duration-300 ease-in-out")}>
              <div className="grid grid-cols-1 rounded-lg sm:rounded-xl md:rounded-[2rem] p-1 sm:p-1.5 md:p-2 shadow-md shadow-black/5">
                <div className="rounded-md sm:rounded-lg md:rounded-3xl bg-white p-2 sm:p-3 md:p-4 shadow-xl ring-1 ring-black/5">
                  <div className="flex flex-col h-full">
                    <h1 className="font-semibold text-lg">Car Inventory</h1>
                    <AnimatedRadialChart value={((cars.available / cars.total) * 100)} size={350} />
                    <p className="text-center  text-gray-500 ">Available inventory capacity</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={cn("grid grid-cols-1 rounded-lg sm:rounded-xl md:rounded-[2rem]", "shadow-[inset_0_0_1px_1px_#ffffff4d] sm:shadow-[inset_0_0_2px_1px_#ffffff4d]", "ring-1 ring-black/5", "transition-all duration-300 ease-in-out")}>
              <div className="grid grid-cols-1 rounded-lg sm:rounded-xl md:rounded-[2rem] p-1 sm:p-1.5 md:p-2 shadow-md shadow-black/5">
                <div className="rounded-md sm:rounded-lg md:rounded-3xl bg-white p-2 sm:p-3 md:p-4 shadow-xl ring-1 ring-black/5">
                  <div className="flex flex-col h-full">
                    <h1 className="font-semibold text-lg">Conversion Rate
                    </h1>
                    <AnimatedRadialChart value={testDrives.conversionRate} size={350} />
                    <p className="text-center  text-gray-500 ">From test drives to sales
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className={cn("grid grid-cols-1 rounded-lg sm:rounded-xl md:rounded-[2rem]", "shadow-[inset_0_0_1px_1px_#ffffff4d] sm:shadow-[inset_0_0_2px_1px_#ffffff4d]", "ring-1 ring-black/5", "transition-all duration-300 ease-in-out")}>
              <div className="grid grid-cols-1 rounded-lg sm:rounded-xl md:rounded-[2rem] p-1 sm:p-1.5 md:p-2 shadow-md shadow-black/5">
                <div className="rounded-md sm:rounded-lg md:rounded-3xl bg-white p-2 sm:p-3 md:p-4 shadow-xl ring-1 ring-black/5">
                  <div className="flex flex-col h-full">
                    <h1 className="font-semibold text-lg">Test Drive Success</h1>
                    <AnimatedRadialChart value={((testDrives.completed / (testDrives.total || 1)) * 100)} size={350} />
                    <p className="text-center  text-gray-500 ">Completed test drives</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </TabsContent>

        {/* Test Drives Tab */}
        <TabsContent value="test-drives" className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {/* Total Bookings */}
            <div
              className={cn(
                "grid grid-cols-1 rounded-lg sm:rounded-xl md:rounded-[2rem]",
                "shadow-[inset_0_0_1px_1px_#ffffff4d] sm:shadow-[inset_0_0_2px_1px_#ffffff4d]",
                "ring-1 ring-black/5 mx-auto w-full transition-all duration-300 ease-in-out"
              )}
            >
              <div className="grid grid-cols-1 rounded-lg sm:rounded-xl md:rounded-[2rem] p-1 shadow-md shadow-black/5">
                <div className="rounded-md sm:rounded-lg md:rounded-3xl bg-white p-4 shadow-xl ring-1 ring-black/5 flex flex-col h-full">
                  <div className="flex items-center justify-between">
                    <h1 className="font-semibold text-lg">Total Bookings</h1>
                    <Calendar className="h-9 w-9 bg-violet-500 text-white shadow-inner shadow-white border p-1.5 rounded-full" />
                  </div>
                  <h1 className="text-5xl text-center font-bold text-violet-500 mt-4">
                    {testDrives.total}
                  </h1>
                </div>
              </div>
            </div>

            {/* Pending */}
            <div
              className={cn(
                "grid grid-cols-1 rounded-lg sm:rounded-xl md:rounded-[2rem]",
                "shadow-[inset_0_0_1px_1px_#ffffff4d] sm:shadow-[inset_0_0_2px_1px_#ffffff4d]",
                "ring-1 ring-black/5 mx-auto w-full transition-all duration-300 ease-in-out"
              )}
            >
              <div className="grid grid-cols-1 rounded-lg sm:rounded-xl md:rounded-[2rem] p-1 shadow-md shadow-black/5">
                <div className="rounded-md sm:rounded-lg md:rounded-3xl bg-white p-4 shadow-xl ring-1 ring-black/5 flex flex-col h-full">
                  <div className="flex items-center justify-between">
                    <h1 className="font-semibold text-lg">Pending</h1>
                    <Clock className="h-9 w-9 bg-amber-500 text-white shadow-inner shadow-white border p-1.5 rounded-full" />
                  </div>
                  <h1 className="text-5xl text-center font-bold text-amber-500 mt-4">
                    {testDrives.pending}
                  </h1>
                  <p className="text-center mt-2 text-sm text-muted-foreground">
                    {((testDrives.pending / testDrives.total) * 100).toFixed(1)}% of bookings
                  </p>
                </div>
              </div>
            </div>

            {/* Confirmed */}
            <div
              className={cn(
                "grid grid-cols-1 rounded-lg sm:rounded-xl md:rounded-[2rem]",
                "shadow-[inset_0_0_1px_1px_#ffffff4d] sm:shadow-[inset_0_0_2px_1px_#ffffff4d]",
                "ring-1 ring-black/5 mx-auto w-full transition-all duration-300 ease-in-out"
              )}
            >
              <div className="grid grid-cols-1 rounded-lg sm:rounded-xl md:rounded-[2rem] p-1 shadow-md shadow-black/5">
                <div className="rounded-md sm:rounded-lg md:rounded-3xl bg-white p-4 shadow-xl ring-1 ring-black/5 flex flex-col h-full">
                  <div className="flex items-center justify-between">
                    <h1 className="font-semibold text-lg">Confirmed</h1>
                    <CheckCircle className="h-9 w-9 bg-green-500 text-white shadow-inner shadow-white border p-1.5 rounded-full" />
                  </div>
                  <h1 className="text-5xl text-center font-bold text-green-500 mt-4">
                    {testDrives.confirmed}
                  </h1>
                  <p className="text-center mt-2 text-sm text-muted-foreground">
                    {((testDrives.confirmed / testDrives.total) * 100).toFixed(1)}% of bookings
                  </p>
                </div>
              </div>
            </div>

            {/* Completed */}
            <div
              className={cn(
                "grid grid-cols-1 rounded-lg sm:rounded-xl md:rounded-[2rem]",
                "shadow-[inset_0_0_1px_1px_#ffffff4d] sm:shadow-[inset_0_0_2px_1px_#ffffff4d]",
                "ring-1 ring-black/5 mx-auto w-full transition-all duration-300 ease-in-out"
              )}
            >
              <div className="grid grid-cols-1 rounded-lg sm:rounded-xl md:rounded-[2rem] p-1 shadow-md shadow-black/5">
                <div className="rounded-md sm:rounded-lg md:rounded-3xl bg-white p-4 shadow-xl ring-1 ring-black/5 flex flex-col h-full">
                  <div className="flex items-center justify-between">
                    <h1 className="font-semibold text-lg">Completed</h1>
                    <CheckCircle className="h-9 w-9 bg-blue-500 text-white shadow-inner shadow-white border p-1.5 rounded-full" />
                  </div>
                  <h1 className="text-5xl text-center font-bold text-blue-500 mt-4">
                    {testDrives.completed}
                  </h1>
                  <p className="text-center mt-2 text-sm text-muted-foreground">
                    {((testDrives.completed / testDrives.total) * 100).toFixed(1)}% of bookings
                  </p>
                </div>
              </div>
            </div>

            {/* Cancelled */}
            <div
              className={cn(
                "grid grid-cols-1 rounded-lg sm:rounded-xl md:rounded-[2rem]",
                "shadow-[inset_0_0_1px_1px_#ffffff4d] sm:shadow-[inset_0_0_2px_1px_#ffffff4d]",
                "ring-1 ring-black/5 mx-auto w-full transition-all duration-300 ease-in-out"
              )}
            >
              <div className="grid grid-cols-1 rounded-lg sm:rounded-xl md:rounded-[2rem] p-1 shadow-md shadow-black/5">
                <div className="rounded-md sm:rounded-lg md:rounded-3xl bg-white p-4 shadow-xl ring-1 ring-black/5 flex flex-col h-full">
                  <div className="flex items-center justify-between">
                    <h1 className="font-semibold text-lg">Cancelled</h1>
                    <XCircle className="h-9 w-9 bg-red-500 text-white shadow-inner shadow-white border p-1.5 rounded-full" />
                  </div>
                  <h1 className="text-5xl text-center font-bold text-red-500 mt-4">
                    {testDrives.cancelled}
                  </h1>
                  <p className="text-center mt-2 text-sm text-muted-foreground">
                    {((testDrives.cancelled / testDrives.total) * 100).toFixed(1)}% of bookings
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Test Drive Status Visualization */}
          <div
            className={cn(
              "grid grid-cols-1 rounded-lg sm:rounded-xl md:rounded-[2rem]",
              "shadow-[inset_0_0_1px_1px_#ffffff4d] sm:shadow-[inset_0_0_2px_1px_#ffffff4d]",
              "ring-1 ring-black/5 mx-auto w-full transition-all duration-300 ease-in-out"
            )}
          >
            <div className="grid grid-cols-1 rounded-lg sm:rounded-xl md:rounded-[2rem] p-2 shadow-md shadow-black/5">
              <div className="rounded-md sm:rounded-lg md:rounded-3xl bg-white p-4 shadow-xl ring-1 ring-black/5 flex flex-col h-full">
                <h1 className=" my-6 text-center text-2xl font-bold">Test Drive Statistics</h1>
                <div className=" flex justify-between px-8">
                  <div className="rounded-md sm:rounded-lg md:rounded-3xl bg-white p-2 sm:p-3 md:p-4 ">
                    <div className="flex flex-col h-full">
                      <h1 className="font-semibold text-center text-lg">Conversion Rate</h1>
                      <AnimatedRadialChart value={testDrives.conversionRate} size={350} />
                      <p className="text-center  text-gray-500 ">Test drives resulting in car purchases</p>
                    </div>
                  </div>
                  <div className="rounded-md sm:rounded-lg md:rounded-3xl bg-white p-2  sm:p-3 md:p-4 ">
                    <div className="flex flex-col h-full">
                      <h1 className="font-semibold text-center text-lg">Completion Rate

                      </h1>
                      <AnimatedRadialChart value={
                        testDrives.total
                          ? (
                            (testDrives.completed / testDrives.total) *
                            100
                          ).toFixed(1)
                          : 0
                      } size={350} />
                      <p className="text-center  text-gray-500 ">Test drives successfully completed
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  {/* Status Breakdown */}
                  <div className="space-y-4 mt-4">
                    <h3 className="font-medium">Booking Status Breakdown</h3>

                    {/* Pending */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Pending</span>
                        <span className="font-medium">
                          {testDrives.pending} (
                          {(
                            (testDrives.pending / testDrives.total) *
                            100
                          ).toFixed(1)}
                          %)
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                          className="bg-amber-500 h-2.5 rounded-full"
                          style={{
                            width: `${(testDrives.pending / testDrives.total) * 100
                              }%`,
                          }}
                        ></div>
                      </div>
                    </div>

                    {/* Confirmed */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Confirmed</span>
                        <span className="font-medium">
                          {testDrives.confirmed} (
                          {(
                            (testDrives.confirmed / testDrives.total) *
                            100
                          ).toFixed(1)}
                          %)
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                          className="bg-green-500 h-2.5 rounded-full"
                          style={{
                            width: `${(testDrives.confirmed / testDrives.total) * 100
                              }%`,
                          }}
                        ></div>
                      </div>
                    </div>

                    {/* Completed */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Completed</span>
                        <span className="font-medium">
                          {testDrives.completed} (
                          {(
                            (testDrives.completed / testDrives.total) *
                            100
                          ).toFixed(1)}
                          %)
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                          className="bg-blue-600 h-2.5 rounded-full"
                          style={{
                            width: `${(testDrives.completed / testDrives.total) * 100
                              }%`,
                          }}
                        ></div>
                      </div>
                    </div>

                    {/* Cancelled */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Cancelled</span>
                        <span className="font-medium">
                          {testDrives.cancelled} (
                          {(
                            (testDrives.cancelled / testDrives.total) *
                            100
                          ).toFixed(1)}
                          %)
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                          className="bg-red-500 h-2.5 rounded-full"
                          style={{
                            width: `${(testDrives.cancelled / testDrives.total) * 100
                              }%`,
                          }}
                        ></div>
                      </div>
                    </div>

                    {/* No Show */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>No Show</span>
                        <span className="font-medium">
                          {testDrives.noShow} (
                          {((testDrives.noShow / testDrives.total) * 100).toFixed(
                            1
                          )}
                          %)
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                          className="bg-gray-500 h-2.5 rounded-full"
                          style={{
                            width: `${(testDrives.noShow / testDrives.total) * 100
                              }%`,
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
