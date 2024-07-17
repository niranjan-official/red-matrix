import Image from "next/image";
import React from "react";

const ServiceCard = ({title,info,imgSrc, altText}) => {
  return (
    <div className="flex-1 flex-grow-0 basis-80 md:basis-1/3 p-2">
      <div className="h-max bg-gray-500 rounded-[0.4rem]">
        <Image
          src={imgSrc}
          height={300}
          width={400}
          style={{ height: "auto", width: "100%" }}
          alt={altText}
          className="overflow-hidden"
        />
      </div>
      <div className="flex flex-col items-center text-center mt-3 sm:mt-10 sm:px-4">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="mt-2 sm:mt-4">{info}</p>
        <button className="text-sky-400">Learn more.. &gt;</button>
      </div>
    </div>
  );
};

export default ServiceCard;
