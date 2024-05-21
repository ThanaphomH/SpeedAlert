import DashboardCard from "./dashboardCard";
import DashboardRecentAlert from "./dashboardRecentAlert";
import DashboardGraphBar from "./dashboardGraphBar";
import DashboardGraphLine from "./dashboardGraphLine";
import { useState } from "react";
import LocationSelector from "./locationSelector";
import useData from "@/hook/useData";
import useDataLocation from "@/hook/useDataLocation";
import { Spinner } from "@nextui-org/spinner";
import { Data } from "@/interface/data";

function average(data: Data[]) {
    let sum = 0;
    data.forEach(val => sum += val.speed);
    return (sum / data.length).toFixed(1);
}

interface DashboardProps {
    navigate: () => void
}
const Dashboard: React.FC<DashboardProps> = ({navigate}) => {
    const [currentLocation, setCurrentLocation] = useState("all");

    const { data: filteredData, isLoading, isRefetching } = useData(currentLocation);
    const { data: locationList } = useDataLocation();


    return (
        <>
            <div className="flex flex-row justify-between">
                <h2 className="mb-4 text-lg font-bold">Dashboard</h2>
                <div className="flex flex-row gap-4">

                    <LocationSelector
                        value={locationList === undefined ? [] : locationList}
                        setValue={setCurrentLocation}
                    />
                </div>

            </div>
            {isLoading || isRefetching ?
                <Spinner size="lg" className="w-full h-full items-center justify-center" />
                : <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-3 sm:col-span-1">
                        <DashboardCard
                            title="Total Alerts"
                            content={filteredData === undefined ? "0" : String(filteredData.length)}
                            icon="bell"
                        />
                    </div>

                    <div className="col-span-3 sm:col-span-1">
                        <DashboardCard
                            title="High Alerts"
                            content={filteredData === undefined ? "0" : String(filteredData.filter(val => val.speed >= 90).length)}
                            icon="alert"
                        />
                    </div>

                    <div className="col-span-3 sm:col-span-1">
                        <DashboardCard
                            title="Average speed"
                            content={filteredData === undefined ? "-" : String(average(filteredData))}
                            icon="gauge"
                        />
                    </div>


                    <div className="col-span-3 lg:col-span-1">
                        <DashboardRecentAlert
                            datas={filteredData === undefined ? [] : filteredData.slice(-5).reverse()}
                            navigate={navigate}
                        />
                    </div>


                    <div className="col-span-3 lg:col-span-2">
                        <DashboardGraphBar datas={filteredData === undefined ? [] : filteredData}
                        />
                    </div>

                    <div className="col-span-3">
                        <DashboardGraphLine datas={filteredData === undefined ? [] : filteredData}
                        />
                    </div>

                </div>}
        </>
    )
}

export default Dashboard;