import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import HomeButtons from "../HomeButtons";

const Main = () => {
  return (
    <section id="home" style={{ height: "85vh" }} className="w-full flex flex-col">
      <Navbar />
      <main className="w-full flex h-full items-center px-4 sm:px-14 lg:px-24 pb-4 sm:pt-8 sm:pb-0">
        <div className="flex flex-col w-full sm:w-3/5 z-50">
          <span
            style={{ fontWeight: "900" }}
            className="text-5xl sm:6xl lg:text-7xl"
          >
            Transforming Your Online Presence
          </span>
          <p className="mt-4 text-sm sm:text-lg">
            Welcome to REDD MATRIX, your one stop solution for web
            development,graphics designing and digital marketing services. We
            combines creativity, innovation, and expertise to deliver
            exceptional results
          </p>
          <button className="w-fit text-sky-400 mt-1">Learn more.. &gt;</button>
            <HomeButtons/>
        </div>
        <div className="absolute w-full sm:w-1/2 opacity-30 sm:opacity-100 top-20 lg:top-10 right-0 z-0">
          <Image
            src={"/assets/rocket.png"}
            width={500}
            height={500}
            style={{ height: "100%", width: "auto" }}
            alt="..."
          />
        </div>
        <div className="absolute w-full h-max sm:h-full top-10 left-0 z-0">
          <Image
            src={"/assets/comets.svg"}
            width={1000}
            height={1000}
            style={{ height: "100%", width: "auto" }}
            alt="..."
          />
        </div>
        <div className="absolute w-full h-full top-10 left-0 z-0">
          <Image
            src={"/assets/bg-circle.svg"}
            width={1000}
            height={1000}
            style={{ height: "100%", width: "auto" }}
            alt="..."
          />
        </div>
      </main>
    </section>
  );
};

export default Main;
