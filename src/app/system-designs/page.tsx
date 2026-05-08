import SystemDesignCard from "@/components/SystemDesignCard";
import React from "react";
import { getSystemDesigns } from "@/app/actions/systemDesign";
import { Layout, Terminal } from "lucide-react";

const SystemDesignCaseStudies = async () => {
  const { systemDesigns = [] } = await getSystemDesigns();

  return (
    <div className="py-10 space-y-12">
      {/* Page Header */}
      <div className="flex items-center gap-4">
        <h2 className="text-primary font-primary text-2xl md:text-3xl font-bold flex items-center gap-3">
          <span className="text-offWhite/20 text-sm font-normal">04.</span>
          ARCHITECTURE_VAULT
          <span className="h-[1px] w-24 md:w-64 bg-primary/30"></span>
        </h2>
      </div>

      <div className="space-y-6">
        <div className="flex items-center gap-2 px-2 py-1 font-primary text-[10px] text-primary/40 uppercase">
          <Layout size={12} />
          <span>Designs_Stored: {systemDesigns.length}</span>
        </div>

        <div className="flex flex-col gap-y-6">
          {systemDesigns.length > 0 ? (
            systemDesigns.map(
              (study: any, idx: number) => (
                <SystemDesignCard
                  key={idx}
                  title={study.title}
                  description={study.description}
                  github={study.githubLink}
                  slug={study.slug}
                />
              ),
            )
          ) : (
            <div className="flex flex-col items-center justify-center py-20 border border-dashed border-primary/20 bg-primary/5">
              <Terminal size={32} className="text-primary/20 mb-4" />
              <p className="text-primary/40 font-primary text-xs uppercase tracking-[0.2em]">
                System_Status: No_Design_Specs_Indexed
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SystemDesignCaseStudies;
