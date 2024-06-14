"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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

export const Nav = () => {
    const pathname = usePathname();

    return(
        <nav className="flex gap-8 ">
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
    );
}