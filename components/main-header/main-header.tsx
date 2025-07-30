import classes from "./main-header.module.css";

export default function MainHeader() {
  return (
    <header className={classes.header}>
      <ul>
        <li>home</li>
        <li>see news</li>
      </ul>
    </header>
  );
}
