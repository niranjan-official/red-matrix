"use client";
import Link from "next/link";
import React from "react";
import NavList from "../NavList";
import Image from "next/image";

const Navbar = () => {
  const activeNav = "border-b-2";
  return (
    <div className="w-full h-max flex justify-between items-center px-4 py-2 sm:px-12 z-50">
      <Image src={'/assets/logo/logo-1.png'} width={80} height={80} />
      <div className="hidden md:flex items-center gap-10 ">
        <div className="flex md:gap-4 lg:gap-12 text-lg">
          <Link className={`p-1 ${activeNav}`} href={"#home"}>
            Home
          </Link>
          <Link className={`p-1 `} href={"#service"}>
            Services
          </Link>
          <Link className={`p-1 `} href={"#team"}>
            Team
          </Link>
          <Link className={`p-1 `} href={"#faq"}>
            FAQ
          </Link>
          <Link className={`p-1 `} href={"#contact"}>
            Contact
          </Link>
        </div>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>
        </button>
      </div>
      <div className="md:hidden">
        <NavList />
      </div>
    </div>
  );
};

export default Navbar;
