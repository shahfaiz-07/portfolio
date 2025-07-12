"use client"
import Image from "next/image";
import image from '../../public/hero-bg.png'
import Typer from "./components/Typer";
import { Button, Link } from "@heroui/react";
import { RiFileDownloadLine } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa";
import MyNumber from "./components/MyNumber";
import self from "../../public/image.png"
import { socials } from "@/constants";

const stats = [
  { number: 10, message1: "Projects", message2: "Completed" },
  { number: 30, message1: "Technical", message2: "Skills" },
  { number: 360, message1: "LeetCode", message2: "Solved" },
  { number: 25, message1: "Github", message2: "Repos" },
]
export default function Home() {
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/uc?export=download&id=1PnUkU_JkAUWKgL-R46m2DCRSy27iuco6'
    link.download = 'S Faizaan\'s Resume.pdf'
    link.click()
  }
  return (
    <div className="min-h-full w-full">
      <div className="flex flex-col-reverse md:flex-row px-6 py-10 lg:px-10 items-center md:justify-between">
        <div>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-mono font-extrabold text-center md:text-left">Hello, I'm</h2>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-mono font-extrabold text-primary text-center md:text-left">S Faizaan Hussain</h2>
          <div className="mt-5 font-mono space-y-3">
            <h2 className="text-base md:text-xl">I'm passionate <Typer /></h2>
            <p className="text-base md:text-xl">With expertise in web technologies, I specialize in building responsive web experiences with a focus on intuitive design that enhances user satisfaction and drives business value.</p>
            <div className="flex flex-col-reverse sm:flex-row gap-x-2 md:gap-x-4 gap-y-3 items-center mt-5">
              <Button color="primary" variant="ghost" className="rounded-full text-lg font-bold py-5" endContent={<RiFileDownloadLine />} onPress={downloadResume}>
                Download Resume
              </Button>
              <div className="flex gap-x-2 md:gap-x-4">
                {
                  socials.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <Link key={index} isExternal href={item.link}>
                    <Button isIconOnly className="aspect-square rounded-full text-xl" variant="ghost" color="primary">
                      <Icon/>
                    </Button></Link>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
        <div className="shrink-0">
          <Image src={image} alt={"logo"} className="w-96 lg:w-[500px]" />
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 px-6 lg:px-10 gap-5">
        {
          stats.map((stat, index) => <div key={index} className="flex items-center justify-center gap-x-2">
            <MyNumber finalCount={stat.number}/>
            <div className="text-white font-mono">
              <p className="text-xs md:text-base">{stat.message1}</p>
              <p className="text-xs md:text-base">{stat.message2}</p>
            </div>
          </div>)
        }
      </div>
      <div className="flex flex-col-reverse md:flex-row px-6 py-10 lg:px-10 lg:py-16 items-center md:justify-between gap-8">
        <div className="font-mono flex flex-col gap-5">
          <p className="text-base md:text-xl text-justify">Hi, I'm S Faizaan Hussain, a final-year B.Tech Information Technology student at VIT, Vellore with a strong foundation in software development and a passion for building clean, user-centric products. I've developed and deployed multiple full-stack projects using modern frameworks like Next.js, React, and Docker. With 500+ DSA problems solved on platforms like LeetCode and GFG, I balance development with algorithmic problem-solving. I'm currently seeking impactful opportunities to apply my skills in real-world environments and continue learning.</p>
          <Link href="/about"><Button color="primary" variant="shadow" endContent={<FaArrowRight/>} className="w-fit rounded-full">
            Discover More
          </Button>
          </Link>
        </div>
        <div className="shrink-0 border-6 rounded-full p-1 border-primary">
          <Image src={self} alt={"logo"} className="w-96 md:w-[500px] rounded-full aspect-square object-cover"/>
        </div>
      </div>
    </div>
  );
}
