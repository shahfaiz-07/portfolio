"use client"
import { Tabs, Tab, Card, CardHeader, Divider, CardBody, CardFooter } from "@heroui/react";
import { MdSchool } from "react-icons/md";
import { LuBrainCircuit } from "react-icons/lu";
import { FaCode, FaGithub, FaHandshake } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import Leetcode from "../components/Leetcode";
import GFG from "../components/GFG";
import Github from "../components/Github";
import Skills from "../components/Skills";

function EduCard({ h1, h2, body, footer }: { h1: string, h2: string, body: string, footer: string }) {
  return (
    <Card className="max-w-sm border-none">
      <CardHeader className="">
        <div className="flex flex-col">
          <p className="text-md">{h1}</p>
          <p className="text-small text-default-500">{h2}</p>
        </div>
      </CardHeader>
      <Divider/>
      <CardBody>
        <p>{body}</p>
      </CardBody>
      <Divider/>
      <CardFooter>
        <p className="text-sm font-bold">{footer}</p>
      </CardFooter>
    </Card>
  )
}



const educationDetails = [
  {
    h1: "Class 10th (ICSE)",
    h2: "2020",
    body: "Kerala Samajam Model School, Jamshedpur, Jharkhand",
    footer: "97.5%"
  },
  {
    h1: "Class 12th (ISC)",
    h2: "2022",
    body: "Kerala Samajam Model School, Jamshedpur, Jharkhand",
    footer: "95.75%"
  },
  {
    h1: "B. Tech - Information Technology",
    h2: "2022-present",
    body: "Vellore Institute of Technology, Vellore, Tamil Nadu",
    footer: "CGPA - 9.26"
  },
]

export default function App() {
  return (
    <div className="flex w-full flex-col font-mono px-5 md:px-10 py-5">
      <Tabs aria-label="Options" color="primary" variant="bordered">
        <Tab
          key="education"
          title={
            <div className="flex items-center space-x-2">
              <MdSchool />
              <span>Education</span>
            </div>
          }
        >
          <h2 className="text-2xl font-bold flex space-x-3 items-center mt-3"><span>Education</span> <MdSchool /></h2>
          <p className="my-5">I am a Software Developer with a B.Tech in Computer Science & Engineering and currently pursuing an MBA in Business Analytics. I blend technical skills with a passion for learning and strategic insights. Below are my education details:</p>
          <div className="flex flex-wrap justify-center items-center gap-5">
            {
              educationDetails.map((details, index) => <EduCard key={index} {...details} />)
            }
          </div>
        </Tab>
        <Tab
          key="skills"
          title={
            <div className="flex items-center space-x-2">
              <LuBrainCircuit />
              <span>Skills</span>
            </div>
          }
        >
          <h2 className="text-2xl font-bold flex space-x-3 items-center mt-3"><span>Skills</span> <LuBrainCircuit /></h2>
          <p className="my-5">I have a diverse skill set in web development, specializing in both frontend and backend technologies. Proficient in Java, Python, and JavaScript, as well as frameworks like React and Next.js, I build dynamic, responsive applications. My skills also include databases and UI frameworks, allowing me to create seamless user experiences and strong backend solutions.</p>
          <Skills/>
        </Tab>
        <Tab
          key="know me"
          title={
            <div className="flex items-center space-x-2">
              <FaHandshake />
              <span>Know Me</span>
            </div>
          }
        >
          <h2 className="text-2xl font-bold flex space-x-3 items-center mt-3"><span>Profile</span> <FaHandshake /></h2>
          <div className="my-5 grid grid-cols-1 md:grid-cols-2 gap-4 md:text-lg list-none">
            <li><span className="text-primary font-semibold">Name:</span> S. Faizaan Hussain</li>
            <li><span className="text-primary font-semibold">Phone:</span> +91 8987581690</li>
            <li><span className="text-primary font-semibold">Age:</span> 22</li>
            <li><span className="text-primary font-semibold">Nationality:</span> Indian</li>
            <li><span className="text-primary font-semibold">Email:</span> hussainfaizaan07@gmail.com</li>
            <li><span className="text-primary font-semibold">Language:</span> English, Hindi, Urdu</li>
            <li><span className="text-primary font-semibold">College:</span> VIT, Vellore</li>
            <li><span className="text-primary font-semibold">Address:</span> Jamshedpur, Jharkhand</li>
          </div>
        </Tab>
        <Tab
          key="profiles"
          title={
            <div className="flex items-center space-x-2">
              <CgProfile />
              <span>Public Profiles</span>
            </div>
          }
        >
          <h2 className="text-lg md:text-2xl font-bold font-mono mb-2 flex gap-x-2 items-center"><span>Coding Profiles</span> <FaCode /></h2>
          <div className="flex items-center justify-evenly flex-wrap gap-5 ">
            <Leetcode />
            <GFG />
          </div>
          <h2 className="text-lg md:text-2xl font-bold font-mono mt-5 mb-2 flex gap-x-2 items-center"><span>Github Profile</span>  <FaGithub /></h2>
          <div>
            <Github />
          </div>
        </Tab>
      </Tabs>
    </div>
  );
}
