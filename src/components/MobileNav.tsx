"use client";
import Container from "@/layouts/Container";
import Flex from "@/layouts/Flex";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const MobileNav = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
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
    <div className="py-5 px-3 md:hidden fixed top-0 bg-white/10 backdrop-blur-xs left-0 right-0 z-50 font-body">
      <Container>
        <Flex className={`flex-row ${isOpen ? "items-start" : "items-center"}`}>
          <Link href="/" className="text-black text-xl font-primary font-medium">
            &lt;Meheraj/&gt;
          </Link>

          {isOpen && (
            <ul className="flex flex-col justify-end gap-x-10 text-sm items-center flex-1">
              {menuItems.map((item, idx) => (
                <Link
                onClick={() => setIsOpen(false)}
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
          )}
                    {isOpen ? (
            <X className="w-6 h-6 text-background" onClick={() => setIsOpen(false)} />
          ) : (
            < Menu className="w-6 text-background h-6" onClick={() => setIsOpen(true)} />
          )}
        </Flex>
      </Container>
    </div>
  );
};

export default MobileNav;
