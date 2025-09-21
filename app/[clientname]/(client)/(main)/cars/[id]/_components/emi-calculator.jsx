"use client";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { ClockIcon } from "lucide-react";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Philosopher, Great_Vibes } from 'next/font/google';
import { ChartPieDonutActive } from "@/components/ui/chart-pie-label";

const greatVibes = Great_Vibes({ subsets: ['latin'], weight: ["400"] });
const philosopher = Philosopher({ subsets: ['latin'], weight: ["400", '700'] });

// Constants
const CONSTANTS = {
  MAX_VEHICLE_PRICE: 999999,
  MIN_VEHICLE_PRICE: 0,
  MIN_DOWN_PAYMENT: 0,
  MIN_INTEREST_RATE: 0.1,
  MAX_INTEREST_RATE: 25,
  MIN_LOAN_TENURE: 1,
  MAX_LOAN_TENURE: 6,
  DEFAULT_LOAN_AMOUNT: 100000,
  DEFAULT_DOWN_PAYMENT: 80000,
  DEFAULT_INTEREST_RATE: 6.95,
  DEFAULT_LOAN_TENURE: 1,
  DEFAULT_CREDIT_SCORE: "0",
  DEFAULT_TENURE: "0"
};

const scoreToRate = {
  "0": 6.95, // Excellent (800+)
  "1": 7.50, // Very Good (740–799)
  "2": 8.75, // Good (670–739)
  "3": 10.25, // Fair (580–669)
  "4": 12.95, // Challenged (<580)
};

const monthsToYears = {
  "0": 1, "1": 2, "2": 3, "3": 4, "4": 5, "5": 6
};

const creditScoreOptions = [
  { value: "0", label: "Excellent (800+ FICO® Score)", color: "text-emerald-600" },
  { value: "1", label: "Very Good (740–799 FICO® Score)", color: "text-blue-500" },
  { value: "2", label: "Good (670–739 FICO® Score)", color: "text-amber-500" },
  { value: "3", label: "Fair (580–669 FICO® Score)", color: "text-orange-500" },
  { value: "4", label: "Challenged (< 580 FICO® Score)", color: "text-red-500" },
];

const tenureOptions = [
  { value: "0", label: "12 months (1 year)" },
  { value: "1", label: "24 months (2 years)" },
  { value: "2", label: "36 months (3 years)" },
  { value: "3", label: "48 months (4 years)" },
  { value: "4", label: "60 months (5 years)" },
  { value: "5", label: "72 months (6 years)" },
];

const benefits = [
  {
    icon: "✓",
    title: "No Credit Impact",
    description: "Check your rates without affecting your credit score. Soft credit checks only - your credit stays protected."
  },
  {
    icon: "✓",
    title: "Instant Results",
    description: "Get personalized rates and monthly payments in just minutes. No waiting, no hassle."
  },
  {
    icon: "✓",
    title: "Real Rates from Real Lenders",
    description: "See actual rates from our network of trusted lenders, not estimates or teaser rates."
  },
  {
    icon: "✓",
    title: "Shop with Confidence",
    description: "Know your budget before you browse. No surprises at the dealership."
  }
];

function EmiCalculator({ price = CONSTANTS.DEFAULT_LOAN_AMOUNT, className }) {
  // State
  const [loanAmount, setLoanAmount] = useState(price);
  const [downPayment, setDownPayment] = useState(CONSTANTS.DEFAULT_DOWN_PAYMENT);
  const [downPaymentPercent, setDownPaymentPercent] = useState(0);
  const [interestRate, setInterestRate] = useState(CONSTANTS.DEFAULT_INTEREST_RATE);
  const [loanTenure, setLoanTenure] = useState(CONSTANTS.DEFAULT_LOAN_TENURE);
  const [results, setResults] = useState({
    emi: "692",
    totalInterest: "0",
    totalPayment: "0",
    loanPrincipal: "0",
    downPayment: "0"
  });

  // Memoized calculations
  const vehiclePercentage = useMemo(() => {
    const percentage = ((loanAmount - CONSTANTS.MIN_VEHICLE_PRICE) /
      (CONSTANTS.MAX_VEHICLE_PRICE - CONSTANTS.MIN_VEHICLE_PRICE)) * 100;
    return Math.min(Math.max(percentage, 0), 100);
  }, [loanAmount]);

  const downPaymentPercentage = useMemo(() => {
    if (loanAmount === 0) return 0;
    const percentage = ((downPayment - CONSTANTS.MIN_DOWN_PAYMENT) /
      (loanAmount - CONSTANTS.MIN_DOWN_PAYMENT)) * 100;
    return Math.min(Math.max(percentage, 0), 100);
  }, [downPayment, loanAmount]);

  // Loan calculation function
  const calculateLoan = useCallback((principal, down, rate, years) => {
    const loanPrincipal = principal - down;

    if (loanPrincipal <= 0) {
      setResults({
        emi: "0",
        totalInterest: "0",
        totalPayment: "0",
        loanPrincipal: "0",
        downPayment: down.toFixed(2)
      });
      return;
    }

    const monthlyRate = rate / 100 / 12;
    const months = years * 12;

    const emi = (loanPrincipal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
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
  }, []);

  // Event handlers
  const handleLoanAmountChange = useCallback((value) => {
    const newLoanAmount = Math.min(Math.max(value, CONSTANTS.MIN_VEHICLE_PRICE), CONSTANTS.MAX_VEHICLE_PRICE);
    setLoanAmount(newLoanAmount);

    const newDownPayment = (downPaymentPercent / 100) * newLoanAmount;
    setDownPayment(newDownPayment);
    calculateLoan(newLoanAmount, newDownPayment, interestRate, loanTenure);
  }, [downPaymentPercent, interestRate, loanTenure, calculateLoan]);

  const handleDownPaymentChange = useCallback((value) => {
    const newDownPayment = Math.min(Math.max(value, CONSTANTS.MIN_DOWN_PAYMENT), loanAmount);
    setDownPayment(newDownPayment);
    setDownPaymentPercent((newDownPayment / loanAmount) * 100);
    calculateLoan(loanAmount, newDownPayment, interestRate, loanTenure);
  }, [loanAmount, interestRate, loanTenure, calculateLoan]);

  const handleInterestRateChange = useCallback((value) => {
    const newRate = Math.min(Math.max(value, CONSTANTS.MIN_INTEREST_RATE), CONSTANTS.MAX_INTEREST_RATE);
    setInterestRate(newRate);
    calculateLoan(loanAmount, downPayment, newRate, loanTenure);
  }, [loanAmount, downPayment, loanTenure, calculateLoan]);

  const handleCreditScoreChange = useCallback((value) => {
    const newRate = scoreToRate[value];
    if (newRate) {
      handleInterestRateChange(newRate);
    }
  }, [handleInterestRateChange]);

  const handleLoanTenureChange = useCallback((value) => {
    const newTenure = Math.min(Math.max(value, CONSTANTS.MIN_LOAN_TENURE), CONSTANTS.MAX_LOAN_TENURE);
    setLoanTenure(newTenure);
    calculateLoan(loanAmount, downPayment, interestRate, newTenure);
  }, [loanAmount, downPayment, interestRate, calculateLoan]);

  const handleTenureSelectChange = useCallback((value) => {
    const newYears = monthsToYears[value];
    if (newYears) {
      handleLoanTenureChange(newYears);
    }
  }, [handleLoanTenureChange]);

  // Formatters
  const formatNumber = useCallback((num) => {
    return new Intl.NumberFormat("en-US").format(num);
  }, []);

  // Memoized breakdown items
  const breakdownItems = useMemo(() => [
    {
      label: "Vehicle Price",
      value: parseFloat(results.downPayment) + parseFloat(results.loanPrincipal)
    },
    {
      label: "Loan Amount",
      value: parseFloat(results.loanPrincipal)
    }
  ], [results]);

  const paymentItems = useMemo(() => [
    { label: "Down Payment", value: parseFloat(results.downPayment) },
    { label: "Total Interest", value: parseFloat(results.totalInterest) },
    { label: "Total Amount", value: parseFloat(results.totalPayment), hasBorder: true }
  ], [results]);

  // Initial calculation
  useEffect(() => {
    calculateLoan(loanAmount, downPayment, interestRate, loanTenure);
  }, [loanAmount, downPayment, interestRate, loanTenure, calculateLoan]);

  return (
    <>
      <div className={cn(
        'gap-4 mb-5 text-4xl md:text-6xl text-center font-semibold text-black',
        philosopher.className,
        className
      )}>
        Unlock Your Dream Car <br />
        with Our <span className={greatVibes.className}>Financing</span>
      </div>

      <section className="w-full p-2 md:p-4 lg:p-7 overflow-hidden border-gray-300 hover:ring-1 ring-black/10 transition-all ease-in-out duration-300 shadow-md hover:shadow-xl border rounded-2xl">
        <div className="lg:mt-5 flex gap-7 lg:gap-16 lg:flex-row flex-col lg:justify-between">

          {/* Results Panel */}
          <div className="p-7 flex flex-col lg:order-last w-full lg:max-w-[35%] text-white h-full bg-indigo-600 border-neutral-200 justify-between gap-8 relative rounded-3xl border shadow-md">
            <h1 className="text-center -mb-7 text-2xl">Breakdown of EMI</h1>

            <ChartPieDonutActive
              downpayment={Math.trunc(parseFloat(results.downPayment))}
              interestrate={Math.trunc(parseFloat(results.totalInterest))}
              loanamount={Math.trunc(parseFloat(results.loanPrincipal))}
              vehicleprice={Math.trunc(loanAmount)}
              monthlypayment={`${Math.trunc(parseFloat(results.emi)).toLocaleString()}`}
            />

            {/* Breakdown Items - Using map */}
            <div className="flex gap-0.5 flex-col -mt-6">
              {breakdownItems.map(({ label, value }) => (
                <div key={label} className="flex justify-between">
                  <span>{label}</span>
                  <span className="text-lg font-semibold">
                    ${formatNumber(Math.trunc(value))}
                  </span>
                </div>
              ))}
            </div>

            {/* Payment Summary - Using map */}
            <div className="border-t pt-2 border-white border-dotted flex flex-col gap-1 -mt-5">
              <h1 className="text-center text-xl">Estimate payment</h1>
              {paymentItems.map(({ label, value, hasBorder }) => (
                <div
                  key={label}
                  className={cn("flex justify-between", {
                    "border-t py-2 border-white border-dashed": hasBorder
                  })}
                >
                  <span>{label}</span>
                  <span className="text-lg font-semibold">
                    ${formatNumber(Math.trunc(value))}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Calculator Panel */}
          <div className="flex flex-col px-1.5 pb-3  md:px-0 lg:order-first gap-5 w-full lg:max-w-[65%]">

            {/* Benefits Section - Using map */}
            <div className="flex flex-col gap-0.5 mt-1.5">
              {benefits.map(({ icon, title, description }) => (
                <p key={title} className="flex items-start gap-2">
                  <span className="font-semibold text-green-500 text-lg mt-0.5">{icon}</span>
                  <span>
                    <span className="font-semibold">{title} </span>
                    {description}
                  </span>
                </p>
              ))}
            </div>

            {/* Vehicle Price Input */}
            <div>
              <p className="block font-medium text-gray-900">Vehicle Price</p>
              <div className="relative my-1">
                <Input
                  value={loanAmount}
                  onChange={(e) => handleLoanAmountChange(parseFloat(e.target.value) || 0)}
                  className="peer ps-6 sm:text-base text-base file:text-base placeholder:text-base pe-12 bg-white focus-visible:ring-blue-400 rounded-xl h-10"
                  placeholder="0.00"
                  type="number"
                />
                <span className="text-muted-foreground text-neutral-500 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50">
                  $
                </span>
                <span className="text-muted-foreground text-neutral-500 pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-3 peer-disabled:opacity-50">
                  USD
                </span>
              </div>
              <input
                type="range"
                min={CONSTANTS.MIN_VEHICLE_PRICE}
                max={CONSTANTS.MAX_VEHICLE_PRICE}
                step="1"
                value={loanAmount}
                onChange={(e) => handleLoanAmountChange(parseFloat(e.target.value))}
                style={{
                  background: `linear-gradient(to right, black ${vehiclePercentage}%, #e5e7eb ${vehiclePercentage}%)`,
                }}
                className="w-full h-2.5 rounded-full transition-all ease-in-out duration-300 hover:shadow-md appearance-none cursor-pointer shadow-inner border [&::-webkit-slider-thumb]:appearance-none hover:[&::-webkit-slider-thumb]:h-6 hover:[&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-black [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-black"
              />
            </div>

            {/* Down Payment Input */}
            <div>
              <p className="block font-medium text-gray-900">Down Payment</p>
              <div className="relative my-1">
                <Input
                  className="peer ps-6 sm:text-base text-base file:text-base placeholder:text-base pe-12 bg-white focus-visible:ring-blue-400 rounded-xl h-10"
                  placeholder="0.00"
                  type="number"
                  value={Math.trunc(downPayment)}
                  onChange={(e) => handleDownPaymentChange(parseFloat(e.target.value) || 0)}
                />
                <span className="text-muted-foreground text-neutral-500 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50">
                  $
                </span>
                <span className="text-muted-foreground text-neutral-500 pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-3 peer-disabled:opacity-50">
                  USD
                </span>
              </div>
              <div className="text-sm text-gray-600">
                Down payment: {downPaymentPercent.toFixed(1)}% of vehicle price
              </div>
              <input
                type="range"
                min={CONSTANTS.MIN_DOWN_PAYMENT}
                step="1"
                max={loanAmount}
                value={downPayment}
                onChange={(e) => handleDownPaymentChange(parseFloat(e.target.value))}
                style={{
                  background: `linear-gradient(to right, black ${downPaymentPercentage}%, #e5e7eb ${downPaymentPercentage}%)`,
                }}
                className="w-full h-2.5 rounded-full transition-all ease-in-out duration-300 hover:shadow-md appearance-none cursor-pointer shadow-inner border [&::-webkit-slider-thumb]:appearance-none hover:[&::-webkit-slider-thumb]:h-6 hover:[&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-black [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-black"
              />
            </div>

            {/* Select Fields */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

              {/* Credit Score Select - Using map for options */}
              <div className="*:not-first:mt-1">
                <p className="block font-medium text-gray-900">Credit score</p>
                <Select onValueChange={handleCreditScoreChange} defaultValue={CONSTANTS.DEFAULT_CREDIT_SCORE}>
                  <SelectTrigger className="bg-white">
                    <SelectValue placeholder="Select credit score" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    {creditScoreOptions.map(({ value, label, color }) => (
                      <SelectItem key={value} value={value}>
                        <span className="flex items-center gap-2">
                          <StatusDot className={color} />
                          <span className="truncate">{label}</span>
                        </span>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <div className="text-sm text-gray-600">
                  Est. APR: {interestRate.toFixed(2)}%
                </div>
              </div>

              {/* Loan Term Select - Using map for options */}
              <div className="*:not-first:mt-1">
                <p className="block font-medium text-gray-900">Loan Term (Months)</p>
                <Select onValueChange={handleTenureSelectChange} defaultValue={CONSTANTS.DEFAULT_TENURE}>
                  <SelectTrigger className="bg-white relative ps-9">
                    <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 group-has-[select[disabled]]:opacity-50">
                      <ClockIcon size={18} aria-hidden="true" />
                    </div>
                    <SelectValue placeholder="Select tenure" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    {tenureOptions.map(({ value, label }) => (
                      <SelectItem key={value} value={value}>
                        <span>{label}</span>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

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
  );
}

export default EmiCalculator;