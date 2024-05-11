import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import DashboardCard from "./dashboardCard";
import DashboardRecentAlert from "./dashboardRecentAlert";
import DashboardGraphBar from "./dashboardGraphBar";
import DashboardGraphLine from "./dashboardGraphLine";

export default function Dashboard(props) {
    return (
        <>
            <div className="flex flex-row justify-between">
                <h2 className="mb-4 text-lg font-bold">Dashboard</h2>
                <div className="flex flex-row gap-4">

                    <Select defaultValue="location1">
                        <SelectTrigger className="w-48 text-black">
                            <SelectValue placeholder="Select Location" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value="location1">Location 1</SelectItem>
                                <SelectItem value="location2">Location 2</SelectItem>
                                <SelectItem value="location3">Location 3</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>

            </div>
            <div className="grid grid-cols-3 gap-4">
                <DashboardCard
                    title="Total Alerts"
                    content="25"
                    icon="bell"
                />
                <DashboardCard
                    title="High Alerts"
                    content="8"
                    icon="alert"
                />
                <DashboardCard
                    title="Average speed"
                    content="105 mph"
                    icon="gauge"
                />

                <div className="col-span-2">
                    <DashboardGraphBar
                    />
                </div>

                <DashboardRecentAlert
                    navigate={props.navigate}
                />

                <div className="col-span-3">
                    <DashboardGraphLine
                    />
                </div>

            </div>
        </>
    )
}