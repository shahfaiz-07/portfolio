"use client"
import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import {
  Avatar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Link,
  Divider,
} from "@heroui/react";
import { FaXTwitter } from "react-icons/fa6";
import { SiGeeksforgeeks, SiGmail, SiLeetcode } from "react-icons/si";

const socials = [
    { icon: <FaInstagram/>, link:"https://www.instagram.com/_.shahfaiz_96?igsh=bTloMTNybWk5NG01" },
    { icon: <FaGithub/>, link:"https://www.instagram.com/_.shahfaiz_96?igsh=bTloMTNybWk5NG01" },
    { icon: <FaLinkedin/>, link:"https://www.linkedin.com/in/s-faizaan-hussain-70b840248" },
    { icon: <FaXTwitter/>, link:"https://x.com/shahfaiz_96" },
    { icon: <SiGmail/>, link:"mailto:hussainfaizaan.s2004@gmail.com" },
    { icon: <SiLeetcode/>, link:"https://leetcode.com/u/shahfaiz/" },
    { icon: <SiGeeksforgeeks />, link: "https://www.geeksforgeeks.org/user/hussainfa5a3w/"
}
]

export const UserTwitterCard = () => {

  return (
    <Card className="max-w-[300px] border-none" shadow="none">
      <CardHeader className="justify-between space-x-2">
        <div className="flex gap-3">
          <Avatar
            isBordered
            color="primary"
            radius="full"
            size="md"
            src="https://avatars.githubusercontent.com/u/111171229?v=4"
          />
          <div className="flex flex-col items-start justify-center">
            <h4 className="text-small text-foreground font-semibold leading-none">Shah Faizaan Hussain</h4>
            <h5 className="text-small tracking-tight text-default-500">@shahfaiz</h5>
          </div>
        </div>
      </CardHeader>
      <CardBody className="px-3 py-0">
        <p className="text-small pl-px text-default-500">
          Full-stack developer 💻
        </p>
      </CardBody>
      <Divider className="mt-2"/>
      <CardFooter className="gap-3">
        {
            socials.map((items, index) => (<Link key={index} href={items.link} className="text-white" isExternal>
                {items.icon}
            </Link>))
        }
      </CardFooter>
    </Card>
  );
};

export default function App() {
  return (
    <Popover placement="bottom" backdrop="blur">
      <PopoverTrigger>
        <Avatar isBordered color="primary" src="https://avatars.githubusercontent.com/u/111171229?v=4" />
      </PopoverTrigger>
      <PopoverContent className="p-1">
        <UserTwitterCard />
      </PopoverContent>
    </Popover>
  );
}

