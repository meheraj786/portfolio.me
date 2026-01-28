import Flex from "@/layouts/Flex";
import Image from "next/image";
import React from "react";
import image from "../../public/bannerImg.jpg"

const About = () => {
  return (
    <Flex className="w-full py-5">
      <Flex className="w-full justify-end">
        <h2
          className='relative font-primary text-3xl text-center  font-bold text-black
          after:content-[""] after:absolute after:right-0 after:bottom-0 pb-3 after:h-[3px] after:bg-black after:w-0
          hover:after:w-60 after:transition-all after:duration-300'
        >
          AboutMe;
        </h2>
      </Flex>

      <div className="w-1/2">
        <div className="relative w-[260px] h-[260px]">
          <div className="inset-[8px] rounded-sm  bg-white flex justify-center items-center overflow-hidden">
            <Image
              width="230"
              height="230"
              className="rounded-sm object-cover"
              src={image}
              alt="bannerImage"
            />
          </div>
        </div>
      </div>
      <div className="flex-1">
        <p className="text-background/90 text-sm my-5 text-right font-body">
          Hi, I’m Meheraj Hosen — a passionate MERN stack developer from Dhaka,
          Bangladesh. I love building modern, responsive web applications and
          exploring new technologies. Skilled in HTML, CSS, JavaScript, React,
          Tailwind, Node.js, Express, and MongoDB. Always eager to learn,
          create, and share ideas through real-world projects.
        </p>
      </div>
    </Flex>
  );
};

export default About;
