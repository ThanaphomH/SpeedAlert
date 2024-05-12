import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    useDisclosure
} from "@nextui-org/modal";
interface AlertItemProps {
    location?: string;
    time: Date;
    speed: number;
}
const AlertItem: React.FC<AlertItemProps> = ({ location, time, speed }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const date = new Date(time);
    return (
        <div className={"grid w-full items-center " + (location ? "grid-cols-7" : "grid-cols-4")}>
            {location && <span className="col-span-3">
                {location}
            </span>}
            <span className="col-span-2">
                {location ? date.toISOString().substring(0, 10) + " " + date.toISOString().substring(11 , 19) : date.toISOString().substring(5, 10) + " " + date.toISOString().substring(11 , 19)}
            </span>
            <span className="col-span-1">
                {speed}
            </span>
            <button className="w-16 h-8 bg-[#2563eb] text-white rounded-lg items-center justify-center flex select-none" onClick={onOpen}>
                View
            </button>
            <Modal
                 isOpen={isOpen} 
                 onClose={onClose} 
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
                            <ModalBody>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Nullam pulvinar risus non risus hendrerit venenatis.
                                    Pellentesque sit amet hendrerit risus, sed porttitor quam.
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Nullam pulvinar risus non risus hendrerit venenatis.
                                    Pellentesque sit amet hendrerit risus, sed porttitor quam.
                                </p>
                                <p>
                                    Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit
                                    dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis.
                                    Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod.
                                    Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur
                                    proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
                                </p>
                            </ModalBody>
                            <ModalFooter>

                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
    )
}

export default AlertItem;