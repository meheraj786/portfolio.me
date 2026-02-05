import { articles } from "@/layouts/seed";
import React from "react";
import ArticleCard from "./ArticleCard";
import Link from "next/link";

const Article = () => {
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
        {articles.slice(0, 3).map((p, idx) => (
          <ArticleCard
            key={idx}
            title={p.title}
            description={p.description}
            image={p.image}
            tags={p.tags}
            author={p.author}
            slug={p.slug}
            date={p.date}
            link={p.link}
            github="https://github.com/your-repo/jwt-handbook"
          />
        ))}
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
