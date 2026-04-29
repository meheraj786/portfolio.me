// import Link from "next/link";
// import React from "react";

// interface SkillCardProps {
//   icon: React.ElementType;
//   name: string;
//   link: string;
// }

// const SkillCard: React.FC<SkillCardProps> = ({ icon: Icon, name, link }) => {
//   return (
//     <Link
//       href={link}
//       target="_blank"
//       className="relative font-body group md:w-48 md:h-24 w-40 h-20 cursor-pointer"
//     >
//       <div className="absolute inset-0 bg-background rounded-sm translate-x-1 translate-y-1 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>

//       <div className="relative z-10 w-full h-full bg-white rounded-sm flex flex-col items-center justify-center shadow-md transition-all duration-500 group-hover:rotate-3 group-hover:-translate-y-1 group-hover:scale-105 group-hover:shadow-lg">
//         {/* Icon */}
//         <div className="text-background text-3xl mb-1 transition-transform duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.5)]">
//           <Icon />
//         </div>

//         <p className="text-xs text-background font-medium transition-all duration-300 group-hover:text-black mt-3 text-center">
//           {name}
//         </p>
//       </div>
//     </Link>
//   );
// };

// export default SkillCard;

// import Link from "next/link";
// import React from "react";

// interface SkillCardProps {
//   icon: React.ElementType;
//   name: string;
//   link: string;
//   color: string;
// }

// const SkillCard: React.FC<SkillCardProps> = ({ icon: Icon, name, link, color }) => {
//   return (
//     <Link
//       href={link}
//       target="_blank"
//       style={{ backgroundColor: color }} 
//       className="flex items-center gap-2 px-3 py-1.5 transition-all duration-300 hover:scale-105 active:scale-95 rounded-sm"
//     >
//       <div className="text-white text-lg flex items-center">
//         <Icon />
//       </div>
//       <p className="text-[12px] md:text-[14px] text-white font-bold font-primary uppercase tracking-wider whitespace-nowrap">
//         {name}
//       </p>
//     </Link>
//   );
// };

// export default SkillCard;

"use client";
import Link from "next/link";
import React, { useState } from "react";

interface SkillCardProps {
  icon: React.ElementType;
  name: string;
  link: string;
  color: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ icon: Icon, name, link, color }) => {
  const [isHovered, setIsHovered] = useState(false);

  const primaryColor = "#171717"; 

  return (
    <Link
      href={link}
      target="_blank"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ 
        backgroundColor: isHovered ? color : primaryColor,
        border: `1px solid ${isHovered ? color : "#333"}` 
      }}
      className="flex items-center gap-2 px-3 py-1.5 transition-all duration-400 ease-in-out hover:scale-105 active:scale-95 rounded-sm shadow-sm"
    >
      <div className="text-white text-lg flex items-center transition-transform duration-300">
        <Icon />
      </div>
      <p className="text-[13px] text-white font-bold uppercase tracking-wider whitespace-nowrap">
        {name}
      </p>
    </Link>
  );
};

export default SkillCard;
