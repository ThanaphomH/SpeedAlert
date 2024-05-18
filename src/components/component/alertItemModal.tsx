import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    useDisclosure
} from "@nextui-org/modal";
import placeHolderImage from "@/assets/images.png"
import temp from "@/assets/IMG_4634.jpg"
import Image, { StaticImageData } from "next/image";
import { useState } from "react";

interface AlertItemModalProps {
    isOpen: boolean,
    onClose: () => void
    images: StaticImageData[]
    title: string
}
const AlertItemModal: React.FC<AlertItemModalProps> = ({ isOpen, onClose, images, title}) => {
    const [currentImg, setCurrentImg] = useState(images.length == 0 ? placeHolderImage : images[0]);
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            size="2xl"
        >
            <ModalContent >
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
                        <ModalBody className="flex flex-col w-full">
                            {images.length == 0 ? 
                            <div className="text-center">
                               Image not found
                            </div> :
                                (
                                    <>
                                        <div className="flex w-full">
                                            <Image src={currentImg} placeholder="blur" alt="image" className="w-full aspect-[5/3] object-scale-down" />
                                        </div>

                                        <div className="flex flex-row overflow-x-auto gap-2 py-1">
                                            {images.map((image,index) => (
                                                <Image key={index} src={image} placeholder="blur" alt="image" className="w-40 h-24 object-contain hover:cursor-pointer" onClick={() => setCurrentImg(image)}/>
                                            ))}
                                        </div>
                                    </>
                                )
                            }

                        </ModalBody>
                        <ModalFooter>

                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    )
}

export default AlertItemModal;