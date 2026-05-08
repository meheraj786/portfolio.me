"use client";
import React, { useEffect, useState } from "react";
import NpmPackageCard from "./NpmPackageCard";
import Link from "next/link";
import { Package, Terminal, Box } from "lucide-react";
import { motion } from "framer-motion";

interface NpmPackage {
  title: string;
  description: string;
  tags: string[]; 
  github: string;
  npm: string;
}

const NpmPackages = () => {
  const [packages, setPackages] = useState<NpmPackage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMyNpmPackages = async () => {
      try {
        const response = await fetch(
          "https://registry.npmjs.org/-/v1/search?text=author:meheraj786&size=250",
          {
            next: { revalidate: 86400 },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch NPM packages");
        }

        const data = await response.json();
        const objects = data.objects || [];

        const formattedPackages: NpmPackage[] = objects.map((item: any) => {
          const pkg = item.package;
          return {
            title: pkg.name,
            description: pkg.description || "No description available",
            tags: pkg.keywords || [], 
            github: pkg.links?.repository || `https://github.com/meheraj786/${pkg.name}`,
            npm: pkg.links?.npm || `https://www.npmjs.com/package/${pkg.name}`,
          };
        });

        setPackages(formattedPackages);
      } catch (err: any) {
        setError(err.message || "Something went wrong");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMyNpmPackages();
  }, []);

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex items-center gap-4">
          <h2 className="text-primary font-primary text-2xl md:text-3xl font-bold flex items-center gap-3">
            <span className="text-offWhite/20 text-sm font-normal">05.</span>
            NPM_REPOSITORY
            <span className="h-[1px] w-24 md:w-64 bg-primary/30"></span>
          </h2>
        </div>

        <div className="space-y-6">
          <div className="flex items-center gap-2 px-2 py-1 font-primary text-[10px] text-primary/40 uppercase">
            <Package size={12} />
            <span>Public_Registry_Sync: ACTIVE</span>
          </div>

          {loading ? (
            <div className="flex items-center justify-center py-20 font-primary text-primary/60 text-xs animate-pulse">
              &gt; SYNCING_WITH_REGISTRY...
            </div>
          ) : error ? (
            <div className="terminal-container border-accent/20 bg-accent/5 p-4 text-accent font-primary text-xs uppercase tracking-widest text-center">
              Error_Signal: {error}
            </div>
          ) : packages.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 border border-dashed border-primary/20 bg-primary/5">
              <Box size={32} className="text-primary/20 mb-4" />
              <p className="text-primary/40 font-primary text-xs uppercase tracking-[0.2em]">
                Registry_Scan: No_Packages_Published
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {packages.slice(0, 2).map((p, idx) => (
                <NpmPackageCard
                  key={idx}
                  title={p.title}
                  description={p.description}
                  tags={p.tags}
                  github={p.github}
                  npm={p.npm}
                />
              ))}
            </div>
          )}
          
          {packages.length > 2 && (
            <div className="mt-8 flex justify-center md:justify-start">
              <Link href="/npm-packages" className="group">
                <button className="flex items-center gap-3 px-8 py-3 border border-primary/50 text-primary font-primary text-sm hover:bg-primary hover:text-background transition-all duration-300 relative">
                  <Terminal size={18} />
                  <span className="uppercase tracking-[0.2em] font-bold">fetch all --from=registry</span>
                  <div className="absolute -inset-1 border border-primary/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none scale-105" />
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default NpmPackages;