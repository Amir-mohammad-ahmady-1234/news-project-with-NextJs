import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";

interface Props {
  params: { slug: string };
}

export default async function ImagePage({ params }: Props) {
  const { slug } = params;

  const newItem = DUMMY_NEWS.find((newItem) => newItem.slug === slug);
  if (!newItem) notFound();

  return (
    <div className="fullscreen-image">
      <img src={`/images/news/${newItem?.image}`} alt={newItem.title} />;
    </div>
  );
}
