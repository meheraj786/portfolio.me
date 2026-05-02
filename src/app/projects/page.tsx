import ProjectCard from "@/components/ProjectCard";
import React from "react";
import { getProjects } from "@/app/actions/project";

const Projects = async () => {
  const { projects = [] } = await getProjects();

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
        {projects.length > 0 ? (
          projects.map((p: any, idx: number) => (
            <ProjectCard
              key={idx}
              title={p.title}
              description={p.description}
              tags={p.tags}
              image={p.images[0]}
              duration={new Date(p.createdAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
              })}
              git={p.githubLink}
              link={p.liveLink}
              slug={p.slug}
            />
          ))
        ) : (
          <p className="text-gray-500 text-center py-10">No projects found.</p>
        )}
      </div>
    </div>
  );
};

export default Projects;
