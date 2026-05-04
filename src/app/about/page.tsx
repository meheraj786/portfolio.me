import Flex from "@/layouts/Flex";
import Image from "next/image";
import React from "react";
import image from "../../../public/meherajImg.png";
import Skill from "@/components/Skill";

const About = () => {
  return (
    <>
      <Flex className="w-full py-5">
        <Flex className="w-full justify-end">
          <h2
            className='relative font-primary  text-center  font-bold text-black
          after:content-[""] after:absolute after:right-0 after:bottom-0 pb-3 after:h-[3px] after:bg-black after:w-0
          hover:after:w-60 after:transition-all after:duration-300'
          >
            AboutMe;
          </h2>
        </Flex>

        <div className="md:w-1/2">
          <div className="relative w-[260px] h-[260px]">
            <div className=" rounded-sm bg-offWhite flex justify-center items-center overflow-hidden">
              <Image
                width="230"
                height="230"
                className="rounded-sm  object-cover"
                src={image}
                alt="bannerImage"
              />
            </div>
          </div>
        </div>
        <div className="md:flex-1 mt-10 md:mt-0">
          <p className="text-background/90 text-sm my-5 md:text-right text-left font-body">
            I'm Meheraj — a Full Stack Developer based in Dhaka, Bangladesh. I
            specialize in building modern web applications using the MERN and
            PERN stack. From designing beautiful interfaces with React and
            Tailwind to creating robust backends with Node.js, Express, and
            databases like MongoDB or PostgreSQL — I enjoy every part of the
            journey. I'm deeply interested in writing clean, maintainable code
            and understanding how large-scale systems work. Constantly learning
            and experimenting with new tools and best practices is what keeps me
            motivated. If you're working on something interesting or just want
            to connect, don't hesitate to say hi!
          </p>
        </div>
      </Flex>
      <Skill />
    </>
  );
};

export default About;
