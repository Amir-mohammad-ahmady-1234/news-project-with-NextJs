import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";

export default async function NewDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const newItem = DUMMY_NEWS.find((newItem) => newItem.slug === slug);

  if (!newItem) notFound();

  return (
    <article className="news-article">
      <header>
        <img src={`/images/news/${newItem?.image}`} alt={newItem?.title} />
        <h1>{newItem?.title}</h1>
        <time dateTime={newItem.date}>{newItem?.date}</time>
      </header>
      <p>{newItem?.content}</p>
    </article>
  );
}
