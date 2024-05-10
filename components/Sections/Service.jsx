import React from "react";
import ServiceCard from "../ServiceCard";

const Service = () => {
  return (
    <div id="service" className="min-h-screen w-full flex flex-1 py-10 px-4 sm:px-14 lg:px-24">
      <div className="w-full flex flex-col items-center">
        <div className="flex flex-col items-center text-center gap-4 sm:px-16 lg:px-36">
          <h3 className="text-xl font-semibold">INNOVATE</h3>
          <h2 className="text-4xl sm:text-5xl font-bold">
            Transforming Ideas Into Digital Solutions
          </h2>
          <p className="text-sm sm:text-md text-justify sm:text-center">
            At REDD MATRIX, we specialize in web development, Graphics designing
            and digital marketing. Our team of experts is dedicated to creating
            innovative and impactful solutions that help business thrive in the
            digital world.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-6 mt-5">
          <ServiceCard title={'Web/App Development'} imgSrc={'web.svg'} info={'We design and develop stunning websites and apps that engage users and drive results '} />
          <ServiceCard title={'Influencers via marketing'} imgSrc={'ivm.svg'} info={'We design and develop stunning websites and apps that engage users and drive results '}/>
          <ServiceCard title={'Digital Marketing Services'} imgSrc={'digital-marketing.svg'} info={'We implement effective digital marketing campaign to drive traffic and boost conversions'} />
        </div>
      </div>
    </div>
  );
};

export default Service;
