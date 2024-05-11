import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { AlertIcon, BellIcon, GaugeIcon } from "../ui/icon";

interface DashboardCardProps {
    title : string;
    content : string;
    icon : string;
}
const DashboardCard: React.FC<DashboardCardProps> = ({title, content, icon}) => {
    const iconClassName = "h-6 w-6 text-gray-500 dark:text-gray-400";
    let iconComponent;
    switch(icon) {
        case "bell" :
            iconComponent = <BellIcon className={iconClassName} />
            break;
        case "gauge" :
            iconComponent = <GaugeIcon className={iconClassName} />
            break;
        case "alert" :
            iconComponent = <AlertIcon className={iconClassName} />
            break;
        default :
            iconComponent = <div />
            break;
    }
    return (
        <Card>
            <CardHeader className="flex flex-row gap-3 items-center">
                {iconComponent}
                <CardTitle className="text-xl text-gray-500 pb-1">{title}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center">
                <div className="text-4xl font-bold">{content}</div>
            </CardContent>
        </Card>
    )
}

export default DashboardCard;