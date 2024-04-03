import Image from "next/image";
import React from "react";

const ServiceCard = () => {
  return (
    <div className="flex flex-col p-2">
      <div className="h-max bg-gray-500">
        <Image
          src={"/assets/web.svg"}
          height={300}
          width={400}
          style={{ height: "auto", width: "100%" }}
        />
      </div>
      <div className="flex flex-col items-center text-center mt-10">
        <h2 className="w-3/4 text-2xl font-bold">Web/App Development</h2>
        <p className="mt-4">
          We design and develop stunning websites and apps that engage users and
          drive results.
        </p>
        <button className="text-sky-400">Learn more.. &gt;</button>
      </div>
    </div>
  );
};

export default ServiceCard;
