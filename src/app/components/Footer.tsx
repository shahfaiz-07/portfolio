"use client"
import React from 'react'
import { AcmeLogo } from './Navbar'
import { IoMdMail } from 'react-icons/io'
import { SiGmail } from 'react-icons/si'
import { FaPhone } from 'react-icons/fa'
import { socials } from '../page'
import { Button, Link } from '@heroui/react'


const Footer = () => {
  return (
    <div className='flex flex-col-reverse md:flex-row justify-between items-center font-mono p-5 md:p-10 gap-5'>
      <div className='flex items-center gap-x-2'><AcmeLogo /> <p className="font-rubik text-inherit text-2xl">SHAH</p></div>
      <div>
        <ul className='text-sm md:text-base'>
          <li className='text-center'>Copyright © 2025 S Faizaan Hussain</li>
          <li className='flex gap-x-2 items-center justify-center'><SiGmail /> <span>hussainfaizaan07.com</span></li>
          <li className='flex gap-x-2 items-center justify-center'><FaPhone /> <span>+91 8987581690</span></li>
        </ul>
      </div>
      <div className="flex gap-x-2 md:gap-x-4">
        {
          socials.map((item, index) => <Link key={index} isExternal href={item.link}>
            <Button isIconOnly className="aspect-square rounded-full text-xl" variant="light" color="primary" size='sm'>
              {item.icon}
            </Button></Link>)
        }
      </div>
    </div>
  )
}

export default Footer