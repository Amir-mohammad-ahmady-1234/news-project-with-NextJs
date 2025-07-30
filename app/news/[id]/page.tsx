import { notFound } from "next/navigation";

export default async function NewDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  if (!id) notFound();

  return <main>this news is about : {id}</main>;
}
