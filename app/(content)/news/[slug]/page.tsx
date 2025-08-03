import { getNewsItem } from "@/lib/news";
import { NewsItem } from "@/types/news-type";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function NewDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const newItem = (await getNewsItem(slug)) as NewsItem;

  if (!newItem) notFound();

  return (
    <article className="news-article">
      <header>
        <Link href={`/news/${slug}/image`}>
          <img src={`/images/news/${newItem?.image}`} alt={newItem?.title} />
        </Link>
        <h1>{newItem?.title}</h1>
        <time dateTime={newItem.date}>{newItem?.date}</time>
      </header>
      <p>{newItem?.content}</p>
    </article>
  );
}
