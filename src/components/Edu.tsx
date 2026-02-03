import Flex from "@/layouts/Flex";
import Image from "next/image";
import React from "react";
import image from "../../public/icCer.png";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { SquareArrowOutUpRight } from "lucide-react";

const edu = [
  {
    id: 1,
    title: "MERN Stack Development",
    duration: "2025-2026",
    institute: "Creative IT Institute",
    certificate:
      image,
  },
  {
    id: 2,
    title: "MERN Stack Development",
    duration: "2025-2025",
    institute: "Interactive Cares",
    certificate:
      "https://drive.google.com/file/d/1CmEoU1kZ1o4lFbXV6UoYj2rW6Vn2Ck0o/view?usp=share_link",
  },
  {
    id: 3,
    title: "System Design: Theory to Implementation",
    duration: "2026-2026",
    institute: "Interactive Cares",
    certificate:
      "https://drive.google.com/file/d/1CmEoU1kZ1o4lFbXV6UoYj2rW6Vn2Ck0o/view?usp=share_link",
  },
];

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
      {edu.map((item) => (
        <Dialog key={item.id}>
        <Flex
          className="justify-between  flex-row group hover:border-l-5 hover:pl-3 transition-all duration-300 border-background my-2 w-full"
        >
          <div className="left flex-1">
            <h3 className="text-black font-medium">{item.title}</h3>
            <p className="text-background/90 my-1 text-sm">{item.institute}</p>
            <span className="bg-foreground/90 px-2 py-1 rounded-sm text-background text-xs">
              {item.duration}
            </span>
          </div>
          <DialogTrigger>
          <div className="relative cursor-pointer">
            <Image
              width={100}
              height={100}
              src={image}
              alt="certificate"
              className="group-hover:scale-110 transition-all duration-300"
            />
            <div className="hidden group-hover:flex justify-center transition-all duration-300 items-center z-50 absolute group-hover:scale-110 w-full h-full top-0 left-0 bg-white/10 backdrop-blur-[2px]">
            <SquareArrowOutUpRight className="text-background text-xl" />
            </div>
          </div>
          </DialogTrigger>
          <DialogContent>
            <Image
              src={image}
              alt="certificate"
              className="w-full h-full"
              width={500}
              height={500}
            />
          </DialogContent>
        </Flex>
        </Dialog>
      ))}
    </Flex>
  );
};

export default Edu;
