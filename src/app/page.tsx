import Link from "next/link";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.mainPage}>
        <div className={styles.hello}>
          <img
            src="hi-desktop.webp"
            srcSet="
              hi-mobile.webp 1100w,
              hi-desktop.webp 1101w 
            "
            alt="Hi, I am Marcos"
            className={styles.image}
          />
        </div>
        <div className={styles.links}>
          <div className={styles.sectionOne}>
            <div className={styles.link}>
              <Link href={"/projects"}>projects</Link>
              <img src="/underline-1.webp" className={styles.underline} />
            </div>
            <div className={styles.link}>
              <a href="https://github.com/omarcosvbn">github</a>
              <img src="/underline-3.webp" className={styles.underline} />
            </div>
          </div>

          <div className={styles.link}>
            <a href="mailto:omarcosvbn@gmail.com">omarcosvbn@gmail.com</a>
            <img src="/underline-big.webp" className={styles.underline} />
          </div>
        </div>
      </div>
    </div>
  );
}
