import React from "react";
import ArticleCard from "./ArticleCard";
import Link from "next/link";
import { getArticles } from "@/app/actions/article";
import { Terminal, Database } from "lucide-react";

const Article = async () => {
  const { articles = [] } = await getArticles();

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex items-center gap-4">
          <h2 className="text-primary font-primary text-2xl md:text-3xl font-bold flex items-center gap-3">
            <span className="text-offWhite/20 text-sm font-normal">05.</span>
            KNOWLEDGE_FEED
            <span className="h-[1px] w-24 md:w-64 bg-primary/30"></span>
          </h2>
        </div>

        <div className="space-y-6">
          <div className="flex items-center gap-2 px-2 py-1 font-primary text-[10px] text-primary/40 uppercase">
            <Database size={12} />
            <span>Records_Found: {articles.length} entries</span>
          </div>

          <div className="flex flex-col gap-y-4">
            {articles.length > 0 ? (
              articles.slice(0, 3).map((p: any, idx: number) => (
                <ArticleCard
                  key={idx}
                  title={p.title}
                  description={p.description}
                  image={p.image}
                  author={p.author}
                  slug={p.slug}
                  date={new Date(p.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                  })}
                />
              ))
            ) : (
              <div className="flex flex-col items-center justify-center py-20 border border-dashed border-primary/20 bg-primary/5">
                <p className="text-primary/40 font-primary text-xs uppercase tracking-[0.2em]">
                  Database_Offline_Or_Empty
                </p>
              </div>
            )}
          </div>

          <div className="mt-8 flex justify-center md:justify-start">
            <Link href="/articles" className="group">
              <button className="flex items-center gap-3 px-8 py-3 border border-primary/50 text-primary font-primary text-sm hover:bg-primary hover:text-background transition-all duration-300 relative">
                <Terminal size={18} />
                <span className="uppercase tracking-[0.2em] font-bold">ls -all ./articles</span>
                <div className="absolute -inset-1 border border-primary/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none scale-105" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Article;

