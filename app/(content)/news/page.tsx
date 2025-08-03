import NewsList from "@/components/news-list/news-list";
import { getAllNews } from "@/lib/news";
import { NewsItem } from "@/types/news-type";

export default async function NewsPage() {
  const news = (await getAllNews()) as NewsItem[];

  return (
    <>
      <h1>News Page</h1>
      <NewsList news={news} />
    </>
  );
}
