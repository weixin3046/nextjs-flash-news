import { Article } from "@/app/types/article-type";
import Image from "next/image";
import defaultNewsPng from "@/public/default-news.png";
import Link from "next/link";
import { CATEGORIES_ITEMS } from "../Nav/constant";
import { ImageWithFallback } from "../ImageWithFallback/ImageWithFallback";

export default function ArticleCard(p: { article: Article }) {
  return (
    <>
      <Link
        href={"#"}
        className="space-y-4 block w-80 hover:bg-slate-50 transition transform hover:scale-105 border-2 border-gray-100 py-4 px-6 rounded-xl shadow-sm"
      >
        {/** Header */}
        <div className="capitalize">
          <div className="flex items-center gap-2">
            <div className="flex w-10 h-10 justify-center items-center border border-slate-300 rounded-full">
              <Image
                src={CATEGORIES_ITEMS[p.article.category[0]].src}
                alt="category"
                className="w-5 h-5"
              />
            </div>
            <div className="font-bold text-md">{p.article.category}</div>
          </div>
          {/**Date */}
          <div className="mt-2 text-sm text-gray-400">
            Published: {new Date(p.article.pubDate).toDateString()}
          </div>
        </div>
        {/** body */}
        <div className="space-y-2">
          <div className="font-semibold text-xl line-clamp-2 h-14">
            {p.article.title}
          </div>
          <ImageWithFallback
            className="h-40 rounded-md"
            fallback={defaultNewsPng}
            src={p.article.image_url || defaultNewsPng}
            alt="Image for Article"
            width={300}
            height={200}
          />
        </div>
      </Link>
    </>
  );
}
