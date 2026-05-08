import SystemDesignCard from "./SystemDesignCard";
import React from "react";
import Link from "next/link";
import { getSystemDesigns } from "@/app/actions/systemDesign";
import { Terminal, Layout } from "lucide-react";

const SystemDesignCaseStudies = async () => {
  const { systemDesigns = [] } = await getSystemDesigns();

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex items-center gap-4">
          <h2 className="text-primary font-primary text-2xl md:text-3xl font-bold flex items-center gap-3">
            <span className="text-offWhite/20 text-sm font-normal">04.</span>
            SYSTEM_ARCHITECTURE
            <span className="h-[1px] w-24 md:w-64 bg-primary/30"></span>
          </h2>
        </div>

        <div className="space-y-6">
          <div className="flex items-center gap-2 px-2 py-1 font-primary text-[10px] text-primary/40 uppercase">
            <Layout size={12} />
            <span>Vault_Indexed: {systemDesigns.length} blueprints</span>
          </div>

          <div className="flex flex-col gap-y-6">
            {systemDesigns.length > 0 ? (
              systemDesigns
                .slice(0, 3)
                .map((study: any, idx: number) => (
                  <SystemDesignCard
                    key={idx}
                    title={study.title}
                    description={study.description}
                    github={study.githubLink}
                    slug={study.slug}
                  />
                ))
            ) : (
              <div className="flex flex-col items-center justify-center py-20 border border-dashed border-primary/20 bg-primary/5">
                <p className="text-primary/40 font-primary text-xs uppercase tracking-[0.2em]">
                  No_Blueprints_Available
                </p>
              </div>
            )}
          </div>

          <div className="mt-8 flex justify-center md:justify-start">
            <Link href="/system-designs" className="group">
              <button className="flex items-center gap-3 px-8 py-3 border border-primary/50 text-primary font-primary text-sm hover:bg-primary hover:text-background transition-all duration-300 relative">
                <Terminal size={18} />
                <span className="uppercase tracking-[0.2em] font-bold">query all --designs</span>
                <div className="absolute -inset-1 border border-primary/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none scale-105" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SystemDesignCaseStudies;

