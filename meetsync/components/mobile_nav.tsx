"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";

const links = [
    {
        name:"home",
        path: "/"
    },
    {
        name:"projects",
        path: "/projects"
    },
    {
        name:"photos",
        path: "/photography"
    },
    {
        name:"resume",
        path: "/resume"
    },
    {
        name:"contact",
        path: "mailto:lukas@lzainzinger.com"
    },
]

export const MobileNav = () => {
    const pathname = usePathname();

    return(
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-[32px] text-yellow-300 " />
            </SheetTrigger>
            <SheetContent className="flex flex-col text-white bg-primary">
                <div className="mt-32 mb-40 text-center text-2xl">
                    <Link href="/">
                        <h1 className="text-4xl font-semibold">
                            MeetSync<span className="text-yellow-300">.</span>
                        </h1>
                    </Link>
                </div>
                <nav className="flex flex-col justify-center items-center gap-8">
                    {links.map((link, index) => {
                    return(
                        <Link href={link.path} key={index} className={`${
                            link.path  === pathname && "text-yellow-300 border-b-4 font-bold border-yellow-300"} 
                            font-medium hover:text-yellow-300 transition-all`}
                        >
                            {link.name}
                        </Link>
                    );
            })}
                </nav>
            </SheetContent>
        </Sheet>
    );
}