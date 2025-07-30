import NewsList from "@/components/news-list/news-list";
import { getNewsForYear } from "@/lib/news";

export default async function FilteredYearPage({
  params,
}: {
  params: Promise<{ year: string }>;
}) {
  const { year } = await params;
  const news = getNewsForYear(year);

  return <NewsList news={news} />;
}
