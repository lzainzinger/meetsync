import Link from "next/link";
import { Nav } from "@/components/nav";
import { MobileNav } from "@/components/mobile_nav";
//import { Button } from "@/components/ui/button"

const Header = () => {
    return (
        <header className="py-8 xl:py-12 px-2 text-white bg-primary">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/">
                    <h1 className="text-4xl font-semibold ">
                        MeetSync<span className="text-yellow-300">.</span>
                    </h1>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden xl:flex items-center gap-8">
                    <Nav />
                </div>

                {/* Mobile Nav */}
                <div className="xl:hidden">
                    <MobileNav></MobileNav>
                </div>
                
            </div>
        </header>
    );
}

export default Header