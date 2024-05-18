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
        <div className={"grid w-full gap-1 items-center " + "grid-cols-7"}>
            <span className="col-span-3">
                {location}
            </span>
            <span className="col-span-3">
                {showLocation ? date.toISOString().substring(0, 10) + " " + date.toISOString().substring(11 , 19) : date.toISOString().substring(5, 10) + " " + date.toISOString().substring(11 , 19)}
            </span>
            <span className="col-span-1">
                {speed}
            </span>
        </div>
    )
}

export default AlertItem;