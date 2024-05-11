const AlertItem = () => {
    return (
        <div className="grid grid-cols-7 w-full items-center">
            <span className="col-span-3">
                Location 1
            </span>
            <span className="col-span-2">
                2 minute ago
            </span>
            <span className="col-span-1">
                188
            </span>
            <div className="w-16 h-8 bg-[#2563eb] text-white rounded-lg items-center justify-center flex select-none">
                View
            </div>
        </div>
    )
}

export default AlertItem;