import React from 'react'
import ContactForm from '../components/ContactForm'
import { FaLocationArrow, FaPhone } from 'react-icons/fa'
import { IoMdMail } from 'react-icons/io'
import { FaLocationDot } from 'react-icons/fa6'


const contactDetails = [
  { item: <FaPhone/>, title: "Phone", detail: "(+91) 8987581690"},
  { item: <IoMdMail/>, title: "Email", detail: "hussainfaizaan07@gmail.com"},
  { item: <FaLocationDot/>, title: "Address", detail: "Jamshedpur, Jharkhand"},
]
const Contact = () => {

  return (
    <div>
      <div className='flex p-5 lg:p-10 flex-col-reverse lg:flex-row lg:gap-x-5 lg:justify-between lg:items-center'>
        <ContactForm/>
        <div className='flex flex-col font-mono grow my-5  lg:px-5'>
          <h2 className='text-3xl font-bold text-primary mb-5'>Contact Details</h2>
          <div className='flex flex-col gap-y-5 mb-15 lg:mb-0'>
          {
            contactDetails.map((item, index) => <div key={index} className='flex items-center gap-x-4'>
              <div className=' w-15 h-15 grid place-content-center rounded bg-zinc-800 text-lg text-primary'>
                {item.item}
              </div>
              <div>
                <h4>{item.title}</h4>
                <p className='text-sm'>{item.detail}</p>
              </div>
            </div>)
          }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact