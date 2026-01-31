import ArticleCard from "@/components/ArticleCard";
import Flex from "@/layouts/Flex";
import { articles } from "@/layouts/seed";
import React from "react";

const Articles = () => {
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
      <Flex className="flex-row justify-start gap-3 mb-4">
                <span
          key={"All"}
          className="text-foreground text-sm font-body cursor-pointer font-medium px-3 py-1 bg-background rounded-md border border-gray-300"
        >
          All
        </span>
{articles.map((article, idx) => (
      article.tags.map((tag, tagIdx) => (
        <span
          key={tagIdx}
          className="text-black text-sm font-body cursor-pointer font-medium px-3 py-1 bg-foreground rounded-md border border-gray-300"
        >
          {tag}
        </span>
      ))
))}
        

      </Flex>
      <div className="flex flex-col gap-y-3">
        {articles.map((p, idx) => (
          <ArticleCard
            key={idx}
            title={p.title}
            description={p.description}
            image={p.image}
            tags={p.tags}
            slug={p.slug}
            date={p.date}
            link={p.link}
            github="https://github.com/your-repo/jwt-handbook"
            author={p.author}
          />
        ))}
      </div>
    </div>
  );
};

export default Articles;
