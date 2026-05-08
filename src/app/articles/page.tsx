import ArticleCard from "@/components/ArticleCard";
import React from "react";
import { getArticles, getAllCategories } from "@/app/actions/article";
import Link from "next/link";
import { Database, Filter, Terminal } from "lucide-react";

const Articles = async ({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) => {
  const resolvedParams = await searchParams;
  const category = resolvedParams.category || "ALL";
  const { articles = [] } = await getArticles(category);
  const { categories = [] } = await getAllCategories();

  return (
    <div className="py-10 space-y-12">
      {/* Page Header */}
      <div className="flex items-center gap-4">
        <h2 className="text-primary font-primary text-2xl md:text-3xl font-bold flex items-center gap-3">
          <span className="text-offWhite/20 text-sm font-normal">05.</span>
          KNOWLEDGE_DATABASE
          <span className="h-[1px] w-24 md:w-64 bg-primary/30"></span>
        </h2>
      </div>

      <div className="space-y-8">
        {/* Category Filters */}
        <div className="flex flex-col md:flex-row md:items-center gap-4 p-4 border border-primary/10 bg-primary/5">
          <div className="flex items-center gap-2 text-[10px] font-primary text-secondary uppercase tracking-widest">
            <Filter size={14} />
            <span>Filter_By:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat: string) => (
              <Link
                key={cat}
                href={`/articles?category=${cat}`}
                className={`text-[10px] font-primary px-3 py-1 border transition-all duration-300 uppercase tracking-widest ${
                  category === cat
                    ? "bg-primary text-background border-primary font-bold"
                    : "border-primary/20 text-primary/60 hover:border-primary/50 hover:text-primary"
                }`}
              >
                {cat}
              </Link>
            ))}
          </div>
        </div>

        {/* Articles List */}
        <div className="flex flex-col gap-y-4">
          <div className="flex items-center gap-2 px-2 py-1 font-primary text-[10px] text-primary/40 uppercase">
            <Database size={12} />
            <span>Query Results: {articles.length} records found</span>
          </div>

          {articles.length > 0 ? (
            articles.map((p: any, idx: number) => (
              <ArticleCard
                key={idx}
                title={p.title}
                description={p.description}
                image={p.image}
                tags={p.tags || []}
                slug={p.slug}
                date={new Date(p.createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                })}
                link={p.link || ""}
                github={p.github || ""}
                author={p.author}
              />
            ))
          ) : (
            <div className="flex flex-col items-center justify-center py-20 border border-dashed border-primary/20 bg-primary/5">
              <Terminal size={32} className="text-primary/20 mb-4" />
              <p className="text-primary/40 font-primary text-xs uppercase tracking-[0.2em]">
                Error_404: No_Articles_Found_In_This_Sector
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Articles;
