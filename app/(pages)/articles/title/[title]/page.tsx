import { ArticleApi } from "@/app/api/article-api";
import { ImageWithFallback } from "@/app/components/ImageWithFallback/ImageWithFallback";
import { CATEGORIES_ITEMS } from "@/app/constant";
import Image from "next/image";
import defaultNewsPng from "@/public/default-news.png";
import Link from "next/link";

export default async function ArticleDatePage(p: {
  params: { title: string };
}) {
  const article = await ArticleApi.fetchByTitle(p.params.title);
  const category = article.category[0];
  const header = (
    <div className="space-y-2">
      <div className="capitalize text-md flex items-center gap-2">
        <div className="flex justify-center items-center border border-slate-300 rounded-full w-10 h-10">
          <Image
            src={CATEGORIES_ITEMS[category].src}
            alt={"Icon for " + category}
            className="w-7 h-7"
          />
        </div>
        <div className="font-semibold">{category}</div>
      </div>
      <div className="text-xs text-slate-500">
        Published {new Date(article.pubDate).toDateString()}
      </div>
    </div>
  );
  const body = (
    <div className="space-y-4">
      <h1>{article.title}</h1>
      <h2>{article.description}</h2>
      <div className="flex justify-center">
        <ImageWithFallback
          src={article.image_url || defaultNewsPng}
          alt="Artile"
          width={300}
          height={200}
          fallback={defaultNewsPng}
        />
      </div>
      <p className="text-justify">{article.content}</p>
    </div>
  );
  const footer = (
    <div className="flex justify-between">
      <div>
        Written by <span className="font-semibold">{article.creator}</span>
      </div>
      <Link
        className="text-blue-500 underline"
        href={article.link}
        target="_balck"
      >
        Source
      </Link>
    </div>
  );
  return (
    <div className="flex justify-center items-center ">
      <div className="prose space-y-6 max-w-6xl">
        {header}
        {body}
        {footer}
      </div>
    </div>
  );
}
