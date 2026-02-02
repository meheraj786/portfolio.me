"use client";
import React from "react";
import SystemDesignCard from "./SystemDesignCard";
import { caseStudies } from "@/layouts/seed";


const SystemDesignCaseStudies = () => {


  return (
    <div className="py-5">
      <h2
        className="relative  font-primary text-center md:text-left font-bold text-black
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

      {caseStudies.length > 3 && (
        <div className="md:text-left text-center">
        <button
          className="text-white font-body mx-auto cursor-pointer bg-background px-6 py-2 mt-10 rounded-sm transition-colors duration-200 border border-white hover:border-black hover:bg-white hover:text-black"
        >
          View More
        </button>
        </div>
      )}
      
    </div>
  );
};

export default SystemDesignCaseStudies;