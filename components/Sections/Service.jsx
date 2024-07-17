import React from "react";
import ServiceCard from "../ServiceCard";

const Service = () => {
  return (
    <div
      id="service"
      className="min-h-screen w-full flex flex-1 py-10 px-4 sm:px-14 lg:px-24"
    >
      <div className="w-full flex flex-col items-center">
        <div className="flex flex-col items-center text-center gap-4 sm:px-16 lg:px-36">
          <h1 className="text-xl font-semibold">INNOVATE</h1>
          <h2 className="text-4xl sm:text-5xl font-bold">
            Transforming Ideas Into Digital Solutions
          </h2>
          <p className="text-sm sm:text-md text-justify sm:text-center">
            At <strong>REDD MATRIX</strong>, we specialize in web development,
            graphics designing, and digital marketing. Our team of experts is
            dedicated to creating innovative and impactful solutions that help
            businesses thrive in the digital world.
          </p>
        </div>
        <div className="flex flex-wrap justify-center mt-5 w-full">
          <ServiceCard
            title={"Web/App Development"}
            imgSrc={"/assets/web.svg"}
            info={
              "We design and develop stunning websites and apps that engage users and drive results"
            }
            altText={"Web/App Development"}
          />

          <ServiceCard
            title={"Personal Branding / Influencer Marketing"}
            imgSrc={"/assets/ivm.svg"}
            info={
              "We help businesses grow by leveraging the power of influencer marketing"
            }
            altText={"Influencer Marketing"}
          />

          <ServiceCard
            title={"Digital Marketing Services"}
            imgSrc={"/assets/digital-marketing.svg"}
            info={
              "We implement effective digital marketing campaigns to drive traffic and boost conversions"
            }
            altText={"Digital Marketing Services"}
          />
        </div>
      </div>
    </div>
  );
};

export default Service;
