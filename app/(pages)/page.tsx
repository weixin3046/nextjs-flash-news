export const dynamic = "force-dynamic";
import { ArticleApi } from "../api/article-api";
import { CryptoNews } from "../components/CryptoNews/CryptoNews.server";
import LatestNews from "../components/LatestNews/LatestNews";

export default async function IndexPage() {
  const articles = await ArticleApi.fetchToday();

  return (
    <div className="flex justify-between">
      <LatestNews />
      <CryptoNews />
    </div>
  );
}
