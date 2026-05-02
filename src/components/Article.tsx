import React from "react";
import ArticleCard from "./ArticleCard";
import Link from "next/link";
import { getArticles } from "@/app/actions/article";

const Article = async () => {
  const { articles = [] } = await getArticles();

  return (
    <div className="py-5">
      <h2
        className='relative md:text-left text-center mb-3 font-primary   font-bold text-black
          after:content-[""] after:absolute after:left-0 after:bottom-0 pb-3 after:h-[3px] after:bg-black after:w-0
          hover:after:w-60 after:transition-all after:duration-300'
      >
        &#91;My Articles&#93;
      </h2>
      <div className="flex flex-col gap-y-3">
        {articles.length > 0 ? (
          articles.slice(0, 3).map((p: any, idx: number) => (
            <ArticleCard
              key={idx}
              title={p.title}
              description={p.description}
              image={p.image}
              tags={p.tags || []}
              author={p.author}
              slug={p.slug}
              date={new Date(p.createdAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
              })}
              link={p.link || ""}
              github={p.github || ""}
            />
          ))
        ) : (
          <p className="text-gray-500 text-center py-5">No articles found.</p>
        )}
      </div>
      <div className="md:text-left text-center">
        <Link href="/articles">
          <button className="text-white text-right font-body mx-auto cursor-pointer bg-background px-5 py-1 mt-10 rounded-sm transition-colors duration-200 border border-white hover:border-black hover:border hover:bg-white hover:text-black">
            View More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Article;
