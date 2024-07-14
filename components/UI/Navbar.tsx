"use client"

import { FunctionComponent } from "react";
import Image from "next/image";
import Link from "next/link";
import { Crosshair } from "@phosphor-icons/react/dist/ssr";
import { usePathname } from "next/navigation";

// Import your logo image
import StBartholomeusLogo from "@/public/st-bartholomeus-logo.png";

const Navbar: FunctionComponent = () => {
    const pathname = usePathname();

    const isActive = (href: string) => {
        // Check if the current pathname matches the href
        return pathname === href ? "underline text-primary" : "";
    };

    return (
        <nav className="w-full flex justify-between items-center h-20 border-b-2 border-text/10 mb-4">
            {/* Nav Brand */}
            <ul className="flex items-center gap-x-4 cursor-pointer">
                {/* <Image src={StBartholomeusLogo} alt="" className="w-12" /> */}
                <Crosshair size={48} className="text-primary hover:animate-pulse" />
                <Link href="/" className="font-bold text-lg">
                    St. Bartholomeus
                </Link>
            </ul>

            {/* Nav Right */}
            <ul className="flex items-center gap-x-8 font-medium">
                <Link href="/wedstrijd-kalenders" className={`opacity-80 transition-opacity hover:opacity-100  ${isActive("/wedstrijd-kalenders")}`}>
                    Wedstrijd Kalenders
                </Link>
                <Link href="/over-ons" className={`opacity-80 transition-opacity hover:opacity-100  ${isActive("/over-ons")}`}>
                    Over ons
                </Link>
                <Link href="/huishoudelijk-regelement" className={`opacity-80 transition-opacity hover:opacity-100 ${isActive("/huishoudelijk-regelement")}`}>
                    Huishoudelijk Regelement
                </Link>
                <Link href="/contact" className={`opacity-80 transition-opacity hover:opacity-100 ${isActive("/contact")}`}>
                    Contact
                </Link>
                <Link href="/lid-worden" className="px-2 py-2 bg-primary rounded-md hover:opacity-75 transition-opacity text-white">
                    Lid worden
                </Link>
            </ul>
        </nav>
    );
};

export default Navbar;
