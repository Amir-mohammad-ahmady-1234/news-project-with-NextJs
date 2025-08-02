"use client";

import NewsList from "@/components/news-list/news-list";
import { useEffect, useState } from "react";

export default function NewsPage() {
  const [data, setData] = useState([]);
  const [isloading, setIsloading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function getNews() {
      setIsloading(true);
      const response = await fetch("http://localhost:8080/news");

      if (!response.ok) {
        setIsloading(false);
        setError("Faild to fetch news");
      }

      const news = await response.json();
      setIsloading(false);
      setData(news);
    }

    getNews();
  }, []);

  if (isloading) return <p>loading ...</p>;

  if (error) return <p>{error}</p>;

  let newsContent;

  if (data) {
    newsContent = <NewsList news={data} />;
  }

  return (
    <>
      <h1>News Page</h1>
      {newsContent}
    </>
  );
}
