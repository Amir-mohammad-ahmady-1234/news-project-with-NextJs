// فرض می‌کنیم DUMMY_NEWS آرایه‌ای از NewsItem است
import { DUMMY_NEWS } from "@/dummy-news";
import { NewsItem } from "@/types/news-type";

// دریافت تمام اخبار
export function getAllNews(): NewsItem[] {
  return DUMMY_NEWS;
}

// دریافت سه خبر آخر
export function getLatestNews(): NewsItem[] {
  return DUMMY_NEWS.slice(0, 3);
}

// دریافت سال‌های موجود در اخبار
export function getAvailableNewsYears(): number[] {
  return [
    ...new Set(DUMMY_NEWS.map((news) => new Date(news.date).getFullYear())),
  ].sort((a, b) => b - a);
}

// دریافت ماه‌های موجود برای یک سال مشخص
export function getAvailableNewsMonths(year: number | string): number[] {
  const parsedYear = typeof year === "string" ? parseInt(year, 10) : year;
  if (isNaN(parsedYear)) {
    throw new Error("Invalid year provided");
  }

  return [
    ...new Set(
      DUMMY_NEWS.filter(
        (news) => new Date(news.date).getFullYear() === parsedYear
      ).map((news) => new Date(news.date).getMonth() + 1)
    ),
  ].sort((a, b) => b - a);
}

// دریافت اخبار برای یک سال مشخص
export function getNewsForYear(year: number | string): NewsItem[] {
  const parsedYear = typeof year === "string" ? parseInt(year, 10) : year;
  if (isNaN(parsedYear)) {
    throw new Error("Invalid year provided");
  }

  return DUMMY_NEWS.filter(
    (news) => new Date(news.date).getFullYear() === parsedYear
  );
}

// دریافت اخبار برای یک سال و ماه مشخص
export function getNewsForYearAndMonth(
  year: number | string,
  month: number | string
): NewsItem[] {
  const parsedYear = typeof year === "string" ? parseInt(year, 10) : year;
  const parsedMonth = typeof month === "string" ? parseInt(month, 10) : month;

  if (isNaN(parsedYear) || isNaN(parsedMonth)) {
    throw new Error("Invalid year or month provided");
  }

  return DUMMY_NEWS.filter((news) => {
    const newsYear = new Date(news.date).getFullYear();
    const newsMonth = new Date(news.date).getMonth() + 1;
    return newsYear === parsedYear && newsMonth === parsedMonth;
  });
}
