import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return <div className="xl:w-[1040px] mx-auto w-full">{children}</div>;
};

export default Container;
