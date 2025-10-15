import Link from "next/link";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <div>
        <Link href={"/projects"}>projects</Link>
      </div>
    </div>
  );
}
