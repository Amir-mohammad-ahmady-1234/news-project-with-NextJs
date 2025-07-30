import { JSX } from "react";

export default function ArchiveLayout({
  archive,
  latest,
}: {
  archive: JSX.Element;
  latest: JSX.Element;
}) {
  return (
    <div>
      <h1>New Archive</h1>

      <section id="archive-filter">{archive}</section>

      <section id="archive-latest">{latest}</section>
    </div>
  );
}
