import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";
import { use } from "react";

interface Props {
  params: Promise<{ slug: string }>;
}

export default function ImagePage({ params }: Props) {
  const { slug } = use(params);

  const newItem = DUMMY_NEWS.find((newItem) => newItem.slug === slug);
  if (!newItem) notFound();

  return (
    <div className="fullscreen-image">
      <img src={`/images/news/${newItem?.image}`} alt={newItem.title} />;
    </div>
  );
}
