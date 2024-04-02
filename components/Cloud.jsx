import Image from "next/image";
import React from "react";

const Cloud = () => {
  return (
    <div className="w-full h-96">
      <div className="w-full relative -top-56">
        <Image
          src={"/assets/clouds.svg"}
          width={1000}
          height={500}
          style={{ width: "100%", height: "auto" }}
        />
      </div>
    </div>
  );
};

export default Cloud;
