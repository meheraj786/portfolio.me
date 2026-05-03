import SystemDesignCard from "@/components/SystemDesignCard";
import React from "react";
import { getSystemDesigns } from "@/app/actions/systemDesign";

const SystemDesignCaseStudies = async () => {
  const { systemDesigns = [] } = await getSystemDesigns();

  return (
    <div className="py-5">
      <h2
        className="relative font-primary text-left font-bold text-black
          after:content-[''] after:absolute after:left-0 after:bottom-0 pb-3 after:h-[3px] after:bg-black after:w-0
          hover:after:w-60 after:transition-all after:duration-300"
      >
        /System Design & Case Studies/
      </h2>

      <div className="flex flex-col gap-y-6 mt-3">
        {systemDesigns.length > 0 ? (
          systemDesigns.map(
            (
              study: {
                title: string;
                description: string;
                keyFeatures: string[];
                diagramUrl: string;
                githubLink: string;
                learnings: string;
                slug: string;
              },
              idx: number,
            ) => (
              <SystemDesignCard
                key={idx}
                title={study.title}
                description={study.description}
                keyFeatures={study.keyFeatures || []}
                diagramUrl={study.diagramUrl || ""}
                github={study.githubLink}
                learnings={study.learnings || ""}
                slug={study.slug}
              />
            ),
          )
        ) : (
          <p className="text-gray-500 text-center py-10">
            No system designs found.
          </p>
        )}
      </div>
    </div>
  );
};

export default SystemDesignCaseStudies;
