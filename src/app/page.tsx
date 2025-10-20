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
          <div className={styles.sectionOne}>
            <div className={styles.link}>
              <Link href={"/projects"}>projects</Link>
              <img
                src="https://placehold.co/100x10"
                className={styles.underline}
              />
            </div>
            <div className={styles.link}>
              <a href="https://github.com/omarcosvbn">github</a>
              <img
                src="https://placehold.co/100x10"
                className={styles.underline}
              />
            </div>
          </div>

          <div className={styles.link}>
            <a href="mailto:omarcosvbn@gmail.com">omarcosvbn@gmail.com</a>
            <img
              src="https://placehold.co/400x10"
              className={styles.underline}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
