import AlertHeader from "./alertHeader";
import AlertItem from "./alertItem";
import LocationSelector from "./locationSelector";
import { useState } from "react";
import useDataLocation from "@/hook/useDataLocation";
import useData from "@/hook/useData";

export default function AlertRecord() {
    const [currentLocation , setCurrentLocation] = useState("all");
    const {data : locationList} = useDataLocation();
    const {data : filteredData, isLoading, isRefetching} = useData(currentLocation);
    return (
        <>
            <div className="flex flex-row justify-between">
                <h2 className="mb-4 text-lg font-bold">Alert Record</h2>
                <div className="flex flex-row gap-4">
                    <LocationSelector
                        value={locationList === undefined ? [] : locationList}
                        setValue={setCurrentLocation}
                    />
                </div>
            </div>

            <div className="flex flex-col sm:px-[5%] mt-4 items-center justify-center gap-4 text-xs sm:text-base">
                <AlertHeader showLocation={false} />
                {filteredData?.map(data => <AlertItem location={data.location} time={data.time} speed={data.speed} showLocation={true}/>)}
            </div>
        </>

    )
}