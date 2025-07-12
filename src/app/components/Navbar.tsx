"use client"
import React from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    Link
} from "@heroui/react";

import MyAvatar from './MyAvatar'
import { usePathname } from "next/navigation";

export const AcmeLogo = () => {
    return (
        // <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
        //   <path
        //     clipRule="evenodd"
        //     d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        //     fill="currentColor"
        //     fillRule="evenodd"
        //   />
        // </svg>
        <svg fill="#ffffff" height="36" width="36" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <ellipse cx="68.256" cy="125.044" rx="13.184" ry="13.168"></ellipse> </g> </g> <g> <g> <ellipse cx="103.208" cy="125.044" rx="13.184" ry="13.168"></ellipse> </g> </g> <g> <g> <ellipse cx="138.16" cy="125.044" rx="13.184" ry="13.168"></ellipse> </g> </g> <g> <g> <polygon points="202.024,104.332 174.216,146.908 456.928,146.908 456.928,104.332 "></polygon> </g> </g> <g> <g> <path d="M488,49.332H24c-13.2,0-24,10.8-24,24v365.336c0,13.2,10.8,24,24,24h464c13.2,0,24-10.8,24-24V73.332 C512,60.132,501.2,49.332,488,49.332z M480,421.916L457.856,405.1h-63.632l33.544,25.568h-27.704L366.4,405.092H145.592 l-33.664,25.568H84.224l33.544-25.568H54.144L32,421.908V81.332h448V421.916z"></path> </g> </g> <g> <g> <polygon points="214.088,212.924 103.384,260.836 103.384,287.492 214.088,335.636 214.088,304.46 136.872,273.836 214.088,244.316 "></polygon> </g> </g> <g> <g> <polygon points="264.32,189.788 224.336,356.78 247.136,356.78 287.56,189.788 "></polygon> </g> </g> <g> <g> <polygon points="297.808,213.148 297.808,244.1 375.128,274.172 297.808,304.572 297.808,335.748 408.616,287.492 408.616,261.068 "></polygon> </g> </g> </g></svg>
// </svg>


    );
};

export default function App() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = [
        {name: "Home", href:"/"},
        {name: "About Me", href:"/about"},
        {name: "Projects", href:"/projects"},
        {name: "Contact Me", href:"/contact"},
    ];

    const pathname = usePathname();
    console.log(pathname)

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen} isBordered className="border-b border-b-zinc-600">
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand className="space-x-2 md:space-x-4">
                    <AcmeLogo />
                    <p className="font-rubik text-inherit text-2xl">SHAH</p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4 md:gap-7 lg:gap-10 font-mono" justify="center">
                {
                    menuItems.map((item, index) => <NavbarItem key={index} isActive = {pathname == item.href}>
                        <Link href={item.href} color = {pathname == item.href ? "primary" : "foreground"} className="font-mono">
                            {item.name}
                        </Link>
                    </NavbarItem>)
                }
            </NavbarContent>
            <NavbarContent justify="end">
                <MyAvatar/>
            </NavbarContent>
            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`} isActive={pathname == item.href}>
                        <Link
                            className="w-full font-mono"
                            href={item.href}
                            size="lg"
                            color={pathname == item.href ? "primary" : "foreground"}
                        >
                            {item.name}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}

