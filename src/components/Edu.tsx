import Flex from '@/layouts/Flex'
import Image from 'next/image'
import React from 'react'
import image from "../../public/icCer.png"

const edu=[
  {
    id:1,
    title:"MERN Stack Development",
    duration:"2025-2026",
    institute:"Creative IT Institute",
    certificate: "https://drive.google.com/file/d/1CmEoU1kZ1o4lFbXV6UoYj2rW6Vn2Ck0o/view?usp=share_link"
  },
  {
    id:2,
    title:"MERN Stack Development",
    duration:"2025-2025",
    institute:"Interactive Cares",
    certificate: "https://drive.google.com/file/d/1CmEoU1kZ1o4lFbXV6UoYj2rW6Vn2Ck0o/view?usp=share_link"
  },
  {
    id:3,
    title:"System Design: Theory to Implementation",
    duration:"2026-2026",
    institute:"Interactive Cares",
    certificate: "https://drive.google.com/file/d/1CmEoU1kZ1o4lFbXV6UoYj2rW6Vn2Ck0o/view?usp=share_link"
  }

]

const Edu = () => {
  return (
    <Flex className="w-full  py-5">
      <Flex className="w-full ">
        <h2
          className='relative font-primary mb-3 text-center  font-bold text-black
          after:content-[""] after:absolute after:left-0 after:bottom-0 pb-3 after:h-[3px] after:bg-black after:w-0
          hover:after:w-80 after:transition-all after:duration-300'
        >
          Education & Trainings;
        </h2>
      </Flex>
{
  edu.map((item)=>(
          <Flex key={item.id} className='justify-between group hover:border-l-5 hover:pl-3 transition-all duration-300 border-background my-2 w-full'>
        <div className="left">
          <h3 className='text-black font-medium'>{item.title}</h3>
          <p className='text-background/90 my-1 text-sm'>{item.institute}</p>
          <span className='bg-foreground/90 px-2 py-1 rounded-sm text-background text-xs'>{item.duration}</span>
        </div>
        <div>
          <Image
            width={100}
            height={100}
            src={image}
            alt="certificate"
            className="group-hover:scale-110 transition-all duration-300"
            
          />
        </div>
      </Flex>
  ))
}
      

      </Flex>
  )
}

export default Edu