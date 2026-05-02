import ArticleCard from "@/components/ArticleCard";
import Flex from "@/layouts/Flex";
import React from "react";
import { getArticles, getAllCategories } from "@/app/actions/article";
import Link from "next/link";

const Articles = async ({
  searchParams,
}: {
  searchParams: { category?: string };
}) => {
  const category = searchParams.category || "ALL";
  const { articles = [] } = await getArticles(category);
  const { categories = [] } = await getAllCategories();

  return (
    <div className="py-5">
      <h2
        className='relative mb-3 font-primary text-left  font-bold text-black
          after:content-[""] after:absolute after:left-0 after:bottom-0 pb-3 after:h-[3px] after:bg-black after:w-0
          hover:after:w-60 after:transition-all after:duration-300'
      >
        &#91;My Articles&#93;
      </h2>
      {/* tags  */}
      <Flex className="flex-row justify-start gap-3 mb-4 overflow-x-auto">
        {categories.map((cat: string) => (
          <Link
            key={cat}
            href={`/articles?category=${cat}`}
            className={`text-sm font-body cursor-pointer font-medium px-3 py-1 rounded-md border border-gray-300 transition-colors ${
              category === cat
                ? "bg-black text-white"
                : "bg-background text-foreground hover:bg-gray-100 hover:text-black"
            }`}
          >
            {cat}
          </Link>
        ))}
      </Flex>
      <div className="flex flex-col gap-y-3">
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
                month: "long",
              })}
              link={p.link || ""}
              github={p.github || ""}
              author={p.author}
            />
          ))
        ) : (
          <p className="text-gray-500 text-center py-10">No articles found.</p>
        )}
      </div>
    </div>
  );
};

export default Articles;
