import Link from "next/link";

import classes from "./page.module.css";

export default function NewsPage() {
  return (
    <main className={classes.main}>
      <ul>
        <li>
          <Link href="/news/iran">
            last news about war beetween iran and israel
          </Link>
        </li>
        <li>
          <Link href="/news/new-js-lib">
            apple wanted to create new javascript library!
          </Link>
        </li>
        <li>
          <Link href="/news/football">
            mohammad salah is selected to best player for liverpol in 2025!
          </Link>
        </li>
      </ul>
    </main>
  );
}
