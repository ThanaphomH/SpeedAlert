import { Data } from "@/interface/data";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { TimeOfDayIcon } from "../ui/icon";
import { ResponsiveLine } from "@nivo/line"

interface DashboardGraphLineProps {
    datas: Data[]
}

const DashboardGraphLine: React.FC<DashboardGraphLineProps> = ({ datas }) => {
    const allTime = datas.map(data => {
        const time = new Date(data.time);
        return time.getHours();
    })
    let barData =
        [
            { x: "00", y: 0 },
            { x: "01", y: 0 },
            { x: "02", y: 0 },
            { x: "03", y: 0 },
            { x: "04", y: 0 },
            { x: "05", y: 0 },
            { x: "06", y: 0 },
            { x: "07", y: 0 },
            { x: "08", y: 0 },
            { x: "09", y: 0 },
            { x: "10", y: 0 },
            { x: "11", y: 0 },
            { x: "12", y: 0 },
            { x: "13", y: 0 },
            { x: "14", y: 0 },
            { x: "15", y: 0 },
            { x: "16", y: 0 },
            { x: "17", y: 0 },
            { x: "18", y: 0 },
            { x: "19", y: 0 },
            { x: "20", y: 0 },
            { x: "21", y: 0 },
            { x: "22", y: 0 },
            { x: "23", y: 0 },


        ]
    allTime.forEach(time => {
        barData[time].y += 1
    })
    console.log(allTime)
    return (
        <Card>
            <CardHeader className="flex flex-row gap-3 items-center">
                <TimeOfDayIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                <CardTitle className="text-xl text-gray-500 pb-1">Alert Each Hour</CardTitle>
            </CardHeader>
            <CardContent>
                <LineChart className="w-full aspect-[7/3] lg:aspect-[13/3]" barData={barData} />
            </CardContent>
        </Card>
    )
}

function LineChart({ className, barData }) {

    return (
        <div className={className}>
            <ResponsiveLine
                data={[
                    {
                        id: "Hour",
                        data: barData,
                    },
                ]}
                margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
                xScale={{
                    type: "point",
                }}
                yScale={{
                    type: "linear",
                }}
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    tickSize: 0,
                    tickPadding: 16,
                }}
                axisLeft={{
                    tickSize: 0,
                    tickValues: 5,
                    tickPadding: 16,
                }}
                colors={["#2563eb", "#e11d48"]}
                pointSize={6}
                useMesh={true}
                gridYValues={6}
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
                role="application"
            />
        </div>
    )
}

export default DashboardGraphLine;