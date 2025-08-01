"use client";

import { DUMMY_NEWS } from "@/dummy-news";
import { notFound, useRouter } from "next/navigation";
import { use } from "react";

interface Props {
  params: Promise<{ slug: string }>;
}

export default function InterceptedImagePage({ params }: Props) {
  const { slug } = use(params);

  const router = useRouter();

  const newItem = DUMMY_NEWS.find((newItem) => newItem.slug === slug);
  if (!newItem) notFound();

  return (
    <>
      <div className="modal-backdrop" onClick={router.back} />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${newItem.image}`} alt={newItem.title} />
        </div>
      </dialog>
    </>
  );
}
