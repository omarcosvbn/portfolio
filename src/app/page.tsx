import Link from "next/link";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <div>
        <Link href={"/projects"}>projects</Link>
        <a href="https://www.linkedin.com/in/marcos-bnascimento/">linkedin</a>
        <a href="https://github.com/omarcosvbn">github</a>
      </div>
    </div>
  );
}
