import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";

const NavList = () => {
    const activeNav = 'bg-violet-900 bg-opacity-30'
  return (
    <Sheet>
      <SheetTrigger asChild>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
          />
        </svg>
      </SheetTrigger>
      <SheetContent
        className={"border-0 bg-violet-800 bg-opacity-30 p-4 text-white"}
      >
        <h1 className="text-3xl font-bold">Logo</h1>
        <hr className="my-4" />
        <div className="flex flex-col gap-4 text-xl">
          <Link className={`p-1 pl-2 ${activeNav}`} href={"#"}>
            Home
          </Link>
          <Link className={`p-1 pl-2 `} href={"#"}>
            Services
          </Link>
          <Link className={`p-1 pl-2 `} href={"#"}>
            Portfolio
          </Link>
          <Link className={`p-1 pl-2 `} href={"#"}>
            Careers
          </Link>
          <Link className={`p-1 pl-2 `} href={"#"}>
            Contact
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default NavList;
