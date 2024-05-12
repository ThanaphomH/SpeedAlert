import fetchData from "@/api/fetchData";
import { Data } from "@/interface/data";
import { useQuery } from "@tanstack/react-query";

export default function useData(location : string) {
    return useQuery<Data[]>({
        queryKey: ["location", location],
        queryFn: () => fetchData(location),
        enabled: true
    })
}