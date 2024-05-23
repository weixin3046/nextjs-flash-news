export const dynamic = "force-dynamic";
import { ArticleApi } from "../api/article-api";
import LatestNews from "../components/LatestNews/LatestNews";

export default async function IndexPage() {
  const articles = await ArticleApi.fetchToday();

  return (
    <div>
      <LatestNews />
    </div>
  );
}
