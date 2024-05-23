interface AlertHeaderProps {
    showLocation : boolean
}
const AlertHeader : React.FC<AlertHeaderProps> = ({showLocation}) => {
    return (
        <div className={"grid w-full gap-1 items-center font-bold " + "grid-cols-7"}>
            <span className="col-span-3">
                Location
            </span>
            <span className="col-span-3">
                Time
            </span>
            <span className="col-span-1">
                Speed
            </span>
        </div>
    )
}

export default AlertHeader