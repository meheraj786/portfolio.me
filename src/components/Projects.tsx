import React from "react";
import ProjectCard from "./ProjectCard";
import Link from "next/link";
import { getProjects } from "@/app/actions/project";
import { Terminal, Box } from "lucide-react";

const Projects = async () => {
  const { projects = [] } = await getProjects();

  return (
    <div className="py-20 relative">
       {/* Section Header */}
       <div className="flex items-center gap-4 mb-12">
        <h2 className="text-primary font-primary text-2xl md:text-3xl font-bold flex items-center gap-3">
          <span className="text-offWhite/20 text-sm font-normal">03.</span>
          ACTIVE_PROCESSES
          <span className="h-[1px] w-24 md:w-64 bg-primary/30"></span>
        </h2>
      </div>

      <div className="flex flex-col gap-y-6">
        {projects.length > 0 ? (
          projects.slice(0, 3).map((p: any, idx: number) => (
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
          <div className="flex flex-col items-center justify-center py-20 border border-dashed border-primary/20 bg-primary/5 rounded">
            <Box size={40} className="text-primary/30 mb-4" />
            <p className="text-primary/60 font-primary text-sm tracking-widest uppercase">
              No_Active_Processes_Found
            </p>
          </div>
        )}
      </div>

      <div className="mt-12 flex justify-center md:justify-start">
        <Link href="/projects" className="group">
          <button className="flex items-center gap-3 px-8 py-3 border border-primary/50 text-primary font-primary text-sm hover:bg-primary hover:text-background transition-all duration-300 relative">
            <Terminal size={18} />
            <span className="uppercase tracking-[0.2em] font-bold">ls -all ./projects</span>
            <div className="absolute -inset-1 border border-primary/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none scale-105" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
