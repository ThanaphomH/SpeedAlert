import { Data, DataResponse } from "@/interface/data";
import axios from "axios";

export default async function fetchLocation() : Promise<string[]>{
  const response = await axios.get<DataResponse[]>(process.env.NEXT_PUBLIC_API_URL as string);
  const location : string[] = [];
  response.data.forEach(val => {
    const loca = Object.values(val)[0].location;
    if (!location.includes(loca)) {
        location.push(loca)
    }
  })
  return location;
}



