import Image from "next/image";
import React from "react";

const Cloud = () => {
  return (
    <div className="w-full h-max">
      <div className="w-full">
        <Image
          src={"/assets/clouds.svg"}
          width={1000}
          height={500}
          style={{ width: "100%", height: "auto" }}
          alt="..."
        />
      </div>
    </div>
  );
};

export default Cloud;
