import Link from "next/link";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.mainPage}>
        <div className={styles.hello}>
          {Array.from({ length: 15 }).map((_, i) => (
            <img src="https://placehold.co/400x700" className={styles.image} />
          ))}
        </div>
        <div className={styles.links}>
          <Link href={"/projects"}>projects</Link>
          <a href="https://www.linkedin.com/in/marcos-bnascimento/">linkedin</a>
          <a href="https://github.com/omarcosvbn">github</a>
        </div>
      </div>
    </div>
  );
}
