import Link from "next/link";
import classes from "./main-header.module.css";

export default function MainHeader() {
  return (
    <header className={classes.header}>
      <ul>
        <li>
          <Link href="/">home</Link>
        </li>
        <li>
          <Link href="/news">see news</Link>
        </li>
      </ul>
    </header>
  );
}
