import Flex from '@/layouts/Flex'
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
     <Flex className="w-full py-[40px]">
            <div className="w-1/2">
        <div className="relative w-[260px] h-[260px] ms-auto">
          <div className="inset-[8px] rounded-full bg-white flex justify-center items-center overflow-hidden">
            <Image
              width="230"
              height="230"
              className="rounded-full object-cover"
              src={""}
              alt="bannerImage"
            />
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <p className="text-background/90 text-sm my-5 font-body">
          A Passionate MERN stack Dev and Tech Enthusiast from the Milky Way
          Galaxy, within the Orion Arm, orbiting the Sol (Sun) star, living on
          the third orbital planet named Earth(A Blue Planet), in the continent
          of Asia, in the country of Bangladesh, in the city of Dhaka — a
          negligible being in the grand scheme of the cosmos.
        </p>
        <p className="mb-8 text-background/90 text-sm font-body">
          Dhaka, Bangladesh
        </p>
      </div>

    </Flex>
  )
}

export default About