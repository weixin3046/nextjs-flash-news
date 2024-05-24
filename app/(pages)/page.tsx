export const dynamic = "force-dynamic";
import { Suspense } from "react";
import { ArticleApi } from "../api/article-api";
import {
  CryptoNews,
  CryptoNewsSkel,
} from "../components/CryptoNews/CryptoNews.server";
import LatestNews, {
  LatestNewsSkel,
} from "../components/LatestNews/LatestNews";

export default async function IndexPage() {
  const articles = await ArticleApi.fetchToday();

  return (
    <div className="flex justify-between">
      <Suspense fallback={<LatestNewsSkel />}>
        <LatestNews />
      </Suspense>
      <Suspense fallback={<CryptoNewsSkel />}>
        <CryptoNews />
      </Suspense>
    </div>
  );
}
