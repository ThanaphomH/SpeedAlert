import { Data, DataResponse } from "@/interface/data";
import axios from "axios";

export default async function fetchData(location: string) : Promise<Data[]>{
  const response = await axios.get<DataResponse[]>("https://chadchart-backend.onrender.com/alert");
  const datas = response.data.map(val => Object.values(val)[0]);
  return (location == "all") ? datas : datas.filter(data => (data.location == location))
}



