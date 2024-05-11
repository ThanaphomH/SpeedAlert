interface AlertItemProps {
    location? : string;
    time : string;
    speed : number;
}
const AlertItem : React.FC<AlertItemProps> = ({location ,time ,speed}) => {
    return (
        <div className={"grid w-full items-center " + (location ? "grid-cols-7" : "grid-cols-4")}>
            {location && <span className="col-span-3">
                {location}
            </span>}
            <span className="col-span-2">
                {time}
            </span>
            <span className="col-span-1">
                {speed}
            </span>
            <div className="w-16 h-8 bg-[#2563eb] text-white rounded-lg items-center justify-center flex select-none">
                View
            </div>
        </div>
    )
}

export default AlertItem;