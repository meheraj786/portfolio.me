import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/layouts/seed";
import React from "react";

const Projects = () => {
  return (
    <div className="py-5">
      <h2
        className='relative mb-3 font-primary text-left  font-bold text-black
          after:content-[""] after:absolute after:left-0 after:bottom-0 pb-3 after:h-[3px] after:bg-black after:w-0
          hover:after:w-60 after:transition-all after:duration-300'
      >
        &#91;My Projects&#93;
      </h2>
      <div className="flex flex-col gap-y-3">
        {projects.map((p, idx) => (
          <ProjectCard
            title={p.title}
            description={p.desc}
            tags={p.tags}
            image={p.image}
            key={idx}
            duration="6"
            git={p.git}
            link={p.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
