"use client";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils";
import { ClockIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Lato } from "next/font/google";
import { ChartContainer } from "@/components/ui/chart";
import { ChartPieDonutActive } from "@/components/ui/chart-pie-label";



const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
})
const scoreToRate = {
  "0": 6.95, // Excellent (800+)
  "1": 7.50, // Very Good (740–799)
  "2": 8.75, // Good (670–739)
  "3": 10.25, // Fair (580–669)
  "4": 12.95, // Challenged (<580)
};
const monthsToYears = {
  "0": 1,   // 12 months = 1 year
  "1": 2,   // 24 months = 2 years
  "2": 3,   // 36 months = 3 years
  "3": 4,   // 48 months = 4 years
  "4": 5,   // 60 months = 5 years
  "5": 6,   // 72 months = 6 years
};

function EmiCalculator({ price = 100000, className }) {
  const [loanAmount, setLoanAmount] = useState(price);
  const [downPayment, setDownPayment] = useState(80000);
  const [downPaymentPercent, setDownPaymentPercent] = useState(0);
  const [interestRate, setInterestRate] = useState(6.95);
  const [loanTenure, setLoanTenure] = useState(1);
  const [results, setResults] = useState(692);
  const [error, setError] = useState("");

  const handleLoanAmountChange = (value) => {
    const newLoanAmount = Math.min(value, 999999);
    setLoanAmount(newLoanAmount);
    const newDownPayment = (downPaymentPercent / 100) * newLoanAmount;
    setDownPayment(newDownPayment);
    calculateLoan(newLoanAmount, newDownPayment, interestRate, loanTenure);
  };

  const handleDownPaymentChange = (value) => {
    const newDownPayment = Math.min(Math.max(value, 0), loanAmount);
    setDownPayment(newDownPayment);
    setDownPaymentPercent((newDownPayment / loanAmount) * 100);
    calculateLoan(loanAmount, newDownPayment, interestRate, loanTenure);
  };

  const handleDownPaymentPercentChange = (percent) => {
    const newPercent = Math.min(Math.max(percent, 0), 100);
    setDownPaymentPercent(newPercent);
    const newDownPayment = (newPercent / 100) * loanAmount;
    setDownPayment(newDownPayment);
    calculateLoan(loanAmount, newDownPayment, interestRate, loanTenure);
  };

  const handleInterestRateChange = (value) => {
    const newRate = Math.min(Math.max(value, 0.1), 25);
    setInterestRate(newRate);
    calculateLoan(loanAmount, downPayment, newRate, loanTenure);
  };

  const handleCreditScoreChange = (value) => {
    const newRate = scoreToRate[value];
    if (newRate) {
      handleInterestRateChange(newRate); // reuse your existing function
    }
  };

  const handleLoanTenureChange = (value) => {
    const newTenure = Math.min(Math.max(value, 1), 6);
    setLoanTenure(newTenure);
    calculateLoan(loanAmount, downPayment, interestRate, newTenure);
  };

  const handleTenureSelectChange = (value) => {
    const newYears = monthsToYears[value];
    if (newYears) {
      handleLoanTenureChange(newYears);
    }
  };

  const calculateLoan = (principal, down, rate, years) => {
    const loanPrincipal = principal - down;
    if (loanPrincipal <= 0) {
      setResults(0);
      return;
    }

    const monthlyRate = rate / 100 / 12;
    const months = years * 12;

    const emi =
      (loanPrincipal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1);
    const totalPayment = emi * months;
    const totalInterest = totalPayment - loanPrincipal;

    setResults({
      emi: emi.toFixed(2),
      totalInterest: totalInterest.toFixed(2),
      totalPayment: totalPayment.toFixed(2),
      loanPrincipal: loanPrincipal.toFixed(2),
      downPayment: down.toFixed(2),
    });
  };

  useEffect(() => {
    calculateLoan(loanAmount, downPayment, interestRate, loanTenure);
  }, []);

  const formatNumber = (num) => {
    return new Intl.NumberFormat("en-US").format(num);
  };
  const Vehiclemin = 0;
  const Vehiclmax = 999999;

  // calculate percentage fill
  const Vehiclpercentage = ((loanAmount - Vehiclemin) / (Vehiclmax - Vehiclemin)) * 100;

  const downpaymin = 0;
  const downpaymax = loanAmount;

  // ✅ calculate percentage based on downPayment, not loanAmount
  const downpaypercentage =
    ((downPayment - downpaymin) / (downpaymax - downpaymin)) * 100;

  return (
    <>
      <section className=" w-full border rounded-2xl p-8 shadow-md overflow-hidden   ">
        <h1 className="text-5xl font-semibold text-gray-900  ">FINANCING MADE EASY</h1>
        <div className=" mt-5 flex gap-16 justify-between  ">
          <div className="flex flex-col gap-5 w-full  max-w-[65%]  ">
            
            <div className="">
              <p
                className="block  font-medium  text-gray-900"
              >
                Vehicle Price
              </p>
              <div className="relative my-1 ">
                <Input
                  value={loanAmount}
                  onChange={(e) =>
                    handleLoanAmountChange(parseFloat(e.target.value))
                  }
                  id={"input-with-inline-add-ons"}
                  className="peer ps-6 sm:text-base text-base file:text-base placeholder:text-base   pe-12 bg-white focus-visible:ring-blue-400 rounded-xl h-10"
                  placeholder="0.00"
                  type="number"
                />
                <span className="text-muted-foreground  text-neutral-500 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50">
                  $
                </span>
                <span className="text-muted-foreground  text-neutral-500  pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-3 peer-disabled:opacity-50">
                  USD
                </span>
              </div>
              <input
                type="range"
                min={Vehiclemin}
                max={Vehiclmax}
                step="1"
                value={loanAmount}
                onChange={(e) => handleLoanAmountChange(parseFloat(e.target.value))}
                style={{
                  background: `linear-gradient(to right, black ${Vehiclpercentage}%, #e5e7eb ${Vehiclpercentage}%)`,
                }}
                className="
        w-full h-2.5 rounded-full transition-all ease-in-out duration-300 hover:shadow-md  appearance-none cursor-pointer
        shadow-inner border
        [&::-webkit-slider-thumb]:appearance-none
        hover:[&::-webkit-slider-thumb]:h-6
        hover:[&::-webkit-slider-thumb]:w-6
        [&::-webkit-slider-thumb]:h-5
        [&::-webkit-slider-thumb]:w-5
        [&::-webkit-slider-thumb]:rounded-full
        [&::-webkit-slider-thumb]:bg-white
        [&::-webkit-slider-thumb]:cursor-pointer
        [&::-webkit-slider-thumb]:border-2
        [&::-webkit-slider-thumb]:border-black
        [&::-moz-range-thumb]:h-5
        [&::-moz-range-thumb]:w-5
        [&::-moz-range-thumb]:rounded-full
        [&::-moz-range-thumb]:bg-white
        [&::-moz-range-thumb]:border-2
        [&::-moz-range-thumb]:border-black
      "
              />
            </div>
            <div className="">
              <p
                className="block  font-medium  text-gray-900"
              >
                Down Payment
              </p>
              <div className="relative my-1 ">
                <Input
                  id={"Down-payment-input-with-inline-add-ons"}
                  className="peer ps-6 sm:text-base text-base file:text-base placeholder:text-base   pe-12 bg-white focus-visible:ring-blue-400 rounded-xl h-10"
                  placeholder="0.00"
                  type="number"
                  value={downPayment}
                  onChange={(e) =>
                    handleDownPaymentChange(parseFloat(e.target.value))
                  }
                />
                <span className="text-muted-foreground  text-neutral-500 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50">
                  $
                </span>
                <span className="text-muted-foreground  text-neutral-500  pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-3 peer-disabled:opacity-50">
                  USD
                </span>
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Down payment: {downPaymentPercent.toFixed(1)}% of vehicle price
              </div>
              <input
                type="range"
                min={downpaymin}
                step="1"
                max={loanAmount}
                value={downPayment}
                onChange={(e) => handleDownPaymentChange(parseFloat(e.target.value))}
                style={{
                  background: `linear-gradient(to right, black ${downpaypercentage}%, #e5e7eb ${downpaypercentage}%)`,
                }}
                className="
      w-full h-2.5 rounded-full transition-all ease-in-out duration-300
      hover:shadow-md appearance-none cursor-pointer shadow-inner border
      [&::-webkit-slider-thumb]:appearance-none
      hover:[&::-webkit-slider-thumb]:h-6
      hover:[&::-webkit-slider-thumb]:w-6
      [&::-webkit-slider-thumb]:h-5
      [&::-webkit-slider-thumb]:w-5
      [&::-webkit-slider-thumb]:rounded-full
      [&::-webkit-slider-thumb]:bg-white
      [&::-webkit-slider-thumb]:cursor-pointer
      [&::-webkit-slider-thumb]:border-2
      [&::-webkit-slider-thumb]:border-black
      [&::-moz-range-thumb]:h-5
      [&::-moz-range-thumb]:w-5
      [&::-moz-range-thumb]:rounded-full
      [&::-moz-range-thumb]:bg-white
      [&::-moz-range-thumb]:border-2
      [&::-moz-range-thumb]:border-black
    "
              />
            </div>
            <div className=" grid grid-cols-2 gap-4">
              <div className="*:not-first:mt-1">
                <p className="block font-medium text-gray-900">Credit score</p>
                <Select onValueChange={handleCreditScoreChange} defaultValue="0">
                  <SelectTrigger className=" rela bg-white">
                    <SelectValue placeholder="Select credit score" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="0">
                      <span className="flex items-center gap-2">
                        <StatusDot className="text-emerald-600" />
                        <span className="truncate">Excellent (800+ FICO® Score)</span>
                      </span>
                    </SelectItem>
                    <SelectItem value="1">
                      <span className="flex items-center gap-2">
                        <StatusDot className="text-blue-500" />
                        <span className="truncate">Very Good (740–799 FICO® Score)</span>
                      </span>
                    </SelectItem>
                    <SelectItem value="2">
                      <span className="flex items-center gap-2">
                        <StatusDot className="text-amber-500" />
                        <span className="truncate">Good (670–739 FICO® Score)</span>
                      </span>
                    </SelectItem>
                    <SelectItem value="3">
                      <span className="flex items-center gap-2">
                        <StatusDot className="text-orange-500" />
                        <span className="truncate">Fair (580–669 FICO® Score)</span>
                      </span>
                    </SelectItem>
                    <SelectItem value="4">
                      <span className="flex items-center gap-2">
                        <StatusDot className="text-red-500" />
                        <span className="truncate">Challenged (&lt; 580 FICO® Score)</span>
                      </span>
                    </SelectItem>
                  </SelectContent>
                </Select>

                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Est. APR: {interestRate.toFixed(2)}% of vehicle
                </div>
              </div>
              {/* Loan Term (select by months) */}
              <div className="*:not-first:mt-1">
                <p className="block font-medium text-gray-900">Loan Term (Months)</p>
                <Select onValueChange={handleTenureSelectChange} defaultValue="0">
                  <SelectTrigger className="bg-white relative ps-9">
                    <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 group-has-[select[disabled]]:opacity-50">
                      <ClockIcon size={18} aria-hidden="true" />
                    </div>
                    <SelectValue placeholder="Select tenure" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="0"><span>12 months (1 year)</span></SelectItem>
                    <SelectItem value="1"><span>24 months (2 years)</span></SelectItem>
                    <SelectItem value="2"><span>36 months (3 years)</span></SelectItem>
                    <SelectItem value="3"><span>48 months (4 years)</span></SelectItem>
                    <SelectItem value="4"><span>60 months (5 years)</span></SelectItem>
                    <SelectItem value="5"><span>72 months (6 years)</span></SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className=" flex flex-col gap-0.5">
              <p>
                <span className=" font-semibold text-green-500 text-lg">✓ </span>
                <span className=" font-semibold">No Credit Impact </span>
                Check your rates without affecting your credit score. Soft credit checks only - your credit stays protected.
              </p>
              <p>
                <span className=" font-semibold text-green-500 text-lg">✓ </span>
                <span className=" font-semibold">Instant Results </span>
                Get personalized rates and monthly payments in just minutes. No waiting, no hassle.
              </p>
              <p>
                <span className=" font-semibold text-green-500 text-lg">✓ </span>
                <span className=" font-semibold">Real Rates from Real Lenders </span>
                See actual rates from our network of trusted lenders, not estimates or teaser rates.
              </p>
              <p>
                <span className=" font-semibold text-green-500 text-lg">✓ </span>
                <span className=" font-semibold">Shop with Confidence </span>
                Know your budget before you browse. No surprises at the dealership.
              </p>
            </div>
          </div>
          <div className=" p-7 flex flex-col w-full max-w-[35%] text-white h-full bg-indigo-600 border-neutral-200 justify-between  gap-8 relative  rounded-3xl border shadow  ">
            <h1 className=" text-center -mb-7   text-2xl">Breakedown of EMI</h1>
            <ChartPieDonutActive loanamount={Math.trunc(results.loanPrincipal)} vehicleprice={Math.trunc(loanAmount)} monthlypayment={`${Math.trunc(results.emi).toLocaleString()}`}></ChartPieDonutActive>
            <div className=" -mt-6 flex gap-0.5 flex-col">
              <div className=" flex justify-between">
                <span className="    ">
                  Vehicle Price
                </span>
                <span className=" text-lg font-semibold ">
                  ${formatNumber(loanAmount)}
                </span>
              </div>
              <div className=" flex justify-between">
                <span className="  ">
                  Loan Amount
                </span>
                <span className=" text-lg font-semibold ">
                  ${formatNumber(results.loanPrincipal)}
                </span>
              </div>
            </div>
            <div>

              <div className="-mt-5 border-t pt-2  border-white border-dotted  flex flex-col gap-1">
                <h1 className=" text-center text-xl ">Estimate payment</h1>
                <div className=" flex justify-between">
                  <span>
                    Down Payment
                  </span>
                  <span className=" text-lg font-semibold ">
                    ${formatNumber(results.downPayment)}
                  </span>
                </div>
                <div className=" flex justify-between">
                  <span>
                    Total Interest
                  </span>
                  <span className=" text-lg font-semibold ">
                    ${formatNumber(results.totalInterest)}
                  </span>
                </div>
                <div className=" flex justify-between border-t py-2  border-white border-dashed">
                  <span>
                    Total Amount
                  </span>
                  <span className=" text-lg font-semibold ">
                    ${formatNumber(results.totalPayment)}
                  </span>
                </div>
              </div>
            </div>


            {/* <div className={cn("   font-semibold text-7xl", lato.className)}>
              <h1 > ${Math.trunc(results.emi).toLocaleString()}</h1>
              <p className="text-base  text-center ">Your Monthly Payment</p>
            </div>
            <div className={cn("   font-semibold text-5xl", lato.className)}>
              <h1 > ${Math.trunc(results.totalPayment).toLocaleString()}</h1>
              <p className="text-base  text-center ">Total Payment</p>
            </div>
            <div className={cn("   font-semibold text-5xl", lato.className)}>
              <h1 > ${Math.trunc(results.totalInterest).toLocaleString()}</h1>
              <p className="text-base  text-center ">Total Interest</p>
            </div> */}

          </div>
        </div>
      </section>
    </>
  );
}

export default EmiCalculator;

function StatusDot({ className }) {
  return (
    <svg
      width="8"
      height="8"
      fill="currentColor"
      viewBox="0 0 8 8"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="4" cy="4" r="4" />
    </svg>
  )
}


