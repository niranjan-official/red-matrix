import React from "react";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" bg-blue-950 bg-opacity-80 py-4">
      <div className="flex flex-col">
        <div className="w-full flex flex-col md:flex-row justify-between md:items-center p-4 md:10 lg:px-16">
          <div className="flex flex-col text-neutral-300">
            <h1 className="text-3xl font-bold uppercase text-white">
              redd matrix
            </h1>
            <h2 className="mt-2">6th Floor, SCMS College Building</h2>
            <h3>North Kalamassery, Ernakulam</h3>
            <h4>Kerala 683104</h4>
            <div className="flex flex-col">
              <p className="mt-2 text-white font-medium">
                Subscribe to our Newsletter
              </p>
              <div className="flex mt-1 gap-2">
                <input
                  className="p-2 bg-transparent rounded-[0.4rem]"
                  type="email"
                  placeholder="Enter your Email"
                />
                <button className="p-2 rounded-[0.4rem] bg-blue-700 text-white font-medium">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 max-md:mt-6">
            <h2 className="text-2xl font-extrabold">Contact Us</h2>
            <p className="flex gap-2 items-center mt-2">
              <IoMdMail size={20} />
              reddmatrixmedia@gmail.com
            </p>
            <p className="flex gap-2 items-center">
              <FaPhoneAlt size={16} />
              +91 7994964688
            </p>
            <hr className="my-2" />
            <div className="flex gap-4 items-center text-neutral-200">
              <a href="#">
                <BsInstagram size={20} />
              </a>
              <a href="#">
                <FaFacebook size={20} />
              </a>
              <a href="#">
                <BsTwitterX size={20} />
              </a>
              <a href="#">
                <FaYoutube size={20} />
              </a>
              <a href="#">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
        </div>
        <hr className="my-5 px-20" />
        <div className="w-full flex justify-center text-extralight text-sm">
        © 2024 &nbsp;<span className="font-bold">REDDMATRIX MEDIA</span>. All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
