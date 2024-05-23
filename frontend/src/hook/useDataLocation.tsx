import fetchLocation from "@/api/fetchLocation";
import { useQuery } from "@tanstack/react-query";

export default function useDataLocation() {
    return useQuery<string[]>({
        queryKey: ["location"],
        queryFn: () => fetchLocation(),
        enabled: true
    })
}