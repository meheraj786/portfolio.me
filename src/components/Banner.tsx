import Flex from "@/layouts/Flex";
import Image from "next/image";
import React from "react";
import img from "../../public/banner.jpg";
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

const socials = [
  { id: 1, icon: <FaGithub />, link: "https://github.com/meheraj786" },
  { id: 2, icon: <FaLinkedin />, link: "https://linkedin.com/in/meherajhosen" },
  { id: 3, icon: <FaTwitter />, link: "https://twitter.com/meherajhosen" },
  { id: 4, icon: <FaFacebook />, link: "https://facebook.com/meherajhosen" },
];

const Banner = () => {
  return (
    <Flex className="w-full overflow-hidden gap-y-5 md:gap-y-0">
      <div className="md:w-1/2">
        <h1 className="text-black font-medium  md:text-4xl text-3xl font-primary">
          &lt;Meheraj Hosen/&gt;
        </h1>
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
        <div className="flex items-center gap-4 mt-6">
          {socials.map(({ id, icon, link }) => (
            <a
              key={id}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white text-background rounded-lg hover:bg-background hover:text-white border border-background transition duration-300"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
      <div className="md:w-1/2 ">
        <div className="relative w-[260px] h-[260px] md:ml-auto mx-auto md:mx-0">
          <div
            className="absolute animate-spin duration-60000 inset-0 rounded-full"
            style={{
              background:
                "conic-gradient(from 0deg, #ef4444 0deg 90deg, #22c55e 90deg 180deg, #3b82f6 180deg 270deg, #eab308 270deg 360deg)",
              animationDuration: "7s",
            }}
          ></div>
          <div className="absolute inset-[8px] rounded-full bg-white flex justify-center items-center overflow-hidden">
            <Image
              width="230"
              height="230"
              className="rounded-full object-cover"
              src={img}
              alt="bannerImage"
            />
          </div>
        </div>
      </div>
    </Flex>
  );
};

export default Banner;
