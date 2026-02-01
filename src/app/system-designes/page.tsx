"use client";
import SystemDesignCard from "@/components/SystemDesignCard";
import { caseStudies } from "@/layouts/seed";
import React from "react";


const SystemDesignCaseStudies = () => {


  return (
    <div className="py-5">
      <h2
        className="relative  font-primary text-left font-bold text-black
          after:content-[''] after:absolute after:left-0 after:bottom-0 pb-3 after:h-[3px] after:bg-black after:w-0
          hover:after:w-60 after:transition-all after:duration-300"
      >
        /System Design & Case Studies/
      </h2>

      <div className="flex flex-col gap-y-6 mt-3">
        {caseStudies.map((study, idx) => (
          <SystemDesignCard key={idx} {...study} />
        ))}
      </div>

      
    </div>
  );
};

export default SystemDesignCaseStudies;