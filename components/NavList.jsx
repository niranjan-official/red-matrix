import React from "react";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";

const NavList = () => {
    const activeNav = "bg-violet-900 bg-opacity-30";
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
                className={
                    "border-0 bg-violet-800 bg-opacity-30 p-4 text-white"
                }
            >
                <h1 className="text-3xl font-bold uppercase text-white">
                    redd matrix
                </h1>
                <hr className="my-4" />
                <div className="flex flex-col gap-4 text-xl">
                    <SheetClose asChild>
                        <Link
                            className={`p-1 pl-2 ${activeNav}`}
                            href={"#home"}
                        >
                            Home
                        </Link>
                    </SheetClose>
                    <SheetClose asChild>
                        <Link className={`p-1 pl-2 `} href={"#service"}>
                            Services
                        </Link>
                    </SheetClose>
                    <SheetClose asChild>
                        <Link className={`p-1 pl-2 `} href={"#team"}>
                            Team
                        </Link>
                    </SheetClose>
                    <SheetClose asChild>
                        <Link className={`p-1 pl-2 `} href={"#faq"}>
                            FAQ
                        </Link>
                    </SheetClose>
                </div>
            </SheetContent>
        </Sheet>
    );
};

export default NavList;
