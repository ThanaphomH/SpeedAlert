interface AlertHeaderProps {
    showLocation : boolean
}
const AlertHeader : React.FC<AlertHeaderProps> = ({showLocation}) => {
    return (
        <div className={"grid w-full items-center font-bold " + (showLocation ? "grid-cols-7" : "grid-cols-4")}>
            {showLocation && <span className="col-span-3">
                Location
            </span>}
            <span className="col-span-2">
                Time
            </span>
            <span className="col-span-1">
                Speed
            </span>
            <span>
                Image
            </span>
        </div>
    )
}

export default AlertHeader