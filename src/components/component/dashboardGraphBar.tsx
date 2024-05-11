import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { ResponsiveBar } from "@nivo/bar"
import React from "react";
import { CalendarIcon } from "../ui/icon";

interface DashboardGraphBarProps {
}
const DashboardGraphBar: React.FC<DashboardGraphBarProps> = ({ }) => {
  return (
    <Card>
      <CardHeader className="flex flex-row gap-3 items-center">
        <CalendarIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
        <CardTitle className="text-xl text-gray-500 pb-1">Alert Each Day</CardTitle>
      </CardHeader>
      <CardContent>
        <BarChart className="w-full aspect-[11/4]"/>
      </CardContent>
    </Card>
  )
}

function BarChart(props) {
  return (
    <div {...props}>
      <ResponsiveBar
        data={[
          { name: "Sun", count: 111 },
          { name: "Mon", count: 157 },
          { name: "Tue", count: 129 },
          { name: "Wed", count: 150 },
          { name: "Thu", count: 119 },
          { name: "Fri", count: 72 },
          { name: "Sat", count: 72 },
        ]}
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