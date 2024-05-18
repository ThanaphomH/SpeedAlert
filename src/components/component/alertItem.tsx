import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    useDisclosure
} from "@nextui-org/modal";
import AlertItemModal from "./alertItemModal";
import placeHolderImage from "@/assets/images.png"
import temp1 from "@/assets/Capture1.jpg"
import temp2 from "@/assets/Capture2.jpg"

interface AlertItemProps {
    location: string;
    time: Date;
    speed: number;
    showLocation: boolean;
}

const AlertItem: React.FC<AlertItemProps> = ({ location, time, speed, showLocation}) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const date = new Date(time);
    return (
        <div className={"grid w-full items-center " + (showLocation ? "grid-cols-7" : "grid-cols-4")}>
            {showLocation && <span className="col-span-3">
                {location}
            </span>}
            <span className="col-span-2">
                {showLocation ? date.toISOString().substring(0, 10) + " " + date.toISOString().substring(11 , 19) : date.toISOString().substring(5, 10) + " " + date.toISOString().substring(11 , 19)}
            </span>
            <span className="col-span-1">
                {speed}
            </span>
            <button className="w-12 sm:w-16 h-8 bg-[#2563eb] text-white rounded-lg items-center justify-center flex select-none" onClick={onOpen}>
                View
            </button>
            <AlertItemModal 
                isOpen={isOpen}
                onClose={onClose}
                images={[temp1, temp1,placeHolderImage, placeHolderImage, temp2, temp1, temp2, placeHolderImage]}
                title={`${location}, ${date.toISOString().substring(0, 10) + " " + date.toISOString().substring(11 , 19)}`}
            />
        </div>
    )
}

export default AlertItem;