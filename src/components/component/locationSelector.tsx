import { Dispatch, SetStateAction } from "react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../ui/select"

interface LocationSelectorProps {
    value : string[];
    setValue : Dispatch<SetStateAction<string>>
}
const LocationSelector: React.FC<LocationSelectorProps> = ({value , setValue}) => {
    return (
        <Select defaultValue="all" onValueChange={(val) => setValue(val)}>
            <SelectTrigger className="w-48 text-black">
                <SelectValue placeholder="Select Location" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectItem value="all">All Location</SelectItem>
                    {value.map((val) => (<SelectItem value={val}>{val}</SelectItem>))}
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}

export default LocationSelector