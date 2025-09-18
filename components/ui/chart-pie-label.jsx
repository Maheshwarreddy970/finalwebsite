"use client";

import { Pie, PieChart, Label, Sector } from "recharts";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A donut chart with an active sector and centered text";


const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
  },
} ;

export function ChartPieDonutActive({monthlypayment, vehicleprice, loanamount}) {


const chartData = [
  { browser: "Vehicle Price", visitors: vehicleprice, fill: "oklch(72.3% 0.219 149.579)" },
  { browser: "Loan Amount", visitors: loanamount, fill: "oklch(90.5% 0.182 98.111)" },
];

  return (
    <div>
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[200px] scale-125"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={60}
              strokeWidth={5}
              activeIndex={0}
              activeShape={({ outerRadius = 0, ...props }) => (
                <Sector {...props} outerRadius={outerRadius + 10} />
              )}
            >
              {/* Add Label to display text in the center */}
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        className=" text-white fill-white  "
                      >
                        <tspan className=" text-4xl " x={viewBox.cx} dy="-0.1em">
                          {monthlypayment}
                        </tspan>
                        <tspan className=" text-xs  " x={viewBox.cx} dy="1.9em" >
                          / Monthly
                        </tspan>
                      </text>
                    );
                  }
                  return null;
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
    </div>
  );
}