import React from "react";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <div className="text-center text-sm md:text-md text-primary opacity-50 font-primary py-3">
      © {date} Mehraj Hosen. All rights reserved.
    </div>
  );
};

export default Footer;
