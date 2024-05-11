import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"

interface ImageProps {
    src: string;
    alt: string;
}
interface AlertCardProps {
    name: string;
    description: string;
    image: ImageProps[];
}
const AlertCard: React.FC<AlertCardProps> = ({ name, description, image }) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{name}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex flex-row gap-4 overflow-x-auto py-2">
                    {image.map((imgProps) => (
                        <img
                            alt={imgProps.alt}
                            className="rounded-md object-cover"
                            height={150}
                            src={imgProps.src}
                            style={{
                                aspectRatio: "200/150",
                                objectFit: "cover",
                            }}
                            width={200}
                        />
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}

export default AlertCard;