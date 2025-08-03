import ModalBackderop from "@/components/modal-backdrop";
import { getNewsItem } from "@/lib/news";
import { NewsItem } from "@/types/news-type";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function InterceptedImagePage({ params }: Props) {
  const { slug } = await params;

  const newItem = (await getNewsItem(slug)) as NewsItem;
  if (!newItem) notFound();

  return (
    <>
      <ModalBackderop />

      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${newItem.image}`} alt={newItem.title} />
        </div>
      </dialog>
    </>
  );
}
