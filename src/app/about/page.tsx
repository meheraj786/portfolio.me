import Flex from "@/layouts/Flex";
import Image from "next/image";
import React from "react";
import image from "../../../public/bannerImg.jpg";

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

Hello! I'm Meheraj, a dedicated full-stack developer and freelance professional with deep expertise in the JavaScript ecosystem — particularly MERN and PERN stacks.

On the frontend, I craft pixel-perfect, responsive, and fast-loading interfaces using React (with hooks, Context API, Redux/Redux Toolkit), Tailwind CSS, Material UI, and modern best practices. On the backend, I design secure, scalable RESTful/GraphQL APIs with Node.js + Express, handling authentication (JWT, OAuth), authorization, rate limiting, error handling, and more — all production-grade.

I'm comfortable with both NoSQL (MongoDB) and SQL (PostgreSQL) databases, choosing the right one based on project needs. I also have strong experience in system design topics like microservices, caching strategies, load balancing, and database scaling.

To date, I've successfully completed 10+ freelance projects — ranging from e-commerce solutions and booking platforms to complex admin dashboards and real-time applications. Every project prioritizes clean architecture, maintainable code, thorough documentation, and on-time delivery.

My goal is simple: deliver technical solutions that help businesses grow — scalable, maintainable, and future-proof. If you have an exciting idea or challenging project, feel free to reach out — I'm ready to bring it to life together!
        </p>
      </div>
    </Flex>
  );
};

export default About;
