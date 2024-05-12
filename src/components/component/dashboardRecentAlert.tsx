import React, { Dispatch, SetStateAction } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { DownIcon, RecentIcon } from "../ui/icon"
import AlertHeader from "./alertHeader"
import AlertItem from "./alertItem"
import { Data } from "@/interface/data"

interface DashboardRecentAlertProps {
    datas : Data[];
    navigate : () => {};
}
const DashboardRecentAlert : React.FC<DashboardRecentAlertProps> = ({datas, navigate}) => {
    return (
        <Card className="h-full">
            <CardHeader className="flex flex-row gap-3 items-center">
                <RecentIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                <CardTitle className="text-xl text-gray-500 pb-1">Recent Alert</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col px-[5%] items-center justify-center gap-2">
                <AlertHeader showLocation={false}/>
                {datas.map(data => (
                    <AlertItem speed={data.speed} time={data.time}/>
                ))}
                <div className="flex flex-row gap-2 hover:cursor-pointer" onClick={navigate}>
                    <DownIcon className="mt-1 h-6 w-6 text-gray-500 dark:text-gray-400" />
                    <div className="text-lg ">View All</div>
                </div>

            </CardContent>
        </Card>
    )
}

export default DashboardRecentAlert