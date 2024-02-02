import React from "react";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";

interface Props {
  className?: string | null;
  image: string;
}

const GaleryCard = ({ image, className }: Props): React.ReactElement => {
  
  return (
    <Card
      className={`overflow-hidden border-none rounded-sm ${className ?  "row-span-2" : ""}`}
    >
      <CardContent className="relative h-full">
        <Image
          src={image}
          fill
          alt="galery-image"
          style={{ objectFit: "cover" }}
          sizes="30vw"
        />
      </CardContent>
    </Card>
  );
};

export default GaleryCard;
