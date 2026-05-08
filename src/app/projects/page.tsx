import ProjectCard from "@/components/ProjectCard";
import React from "react";
import { getProjects } from "@/app/actions/project";
import { Briefcase, Terminal } from "lucide-react";

const Projects = async () => {
  const { projects = [] } = await getProjects();

  return (
    <div className="py-10 space-y-12">
      {/* Page Header */}
      <div className="flex items-center gap-4">
        <h2 className="text-primary font-primary text-2xl md:text-3xl font-bold flex items-center gap-3">
          <span className="text-offWhite/20 text-sm font-normal">03.</span>
          PROJECT_ARCHIVE
          <span className="h-[1px] w-24 md:w-64 bg-primary/30"></span>
        </h2>
      </div>

      <div className="space-y-6">
        <div className="flex items-center gap-2 px-2 py-1 font-primary text-[10px] text-primary/40 uppercase">
          <Briefcase size={12} />
          <span>Total_Modules: {projects.length}</span>
        </div>

        <div className="flex flex-col gap-y-4">
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
            <div className="flex flex-col items-center justify-center py-20 border border-dashed border-primary/20 bg-primary/5">
              <Terminal size={32} className="text-primary/20 mb-4" />
              <p className="text-primary/40 font-primary text-xs uppercase tracking-[0.2em]">
                System_Status: Archive_Empty
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
