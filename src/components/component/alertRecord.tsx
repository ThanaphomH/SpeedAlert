import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import AlertHeader from "./alertHeader";
import AlertItem from "./alertItem";

export default function AlertRecord() {
    return (
        <>
            <div className="flex flex-row justify-between">
                <h2 className="mb-4 text-lg font-bold">Alert Record</h2>
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

            <div className="flex flex-col px-[5%] mt-4 items-center justify-center gap-4">
                <AlertHeader showLocation={true}/>
                <AlertItem location="location 1" time="1 minute ago" speed={200}/>
            </div>
        </>

    )
}