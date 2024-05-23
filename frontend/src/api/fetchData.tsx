import { Data, DataResponse } from "@/interface/data";
import axios from "axios";

export default async function fetchData(location: string) : Promise<Data[]>{
  const response = await axios.get<DataResponse[]>(process.env.NEXT_PUBLIC_API_URL as string);
  const datas = response.data.map(val => Object.values(val)[0]).sort((a, b) => (new Date(a.time).getTime() - new Date(b.time).getTime()));
  return (location == "all") ? datas : datas.filter(data => (data.location == location));
}



