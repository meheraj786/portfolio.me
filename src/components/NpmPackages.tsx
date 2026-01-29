"use client";
import React, { useEffect, useState } from "react";
import NpmPackageCard from "./NpmPackageCard";

interface NpmPackage {
  title: string;
  description: string;
  tags?: string[]; // optional, যদি keywords থেকে নিতে চাও
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
            next: { revalidate: 86400 }, // Next.js cache: 24 hours
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch NPM packages");
        }

        const data = await response.json();
        const objects = data.objects || [];

        // Map to your NpmPackageCard props
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
    <div className="py-5">
      <h2
        className="relative text-3xl font-primary text-left font-bold text-black
          after:content-[''] after:absolute after:left-0 after:bottom-0 pb-3 after:h-[3px] after:bg-black after:w-0
          hover:after:w-60 after:transition-all after:duration-300"
      >
         My NPM Packages 
      </h2>

      {loading ? (
        <p className="text-center mt-10">Loading your NPM packages...</p>
      ) : error ? (
        <p className="text-red-500 text-center mt-10">Error: {error}</p>
      ) : packages.length === 0 ? (
        <p className="text-center mt-10">No packages found yet! Publish some 🚀</p>
      ) : (
        <div className="flex flex-col mt-6 gap-y-3">
          {packages.slice(0, 3).map((p, idx) => (
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
      <button className="text-white text-right font-body mx-auto cursor-pointer bg-background px-5 py-1 mt-10 rounded-sm transition-colors duration-200 border border-white hover:border-black hover:border hover:bg-white hover:text-black">
        View More
      </button>
    </div>
  );
};

export default NpmPackages;