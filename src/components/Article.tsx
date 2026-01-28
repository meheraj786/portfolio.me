import { articles, projects } from "@/layouts/seed";
import React from "react";
import ProjectCard from "./ProjectCard";
import ArticleCard from "./ArticleCard";

const Article = () => {
  return (
    <div className="py-5">
      <h2
        className='relative text-3xl font-primary text-left  font-bold text-black
          after:content-[""] after:absolute after:left-0 after:bottom-0 pb-3 after:h-[3px] after:bg-black after:w-0
          hover:after:w-60 after:transition-all after:duration-300'
      >
        &#91;My Articles&#93;
      </h2>
      <div className="flex flex-col gap-y-3">
        {articles.map((p, idx) => (
          <ArticleCard
            key={idx}
            title={p.title}
            description={p.description}
            image={p.image}
            tags={p.tags}
            date={p.date}
            link={p.link}
            github="https://github.com/your-repo/jwt-handbook"
            author={p.author}
          />
        ))}
      </div>
      <button className="text-white text-right font-body mx-auto cursor-pointer bg-background px-5 py-1 mt-10 rounded-sm transition-colors duration-200 border border-white hover:border-black hover:border hover:bg-white hover:text-black">
        View More
      </button>
    </div>
  );
};

export default Article;
