"use client"
import { Pagination } from '@heroui/react'
import edypros from "../../../public/edypros.png"
import askanon from "../../../public/askanon.png"
import cinematch from "../../../public/cinematch.png"
import streamly from "../../../public/streamly.png"
import visualizer from "../../../public/visualizer.png"
import colorcombo from "../../../public/colorcombo.png"
import dsa from "../../../public/dsa.png"
import archives from "../../../public/archives.png"
import weather from "../../../public/weatherme.png"
import portfolio from "../../../public/portfolio.png"
import React, { useState } from 'react'
import DisplayProject, { DisplayProps } from '../components/DisplayProject'

const projects: Array<DisplayProps> = [
  {
    no: 1,
    title: "Edypros",
    image: edypros,
    overview: "Edypros is a comprehensive ed-tech platform designed to facilitate seamless learning and teaching experiences. It allows students to explore courses, manage wishlists and carts, access multimedia course content, and maintain personal account information. Instructors are equipped with powerful tools for course creation, performance tracking, and profile management. The platform also features a secure, integrated payment system via Razorpay, ensuring smooth and safe transactions for users.",
    url: "https://github.com/shahfaiz-07/Edypros_Frontend",
    url2: "https://github.com/shahfaiz-07/Edypros_Backend",
    techStack: ["react", "vite", "tailwind", "express", "js", "node", "razorpay", "mongodb", "chartjs", "redux"]
  },
  {
    no: 2,
    title: "AskAnon",
    image: askanon,
    overview: "AskAnon is an anonymous Q&A platform that allows users to receive and respond to anonymous questions. It provides a seamless and secure way for users to interact while maintaining privacy. The platform includes features such as a public profile, AI-powered suggestions, and user customization options.",
    url: "https://github.com/shahfaiz-07/askanon",
    techStack: ["next", "ts", "tailwind", "mongodb", "gemini", "shadcn", "zod", "oauth"]
  },
  {
    no: 3,
    title: "Portfolio",
    image: portfolio,
    overview: "A sleek, responsive developer portfolio built using Next.js, Tailwind CSS, and HeroUI, designed to showcase my projects, skills, and problem-solving journey. The site features smooth page transitions, modern UI components, and integrations with platforms like GitHub, LeetCode, and GFG. Whether it's frontend aesthetics or backend logic, this portfolio reflects my commitment to clean code and developer-first design.",
    url: "https://github.com/shahfaiz-07/portfolio",
    techStack: ["next", "ts", "tailwind", "heroui"]
  },
  {
    no: 4,
    title: "CineMatch",
    image: cinematch,
    overview: "A content-based movie recommender built with FastAPI and React. The backend uses a precomputed similarity matrix (via CountVectorizer and cosine similarity) on the TMDB 5000 movies dataset to suggest similar movies based on user input. This project enables users to pick a movie from a dropdown/searchable select box and get personalized recommendations. The FastAPI backend handles the recommendation logic, while the React frontend (deployed on Vercel) provides a sleek UI.",
    url: "https://github.com/shahfaiz-07/cinematch",
    techStack: ["react", "ts", "vite", "tailwind", "python", "fastapi", "scikit_learn", "heroui"]
  },
  {
    no: 5,
    title: "Stream.ly",
    image: streamly,
    overview: "Stream.ly is a full-stack video-sharing platform that allows users to authenticate via multiple providers, upload videos, and explore content through a clean, modern interface. It features secure authentication using NextAuth with support for Google, GitHub, Discord, and credentials. Users can easily upload videos through ImageKit and browse all content seamlessly. The platform is containerized using Docker, making it easy to deploy on services like Render for scalable production use.",
    url: "https://github.com/shahfaiz-07/streamly",
    techStack: ["next", "ts", "tailwind", "docker", "oauth", "daisyui", "mongodb"]
  },
  {
    no: 6,
    title: "Tree Visualizer",
    image: visualizer,
    overview: "Tree Visualizer is an interactive web app that lets users input a binary tree using level order traversal and instantly see it rendered on screen. It visually demonstrates various traversal methods—like in-order, pre-order, post-order, and level order—by dynamically highlighting each node as it's visited. Users can explore how each traversal works in real-time and view the final sequence of visited nodes for better understanding. The tool aims to make learning tree algorithms more intuitive and engaging, with plans for future enhancements like animations, manual controls, support for advanced tree types, and export options.",
    url: "https://github.com/shahfaiz-07/tree_visualizer",
    techStack: ["react", "vite", "js", "tailwind", "xyflow", "redux"]
  },
  {
    no: 7,
    title: "Weather Me",
    image: weather,
    overview: "WeatherMe is a simple and user-friendly weather application that provides real-time weather updates based on your chosen city. It displays detailed forecasts for the current day along with 3-hour interval predictions and extended forecasts for the next three days. The app fetches live weather data from an external API and presents it in a clean, visual format, helping users stay informed about upcoming weather conditions at a glance.",
    url: "https://github.com/shahfaiz-07/weatherme",
    techStack: ["react", "vite", "js", "tailwind", "chartjs"]
  },
  {
    no: 8,
    title: "Color Combo Clone",
    image: colorcombo,
    overview: "Color Combination Clone is a pixel-perfect replica of the 'Pink Flare' section from the original Color Combination website. It features smooth, scroll-triggered animations powered by GSAP, delivering a visually engaging experience. The project focuses on layout precision, interactive motion effects, and modern design aesthetics using just HTML, CSS, and JavaScript.",
    url: "https://github.com/shahfaiz-07/colorcombo",
    techStack: ["html", "css", "js", "gsap"]
  },
  {
    no: 9,
    title: "DSA Archives Website",
    image: archives,
    overview: "A developer-friendly web app to browse and search through my personal solutions to problems from platforms like LeetCode, GeeksforGeeks, and others. Solutions are organized by topic, platform, and difficulty — all accessible through an intuitive UI built with Next.js, Tailwind CSS, HeroUI, and TypeScript.",
    url: "https://github.com/shahfaiz-07/dsa-archives",
    techStack: ["next", "tailwind", "ts", "heroui", "github"]
  },
  {
    no: 10,
    title: "DSA Archives Repo",
    image: dsa,
    overview: "This GitHub repository serves as a structured collection of my solutions to Data Structures and Algorithms (DSA) problems from platforms like LeetCode, GeeksforGeeks, and Coding Ninjas. It's organized by topic (e.g., Arrays, Trees, Graphs), and each topic is further divided by platform and difficulty level (Easy, Medium, Hard). Every problem folder includes both C++ and Java solutions, with the original problem link provided at the top of each file. The goal is to showcase consistency, platform-agnostic problem solving, and language versatility.",
    url: "https://github.com/shahfaiz-07/dsa_archives",
    techStack: ["java", "cpp"]
  },
]
const Projects = () => {
  const [page, setPage] = useState<number>(1);
  return (
    <div className='flex w-full flex-col font-mono px-5 md:px-10 py-5'>
      <Pagination initialPage={1} total={projects.length} showControls loop  page={page} onChange={setPage} className='cursor-pointer hidden lg:block self-start' radius='full' size="lg" showShadow siblings={3}/>
      <Pagination initialPage={1} total={projects.length} showControls loop  radius='full' page={page} onChange={setPage} className='cursor-pointer hidden md:block lg:hidden self-start' size="md" siblings={3} showShadow/>
      <Pagination initialPage={1} total={projects.length} showControls loop  radius='full' page={page} onChange={setPage} className='cursor-pointer self-center md:hidden' size="sm" showShadow variant='flat'/>
      <DisplayProject {...projects[page - 1]}/>
      <Pagination initialPage={1} total={projects.length} showControls loop  radius='full' page={page} onChange={setPage} className='cursor-pointer hidden lg:block self-end shrink' size='lg' showShadow siblings={3}/>
      <Pagination initialPage={1} total={projects.length} showControls loop  radius='full' page={page} onChange={setPage} className='cursor-pointer hidden md:block lg:hidden self-end' size="md" showShadow siblings={3}/>
      <Pagination initialPage={1} total={projects.length} showControls loop  radius='full' page={page} onChange={setPage} className='cursor-pointer self-center md:hidden' size="sm" showShadow/>
    </div>
  )
}

export default Projects