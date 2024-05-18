import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { ResponsiveBar } from "@nivo/bar"
import React from "react";
import { CalendarIcon } from "../ui/icon";
import { Data } from "@/interface/data";

interface DashboardGraphBarProps {
  datas: Data[]
}
const DashboardGraphBar: React.FC<DashboardGraphBarProps> = ({ datas }) => {
  const allTime = datas.map(data => {
    const time = new Date(data.time);
    return time.toString().substring(0, 3);
  })
  let barData = [
    { name: "Sun", count: 0 },
    { name: "Mon", count: 0 },
    { name: "Tue", count: 0 },
    { name: "Wed", count: 0 },
    { name: "Thu", count: 0 },
    { name: "Fri", count: 0 },
    { name: "Sat", count: 0 },
  ]
  allTime.forEach(time => {
    if (time == "Sun") {
      barData[0].count += 1;
    } else if (time == "Mon") {
      barData[1].count += 1;
    } else if (time == "Tue") {
      barData[2].count += 1;
    } else if (time == "Wed") {
      barData[3].count += 1;
    } else if (time == "Thu") {
      barData[4].count += 1;
    } else if (time == "Fri") {
      barData[5].count += 1;
    } else if (time == "Sat") {
      barData[6].count += 1;
    }
  })
  return (
    <Card className="flex flex-grow flex-col h-full">
      <CardHeader className="flex flex-row gap-3 items-center p-3 sm:p-6">
        <CalendarIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
        <CardTitle className="text-xl text-gray-500 pb-1">Alert Each Day</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-grow p-3 md:p-6 pt-0">
        <BarChart className="w-full aspect-[11/4]" barData={barData} />
      </CardContent>
    </Card>
  )
}

interface BarChartProps {
  className: string,
  barData: {
    name: string;
    count: number;
  }[]
}
const BarChart: React.FC<BarChartProps> = ({ className, barData }) => {
  return (
    <div className={className}>
      <ResponsiveBar
        data={barData}
        keys={["count"]}
        indexBy="name"
        margin={{ top: 0, right: 0, bottom: 40, left: 40 }}
        padding={0.3}
        colors={["#2563eb"]}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 4,
          tickPadding: 16,
        }}
        gridYValues={4}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        tooltipLabel={({ id }) => `${id}`}
        enableLabel={false}
        role="application"
        ariaLabel="A bar chart showing data"
      />
    </div>
  )
}

export default DashboardGraphBar;