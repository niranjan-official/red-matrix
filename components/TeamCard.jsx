import Image from "next/image";
import React from "react";

const TeamCard = ({name, position, description, image}) => {
  return (
    <div className="flex flex-col p-2">
      <div className="h-max bg-gray-500 rounded-[0.4rem]">
        <Image
          src={`/assets/members/${image}`}
          height={300}
          width={400}
          style={{ height: "auto", width: "100%" }}
          alt="..."
          className="rounded-[0.4rem]"
        />
      </div>
      <div className="flex flex-col mt-3 sm:mt-6">
        <h2 className="font-semibold">{name}</h2>
        <h3 className="text-gray-100 text-sm font-extralight uppercase">{position}</h3>
        <p className="mt-2 sm:mt-4 mb-3 text-sm">
          {description}
        </p>
        <div className="flex gap-2">
            <a href="#">
                <Image width={20} height={20} src={'/assets/fb.svg'}/>
            </a>
            <a href="#">
                <Image width={20} height={20} src={'/assets/insta.svg'}/>
            </a>
            <a href="#">
                <Image width={20} height={20} src={'/assets/youtube.svg'}/>
            </a>
            <a href="#">
                <Image width={20} height={20} src={'/assets/twitter.svg'}/>
            </a>
            <a href="#">
                <Image width={20} height={20} src={'/assets/linkedin.svg'}/>
            </a>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
