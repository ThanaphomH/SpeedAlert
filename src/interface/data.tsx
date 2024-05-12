export interface Data {
    speed: number;
    location: string;
    time: Date;
}

export interface DataResponse {
    [key: string]: {
        speed: number;
        location: string;
        time: Date;
    }
}