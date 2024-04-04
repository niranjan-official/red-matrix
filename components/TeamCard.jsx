import Image from "next/image";
import React from "react";

const TeamCard = () => {
  return (
    <div className="flex flex-col p-2">
      <div className="h-max bg-gray-500 rounded-md">
        <Image
          src={"/assets/team.jpg"}
          height={300}
          width={400}
          style={{ height: "auto", width: "100%" }}
          alt="..."
        />
      </div>
      <div className="flex flex-col mt-6">
        <h2 className="font-semibold">John Doe</h2>
        <h3 className="text-gray-100 text-sm">CEO</h3>
        <p className="mt-4 mb-3 text-sm">
          John is a visionary leader with a passion for driving business growth.
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
