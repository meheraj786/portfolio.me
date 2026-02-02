"use client";
import Container from "@/layouts/Container";
import Flex from "@/layouts/Flex";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

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
      title: "Articles",
      link: "/articles",
    },
    {
      title: "Contact",
      link: "/contact",
    },
  ];
  return (
    <div className="py-5 hidden md:block fixed top-0 bg-white/10 backdrop-blur-xs left-0 right-0 z-50 font-body">
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
