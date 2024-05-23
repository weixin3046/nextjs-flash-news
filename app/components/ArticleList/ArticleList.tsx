import { Article } from "@/app/types/article-type";
import ArticleCard from "../ArticleCard/ArticleCard";

export default function ArticleList(p: { articles: Article[] }) {
  return (
    <div className="flex flex-wrap gap-x-8 gap-y-20 justify-center md:justify-normal">
      {p.articles.map((article) => (
        <ArticleCard key={article.article_id} article={article} />
      ))}
    </div>
  );
}
