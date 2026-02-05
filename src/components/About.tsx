import Flex from "@/layouts/Flex";
import Image from "next/image";
import React from "react";
import image from "../../public/bannerImg.jpg";

const About = () => {
  return (
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
      <div className="md:flex-1">
        <p className="text-background/90 text-sm my-5 md:text-right text-left font-body">
          Full-Stack Developer | MERN & PERN Specialist | Freelancer Hi, I'm
          Meheraj — a passionate full-stack developer specializing in MERN
          (MongoDB, Express, React, Node.js) and PERN (PostgreSQL, Express,
          React, Node.js) stacks. I build scalable, high-performance web
          applications with clean code, responsive UIs, and robust backends.
          I've successfully delivered multiple freelance projects — from
          startups to mid-sized businesses — including e-commerce platforms,
          SaaS dashboards, admin panels, and real-time features. I also enjoy
          system design, performance optimization, API architecture, and turning
          client visions into production-ready products quickly and reliably.
          Love solving challenging problems and delivering value. Let's
          collaborate and build something impactful!
        </p>
      </div>
    </Flex>
  );
};

export default About;
