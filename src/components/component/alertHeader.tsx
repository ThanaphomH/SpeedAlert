const AlertHeader = () => {
    return (
        <div className="grid grid-cols-7 w-full items-start font-bold">
            <span className="col-span-3">
                Location
            </span>
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