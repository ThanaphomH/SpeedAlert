import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { BellIcon, GaugeIcon } from "../ui/icon";

interface DashboardCardProps {
    title : string;
    content : string;
    icon : string;
}
const DashboardCard: React.FC<DashboardCardProps> = ({title, content, icon}) => {
    let iconComponent;
    switch(icon) {
        case "bell" :
            iconComponent = <BellIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
            break;
        case "gauge" :
            iconComponent = <GaugeIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
            break;
        default :
            iconComponent = <div />
            break;
    }
    return (
        <Card>
            <CardHeader className="flex items-center justify-between">
                <CardTitle>{title}</CardTitle>
                {iconComponent}
            </CardHeader>
            <CardContent>
                <div className="text-4xl font-bold">{content}</div>
            </CardContent>
        </Card>
    )
}

export default DashboardCard;