import NewsList from "@/components/news-list/news-list";
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/lib/news";
import { NewsItem } from "@/types/news-type";
import Link from "next/link";
import { Suspense } from "react";

async function FilteredNews({ year, month }: { year: string; month: string }) {
  let news;

  if (year && !month) {
    news = await getNewsForYear(year);
  }
  if (year && month) {
    news = await getNewsForYearAndMonth(year, month);
  }

  let newsContent = <p>No news found for the selected period.</p>;

  if (news && news.length > 0) {
    newsContent = <NewsList news={news as NewsItem[]} />;
  }

  return newsContent;
}

async function FilterdHeader({ year, month }: { year: string; month: string }) {
  let links = await getAvailableNewsYears();

  if (year && !month) {
    links = getAvailableNewsMonths(year);
  }

  if (year && month) {
    links = [];
  }

  const availableNewsYears = await getAvailableNewsYears();

  if (
    (year && !availableNewsYears.includes(year)) ||
    (month && !getAvailableNewsMonths(year).includes(month))
  ) {
    throw new Error("Invalid Filter.");
  }

  return (
    <header id="archive-header">
      <nav>
        <ul>
          {links.map((link) => {
            const href = year ? `/archive/${year}/${link}` : `/archive/${link}`;

            return (
              <li key={link}>
                <Link href={href}>{link}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

export default async function FilteredYearPage({
  params,
}: {
  params: Promise<{ filter: string }>;
}) {
  const { filter } = await params;

  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];

  return (
    <>
      {/* <Suspense fallback={<p>loading filter...</p>}>
      </Suspense> */}

      <Suspense fallback={<p>loading news...</p>}>
        <FilterdHeader year={selectedYear} month={selectedMonth} />
        <FilteredNews year={selectedYear} month={selectedMonth} />
      </Suspense>
    </>
  );
}
