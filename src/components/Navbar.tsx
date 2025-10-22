"use client";
import Container from "@/layouts/Container";
import Flex from "@/layouts/Flex";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import img from "../../public/bannerImg.jpg";

const Navbar = () => {
  const pathname = usePathname();
  interface MenuItems {
    title: string;
    link: string;
  }

  const menuItems: MenuItems[] = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "About",
      link: "/about",
    },
    {
      title: "Skills",
      link: "/skills",
    },
    {
      title: "Projects",
      link: "/projects",
    },
    {
      title: "Blogs",
      link: "/blogs",
    },
    {
      title: "Contact",
      link: "/contact",
    },
  ];
  return (
    <div className="py-5 font-body">
      <Container>
        <Flex>
          <Link href="/"  className="text-black font-primary font-bold">
             &lt;Meheraj/&gt;
          </Link>
          <ul className="flex justify-end gap-x-10 text-sm items-center flex-1">
            {menuItems.map((item, idx) => (
              <Link
                className={
                  pathname == item.link
                    ? "text-white bg-background px-2 py-1 rounded-sm transition-colors duration-200 border border-white hover:border-black hover:border hover:bg-white hover:text-black"
                    : "text-black px-2 py-1 rounded-sm transition-colors duration-200 hover:bg-background hover:text-white"
                }
                href={item.link}
                key={idx}
              >
                {item.title}
              </Link>
            ))}
          </ul>
        </Flex>
      </Container>
    </div>
  );
};

export default Navbar;
